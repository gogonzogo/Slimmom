import s from './rightSideBar.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { getUserStats } from 'redux/Calc/calcOperations';
import {
  calculatorStatsSelector,
  sideBarStats,
} from 'redux/Calc/calcSliceSelectors';

const RightSideBar = props => {
  const dispatch = useDispatch();
  const user = useSelector(selectToken);
  const calculatorStats = useSelector(calculatorStatsSelector);
  const stats = useSelector(sideBarStats);

  useEffect(() => {
    user && dispatch(getUserStats());
  }, [user, calculatorStats, dispatch]);
  return (
    <div className={s.sideBarContainer} stats={stats}>
      {React.cloneElement(props.children, stats)}
    </div>
  );
};
export default RightSideBar;
