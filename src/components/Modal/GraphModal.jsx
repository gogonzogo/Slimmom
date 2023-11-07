// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react';
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
import {
    Backdrop,
    Fade,
    Box,
    Modal as MaterialModal,
    useMediaQuery,
} from '@mui/material';
import { selectThemeMode } from "redux/theme/themeSelectors";
import { useSelector } from 'react-redux';

const GraphModal = props => {
    const themeMode = useSelector(selectThemeMode);

    const { handleModalClose, modalState } = props;
    const isMobile = useMediaQuery('(max-width: 480px)');
    console.log('modalState', modalState)

    const graphData = modalState.data.payload.graphData
    const graphDates = modalState.data.payload.graphDates


    // console.log('data', data)
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
            <MaterialModal
                style={{ top: isMobile && 83 }}
                open={modalState.open}
                onClose={handleModalClose}
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
                    </Box>
                </Fade>
            </MaterialModal>

        </>
    )
}

export default GraphModal;
