import dayjs from 'dayjs';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchDiary,
  addDiaryEntry,
  deleteDiaryEntry,
  searchFoods,
} from './diaryOperations';
import { Slide, toast } from 'react-toastify';

const initialState = {
  diary: {
    calDate: dayjs().format('MM-DD-YYYY'),
    dailyRate: 0,
    diaryList: [],
  },
  searchInput: '',
  foodsList: [],
  isLoading: false,
  error: null,
  filter: '',
  diaryBackBtn: false,
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
    setDiaryBackBtn: (state, action) => {
      state.diaryBackBtn = action.payload;
    },
    resetDiaryState: state => initialState,
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
        toast.success('Product added successfully', {
          icon: '👌',
          theme: 'colored',
          transition: Slide,
          position: 'top-center',
        });
      })
      .addCase(addDiaryEntry.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        console.log('Server Error!');
        toast.error('Something wrong');
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
          item => item._id !== action.payload
        );
        state.diary.isLoading = false;
        state.diary.error = null;
        toast.warn('Product removed successfully', {
          theme: 'colored',
          transition: Slide,
          position: 'top-center',
        });
      })
      .addCase(deleteDiaryEntry.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        console.log('Server Error!');
        toast.error('Something wrong');
      });
  },
});

export const {
  setCalDate,
  setDiaryList,
  setFoodsList,
  setDiaryBackBtn,
  resetDiaryState,
} = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
