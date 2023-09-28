import React from 'react';
import { ReactComponent as LogoSVG } from '../Logo/slimmom.svg';
import { ReactComponent as SlimSVG } from "../Logo/slim.svg";
import { ReactComponent as MomSVG } from "../Logo/mom.svg";
import styles from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  // Define styles for the media query
  const mediaQueryStyles = {
    marginTop: '-20px',
  };

  // Apply different styles if the screen width is less than or equal to 768px
  if (window.innerWidth <= 768) {
    mediaQueryStyles.marginTop = '20px';
  }

  return (
    <div style={{ display: 'flex', ...mediaQueryStyles }} className={styles['logo-container']}>
      <div className={styles['vector-container']}>
        <NavLink to='/Diary'>
          <LogoSVG className={styles.logo} width="100" height="100" alt="A waistline with a green measuring tape" />
        </NavLink>
      </div>
      <div className={styles['text-container']}>
        <NavLink to='/Diary' className={styles['svg-link']}>
          <SlimSVG className={styles.text} />
        </NavLink>
        <NavLink to='/Diary' className={styles['svg-link']}>
          <MomSVG className={styles.text} />
        </NavLink>
      </div>
    </div>
  );
};

export default Logo;
