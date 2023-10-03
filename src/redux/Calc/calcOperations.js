import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserStats = createAsyncThunk(
  'calcCalories/stats',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('user/stats');
      // console.log(response.data.data);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const searchNotAllowedFood = createAsyncThunk(
  'calcCalories/searchBadFood',
  async (data, { rejectWithValue }) => {
    const newBloodType = data.bloodType === 'n/a' ? '' : data.bloodType;
    try {
      const response = await axios.get(
        `badFood?title=${data.title}&bloodType=${newBloodType}`
      );
      // console.log(response.data);
      return response.data.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);

export const CalNoEat = createAsyncThunk(
  'cals/calsNotFood',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/calories/', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const sendCalculator = createAsyncThunk(
  'cals/postCalculator',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/calcuator/', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
