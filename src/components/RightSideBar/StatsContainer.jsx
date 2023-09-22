import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { getUserStats } from 'redux/Calc/calcOperations';
import {
  calculatorStatsSelector,
  sideBarStats,
} from 'redux/Calc/calcSliceSelectors';

const { Stats } = require('./Stats');

export const StatsContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectToken);
  const calculatorStats = useSelector(calculatorStatsSelector);
  const stats = useSelector(sideBarStats);

  useEffect(() => {
    user && dispatch(getUserStats());
    console.log();
  }, [user, calculatorStats, dispatch]);

  return <Stats stats={stats} />;
};
