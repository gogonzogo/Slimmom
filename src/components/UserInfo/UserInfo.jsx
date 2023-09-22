// exteranl
import { useState } from 'react';
//import { useSelector } from 'react-redux';

// mui styles
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { AppBar, Box, Container, Divider, IconButton, Toolbar, useMediaQuery } from '@mui/material';

// internal
import useViewPort from '../../hooks/useViewport';
// styles
import Navigation from 'components/Navigation/Navigation';
import s from './UserInfo.module.css';
import TextLogo from 'components/Logo/TextLogo';
import ImageLogo from 'components/Logo/ImageLogo';




const UserInfo = () => {
  // react state management
  const [isOpen, setIsOpen] = useState(false);
  const [showTextLogo, setShowTextLogo] = useState(true); // Initially show TextLogo
  const [showNavigation, setShowNavigation] = useState(false);
    
  const { width } = useViewPort();
  const breakpoint = 450;
  const isSmallScreen = width < breakpoint;
  const isMediumScreen = useMediaQuery('(min-width: 450px) and (max-width: 768px)');
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setShowTextLogo(!isOpen);
    setShowNavigation(isOpen);
  };

  return (
    <AppBar position="static" sx={{ boxShadow: 'none' }}>
      <Toolbar disableGutters={true} sx={{ padding: '0', position: 'relative' }}>
        <div>
          {isSmallScreen ? (
            <>
              {/* Initially, both ImageLogo and TextLogo */}
            <div className={s.smallScreenIcons}>
                <div className={s.logoContainer}>
                    <ImageLogo />
                    <TextLogo className={`${showTextLogo ? s.showTextLogo : s.hideTextLogo} ${s.textLogo}`} />
                </div>
            </div>
            </>
          ) : (
              // when it is a large screen > 449px
              <div className={`${s.largeScreenContent}`}>
                <ImageLogo />
                <TextLogo />
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    paddingRight: isMediumScreen ? 2 : 0,
                    borderRight: isMediumScreen ? '2px solid #E0E0E0' : 'none',
                    marginRight: isMediumScreen ? 1 : 0,
                    marginTop: isMediumScreen ? 4 : 3,
                   }}
                />
                <Navigation className={s.Navigation} />
              </div>
          )}
        </div>
        {/** is it a small screen show full logo and nav icon */}
        {isSmallScreen && (
          <div>
            <IconButton
              onClick={toggleNavbar}
              sx={{ padding: '0 8px 0 0', position: 'absolute', bottom: -15, transition: 'right 0.9s ease', right: showNavigation ? '120px' : '0' }}
            >
              <CompareArrowsIcon />
            </IconButton>
          </div>
        )}
        {/** is it a small screen and navigation is toggled show image logo and navigation */}
        <Box sx={{ backgroundColor: "white", padding: ' 3px 0 0', position: 'absolute', bottom: 10, transition: 'right 0.9s ease', right: showNavigation ? '-15px' : '-400px' }}>
        {isSmallScreen && showNavigation && (
          <Box >
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