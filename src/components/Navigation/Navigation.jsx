//external
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

//internal
import css from './Navigation.module.css';

function Navigation({ className }) {

  const { loggedIn } = useAuth();
  return (
    <>
      {loggedIn ? (
        <div className={className}>
          <NavLink to="/diary" className={css.navLink}>
            diary
          </NavLink>
          <NavLink
            to="/calculator"
          
            className={css.navLink}
          >
            calculator
          </NavLink>
        </div>
      ) : (
        <div className={className}>
          <NavLink to="/login" className={css.navLink}>
            log in
          </NavLink>
          <NavLink
            to="/register"
          
            className={css.navLink}
          >
            register
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Navigation;
