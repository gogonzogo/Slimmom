import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDiary = createAsyncThunk(
  'diary/fetchDiary',
  async (date, rejectWithValue) => {
    try {
      const response = await axios.post('day/info', {date: date,});
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDiaryEntry = createAsyncThunk(
  'diary/addDiary',
  async (data, rejectWithValue) => {
    const newDiaryEntry = {
      date: data.calDate,
      title: data.productName,
      weight: data.grams,
      calories: data.calories,
    };
    try {
      const response = await axios.post('users/addFood', newDiaryEntry);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryEntry = createAsyncThunk(
  'diary/deleteDiary',
  async (data, rejectWithValue) => {
    try {
      const response = await axios.delete(
        `users/deleteFood/${JSON.stringify(data)}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchFoods = createAsyncThunk(
  'diary/updateDiary',
  async (data, rejectWithValue) => {
    try {
      const response = await axios.get(
        `food/query/${data}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
