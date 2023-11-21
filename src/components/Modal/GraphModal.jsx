
import React from 'react';
import { forwardRef, } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { useState } from 'react';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const GraphModal = props => {

    const { handleModalClose, modalState } = props;

    const graphCalcDates = modalState.data.payload.graphCalcDates
    const grapCalcData = modalState.data.payload.graphCalcData
    const grapDairyhData = modalState.data.payload.grapDairyhData
    const graphDiaryDates = modalState.data.payload.graphDiaryDates
    const [showDiary] = useState(grapDairyhData.length > 0)
    const [showCalc] = useState(grapCalcData.length > 0)




    return (

        <>

            <Dialog

                PaperProps={{
                    sx: {
                        minWidth: "80%",
                        maxWidth: "80%",
                        maxHeight: "80%",
                        minHeight: "80%"
                    }
                }}
                open={modalState.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleModalClose}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent>

                    <DialogContentText id="alert-dialog-slide-description">
                        <div style={{ height: "100%", width: '100%' }}>

                            {showDiary && <BarChart
                                xAxis={[
                                    {
                                        id: 'barCategories',
                                        data: graphDiaryDates, label: 'Calories eaten',
                                        scaleType: 'band',
                                    },
                                ]}
                                series={[
                                    {
                                        data: grapDairyhData
                                    },
                                ]}
                                width={500}
                                height={300}
                            />
                            }
                            {showCalc && <LineChart

                                series={[
                                    {
                                        data: grapCalcData, label: 'Change in weight', color: 'orange'
                                    },


                                ]}
                                xAxis={[{ scaleType: 'point', data: graphCalcDates }]}
                                width={500}
                                height={300}
                            />
                            }
                        </div>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose}>close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default GraphModal;
