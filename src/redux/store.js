import { configureStore } from '@reduxjs/toolkit';
import { foodsReducer } from './productStore/productStoreSlice';
import { validationReducer } from './validation/validationSlice';
import { authReducer } from './auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    foods: foodsReducer,
    validation: validationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;