import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectError,
  selectToken,
} from "../redux/auth/authSelectors";

export const useAuthStore = () => {
  const loading = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const refreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);

  return {
    loading,
    user,
    refreshing,
    error,
    token,
  };
};