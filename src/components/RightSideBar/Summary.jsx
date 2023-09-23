import NotAllowedProducts from 'components/ProductsList/NotAllowedProducts/NotAllowedProducts';
import s from './rightSideBar.module.css';

const Summary = props => {
  return (
    <div className={s.sideBarContentWrapper}>
      <div className={s.sideBarContent}>
        <p className={s.sideBarTitle}>Summary for DATE</p>
        <ul className={s.statsBox}>
          <li className={s.statsBoxItem}>
            <p>Left</p>
            <p>12</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>Consumed</p>
            <p>12</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>Daily rate</p>
            <p>12</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>n% of normal</p>
            <p>0%</p>
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
export default Summary;
