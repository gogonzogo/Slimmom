//external
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

//internal
//import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import css from './Navigation.module.css';

function Navigation({ className }) {
  const navLinkStyles = {
    color: '#9B9FAA',
    fontWeight: 700,
    fontSize: '14px',
    textTransform: 'uppercase',
    lineHeight: '17.01px',
    margin: '0 14px 0px 0',
  };

  //const isLoggedIn = useSelector(selectIsLoggedIn);
  const { loggedIn } = useAuth();
  return (
    <>
      {loggedIn ? (
        <div className={className}>
          <NavLink to="/diary" styles={navLinkStyles} className={css.navLink}>
            diary
          </NavLink>
          <NavLink
            to="/calculator"
            styles={navLinkStyles}
            className={css.navLink}
          >
            calculator
          </NavLink>
        </div>
      ) : (
        <div className={className}>
          <NavLink to="/login" styles={navLinkStyles} className={css.navLink}>
            log in
          </NavLink>
          <NavLink
            to="/register"
            styles={navLinkStyles}
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
