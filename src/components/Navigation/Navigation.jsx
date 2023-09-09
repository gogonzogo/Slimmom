import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <div className={css.navContainer}>
      <NavLink to="/login" className={css.navLink} style={{marginRight: 14, fontSize: 14}}>
        log in
      </NavLink>
      <NavLink to="/register" className={css.navLink}>
        registration
      </NavLink>
    </div>
  );
}

export default Navigation;
