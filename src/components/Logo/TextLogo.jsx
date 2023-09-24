import React from 'react';
import { ReactComponent as SlimSVG } from '../Logo/slim.svg';
import { ReactComponent as MomSVG } from '../Logo/mom.svg';
import styles from './TextLogo.module.css';
import { NavLink } from 'react-router-dom';

const TextLogo = ({ className }) => {
  return (
    <div className={className || styles['logo-container']}>
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

export default TextLogo;