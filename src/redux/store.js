import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './validation/registrationSlice';
import { diaryReducer } from './diary/diarySlice';
import CaloriesReducer from './validation/calculateCalsSlice';
import { authReducer } from './auth/authSlice';

import calCalories from './Calc/calcSlice';
import { resetState } from './resetState';

const customMiddleware = store => next => action => {
  if (action.error && action.error.message === 'Rejected') {
    if (action.payload.includes('401')) {
      // change to switch case; handle 500 server error
      console.log(401);
      resetState(store.dispatch);
    }
  }

  return next(action);
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    diary: diaryReducer,
    calculate: CaloriesReducer,
    calCalories: calCalories,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(customMiddleware),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
