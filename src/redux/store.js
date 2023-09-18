import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './validation/registrationSlice';
import { foodsReducer } from './productStore/productStoreSlice';
import { diaryReducer } from './diary/diarySlice';
import CaloriesReducer from './validation/calculateCalsSlice'
import { authReducer } from './auth/authSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    foods: foodsReducer,
    registration: registrationReducer,
    diary: diaryReducer,
    calculate: CaloriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
