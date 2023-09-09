import React from 'react';
import { ReactComponent as LogoSVG } from '../logo/logo.svg';
import styles from './logo.module.css';
import { Link } from 'react-router-dom'

const Logo = ({ className }) => { 
  return (
    <Link to='../../pages/Diary' className={className || styles['logo-container']}>
      <LogoSVG className={styles.logo} />
    </Link>
  );
};

export default Logo;





