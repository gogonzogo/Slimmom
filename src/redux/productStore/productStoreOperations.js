 import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64ff0e2df8b9eeca9e298036.mockapi.io/";

export const fetchFoods = createAsyncThunk(
  'foods/fetchfoods', async (rejectWithValue) => {
    try {
      const response = await axios.get(
      'product'
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const addFood = createAsyncThunk(
  'foods/addFood', async (data, rejectWithValue)=> {
    const newProduct = {
    productId: data.id,
    title: data.title,
    weight: data.weight,
    calories: data.calories,
    createdAt: Date.now(),
  };
    try {
      const response = await axios.post(
        'product',
        newProduct
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const deleteFood = createAsyncThunk(
  'foods/deleteFood', async (id, rejectWithValue) => {
    try {
      const response = await axios.delete(
      `product/${id}`
      );
      return response.data;
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

