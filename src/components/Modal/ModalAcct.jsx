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
    exportXLS,
} from '../../redux/user/userOperations';
import CustomButton from 'components/CustomButton/CustomButton';
import { toast } from 'react-toastify';
import { logOut } from '../../redux/auth/authOperations';
import { DateRange } from 'react-date-range'
import dayjs from 'dayjs';


import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const ModalAcct = props => {
    const dispatch = useDispatch();
    const { handleClose, modalState } = props;
    const [typeText, setTypeText] = useState('');
    const isMobile = useMediaQuery('(max-width: 480px)');
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',

        }
    ])

    const archiveMessage = "Are you sure that you want to Archive all of your data.  this will move all of your current data to the Archive and you will have to start a new Calculator and Dairy"
    const diaryMessage = "Are you sure that you want to Delete all of your data.  this will remove all of your current data and you will have to start a new Calculator and Dairy"
    const accountMessage = "Are you sure that you want to Delete your accout.  You will no longer be able to login and will need to create a new account"
    const downloadMessage = "This will download a dairy summary to your computer."

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
            switch (modalState.myValue) {
                case 'archive':
                    console.log('dateRange', dateRange)
                    response = await dispatch(archiveInfo())
                    if (response.payload === 200) {
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
                case 'download':
                    console.log('dateRange', dateRange)
                    const startDate = dayjs(`${dateRange[0].startDate}`).format(`MM/DD/YYYY`);
                    const endDate = dayjs(`${dateRange[0].endDate}`).format(`MM/DD/YYYY`);
                    console.log('formatStartDate', startDate)
                    console.log('formatEndDate', endDate)
                    const reportDates = { startDate: startDate, endDate: endDate }
                    console.log('reportDates', reportDates)
                    response = await dispatch(exportXLS(reportDates))
                    console.log(response)
                    if (response.payload === 200) {
                        toast.success('Delete Data Success!', {
                            position: 'top-right',
                            autoClose: 3000,
                            className: 'success-toast',
                        });
                    }
                    closeModal()
                    break;
                default:

                    break;
            }
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
                                {(modalState.myValue === 'archive' || modalState.myValue === 'download') &&
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDateRange([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={dateRange}
                                    />
                                }
                            </div>





                            {modalState.myValue === 'archive' ?
                                <h3> {archiveMessage}</h3> : (modalState.myValue === 'dairy' ? <h3> {diaryMessage}</h3> : (modalState.myValue === 'acct' ? <h3> {accountMessage}</h3> : <h3> {downloadMessage}</h3>))}
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
