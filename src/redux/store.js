import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './validation/registrationSlice';
import CaloriesReducer from './validation/calculateCalsSlice';
import { authReducer } from './auth/authSlice';
import { userReducer } from './user/userSlice';
import { themeReducer } from './theme/themeSlice';
import { resetState } from './resetState';
import { toast } from 'react-toastify';
import { avatarReducer } from './avatar/avatarSlice';

const customMiddleware = store => next => action => {
  if (action.error && action.error.message === 'Rejected') {
    const errorCode = Number(action.payload.slice(-3));
    switch (errorCode) {
      case 401:
        resetState(store.dispatch);
        break;
      case 500:
        toast.error('Server error');
        break;
      default:
        break;
    }
  }

  return next(action);
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    calculate: CaloriesReducer,
    user: userReducer,
    theme: themeReducer,
    avatar: avatarReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(customMiddleware),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
