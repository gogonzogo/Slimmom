import React from 'react';
import { ReactComponent as SlimSVG } from '../Logo/slim.svg';
import { ReactComponent as MomSVG } from '../Logo/mom.svg';
import styles from './TextLogo.module.css';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const TextLogo = ({ className }) => {
  const isLargeScreen = useMediaQuery('(min-width: 769px)');
  return (
    <div className={className || styles['logo-container']}>
            <Box sx={{
            paddingRight: isLargeScreen ? 3 : 0,
            borderRight: isLargeScreen ? '2px solid #E0E0E0' : 'none',
            marginRight: isLargeScreen ? 3 : 0,
            marginTop: isLargeScreen ? 4 : 3,
          }}>
      <div className={styles['text-container']}>
        <NavLink to='/Diary' className={styles['svg-link']}>
          <SlimSVG className={styles.text} />
        </NavLink>
        <NavLink to='/Diary' className={styles['svg-link']}>
          <MomSVG className={styles.text} />
        </NavLink>
        </div>
        </Box>
      </div>
  );
};

export default TextLogo;