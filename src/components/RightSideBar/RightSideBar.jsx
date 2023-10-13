import { useUser } from 'hooks/useUser';
import s from './rightSideBar.module.css';
import React from 'react';

const RightSideBar = props => {
  const { calculator } = useUser();
  return (
    <div className={s.sideBarContainer}>
      {React.cloneElement(props.children, { calculator: calculator })}
    </div>
  );
};

export default RightSideBar;
