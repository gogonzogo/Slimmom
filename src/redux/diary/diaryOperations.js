import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDiary = createAsyncThunk(
  'diary/fetchDiary',
  async (date, rejectWithValue) => {
    try {
      
      const response = await axios.post('day/info', {date: date,});
      console.log(response);
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
      date: data.date,
      productName: data.title,
      grams: data.weight,
      calories: data.calories,
    };
    console.log(newDiaryEntry);
    try {
      const response = await axios.post('users/addFood', newDiaryEntry);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryEntry = createAsyncThunk(
  'diary/deleteDiary',
  async (data, rejectWithValue) => {
    try {
      console.log(data);
      const response = await axios.delete(
        `users/deleteFood/${JSON.stringify(data)}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateDiaryEntry = createAsyncThunk(
  'diary/updateDiary',
  async rejectWithValue => {
    try {
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
