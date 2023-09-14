import React from 'react';
import { NavLink } from 'react-router-dom';
//import { useSelector } from 'react-redux';

import css from './Navigation.module.css';
//import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

function Navigation({className}) {
  //const loggedIn = useSelector(selectIsLoggedIn);
  return (
  <>
    {/* {loggedIn
      ?
      <div className={`${css.navContainer} ${className}`}>
        <NavLink to="/diary" className={css.navLink}>
          diary
         </NavLink>
        <NavLink to="/calculator" className={css.navLink}>
          calculator
        </NavLink>
      </div>
      : */}
      <div className={`${css.navContainer} ${className}`}>
          <NavLink to="/login" className={css.navLink}>
            log in
          </NavLink>
          <NavLink to="/register" className={css.navLink}>
            registration
          </NavLink>
      </div >
    {/* } */}
  </>
  );
};

export default Navigation;