import React from 'react';
import { ReactComponent as LogoSVG } from '../Logo/slimmom.svg';
import styles from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const ImageLogo = ({ className }) => {
  return (
    <div className={className || styles['logo-container']}>
      <div className={styles['vector-container']}>
        <NavLink to='/Diary'>
          <LogoSVG className={styles.logo} width="100" height="100" alt="A waistline with a green measuring tape"/>
        </NavLink>
      </div>
    </div>
  );
};

export default ImageLogo;