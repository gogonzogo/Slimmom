import s from './rightSideBar.module.css';
import React from 'react';
import { useSelector } from 'react-redux';

import { sideBarStats } from 'redux/user/userSelectors';

const RightSideBar = props => {
  const stats = useSelector(sideBarStats);
  return (
    <div className={s.sideBarContainer} stats={stats}>
      {React.cloneElement(props.children, stats)}
    </div>
  );
};
export default RightSideBar;
