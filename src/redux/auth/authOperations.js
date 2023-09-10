/* ========> commenting out all axios usage until we have backend to finalize authOperations
but we can mock the token to complete logic prior to backend completion <======== */

// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://";

// export const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      // const { data } = await axios.post("/users/signup", credentials);
      // token.set(data.token);
      // return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      // const { data } = await axios.post("/users/login", credentials);
      // token.set(data.token);
      // return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      // await axios.post("/users/logout");
      // token.set(null);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
