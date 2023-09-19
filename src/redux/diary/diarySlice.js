import { createSlice } from '@reduxjs/toolkit';
import { fetchDiary, addDiary, deleteDiary, updateDiary } from './diaryOperations';

const initialState = {
  diary: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
}

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
   reducers: {
    filterDiary: (state, action) => {
      state.filter = action.payload;
    },
    clearDiary: (state) => {
      state.diary.items = [];
     },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDiary.pending, state => {
        state.diary.isLoading = true;
      })
      .addCase(fetchDiary.fulfilled, (state, action) => {
        state.diary.items = action.payload;
        state.diary.error = null;
        state.diary.isLoading = false;
      })
      .addCase(fetchDiary.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        state.diary.items = [];
        console.log('Server Error!');
      })
      .addCase(addDiary.pending, state => {
        state.diary.isLoading = true;
      })
      .addCase(addDiary.fulfilled, state => {
        state.diary.isLoading = false;
        state.diary.error = null;
      })
      .addCase(addDiary.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        console.log('Server Error!');
      })
      .addCase(updateDiary.pending, (state) => {
        state.diary.isLoading = true;
      })
      .addCase(updateDiary.fulfilled, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = null;
      })
      .addCase(updateDiary.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        console.log('Server Error!');
      })
      .addCase(deleteDiary.pending, (state) => {
        state.diary.isLoading = true;
      })
      .addCase(deleteDiary.fulfilled, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = null;
      })
      .addCase(deleteDiary.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        console.log('Server Error!');
      })
  }
})

export const { filterDiarys, clearDiarys } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;