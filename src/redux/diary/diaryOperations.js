import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3030/api/ ";

export const fetchDiary = createAsyncThunk(
  'diary/fetchDiary', async (rejectWithValue) => {
    try {
      const response = await axios.get(
      'diary'
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const addDiary = createAsyncThunk(
  'diary/addDiary', async (rejectWithValue)=> {
        const newDiary = [{
            date: Date.now(),
            foodItems: [],
        },];
    try {
      const response = await axios.post(
        'diary',
        newDiary
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const deleteDiary = createAsyncThunk(
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

export const updateDiary = createAsyncThunk(
  'diary/updateDiary', async (rejectWithValue) => {
    try {
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

