import { useSelector } from 'react-redux';
import {
  getCalDate,
  getDailyRate,
  getDiaryList,
} from 'redux/diary/diarySelectors';
import Summary from './Summary';

export const SummaryContainer = () => {
  const date = useSelector(getCalDate);
  const foodList = useSelector(getDiaryList);
  const totalConsumed = foodList
    ? foodList.reduce((acc, el) => acc + el.calories, 0)
    : 0;
  const dailyRate = useSelector(getDailyRate);

  const left = totalConsumed !== 0 ? dailyRate - totalConsumed : 0;
  const percentage =
    dailyRate !== 0 ? Math.round((totalConsumed / dailyRate) * 100) : 0;
  const summary = {
    left,
    totalConsumed,
    dailyRate,
    percentage,
  };

  return <Summary date={date} summary={summary} />;
};
