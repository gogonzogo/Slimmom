import React from 'react';
import { ReactComponent as LogoSVG } from '../Logo/slimmom.svg';
import { ReactComponent as SlimSVG } from "../Logo/slim.svg";
import { ReactComponent as MomSVG } from "../Logo/mom.svg";
import styles from './Logo.module.css';
import { Link } from 'react-router-dom'
const Logo = ({ className }) => { 
  return (
    <div className={className || styles['logo-container']}>
      <div className={styles['vector-container']}>
        <Link to='../../pages/Diary'>
          <LogoSVG className={styles.logo} />
        </Link>
      </div>
      <div className={styles['text-container']}>
        <Link to='../../pages/Diary' className={styles['svg-link']}>
          <SlimSVG className={styles.logo} />
        </Link>
        <Link to='../../pages/Diary' className={styles['svg-link']}>
          <MomSVG className={styles.logo} />
        </Link>
      </div>
    </div>
  );
};


export default Logo;