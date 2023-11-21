import {
    Backdrop,
    Box,
    Fade,
    Modal as MaterialModal,
    useMediaQuery,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import s from './modal.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    deleteAcct,
    deleteInfo,
    archiveInfo,
    getArchive,
} from '../../redux/user/userOperations';
import CustomButton from 'components/CustomButton/CustomButton';
import { toast } from 'react-toastify';
import { logOut } from '../../redux/auth/authOperations';
import { DateRange } from 'react-date-range'
import dayjs from 'dayjs';
import { getUserInfo } from 'redux/user/userOperations';
import { clearCalculator } from 'redux/user/userSlice';
import { getDiaryEntries } from 'redux/user/userOperations';


import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useNavigate } from 'react-router-dom';
import { useUser } from 'hooks/useUser';


const ModalAcct = props => {
    const dispatch = useDispatch();
    const { handleClose, modalState } = props;
    const [typeText, setTypeText] = useState('');
    const isMobile = useMediaQuery('(max-width: 480px)');
    const [dateRange, setDateRange] = useState([
        {
            currentDate: new Date(),
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ])
    const nav = useNavigate(); // react router hook
    const { calendarDate } = useUser();


    const archiveMessage = "Are you sure that you want to Archive the dates selected.  this will move these dates to an archive location"
    const diaryMessage = "Are you sure that you want to Delete all of your data.  this will remove all of your current data and you will have to start a new Calculator and Dairy"
    const accountMessage = "Are you sure that you want to Delete your accout.  You will no longer be able to login and will need to create a new account"
    const getArchivedMessage = "Review previously Archived information."


    const changeHandler = async e => {
        const { value } = e.target;
        setTypeText(value)
    }

    const closeModal = () => {

        setTypeText("");
        handleClose()

    }

    const runOption = async () => {
        if (modalState.myValue === typeText) {
            let response = ""
            let startDate = "";
            let endDate = '';
            let currentDate = '';
            let reportDates

            switch (modalState.myValue) {
                case 'archive':
                    startDate = dayjs(`${dateRange[0].startDate}`).format(`MM/DD/YYYY`);
                    endDate = dayjs(`${dateRange[0].endDate}`).format(`MM/DD/YYYY`);
                    currentDate = dayjs(`${dateRange[0].currentDate}`).format(`MM/DD/YYYY`);
                    reportDates = { startDate: startDate, endDate: endDate, currentDate: currentDate }
                    response = await dispatch(archiveInfo(reportDates))
                    if (response.payload.code === 200) {
                        const formatDate = dayjs().format(`MM/DD/YYYY`);
                        dispatch(getDiaryEntries(formatDate));
                        toast.success('Archive Success!', {
                            position: 'top-right',
                            autoClose: 3000,
                            className: 'success-toast',
                        });
                    }
                    closeModal()
                    break;
                case 'dairy':
                    response = await dispatch(deleteInfo())
                    if (response.payload === 200) {
                        const getUserInfoResultAction = await dispatch(
                            getUserInfo(calendarDate)
                        );
                        if (getUserInfo.rejected.match(getUserInfoResultAction)) {
                            dispatch(clearCalculator());
                            nav('/calculator');
                        } else {
                            nav('/diary');
                        }
                        toast.success('Delete Data Success!', {
                            position: 'top-right',
                            autoClose: 3000,
                            className: 'success-toast',
                        });
                    }
                    closeModal()
                    break;
                case 'acct':
                    response = await dispatch(deleteAcct())
                    if (response.payload === 200) {
                        toast.success('Delete Account Success!', {
                            position: 'top-right',
                            autoClose: 3000,
                            className: 'success-toast',
                        });
                    }
                    dispatch(logOut());
                    closeModal()
                    break;

                case 'review':
                    response = await dispatch(getArchive())
                    closeModal()
                    if (response.payload.code === 200) {
                        toast.success('Archive Info received', {
                            position: 'top-right',
                            autoClose: 3000,
                            className: 'success-toast',
                        });
                        const data = response.payload;
                        nav('/archive', { state: data });
                    }

                    break;


                default:

                    break;
            }
        } else {
            toast.warn('You have typed an incorrect word', {
                position: 'top-right',
                autoClose: 3000,
                className: 'error-toast ',
            });
        }
    }


    return (
        <>
            <MaterialModal
                style={{ top: isMobile && 83 }}
                open={modalState.open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                        sx: { top: isMobile && 83, backgroundColor: '#2121211f' },
                    },
                }}
                disableScrollLock={isMobile ? true : false}

            >
                <Fade in={modalState.open}>
                    <Box>
                        <div className={s.modalBox}>
                            <span className={s.closeButton} onClick={closeModal}>
                                ✕
                            </span>

                            <div>
                                {(modalState.myValue === 'archive') &&
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDateRange([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={dateRange}
                                    />
                                }
                            </div>




                            {modalState.myValue === 'archive' ?
                                <h3> {archiveMessage}</h3> : (modalState.myValue === 'dairy' ? <h3> {diaryMessage}</h3> : (modalState.myValue === 'acct' ? <h3> {accountMessage}</h3> : <h3> {getArchivedMessage}</h3>))}
                            <p className={s.ptag}>type <span className={s.messageSpan}> {modalState.myValue}</span> and click submit.</p>
                            <TextField id="outlined-basic" label={modalState.myValue} variant="standard" onChange={changeHandler}
                                value={typeText} style={{ marginBottom: '20px' }} />

                            <CustomButton color="orange"
                                size="small" variant="contained" onClick={runOption} style={{ marginRight: '20px', width: "120px" }}>
                                Submit
                            </CustomButton>
                            <CustomButton color="orange"
                                size="small" variant="contained" onClick={closeModal} style={{ width: "120px" }}>
                                Cancel
                            </CustomButton>
                        </div>
                    </Box>
                </Fade>
            </MaterialModal>
        </>
    )
}

export default ModalAcct;
