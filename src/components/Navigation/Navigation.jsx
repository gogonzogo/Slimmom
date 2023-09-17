//external
import React from 'react';
import { NavLink } from 'react-router-dom';
//import { useSelector } from 'react-redux';

//internal
//import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import css from './Navigation.module.css';

function Navigation({className}) {
  //const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true
  return (
  <>
    {isLoggedIn
      ? (
      <div className={`${css.navContainer} ${className}`}>
        <NavLink to="/diary" className={css.navLink}>
          diary
         </NavLink>
        <NavLink to="/calculator" className={css.navLink}>
          calculator
        </NavLink>
        </div> 
    ) : (
      <div className={`${css.navContainer} ${className}`}>
          <NavLink to="/login" className={css.navLink}>
            log in
          </NavLink>
          <NavLink to="/register" className={css.navLink}>
            registration
          </NavLink>
      </div >
    )}
  </>
  );
};

export default Navigation;