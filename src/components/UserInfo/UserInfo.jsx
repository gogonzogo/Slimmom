import { useState } from 'react';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import Navigation from 'components/Navigation/Navigation';
import useViewPort from '../../hooks/useViewport';

import s from './UserInfo.module.css';
import TextLogo from 'components/Logo/TextLogo';
import ImageLogo from 'components/Logo/ImageLogo';
import Logo from 'components/Logo/Logo';

const UserInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTextLogo, setShowTextLogo] = useState(true); // Initially show TextLogo
  const [showNavigation, setShowNavigation] = useState(false);
    
  const { width } = useViewPort();
    const breakpoint = 321;
  const isSmallScreen = width < breakpoint;

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
            <div className={`${s.largeScreenContent}`}>
              <Logo />
              <Navigation className={s.Navigation} />
            </div>
          )}
        </div>
        {isSmallScreen && (
          <div>
            <IconButton className={s.IconButton} onClick={toggleNavbar} sx={{ padding: '0', position: 'absolute', bottom: -15, right: 0 }}>
              <CompareArrowsIcon />
            </IconButton>
          </div>
        )}
        {isSmallScreen && showNavigation && (
          <div className={`${s.smallScreenNavigationContainer} ${showNavigation ? 'show' : ''}`}>
            <Navigation />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default UserInfo;