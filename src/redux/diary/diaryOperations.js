import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDiary = createAsyncThunk(
  'diary/fetchDiary',
  async (date, rejectWithValue) => {
    try {
      const response = await axios.post('/diary/day', { date: date, });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDiaryEntry = createAsyncThunk(
  'diary/add',
  async (data, rejectWithValue) => {
    const newDiaryEntry = {
      date: data.calDate,
      title: data.productName,
      weight: data.grams,
      calories: data.calories,
    };
    try {
      const response = await axios.post('/diary/add', newDiaryEntry);
      return response.data.data.newEntry;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryEntry = createAsyncThunk(
  'diary/delete',
  async (data, rejectWithValue) => {
    try {
      const response = await axios.delete(
        `/diary/delete/${JSON.stringify(data)}`
      );
      return response.data.data.result;
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
        `/diary/allFoods/search/${data}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
