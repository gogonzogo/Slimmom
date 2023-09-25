import NotAllowedProducts from 'components/ProductsList/NotAllowedProducts/NotAllowedProducts';
import s from './rightSideBar.module.css';

const Summary = ({ date, summary }) => {
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
            <p>{summary.dailyRate.toFixed(1)}</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>n% of normal</p>
            <p>{summary.percentage}%</p>
          </li>
        </ul>
      </div>
      <div className={s.sideBarContent}>
        <p className={s.sideBarTitle}>Food not recommended</p>
        <NotAllowedProducts />
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
