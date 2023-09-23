import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refresh } from './authOperations';

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
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        console.log('Success! You are registered');
      })
      .addCase(register.rejected, (state, action) => {
        state.isRefreshing = false;
        if (action.payload.includes('409')) {
          console.log('Email or name already exists');
        } else {
          console.log('Server error, please try again');
        }
      })
      .addCase(login.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.userId = action.payload.userId;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        console.log('Success! Logging you in...');
      })
      .addCase(login.rejected, state => {
        state.isRefreshing = false;
        console.log('Incorrect email or password');
      })
      .addCase(logOut.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        console.log('Success! Logged Out!');
      })
      .addCase(logOut.rejected, state => {
        state.isRefreshing = false;
        console.log('Server error, please try again.');
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        console.log('Success! refreshed!');
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
        console.log('Server error, please try again.');
      });
  },
});

export const authReducer = authSlice.reducer;
