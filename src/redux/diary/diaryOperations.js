import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "http://localhost:3030/api";

export const fetchDiary = createAsyncThunk(
  'diary/fetchDiary',
  async (date,  rejectWithValue) => {
    try {
      const response = await axios.post('/day/info', {date: date});
      console.log(response.data.data)
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDiaryEntry = createAsyncThunk(
  'diary/addDiary',
  async (data, rejectWithValue) => {
    console.log('addDiaryData', data)
    const newDiaryEntry = {
      date: data.calDate,
      title: data.productName,
      weight: data.grams,
      calories: data.calories,
    };
    console.log('addDiaryNewEntry', newDiaryEntry);
    try {
      const response = await axios.post('/users/addFood', `${JSON.parse(newDiaryEntry)}`);
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
        `/users/deleteFood/${JSON.stringify(data)}`
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
        `/food/query/${data}`, `${JSON.stringify(data)}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
