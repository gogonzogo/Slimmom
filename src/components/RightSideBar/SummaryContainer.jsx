import { throttle } from 'lodash';
import { useDispatch } from 'react-redux';
import { searchNotAllowedFood } from 'redux/user/userOperations';
import Summary from './Summary';
import { useUser } from 'hooks/useUser';

export const SummaryContainer = ({ calculator }) => {
  // const calculator = props;
  const {
    diaryList: foodList,
    calendarDate: date,
    diaryDailyRate,
    notAllowedFoods: searchResults,
    calculatorDailyRate,
  } = useUser();
  const dispatch = useDispatch();
  const dailyRate =
    ((diaryDailyRate || calculatorDailyRate) > 1
      ? diaryDailyRate || calculatorDailyRate
      : 0) || 0;

  //set Summary
  const totalConsumed = foodList
    ? foodList.reduce((acc, el) => acc + el.calories, 0)
    : 0;
  const left =
    totalConsumed !== null && !isNaN(totalConsumed)
      ? Math.max(dailyRate - totalConsumed, 0)
      : 0;
  const percentage =
    dailyRate !== 0 ? Math.round((totalConsumed / dailyRate) * 100) : 0;

  const summary = {
    left,
    totalConsumed,
    dailyRate,
    percentage,
  };

  //search bad food
  const bloodType = calculator.bloodType;
  const searchInputChange = throttle(e => {
    const title = e.target.value;
    title.length > 0 &&
      dispatch(searchNotAllowedFood({ title, bloodType: bloodType }));
  }, 400);
  return (
    <Summary
      date={date}
      summary={summary}
      searchInputChange={searchInputChange}
      searchResults={searchResults}
    />
  );
};
