import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  getDiaryList,
  getFoodsList,
  getCalDate,
  getIsLoading,
  getError,
} from "../redux/diary/diarySelectors";

export const useDiary = () => {
  const diaryList = useSelector(getDiaryList);
  const foodsList = useSelector(getFoodsList);
  const calDate = useSelector(getCalDate);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  return {
    diaryList,
    foodsList,
    calDate,
    isLoading,
    isError,
  };
};