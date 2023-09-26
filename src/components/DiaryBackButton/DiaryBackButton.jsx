import { IconButton } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';

function DiaryBackButton({onClick}) {
  return (
    <IconButton color="primary" onClick={onClick} aria-label="diary back button">
      <ReplyIcon />
    </IconButton>
  );
}

export default DiaryBackButton