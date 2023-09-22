// external
import { useDispatch } from 'react-redux';
// mui
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Divider } from '@mui/material';

// internal
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';

const UserToolBar = () => {
  const { user } = useAuth;
  const dispatch = useDispatch;
 
  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Typography>
        { user }
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
      <IconButton onClick={() => dispatch(logOut())} aria-label="logout">
        <LogoutRoundedIcon />
      </IconButton>
    </Toolbar>
  );
};

export default UserToolBar;