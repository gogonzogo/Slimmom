import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectError,
  selectToken,
  selectUserId,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const userId = useSelector(selectUserId);
  const refreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);

  return {
    loggedIn,
    user,
    userId,
    refreshing,
    error,
    token,
  };
};
