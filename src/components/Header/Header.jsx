// external
// import { useSelector } from 'react-redux;

// mui
import { IconButton, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// internal
//import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import useViewPort from 'hooks/useViewport';

//styles
import styles from './Header.module.css';
import Logo from '../Logo/Logo'
import UserInfo from 'components/UserInfo/UserInfo';
import Navigation from 'components/Navigation/Navigation';
import VectorLogo from 'components/Logo/ImageLogo';
import UserToolBar from 'components/UserInfo/UserToolBar';


const Header = () => {
  //const isLoggedIn = useSelector(selectIsLoggedIn);
  
  const { width } = useViewPort();
  const breakpoint = 349;
  const isLargeScreen = useMediaQuery('(min-width: 769px)');
  const isMediumScreen = useMediaQuery('(max-width: 768px)');
  const isSmallScreen = useMediaQuery('(max-width: 319px)');
  const isLoggedIn = false;
  return (
    
    <Box sx={{ width: "100%" }}>
      <AppBar position="static"
        sx={{
          boxShadow: 'none',
          borderBottom: isLargeScreen ? 'none' : '2px solid #E0E0E0'
        }}>
        <Toolbar disableGutters={true} className={styles.headerToolbar}
          sx={{
            justifyContent: isLargeScreen ? 'unset' : 'space-between',
            backgroundColor: 'var(--primary-background-color)',
            padding: isSmallScreen ? '15px' : (isLargeScreen ? '80px 20px 0 20px' : '20px'),
          }}>
          {isLoggedIn ? (
            <UserInfo/>
          ) :
            width > breakpoint ? (
              <IconButton sx={{padding: 0,}}>
                <Logo className={styles.logo}/>
              </IconButton>
          ) : (
              <div>
              < VectorLogo className={styles.logo}/>
              </div>
          )}
          
          {!isLoggedIn &&(
            <Box sx={{
              marginTop: isLargeScreen ? 4 : 0,
            }}>
              <Navigation />
            </Box>
          )}
        </Toolbar>

        {isLoggedIn && isLargeScreen &&(
          <UserToolBar/>
        )}
      </AppBar>
      {isLoggedIn && isMediumScreen && (
        <UserToolBar/>
      )}
    </Box>
  );
};

export default Header;
