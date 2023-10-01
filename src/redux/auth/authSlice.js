import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut } from './authOperations';
import { toast } from 'react-toastify';

const initialState = {
  user: { name: '', email: '' },
  userId: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        toast.success(action.payload.message, {
          icon: '🚀',
          position: 'top-right',
          autoClose: 3000,
        });
      })
      .addCase(register.rejected, (state, action) => {
        state.isRefreshing = false;
        toast.error(action.payload.message, {
          position: 'top-right',
          autoClose: 3000,
        });
      })
      .addCase(login.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.name;
        state.userId = action.payload.userId;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        toast.success(action.payload.message, {
          icon: "🚀",
          theme: "colored",
        });
      })
      .addCase(login.rejected, (state, action) => {
        state.isRefreshing = false;
        toast.error(action.payload.message, {
          position: 'top-right',
          autoClose: 3000,
          theme: "colored",
          icon: true,
        });
      })
      .addCase(logOut.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        toast.error(action.payload.message, {
          position: 'top-right',
          autoClose: 3000,
          theme: "colored",
          icon: true,
        });
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isRefreshing = false;
        toast.error(action.payload.message, {
          position: 'top-right',
          autoClose: 3000,
          theme: "colored",
          icon: true,
        });
      })
  },
});

export const authReducer = authSlice.reducer;
