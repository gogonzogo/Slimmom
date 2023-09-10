// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFoods = createAsyncThunk(
  'foods/fetchfoods', async (_, thunkAPI) => {
    try {
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const addFood = createAsyncThunk(
  'foods/addFood', async (rejectWithValue) => {
    try {
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const deleteFood = createAsyncThunk(
  'foods/deleteFood', async (rejectWithValue) => {
    try {
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const updateFood = createAsyncThunk(
  'foods/updateFood', async (rejectWithValue) => {
    try {
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

