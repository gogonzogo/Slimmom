import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal as MaterialModal,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ListWithScroll from './ListWithScroll';
import s from './modal.module.css';

const Modal = props => {
  const { handleClose, modalState } = props;
  const isMobile = useMediaQuery('(max-width: 480px)');

  return (
    <MaterialModal
      style={{ top: isMobile && 83 }}
      open={modalState.open}
      onClose={handleClose}
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
        </Box>
      </Fade>
    </MaterialModal>
  );
};
export default Modal;
