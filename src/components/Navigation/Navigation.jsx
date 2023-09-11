import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <div className={css.navContainer}>
      <NavLink to="/login" className={css.navLink}>
        log in
      </NavLink>
      <NavLink to="/register" className={css.navLink}>
        registration
      </NavLink>
    </div>
  );
}

export default Navigation;
