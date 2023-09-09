import { Backdrop, Box, Fade, Modal as MaterialModal } from '@mui/material';
import s from './modal.module.css';

const Modal = props => {
  console.log(props);

  const { handleClose, open, modalState } = props;
  return (
    <MaterialModal
      open={open}
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
      <Fade in={open}>
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
                {modalState.totalCalories}{' '}
              </span>
              kcal
            </b>
            <div className={s.notEat}>
              <hr className={s.hr} />
              <b className={s.text2}>Foods you should not eat</b>
              <ol>
                {modalState.foodNotToEat.map(listItem => (
                  <li className={s.notEatItem} key={listItem}>
                    {listItem}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Box>
      </Fade>
    </MaterialModal>
  );
};
export default Modal;
