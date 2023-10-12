import css from './DiaryAddButton.module.css';
import MuiButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export default function DiaryAddButton({ onClick , disabled }) {
  return (
    <MuiButton
      variant="outlined"
      className={css.circlePlus}
      type="button"
      onClick={onClick}
      disabled={disabled}
      
    >
      <AddIcon />
    </MuiButton>
  );
}