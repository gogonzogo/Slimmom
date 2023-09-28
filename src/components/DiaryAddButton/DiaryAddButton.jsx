import css from './DiaryAddButton.module.css';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export default function DiaryAddButton({ onClick , disabled }) {
  return (
    <IconButton
      variant="outlined"
      className={css.CirclePlus}
      type="button"
      onClick={onClick}
      disabled= {disabled}
    >
      <AddIcon />
    </IconButton>
  );
}