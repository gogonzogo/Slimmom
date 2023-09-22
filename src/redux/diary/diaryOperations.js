import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDiary = createAsyncThunk(
  'diary/fetchDiary', async (date, rejectWithValue) => {
    try {
      const response = await axios.post(
        'day/info',
        {date}
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const addDiaryEntry = createAsyncThunk(
  'diary/addDiary', async (data, rejectWithValue) => {
    const newDiaryEntry = {
      date: data.date,
      productName: data.title,
      grams: data.weight,
      calories: data.calories,
    }
    try {
      const response = await axios.post(
        'users/addFood',
        newDiaryEntry
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const deleteDiaryEntry = createAsyncThunk(
  'diary/deleteDiary', async (id, rejectWithValue) => {
    try {
      const response = await axios.delete(
        `diary/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const updateDiaryEntry = createAsyncThunk(
  'diary/updateDiary', async (rejectWithValue) => {
    try {
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

