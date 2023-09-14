// external
// import { useSelector } from 'react-redux;

// mui
import { IconButton, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import styles from './Header.module.css';
import { Logo } from '../Logo/Logo'
// internal
import useViewPort from 'hooks/useViewport';
import UserInfo from 'components/UserInfo/UserInfo';
//import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const Header = () => {
  //const loggedIn = useSelector(selectIsLoggedIn);
  const { width } = useViewPort();
  const breakpoint = 319;
  const isLargeScreen = useMediaQuery('(min-width: 769px)');
  const isSmallScreen = useMediaQuery('(max-width: 319px)');
  
  return (
    
    <Box sx={{ width: "100%" }}>
      <AppBar position="static"
        sx={{
          boxShadow: 'none',
          borderBottom: isLargeScreen ? 'none' : '2px solid #E0E0E0',

        }}>
        <Toolbar disableGutters={true} className={styles.headerToolbar}
          sx={{
            justifyContent: isLargeScreen ? 'unset' : 'space-between',
            backgroundColor: 'var(--primary-background-color)',
            padding: isSmallScreen ? '15px' : (isLargeScreen ? '80px 20px 0 20px' : '20px'),
          }}
        >
          {width > breakpoint ? (
            <div>
              < Logo className={styles.logo}/>
            </div>
          ) : (
              <IconButton sx={{padding: 0,}}>
                <Logo className={styles.logo}/>
              </IconButton>
          )}

          <Box sx={{
             marginTop: isLargeScreen ? 4 : 0,
          }}
          >
            <UserInfo/>
            {/* <Navigation /> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        <Typography sx={{
          paddingRight: '10px',
          borderRight: '2px solid #E0E0E0'
        }}>UserName
          {/* {userName} */}
        </Typography>
        <IconButton
          // onClick={() => dispatch(logOut())}
          // aria-label="logout"
        >
          <LogoutRoundedIcon/>
          </IconButton>
      </Toolbar>
    </Box>
  );
};

export default Header;
