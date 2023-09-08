import React from 'react';
import { ReactComponent as LogoSVG } from '../logo/logo.svg';
import styles from './header.module.css';
const Logo = () => {
  return (
    <div className={styles['logo-container']}>
      <LogoSVG className={styles.logo} />
    </div>
  );
};

export default Logo;





