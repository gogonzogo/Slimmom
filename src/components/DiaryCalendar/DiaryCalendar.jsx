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
import { useDispatch, useSelector } from 'react-redux';
import { setCalDate } from 'redux/diary/diarySlice';
import { fetchDiary } from 'redux/diary/diaryOperations';
import { selectUserId } from 'redux/auth/authSelectors';

export default function DiaryCalendar() {
  const userId = useSelector(selectUserId);

  const [value, setValue] = useState(dayjs());
  const [formattedCalValue, setFormattedCalValue] = useState(
    dayjs().format(`MM/DD/YYYY`)
  );
  const dispatch = useDispatch();

  const formatCalValue = value => {
    const newValue = dayjs(`${value}`).format(`MM/DD/YYYY`);
    setFormattedCalValue(newValue);
    dispatch(setCalDate(newValue));
    dispatch(
      fetchDiary({
        userId,
        date: newValue,
      })
    );
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={css.calendarContainer}>
          <PopupState variant="popper" popupId="demo-popup-popper">
            {popupState => (
              <div className={css.btnPopperContainer}>
                <h2 className={css.dateText}>{formattedCalValue}</h2>
                <IconButton aria-label="delete" {...bindToggle(popupState)}>
                  <DateRangeIcon />
                </IconButton>
                <Popper {...bindPopper(popupState)} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={100}>
                      <Paper
                        className={css.paper}
                        sx={{ backgroundColor: 'white' }}
                      >
                        <DateCalendar
                          value={value}
                          onChange={newValue => {
                            setValue(newValue);
                            formatCalValue(newValue);
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
