import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DateRangeIcon from '@mui/icons-material/DateRange';
import css from './DiaryCalendar.module.css'

export default function DiaryCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={css.diaryCalendarContainer} components={['DatePicker']} style={{border: 'none'}}>
          <DatePicker
            defaultValue={dayjs()}
                  slots={{ openPickerIcon: DateRangeIcon }}
                  sx={{
                      border: 'none'
                  }}
          />
        </div>
    </LocalizationProvider>
  );
}

// import React, { useState } from 'react';
// import css from './DiaryCalendar.module.css';

// function DiaryCalendar() {
//   const [date, setDate] = useState();

//   console.log('Date', date);
//   return (
//     <div className={css.calendar}>
//       <h3>
//         {date &&
//           new Date(date).toLocaleDateString('en-US', {
//             month: 'numeric',
//             day: 'numeric',
//             year: 'numeric',
//           })}
//       </h3>
//       <input
//         style={{ marginLeft: '20px' }}
//         type="date"
//         onChange={e => setDate(e.target.value)}
//       />
//     </div>
//   );
// }
// export default DiaryCalendar;
