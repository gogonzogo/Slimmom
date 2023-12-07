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
import AvatarImg from 'components/Avatar/AvatarImg';
import {
  validateHeightFeet,
  validateHeightInch,
  validateCurrentLbs,
  validateDesiredLbs,
  validateHeight,
  validateAge,
  validateCurrent,
  validateDesired,
  validateBlood,
} from '../../redux/validation/calculateCalsSlice';
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
      <AvatarImg />
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
          dispatch(validateHeight({ fieldValue: '' }));
          dispatch(validateHeightFeet({ fieldValue: '' }));
          dispatch(validateHeightInch({ fieldValue: '' }));
          dispatch(validateAge({ fieldValue: '' }));
          dispatch(validateCurrent({ fieldValue: '' }));
          dispatch(validateCurrentLbs({ fieldValue: '' }));
          dispatch(validateDesired({ fieldValue: '' }));
          dispatch(validateDesiredLbs({ fieldValue: '' }));
          dispatch(validateBlood({ fieldValue: '' }));

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
