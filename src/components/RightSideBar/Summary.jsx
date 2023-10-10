import { Input, useMediaQuery } from '@mui/material';
import ListWithScroll from 'components/Modal/ListWithScroll';
import s from './rightSideBar.module.css';

const Summary = ({ date, summary, searchInputChange, searchResults }) => {
  const isLargeScreen = useMediaQuery('(min-width: 769px)');

  return (
    <div className={s.sideBarContentWrapper}>
      <div className={s.sideBarContent}>
        <p className={s.sideBarTitle}>
          Summary for {date.replaceAll('-', '/')}
        </p>
        <ul className={s.statsBox}>
          <li className={s.statsBoxItem}>
            <p>Left</p>
            <p>{summary.left.toFixed(1)}</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>Consumed</p>
            <p>{summary.totalConsumed.toFixed(1)}</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>Daily rate</p>
            <p>{summary.diaryDailyRate.toFixed(1)}</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>n% of normal</p>
            <p>{summary.percentage}%</p>
          </li>
        </ul>
      </div>
      <div className={s.sideBarContent}>
        <p className={s.sideBarTitle}>Food not recommended</p>
        <div>
          <Input placeholder="type here.." onChange={searchInputChange} />
          <ListWithScroll
            array={searchResults}
            style={{ height: isLargeScreen ? 400 : 150 }}
          />
        </div>
      </div>
    </div>
  );
};
Summary.defaultProps = {
  date: 'DATE',
  summary: {
    left: 0,
    totalConsumed: 0,
    dailyRate: 0,
    percentage: 0,
  },
};
export default Summary;
