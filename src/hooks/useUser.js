import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  getDiaryList,
  getFoodsList,
  getDiaryBackBtn,
  getCalDate,
  getDiaryError,
  getDiaryIsLoading,
  getCalculatorError,
  getCalculatorIsLoading,
  getCalculator,
  getNotAllowedFoodsList,
  getCalculatorDailyRate,
  getDiaryDailyRate,
} from "../redux/user/userSelectors";

export const useUser = () => {
  const diaryList = useSelector(getDiaryList);
  const allFoodsSearchList = useSelector(getFoodsList);
  const diaryBackBtn = useSelector(getDiaryBackBtn);
  const calendarDate = useSelector(getCalDate);
  const diaryIsLoading = useSelector(getDiaryIsLoading);
  const diaryError = useSelector(getDiaryError);
  const calculatorIsLoading = useSelector(getCalculatorIsLoading);
  const calculatorError = useSelector(getCalculatorError);
  const calculator = useSelector(getCalculator);
  const notAllowedFoods = useSelector(getNotAllowedFoodsList);
  const calculatorDailyRate = useSelector(getCalculatorDailyRate);
  const diaryDailyRate = useSelector(getDiaryDailyRate);

  return {
    diaryList,
    allFoodsSearchList,
    diaryBackBtn,
    calendarDate,
    diaryIsLoading,
    diaryError,
    calculatorIsLoading,
    calculatorError,
    calculator,
    notAllowedFoods,
    calculatorDailyRate,
    diaryDailyRate,
  };
};