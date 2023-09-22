import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3030/api';

export const getUserStats = createAsyncThunk('calcCalories/stats', async () => {
  try {
    const response = await axios.get('users/stats');
    return response.data.data;
  } catch (err) {
    return err;
  }
});
export const fetchDaySummary = createAsyncThunk(
  'calcCalories/summary',
  async data => {
    try {
      const response = await axios.post('day/info', data);
      return response.data;
    } catch (err) {
      return err;
    }
  }
);
