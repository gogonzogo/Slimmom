// external

// mui
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Typography from '@mui/material/Typography';

// internal
import useViewPort from 'hooks/useViewport';
import Navigation from './Navigation/Navigation';

const Header = () => {
  const { width } = useViewPort();
  const breakpoint = 320;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {width > breakpoint ? (
              <IconButton>
                <SelfImprovementIcon />
                <Typography>FitMom</Typography>
              </IconButton>
            ) : (
              <IconButton>
                <SelfImprovementIcon />
              </IconButton>
            )}
          </Toolbar>
          <Navigation />
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
