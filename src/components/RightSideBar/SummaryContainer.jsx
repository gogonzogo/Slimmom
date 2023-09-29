import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { searchNotAllowedFood } from 'redux/Calc/calcOperations';
import { getBadFoodSearchResults } from 'redux/Calc/calcSliceSelectors';
import {
  getCalDate,
  getDailyRate,
  getDiaryList,
} from 'redux/diary/diarySelectors';
import Summary from './Summary';

export const SummaryContainer = props => {
  const stats = props;
  const dispatch = useDispatch();

  //set Summary
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

  //search bad food
  const searchResults = useSelector(getBadFoodSearchResults);
  const bloodType = stats.bloodType;
  const searchInputChange = debounce(e => {
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
