import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Divider } from '@mui/material';

// import { logOut } from '../../redux/auth/authOperations'; 

const UserToolBar = () => {
//const name = useSelector(selectUser);

  const handleLogout = () => {
    // dispatch(logOut())
  };

  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Typography>
        Name {/* { name } */}
      </Typography>
      <Divider
        orientation="vertical"
        sx={{
          width: '2px',
          height: '20px',
          backgroundColor: '#E0E0E0',
          marginRight: '5px',
          marginLeft: '13px',
        }}
      />
      <IconButton onClick={handleLogout} aria-label="logout">
        <LogoutRoundedIcon />
      </IconButton>
    </Toolbar>
  );
};

export default UserToolBar;