import { IconButton } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';

function DiaryBackButton({ onClick }) {
  return (
    <IconButton
      color="primary"
      sx={{
        display: 'flex',
        marginRight: 'auto',
        '@media (min-width: 768px)': {
          display: 'none',
        },
      }}
      onClick={onClick}
      aria-label="diary back button"
    >
      <ReplyIcon />
    </IconButton>
  );
}

export default DiaryBackButton;
