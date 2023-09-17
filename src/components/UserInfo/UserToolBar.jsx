import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
// Import necessary Redux actions and hooks here if needed

const UserToolBar = () => {
  const handleLogout = () => {
    // dispatch(logOut())
  };

  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Typography sx={{ paddingRight: '10px', borderRight: '2px solid #E0E0E0' }}>
        UserName
      </Typography>
      <IconButton onClick={handleLogout} aria-label="logout">
        <LogoutRoundedIcon />
      </IconButton>
    </Toolbar>
  );
};

export default UserToolBar;