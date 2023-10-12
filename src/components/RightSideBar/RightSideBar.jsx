import { useUser } from 'hooks/useUser';
import s from './rightSideBar.module.css';
import React from 'react';

const RightSideBar = props => {
  const { calculator } = useUser();
  return (
    <div className={s.sideBarContainer} calculator={calculator}>
      {React.cloneElement(props.children, calculator)}
    </div>
  );
};
export default RightSideBar;
