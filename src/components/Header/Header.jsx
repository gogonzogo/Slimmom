// external

// mui
import { Divider, IconButton, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// internal
//import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import {useAuth} from '../../hooks/useAuth'
//styles
import styles from './Header.module.css';
import ImageLogo from '../Logo/Logo'
import UserInfo from 'components/UserInfo/UserInfo';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/ImageLogo';
import UserToolBar from 'components/UserInfo/UserToolBar';

const Header = () => {
  const {loggedIn} = useAuth();
  const isMobile = useMediaQuery('(max-width: 349px)')
  const isLargeScreen = useMediaQuery('(min-width: 769px)');
  const isMediumScreen = useMediaQuery('(max-width: 768px)');
  const isSmallScreen = useMediaQuery('(max-width: 320px)');

  return (
    
    <Box sx={{ width: "100%" }}>
      <AppBar
              
        sx={{
          position: "absolute",
          boxShadow: 'none',
          borderBottom: isLargeScreen ? 'none' : '2px solid #E0E0E0',
          backgroundColor:'transparent'
        }}>
        <Toolbar disableGutters={true} className={styles.headerToolbar}
          sx={{
            zIndex: '1',
            justifyContent: isLargeScreen ? 'unset' : 'space-between',
            backgroundColor: 'transparent',
            padding: isSmallScreen ? '15px' : (isLargeScreen ? '40px 20px 0 20px' : '20px'),
          }}>
          {loggedIn
            ? (
            <UserInfo/>
          ) :
            isMobile 
              ? (
                <div>
                  <Logo className={styles.logo} />
              </div>
            
          ) : (
              <IconButton sx={{padding: 0,}}>
                <ImageLogo className={styles.logo}/>
              </IconButton>
          )}
          
          {!loggedIn &&(
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: isLargeScreen ? 2 : 0,
            }}
            >
              {!loggedIn && isLargeScreen && (
              <Divider
                orientation="vertical"
                sx={{
                  width: '2px',
                  height: '20px',
                  backgroundColor: '#E0E0E0',
                  marginRight: '20px',
                  marginLeft: '15px',
                }}
              />)}
              <Navigation />
            </Box>
          )}
        </Toolbar>

        {loggedIn && isLargeScreen && (
          <UserToolBar />
        )}
      </AppBar>
      {loggedIn && isMediumScreen && (
        <Box
          sx={{
            marginTop: '90px',
        }}>
          <UserToolBar />
          </Box>
      )}
    </Box>
  );
};

export default Header;
