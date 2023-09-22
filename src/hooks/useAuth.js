import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectError,
  selectToken,
} from "../redux/auth/authSelectors";

export const useAuth = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const refreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);

  return {
    loggedIn,
    user,
    refreshing,
    error,
    token,
  };
};