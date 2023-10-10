import dayjs from 'dayjs';
import { createSlice } from '@reduxjs/toolkit';
import {
  getUserInfo,
  fetchDiary,
  addDiaryEntry,
  deleteDiaryEntry,
  searchFoods,
  getUserStats,
  CalNoEat,
  sendCalculator,
  searchNotAllowedFood,
  archiveInfo,
  deleteInfo,
  deleteAcct,
  exportXLS,

} from './userOperations';
import { Slide, toast } from 'react-toastify';

const initialState = {
  diary: {
    calendarDate: dayjs().format('MM-DD-YYYY'),
    diaryDailyRate: 0,
    diaryList: [],
    allFoodsList: [],
    diaryIsLoading: false,
    diaryError: null,
    filter: '',
    diaryBackBtn: false,
  },
  calculator: {
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodType: '',
    heightFeet: '',
    heightInch: '',
    currentWeightLbs: '',
    desiredWeightLbs: '',
    unitOfMeasure: '',
    calculatorDailyRate: '',
    noEat: {},
    calculatorIsLoading: false,
    calculatorError: null,
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
      state.diary.calendarDate = action.payload;
    },
    setDiaryList: (state, action) => {
      state.diary.diaryList = action.payload;
    },
    setFoodsList: (state, action) => {
      state.diary.allFoodsList = action.payload;
    },
    setDiaryBackBtn: (state, action) => {
      state.diaryBackBtn = action.payload;
    },
    setDailyRate: (state, action) => {
      state.dailyRate = action.payload;
    },
    // CALCULATOR REDUCERS
    storeCalulator: (state, action) => {
      state.calculator.value = action.payload;
    },
    setStats: (state, action) => {
      state.stats = action.payload;
    },
    resetCalcState: state => { state.calculator = initialState },
    resetUserState: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getUserInfo.pending, state => {
        state.diary.diaryIsLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        console.log(action.payload)
        // const calculatorInfo = action.payload.calculator;
        // const diaryInfo = action.payload.diary;
        // if (calculatorInfo === null) return;
        // state.stats = {
        //   height: calculatorInfo.height,
        //   age: calculatorInfo.age,
        //   currentWeight: calculatorInfo.currentWeight,
        //   desiredWeight: calculatorInfo.desiredWeight,
        //   bloodType: calculatorInfo.bloodType,
        //   enteredDate: calculatorInfo.enteredDate,
        //   originalWeight: calculatorInfo.originalWeight,
        //   dailyRate: calculatorInfo.dailyRate,
        // };
        // if (diaryInfo === 404) return;
        // state.diary = {

        // }

        // state.diary.dailyRate = info.dailyRate
        // state.diary.diaryList = action.payload.foodItems;
        // state.diary.calendarDate = action.payload.date;
        // state.diary.dailyRate = action.payload.dailyRate;
        state.diary.diaryError = null;
        state.diary.diaryIsLoading = false;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.diary.diaryIsLoading = false;
        state.diary.diaryError = action.payload;
        state.diary.diaryList = [];
      })
      .addCase(fetchDiary.pending, state => {
        state.diary.diaryIsLoading = true;
      })
      .addCase(fetchDiary.fulfilled, (state, action) => {
        state.diary.diaryList = action.payload.foodItems;
        state.diary.calendarDate = action.payload.date;
        state.diary.dailyRate = action.payload.dailyRate;
        state.diary.diaryError = null;
        state.diary.diaryIsLoading = false;
      })
      .addCase(fetchDiary.rejected, (state, action) => {
        state.diary.diaryIsLoading = false;
        state.diary.diaryError = action.payload;
        state.diary.diaryList = [];
      })
      .addCase(addDiaryEntry.pending, state => {
        state.diary.diaryIsLoading = true;
      })
      .addCase(addDiaryEntry.fulfilled, (state, action) => {
        state.diary.diaryList = [...state.diary.diaryList, action.payload];
        state.diary.diaryIsLoading = false;
        state.diary.diaryError = null;
        toast.success('Product added successfully', {
          icon: '👌',
          theme: 'colored',
          transition: Slide,
          position: 'top-center',
        });
      })
      .addCase(addDiaryEntry.rejected, (state, action) => {
        state.diary.diaryIsLoading = false;
        state.diary.diaryError = action.payload;
        toast.error('Something wrong');
      })
      .addCase(searchFoods.pending, state => {
        state.diary.diaryIsLoading = true;
      })
      .addCase(searchFoods.fulfilled, (state, action) => {
        state.diary.allFoodsList = action.payload;
        state.diary.diaryIsLoading = false;
        state.diary.diaryError = null;
      })
      .addCase(searchFoods.rejected, (state, action) => {
        state.diary.diaryIsLoading = false;
        state.diary.diaryError = action.payload;
      })
      .addCase(deleteDiaryEntry.pending, state => {
        state.diary.diaryIsLoading = true;
      })
      .addCase(deleteDiaryEntry.fulfilled, (state, action) => {
        state.diary.diaryList = state.diary.diaryList.filter(
          item => item._id !== action.payload
        );
        state.diary.diaryIsLoading = false;
        state.diary.diaryError = null;
        toast.warn('Product removed successfully', {
          theme: 'colored',
          transition: Slide,
          position: 'top-center',
        });
      })
      .addCase(deleteDiaryEntry.rejected, (state, action) => {
        state.diary.diaryIsLoading = false;
        state.diary.diaryError = action.payload;
        toast.error('Something wrong');
      })
      // CALCULATOR EXTRA REDUCERS
      .addCase(getUserStats.fulfilled, (state, action) => {
        // const stats = action.payload.stats;
        // state.stats = {
        //   height: stats.height,
        //   age: stats.age,
        //   currentWeight: stats.currentWeight,
        //   desiredWeight: stats.desiredWeight,
        //   bloodType: stats.bloodType,
        //   enteredDate: stats.enteredDate,
        //   originalWeight: stats.originalWeight,
        //   dailyRate: stats.dailyRate,
        // };
      })
      .addCase(getUserStats.rejected, (state, action) => {
        // state.stats = {
        //   height: 'n/a',
        //   age: 'n/a',
        //   currentWeight: 'n/a',
        //   desiredWeight: 'n/a',
        //   bloodType: 'n/a',
        //   enteredDate: null,
        //   originalWeight: null,
        // };
      })
      .addCase(searchNotAllowedFood.fulfilled, (state, action) => {
        state.badFoodSearcList = action.payload;
      })
      .addCase(searchNotAllowedFood.rejected, (state, action) => {
        state.badFoodSearcList = [{ _id: 0, title: 'Nothing Found' }];
      })
      .addCase(CalNoEat.pending, state => {
        state.calculator.isRefreshing = true;
      })
      .addCase(CalNoEat.fulfilled, (state, action) => {
        state.calculator.isLoggedIn = true;
        state.calculator.isRefreshing = false;
      })
      .addCase(CalNoEat.rejected, (state, action) => {
        state.calculator.isRefreshing = false;
      })
      .addCase(sendCalculator.pending, state => {
        state.calculator.isRefreshing = true;
      })
      .addCase(sendCalculator.fulfilled, (state, action) => {
        state.calculator.isLoggedIn = true;
        state.calculator.isRefreshing = false;
      })
      .addCase(sendCalculator.rejected, (state, action) => {
        state.calculator.isRefreshing = false;
      })
      .addCase(archiveInfo.pending, state => {
        console.log('archiveInfo.pending')
        state.diary.isLoading = true;

      })
      .addCase(archiveInfo.fulfilled, (state, action) => {
        console.log('archiveInfo.fulfilled')

        state.diary.isLoading = false;
      })
      .addCase(archiveInfo.rejected, (state, action) => {
        console.log('archiveInfo.rejected')

        state.diary.isLoading = false;
        console.log('Error');
        // console.log('Server Error!');
      })
      .addCase(deleteInfo.pending, state => {
        console.log('archiveInfo.pending')
        state.diary.isLoading = true;

      })
      .addCase(deleteInfo.fulfilled, (state, action) => {
        console.log('archiveInfo.fulfilled')

        state.diary.isLoading = false;
      })
      .addCase(deleteInfo.rejected, (state, action) => {
        console.log('archiveInfo.rejected')

        state.diary.isLoading = false;
        console.log('Error');
        // console.log('Server Error!');
      })
      .addCase(deleteAcct.pending, state => {
        console.log('archiveInfo.pending')
        state.diary.isLoading = true;

      })
      .addCase(deleteAcct.fulfilled, (state, action) => {
        console.log('archiveInfo.fulfilled')

        state.diary.isLoading = false;
      })
      .addCase(deleteAcct.rejected, (state, action) => {
        console.log('archiveInfo.rejected')

        state.diary.isLoading = false;
        console.log('Error');
        // console.log('Server Error!');
      })
      .addCase(exportXLS.pending, state => {
        console.log('exportXLS.pending')
        state.diary.isLoading = true;

      })
      .addCase(exportXLS.fulfilled, (state, action) => {
        console.log('exportXLS.fulfilled')

        state.diary.isLoading = false;
      })
      .addCase(exportXLS.rejected, (state, action) => {
        console.log('exportXLS.rejected')

        state.diary.isLoading = false;
        console.log('Error');
        // console.log('Server Error!');
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
