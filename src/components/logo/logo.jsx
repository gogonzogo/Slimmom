import React from 'react';
import { ReactComponent as LogoSVG } from '../logo/logo.svg';
import styles from './logo.module.css';
const Logo = ({ className }) => { 
  return (
    <div className={className || styles['logo-container']}>
      <LogoSVG className={styles.logo} />
    </div>
  );
};

export default Logo;





