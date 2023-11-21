//external
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//internal
import generateDefaultAvatarCode from 'redux/avatar/avatarOperations';

axios.defaults.baseURL = 'https://slimmom-9d5b6b1b5aa9.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:3030/api';

axios.defaults.withCredentials = true;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/register', credentials);
      dispatch(generateDefaultAvatarCode(credentials.email));
      token.set(res.data.data.token);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      dispatch(generateDefaultAvatarCode(credentials.email));
      token.set(res.data.data.token);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/logout');
      token.set(null);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
