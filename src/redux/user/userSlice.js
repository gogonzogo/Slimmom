import dayjs from 'dayjs';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchDiary,
  addDiaryEntry,
  deleteDiaryEntry,
  searchFoods,
  getUserStats,
  CalNoEat,
  sendCalculator,
  searchNotAllowedFood,
} from './userOperations';
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
  cals: {
    value: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '',
      heightFeet: '',
      heightInch: '',
      currentWeightLbs: '',
      desiredWeightLbs: '',
      measurementType: '',
    },
    totalCalories: '',
    noEat: {},
  },
  stats: {
    height: null,
    age: null,
    currentWeight: null,
    desiredWeight: null,
    bloodType: null,
    enteredDate: null,
    originalWeight: null,
    dailyRate: null,
  },
  badFoodSearcList: [],
};

export const userSlice = createSlice({
  name: 'user',
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
    setDailyRate: (state, action) => {
      state.dailyRate = action.payload;
    },
    // CALCULATOR REDUCERS
    storeCalulator: (state, action) => {
      state.cals.value = action.payload;
    },
    setStats: (state, action) => {
      state.stats = action.payload;
    },
    resetCalcState: state => {state.cals = initialState},
    resetUserState: state => initialState,
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
        // console.log('Server Error!');
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
        // console.log('Server Error!');
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
        // console.log('Server Error!');
        toast.error('Something wrong');
      })
      // CALCULATOR EXTRA REDUCERS
      .addCase(getUserStats.fulfilled, (state, action) => {
        const stats = action.payload.stats;
        state.stats = {
          height: stats.height,
          age: stats.age,
          currentWeight: stats.currentWeight,
          desiredWeight: stats.desiredWeight,
          bloodType: stats.bloodType,
          enteredDate: stats.enteredDate,
          originalWeight: stats.originalWeight,
          dailyRate: stats.totalCalories,
        };
      })
      .addCase(getUserStats.rejected, (state, action) => {
        state.stats = {
          height: 'n/a',
          age: 'n/a',
          currentWeight: 'n/a',
          desiredWeight: 'n/a',
          bloodType: 'n/a',
          enteredDate: null,
          originalWeight: null,
        };
      })
      .addCase(searchNotAllowedFood.fulfilled, (state, action) => {
        state.badFoodSearcList = action.payload;
      })
      .addCase(searchNotAllowedFood.rejected, (state, action) => {
        state.badFoodSearcList = [{ _id: 0, title: 'Nothing Found' }];
      })
      .addCase(CalNoEat.pending, state => {
        state.cals.isRefreshing = true;
      })
      .addCase(CalNoEat.fulfilled, (state, action) => {
        state.cals.isLoggedIn = true;
        state.cals.isRefreshing = false;
      })
      .addCase(CalNoEat.rejected, (state, action) => {
        state.cals.isRefreshing = false;
        // console.log('Error');
      })
      .addCase(sendCalculator.pending, state => {
        state.cals.isRefreshing = true;
      })
      .addCase(sendCalculator.fulfilled, (state, action) => {
        state.cals.isLoggedIn = true;
        state.cals.isRefreshing = false;
      })
      .addCase(sendCalculator.rejected, (state, action) => {
        state.cals.isRefreshing = false;
        // console.log('Error');
      })
  },
});

export const {
  setCalDate,
  setDiaryList,
  setFoodsList,
  setDiaryBackBtn,
  resetDiaryState,
  storeCalulator,
  setStats,
  resetCalcState,
  resetUserState,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
