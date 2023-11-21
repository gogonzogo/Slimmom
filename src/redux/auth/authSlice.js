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
  reducers: {
    resetAuthState: state => initialState,
  },
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
        toast.success('Registration Success! Have fun Slim Mom!', {
          icon: '🚀',
          position: 'top-right',
          autoClose: 3000,
          className: 'success-toast',
        });
      })
      .addCase(register.rejected, (state, action) => {
        state.isRefreshing = false;
        toast.error(
          'Registration failed. Login instead, your email address is already registered',
          {
            position: 'top-right',
            autoClose: 3000,
            className: 'error-toast',
            icon: '🚫',
          }
        );
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
        toast.success(
          `Successfully Logged in! Looking good ${action.payload.name}!`,
          {
            position: 'top-right',
            autoClose: 3000,
            icon: '🚀',
            className: 'success-toast',
          }
        );
      })
      .addCase(login.rejected, (state, action) => {
        const errMessage = action.payload
        console.log('errMessage', errMessage)
        const message =
          action.payload === 'Request failed with status code 401' || action.payload === 'Request failed with status code 404' ?
            'Unauthorized, please double check your email and password' : 'An error has accurred during login, please try again'

        state.isRefreshing = false;
        toast.error(
          message,
          {
            position: 'top-right',
            autoClose: 3000,
            icon: '🤔',
            className: 'error-toast',
          }
        );
      })
      .addCase(logOut.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        toast.success(action.payload.message, {
          position: 'top-right',
          autoClose: 3000,
          icon: '👋',
          className: 'info-toast',
        });
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isRefreshing = false;
        toast.error(action.payload.message, {
          position: 'top-right',
          autoClose: 3000,
          icon: true,
          theme: 'colored',
        });
      });
  },
});
export const { resetAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
