import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import s from './modal.module.css';

function DiaryModal() {
  return (
    <>
      <div className={s.modalBox}>
        <p className={s.modalTitle}>
          Caloric daily rate required
          <br /> to use diary!
        </p>
        <Link to="/calculator" className={s.buttonWrapper}>
          <Button className={s.button} variant="contained">
            Click Here
          </Button>
        </Link>
      </div>
    </>
  );
}

export default DiaryModal;
