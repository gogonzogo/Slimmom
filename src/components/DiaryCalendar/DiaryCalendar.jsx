import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import css from './DiaryCalendar.module.css';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

export default function DiaryCalendar() {
  const [value, setValue] = useState(dayjs());
  const [formattedCalValue, setFormattedCalValue] = useState(dayjs().format(`MM/DD/YYYY`));


  const formatCalValue = value => {
    const newValue = dayjs(`${value}`).format(`MM/DD/YYYY`);
    setFormattedCalValue(newValue);
  };
  
    //  const dispatch = useDispatch();
    const handleDiaryChange = () => {
      
      // dispatch(addDiary({ foodsList: [fetchFoods()] }))
    
    // .then(() => {
    //   dispatch(fetchDiary())
    // });
    };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={css.calendarContainer}>
          <PopupState variant="popper" popupId="demo-popup-popper">
            {popupState => (
              <div className={css.btnPopperContainer}>
                <p className={css.dateText}>{formattedCalValue}</p>
                <IconButton aria-label="delete" {...bindToggle(popupState)}>
                  <DateRangeIcon />
                </IconButton>
                <Popper {...bindPopper(popupState)} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={100}>
                      <Paper sx={{ backgroundColor: 'white' }}>
                        <DateCalendar
                          value={value}
                          onChange={newValue => {
                            setValue(newValue);
                            formatCalValue(newValue);
                            handleDiaryChange();
                          }}
                          showDaysOutsideCurrentMonth
                          fixedWeekNumber={6}
                          referenceDate={dayjs()}
                          views={['year', 'month', 'day']}
                        />
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </div>
            )}
          </PopupState>
        </div>
      </LocalizationProvider>
    </>
  );
}
