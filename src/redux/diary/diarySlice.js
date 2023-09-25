import { createSlice } from '@reduxjs/toolkit';
import {
  fetchDiary,
  addDiaryEntry,
  deleteDiaryEntry,
  searchFoods,
} from './diaryOperations';

const initialState = {
  diary: {
    calDate: '',
    dailyRate: 0,
    diaryList: [],
  },
  searchInput: '',
  foodsList: [],
  isLoading: false,
  error: null,
  filter: '',
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setCalDate: (state, action) => {
      state.diary.calDate = action.payload;
    },
    setDiaryList: (state, action) => {
      state.diary.diaryList = action.payload;
    },
    setFoodsList: (state, action) => {
      state.foodsList = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDiary.pending, state => {
        state.diary.isLoading = true;
      })
      .addCase(fetchDiary.fulfilled, (state, action) => {
        state.diary.diaryList = action.payload.foodItems;
        state.diary.calDate = action.payload.date;
        state.diary.dailyRate = action.payload.dailyRate;
        state.diary.error = null;
        state.diary.isLoading = false;
      })
      .addCase(fetchDiary.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        state.diary.diaryList = [];
      })
      .addCase(addDiaryEntry.pending, state => {
        state.diary.isLoading = true;
      })
      .addCase(addDiaryEntry.fulfilled, (state, action) => {
        state.diary.diaryList = [...state.diary.diaryList, action.payload];
        state.diary.isLoading = false;
        state.diary.error = null;
      })
      .addCase(addDiaryEntry.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        console.log('Server Error!');
      })
      .addCase(searchFoods.pending, state => {
        state.diary.isLoading = true;
      })
      .addCase(searchFoods.fulfilled, (state, action) => {
        state.foodsList = action.payload;
        state.diary.isLoading = false;
        state.diary.error = null;
      })
      .addCase(searchFoods.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        console.log('Server Error!');
      })
      .addCase(deleteDiaryEntry.pending, state => {
        state.diary.isLoading = true;
      })
      .addCase(deleteDiaryEntry.fulfilled, (state, action) => {
        state.diary.diaryList = state.diary.diaryList.filter(
          item => item.id !== action.payload
        );
        state.diary.isLoading = false;
        state.diary.error = null;
      })
      .addCase(deleteDiaryEntry.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        console.log('Server Error!');
      });
  },
});

export const { setCalDate, setDiaryList, setFoodsList } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
