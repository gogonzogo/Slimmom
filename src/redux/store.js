import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './validation/registrationSlice';
import { diaryReducer } from './diary/diarySlice';
import CaloriesReducer from './validation/calculateCalsSlice';
import { authReducer } from './auth/authSlice';

import calCalories from './Calc/calcSlice';

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
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
