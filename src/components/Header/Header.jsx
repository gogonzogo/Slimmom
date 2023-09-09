// external

// mui
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Header.module.css';
import Logo from '../Logo/Logo'
// internal
import useViewPort from 'hooks/useViewport';
import Navigation from '../Navigation/Navigation.jsx';

const Header = () => {
  const { width } = useViewPort();
  const breakpoint = 320;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={styles.headerToolbar}>
          {width > breakpoint ? (
            <div className={styles.logoTextContainer}>
              < Logo />
              <Typography className={styles.fitMomText}>FitMom</Typography>
            </div>
          ) : (
              <IconButton>
                <Logo/>
            </IconButton>
          )}

          <div className={styles.mlAuto}>
            <Navigation />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
