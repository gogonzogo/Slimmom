// exteranl
import { useState } from 'react';

// mui styles
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@mui/material';

//internal

// styles
import Navigation from 'components/Navigation/Navigation';
import s from './UserInfo.module.css';
import Logo from 'components/Logo/Logo';

const UserInfo = () => {
  // react state management
  const [isOpen, setIsOpen] = useState(false);
  const [showTextLogo, setShowTextLogo] = useState(true); // Initially show TextLogo
  const [showNavigation, setShowNavigation] = useState(false);

  const isSmallScreen = useMediaQuery('(max-width: 450px)');
  const isLargeScreen = useMediaQuery('(min-width: 450px)');
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setShowTextLogo(!isOpen);
    setShowNavigation(isOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}
    >
      <Toolbar
        disableGutters={true}
        sx={{
          padding: '0',
          position: 'relative',
          backgroundColor: 'transparent',
        }}
      >
        <div className={s.toolbarContainer}>
          {isSmallScreen ? (
            <>
              {/* Initially, both ImageLogo and TextLogo */}
              <div className={s.logoContainer}>
                <Logo
                  showText={showTextLogo}
                  className={`${
                    showTextLogo ? s.showTextLogo : s.hideTextLogo
                  } ${s.textLogo}`}
                />
              </div>
            </>
          ) : (
            // when it is a large screen > 449px
            <div className={`${s.largeScreenContent}`}>
              <Logo />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    width: '2px',
                    height: '20px',
                    // all screens larger than 450
                    paddingRight: isLargeScreen ? 2 : 0,
                    borderRight: isLargeScreen ? '2px solid #E0E0E0' : 'none',
                    marginRight: isLargeScreen ? 1 : 0,
                    marginTop: isLargeScreen ? 4 : 3,
                  }}
                />
                <Navigation className={s.Navigation} />
              </Box>
            </div>
          )}
        </div>
        {/** is it a small screen show full logo and nav icon */}
        {isSmallScreen && (
          <div>
            <IconButton
              onClick={toggleNavbar}
              sx={{
                padding: '0 8px 0 0',
                position: 'absolute',
                bottom: -12,
                right: 5,
              }}
            >
              <CompareArrowsIcon />
            </IconButton>
          </div>
        )}
        {/** is it a small screen and navigation is toggled show image logo and navigation */}
        <Box
          sx={{
            backgroundColor: 'transparent',
            padding: ' 3px 0 0',
            position: 'absolute',
            bottom: 10,
            transition: 'right 0.9s ease',
            right: showNavigation ? '-15px' : '-400px',
          }}
        >
          {isSmallScreen && showNavigation && (
            <Box>
              <Navigation />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserInfo;

// sx={{position: 'absolute', bottom: 15, transition: 'right 0.9s ease', right: showNavigation ? '-10px' : '0'}}
