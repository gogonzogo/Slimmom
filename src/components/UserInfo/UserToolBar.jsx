// external
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHands } from '@fortawesome/free-solid-svg-icons';
// mui
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Divider } from '@mui/material';

// internal
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { useUser } from 'hooks/useUser';
import { setDiaryBackBtn } from 'redux/user/userSlice';
import DiaryBackButton from 'components/DiaryBackButton/DiaryBackButton';
import { resetState } from 'redux/resetState';


const UserToolBar = () => {
  const { user } = useAuth();
  const { diaryBackBtn } = useUser();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setDiaryBackBtn(!diaryBackBtn));
  }

  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      {diaryBackBtn && <DiaryBackButton onClick={handleClick} />}
      <Typography>{user}</Typography>
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
      <IconButton
        style={{ zIndex: 7 }}
        onClick={() => {
          dispatch(logOut());
          resetState(dispatch);
        }}
        aria-label="logout"
        aria-describedby="logout-label"
      >
        {/* <FontAwesomeIcon */}
        <FontAwesomeIcon
          icon={faHands}
          flip="horizontal"
          style={{ color: '#fc842d' }}
        />
        <span id="logout-label" style={{ fontSize: '12px' }}>
          "Bye!"
        </span>
      </IconButton>
      
    </Toolbar>
  );
};

export default UserToolBar;
