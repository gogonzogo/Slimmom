import React from 'react';
import { ReactComponent as LogoSVG } from './logo.svg';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom'

const Logo = ({ className }) => { 
  return (
    <Link to='diary' className={className || styles['logo-container']}>
      <LogoSVG className={styles.logo} />
    </Link>
  );
};

export default Logo;





