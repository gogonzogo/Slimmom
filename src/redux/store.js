// store.js

import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from '../redux/validation/registrationSlice';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
