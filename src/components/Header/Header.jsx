// external

// mui
import { IconButton, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styles from './Header.module.css';
import Logo from '../Logo/Logo'
// internal
import useViewPort from 'hooks/useViewport';
import Navigation from '../Navigation/Navigation.jsx';

const Header = () => {
  const { width } = useViewPort();
  const breakpoint = 319;
  const isLargeScreen = useMediaQuery('(min-width: 769px)');
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
            paddingLeft: isLargeScreen ? 3 : 0,
            borderLeft: isLargeScreen ? '2px solid #E0E0E0' : 'none',
            marginLeft: isLargeScreen ? 3 : 0,
          }}>
            <Navigation />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
