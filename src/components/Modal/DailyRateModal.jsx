import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ListWithScroll from './ListWithScroll';
import s from './modal.module.css';

const DailyRateModal = ({ handleModalClose, modalState }) => {
  return (
      <>
        <div className={s.backButtonMobbile}>
          <span className={s.back} onClick={handleModalClose}>
            ⏎
          </span>
        </div>
        <div className={s.modalBox}>
          <span className={s.closeButton} onClick={handleModalClose}>
            ✕
          </span>
          <p className={s.modalTitle}>
            Your recommended daily
            <br /> calorie intake is
          </p>
          <b className={s.dailyRate}>
            <span className={s.totalCaloriesNumber}>
              {Math.round(modalState.dailyRate)}{' '}
            </span>
            kcal
          </b>
          <div className={s.notEat}>
            <hr className={s.hr} />
            <b className={s.text2}>Foods you should not eat</b>
            <ListWithScroll array={modalState.foodNotToEat.slice(0)} />
            <Link to="register" className={s.buttonWrapper}>
              <Button className={s.button} variant="contained">
                Start losing weight
              </Button>
            </Link>
          </div>
        </div>
      </>
  );
};
export default DailyRateModal;
