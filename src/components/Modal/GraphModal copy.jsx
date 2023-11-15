// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';
import { forwardRef } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';

import { selectThemeMode } from "redux/theme/themeSelectors";
import { useSelector } from 'react-redux';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const GraphModal = props => {
    const themeMode = useSelector(selectThemeMode);

    const { handleModalClose, modalState } = props;

    const graphData = modalState.data.payload.graphData
    const graphDates = modalState.data.payload.graphDates


    const data = {
        labels: graphDates,
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: 'Calories Consumed',
                data: graphData,
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'orange',
                ],
                borderWidth: 1,
            }
        ]
    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    return (

        <>
            <Dialog
                PaperProps={{
                    sx: {
                        width: "80%",
                        maxHeight: "60%",
                        minHeight: "60%"
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

                        <Bar
                            data={data}
                            options={{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: "Daily Calories consumed",
                                        color: themeMode === 'light' ? 'black' : 'white'
                                    },
                                    legend: {
                                        display: true,
                                        labels: {
                                            color: themeMode === 'light' ? 'black' : 'white'
                                        }
                                    }
                                }
                            }}
                        />

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
