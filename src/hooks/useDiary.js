import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  getDiaryList,
  getCalDate,
  getIsLoading,
  getError,
} from "../redux/diary/diarySelectors";

export const useDiary = () => {
  const diaryList = useSelector(getDiaryList);
  const calDate = useSelector(getCalDate);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  return {
    diaryList,
    calDate,
    isLoading,
    isError,
  };
};