import React from 'react';
import { ReactComponent as LogoSVG } from '../Logo/slimmom.svg';
import { ReactComponent as SlimSVG } from "../Logo/slim.svg";
import { ReactComponent as MomSVG } from "../Logo/mom.svg";
import styles from './Logo.module.css';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const Logo = ({ className }) => { 
  const isLargeScreen = useMediaQuery('(min-width: 769px)');
  return (
    <div className={className || styles['logo-container']}>
      <div className={styles['vector-container']}>
        <NavLink to='/Diary'>
          <LogoSVG className={styles.logo} />
        </NavLink>
      </div>
      <Box sx={{
            paddingRight: isLargeScreen ? 3 : 0,
            borderRight: isLargeScreen ? '2px solid #E0E0E0' : 'none',
            marginRight: isLargeScreen ? 3 : 0,
            marginTop: isLargeScreen ? 4 : 3,
          }}>
      <div className={styles['text-container']}>
        <NavLink to='/Diary' className={styles['svg-link']}>
          <SlimSVG className={styles.logo} />
        </NavLink>
        <NavLink to='/Diary' className={styles['svg-link']}>
          <MomSVG className={styles.logo} />
        </NavLink>
        </div>
      </Box>
    </div>
  );
};


export default Logo;