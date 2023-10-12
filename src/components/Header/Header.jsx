// external

// mui
import { Divider, IconButton, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// internal
import { useAuth } from '../../hooks/useAuth';
//import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';
import styles from './Header.module.css';
import UserInfo from 'components/UserInfo/UserInfo';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';
import UserToolBar from 'components/UserInfo/UserToolBar';
import ThemeButton from 'components/ThemeButton/ThemeButton';

const Header = () => {
  const { loggedIn } = useAuth();
  const isMobile = useMediaQuery('(max-width: 349px)');
  const isLargeScreen = useMediaQuery('(min-width: 769px)');
  const isMediumScreen = useMediaQuery('(max-width: 768px)');
  const isSmallScreen = useMediaQuery('(max-width: 320px)');

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar
        sx={{
          position: 'static',
          boxShadow: 'none',
          borderBottom: isLargeScreen ? 'none' : '2px solid var(--secondary-background-color)',
          backgroundColor: 'transparent',
          backgroundImage: 'unset',
        }}
      >
        <ThemeButton></ThemeButton>
        <Toolbar
          disableGutters={true}
          className={styles.headerToolbar}
          sx={{
            justifyContent: isLargeScreen ? 'unset' : 'space-between',
            backgroundImage: 'unset',
            backgroundColor: 'transparent',
            padding: isSmallScreen
              ? '15px'
              : isLargeScreen
              ? '40px 20px 0 20px'
              : '20px',
          }}
        >
          
          {loggedIn ? (
            <UserInfo />
          ) : isMobile ? (
            <div>
              <Logo />
            </div>
          ) : (
            <IconButton sx={{ padding: 0 }} aria-label="Logo">
              <Logo />
            </IconButton>
          )}

          {!loggedIn && (
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
                    backgroundColor: 'var(--secondary-background-color)',
                    marginRight: '20px',
                    marginLeft: '15px',
                  }}
                />
              )}
              <Navigation />
            </Box>
          )}
        </Toolbar>

        {loggedIn && isLargeScreen && <UserToolBar />}
      </AppBar>
      {loggedIn && isMediumScreen && (
        <Box>
          <UserToolBar />
        </Box>
      )}
    </Box>
  );
};

export default Header;
