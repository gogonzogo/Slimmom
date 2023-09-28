import React from 'react';
import { ReactComponent as SlimSVG } from '../Logo/slim.svg';
import { ReactComponent as MomSVG } from '../Logo/mom.svg';
import styles from './TextLogo.module.css';
import { NavLink } from 'react-router-dom';

const TextLogo = ({ className }) => {
  return (
    <div className={className || styles['textlogo-container']}>
      <div className={styles['texttext-container']}>
        <NavLink to='/Diary' className={styles['textsvg-link']}>
          <SlimSVG className={styles.svgtext} />
        </NavLink>
        <NavLink to='/Diary' className={styles['textsvg-link']}>
          <MomSVG className={styles.svgtext} />
        </NavLink>
        </div>
      </div>
  );
};

export default TextLogo;