import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <div className={css.navContainer}>
      <div className={`${css.navLinks} ${css.mlAuto}`}>
        <NavLink to="/login" className={css.navLink} style={{ marginRight: 14, fontSize: 14 }}>
          LOG IN
        </NavLink>
        <NavLink to="/register" className={css.navLink}>
          REGISTER
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;




