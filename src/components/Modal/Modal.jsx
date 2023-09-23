import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal as MaterialModal,
} from '@mui/material';
import { Link } from 'react-router-dom';
import s from './modal.module.css';

const Modal = props => {
  const { handleClose, modalState } = props;
  return (
    <MaterialModal
      open={modalState.open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backgroundColor: '#2121211f' },
        },
      }}
    >
      <Fade in={modalState.open}>
        <Box>
          <div className={s.backButtonMobbile}>
            <span className={s.back} onClick={handleClose}>
              ⏎
            </span>
          </div>
          <div className={s.modalBox}>
            <span className={s.closeButton} onClick={handleClose}>
              ✕
            </span>
            <p className={s.modalTitle}>
              Your recommended daily
              <br /> calorie intake is
            </p>
            <b className={s.totalCalories}>
              <span className={s.totalCaloriesNumber}>
                {Math.round(modalState.totalCalories)}{' '}
              </span>
              kcal
            </b>
            <div className={s.notEat}>
              <hr className={s.hr} />
              <b className={s.text2}>Foods you should not eat</b>
              <ol>
                {modalState.foodNotToEat.slice(0).map(listItem => (
                  <li className={s.notEatItem} key={listItem._id}>
                    {listItem.title}
                  </li>
                ))}
              </ol>
              <Link to="Login" className={s.buttonWrapper}>
                <Button className={s.button} variant="contained">
                  Start losing weight
                </Button>
              </Link>
            </div>
          </div>
        </Box>
      </Fade>
    </MaterialModal>
  );
};
export default Modal;
