import React from 'react';
import { ReactComponent as SlimSVG } from '../Logo/slim.svg';
import { ReactComponent as MomSVG } from '../Logo/mom.svg';
import styles from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const TextLogo = ({ className }) => {
  return (
    <div className={className || styles['logo-container']}>
      <div className={styles['text-container']}>
        <NavLink to='/Diary' className={styles['svg-link']}>
          <SlimSVG className={styles.logo} alt="the logo has text that says slim"/>
        </NavLink>
        <NavLink to='/Diary' className={styles['svg-link']}>
          <MomSVG className={styles.logo} alt= "followed by mom"/>
        </NavLink>
      </div>
    </div>
  );
};

export default TextLogo;