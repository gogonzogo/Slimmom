import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

axios.defaults.baseURL = "http://localhost:3030/api";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/register", credentials);
      token.set(data.token);
      toast.success(data.data.message, {
        position: 'top-right',
        autoClose: 3000,
      });
      return data;
    } catch (error) {
      toast.error(error.response.data.data.message, {
        position: 'top-right',
        autoClose: 3000,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    // console.log('login called')
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      toast.success(data.data.message, {
        icon: "🚀",
        theme: "colored",
      });
      console.log(data.token)
      return data;
    } catch (error) {
      toast.error(error.response.data.data.message, {
        position: 'top-right',
        autoClose: 3000,
        theme: "colored",
        icon: true,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.set(null);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.set(null);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
