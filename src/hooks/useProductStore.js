import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  getFoods,
  getFilter,
  getIsLoading,
  getError,
} from "../redux/productStore/productStoreSelectors";

export const useProductStore = () => {
  const foods = useSelector(getFoods);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return {
    foods,
    filter,
    isLoading,
    error,
  };
};