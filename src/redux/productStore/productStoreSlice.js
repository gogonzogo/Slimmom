import { createSlice } from '@reduxjs/toolkit';
import { fetchFoods, addFood, deleteFood, updateFood } from './productStoreOperations';

const initialState = {
  foods: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
}

export const foodsSlice = createSlice({
  name: 'foods',
  initialState,
   reducers: {
    filterFoods: (state, action) => {
      state.filter = action.payload;
    },
    clearFoods: (state) => {
      state.foods.items = [];
     },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFoods.pending, state => {
        state.foods.isLoading = true;
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.foods.items = action.payload;
        state.foods.error = null;
        state.foods.isLoading = false;
      })
      .addCase(fetchFoods.rejected, (state, action) => {
        state.foods.isLoading = false;
        state.foods.error = action.payload;
        state.foods.items = [];
        console.log('Server Error!');
      })
      .addCase(addFood.pending, state => {
        state.foods.isLoading = true;
      })
      .addCase(addFood.fulfilled, state => {
        state.foods.isLoading = false;
        state.foods.error = null;
      })
      .addCase(addFood.rejected, (state, action) => {
        state.foods.isLoading = false;
        state.foods.error = action.payload;
        console.log('Server Error!');
      })
      .addCase(updateFood.pending, (state) => {
        state.foods.isLoading = true;
      })
      .addCase(updateFood.fulfilled, (state, action) => {
        state.foods.isLoading = false;
        state.foods.error = null;
      })
      .addCase(updateFood.rejected, (state, action) => {
        state.foods.isLoading = false;
        state.foods.error = action.payload;
        console.log('Server Error!');
      })
      .addCase(deleteFood.pending, (state) => {
        state.foods.isLoading = true;
      })
      .addCase(deleteFood.fulfilled, (state, action) => {
        state.foods.isLoading = false;
        state.foods.error = null;
      })
      .addCase(deleteFood.rejected, (state, action) => {
        state.foods.isLoading = false;
        state.foods.error = action.payload;
        console.log('Server Error!');
      })
  }
})

export const { filterFoods, clearFoods } = foodsSlice.actions;
export const foodsReducer = foodsSlice.reducer;