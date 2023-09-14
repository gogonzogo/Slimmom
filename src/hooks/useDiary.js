import { useSelector } from "react-redux";
import {
  getProductName,
  getGrams,
  getCalories,
} from "../redux/diary/diarySelectors";

export const useDiaryStore = () => {
  const productName = useSelector(getProductName);
  const grams = useSelector(getGrams);
  const calories = useSelector(getCalories);

  return {
    productName,
    grams,
    calories,
  };
};