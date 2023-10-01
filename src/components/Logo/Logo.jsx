import React from 'react';
import { ReactComponent as LogoSVG } from '../Logo/slimmom.svg';
import { ReactComponent as SlimSVG } from "../Logo/slim.svg";
import { ReactComponent as MomSVG } from "../Logo/mom.svg";
import styles from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  const mediaQueryStyles = {
    marginTop: '0px',
  };
  if (window.innerWidth <= 768) {
    mediaQueryStyles.marginTop = '20px';
  }

  return (
    <div style={{ display: 'flex', ...mediaQueryStyles }} className={styles['logo-container']}>
      <div className={styles['vector-container']}>
        <NavLink to='/Diary' aria-label="Link to the Dairy Page">
          <LogoSVG className={styles.logo} width="100" height="100" alt="A waistline with a green measuring tape" />
        </NavLink>
      </div>
      <div className={styles['text-container']}>
        <NavLink to='/Diary' className={styles['svg-link']}  aria-label="Link to the Dairy Page">
          <SlimSVG className={styles.text} />
        </NavLink>
        <NavLink to='/Diary' className={styles['svg-link']}  aria-label="Link to the Dairy Page">
          <MomSVG className={styles.text} />
        </NavLink>
      </div>
    </div>
  );
};

export default Logo;
