import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFoods = createAsyncThunk(
  'foods/fetchFoods', async (userInput, rejectWithValue) => {
    try {
      const response = await axios.get(
        'product',
        userInput
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const addFood = createAsyncThunk(
  'foods/addFood', async (data, rejectWithValue) => {
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

