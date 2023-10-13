import dayjs from 'dayjs';
import { createSlice } from '@reduxjs/toolkit';
import {
  getUserInfo,
  getDiaryEntries,
  addDiaryEntry,
  deleteDiaryEntry,
  searchFoods,
  CalNoEat,
  postCalculator,
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
    diaryDailyRate: null,
    diaryList: [],
    allFoodsList: [],
    diaryIsLoading: null,
    diaryError: null,
    filter: null,
    diaryBackBtn: false,
  },
  calculator: {
    height: null,
    age: null,
    currentWeight: null,
    desiredWeight: null,
    bloodType: null,
    heightFeet: null,
    heightInch: null,
    currentWeightLbs: null,
    desiredWeightLbs: null,
    unitOfMeasure: null,
    calculatorDailyRate: null,
    noEat: {},
    calculatorIsLoading: false,
    calculatorError: null,
    startDate: null,
    originalWeight: null,
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
      state.diary.diaryBackBtn = action.payload;
    },
    setDailyRate: (state, action) => {
      state.dailyRate = action.payload;
    },
    // CALCULATOR REDUCERS
    storeCalulator: (state, action) => {
      state.calculator.value = action.payload;
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
        const calculator = action.payload.calculator.closest;
        const calculatorInfo = calculator.calculatorEntries.calculatorEntry;
        const diary = action.payload.diary;
        if (calculatorInfo.unitOfMeasure === "M") {
          state.calculator = {
            ...state.calculator,
            height: calculatorInfo.height,
            age: calculatorInfo.age,
            currentWeight: calculatorInfo.currentWeight,
            desiredWeight: calculatorInfo.desiredWeight,
            bloodType: calculatorInfo.bloodType,
            originalWeight: calculatorInfo.originalWeight,
            calculatorDailyRate: calculatorInfo.dailyRate,
            startDate: calculatorInfo.startDate,
          }
        } else {
          state.calculator = {
            ...state.calculator,
            heightFeet: calculatorInfo.heightFeet,
            heightInch: calculatorInfo.heightInch,
            age: calculatorInfo.age,
            currentWeightLbs: calculatorInfo.currentWeightLbs,
            desiredWeightLbs: calculatorInfo.desiredWeightLbs,
            bloodType: calculatorInfo.bloodType,
            originalWeight: calculatorInfo.originalWeight,
            calculatorDailyRate: calculatorInfo.dailyRate,
            startDate: calculatorInfo.startDate,
          }
        }
        if (diary !== 404) {
          state.diary = {
            ...state.diary,
            diaryDailyRate: diary.dailyRate,
            diaryList: diary.foodItems,
          }
        };
        state.diary.diaryError = null;
        state.diary.diaryIsLoading = false;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.diary.diaryIsLoading = false;
        state.diary.diaryError = action.payload;
      })
      .addCase(getDiaryEntries.pending, state => {
        state.diary.diaryIsLoading = true;
      })
      .addCase(getDiaryEntries.fulfilled, (state, action) => {
        state.diary.diaryList = action.payload.foodItems;
        state.diary.dailyRate = action.payload.dailyRate;
        state.diary.diaryError = null;
        state.diary.diaryIsLoading = false;
      })
      .addCase(getDiaryEntries.rejected, (state, action) => {
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
      .addCase(postCalculator.pending, state => {
        state.calculator.isRefreshing = true;
      })
      .addCase(postCalculator.fulfilled, (state, action) => {
        const calculator = action.payload;
        if (calculator.unitOfMeasure === "M") {
          state.calculator = {
            ...state.calculator,
            height: calculator.height,
            age: calculator.age,
            currentWeight: calculator.currentWeight,
            desiredWeight: calculator.desiredWeight,
            bloodType: calculator.bloodType,
            originalWeight: calculator.originalWeight,
            calculatorDailyRate: calculator.dailyRate,
            startDate: calculator.startDate,
          }
        } else {
          state.calculator = {
            ...state.calculator,
            heightFeet: calculator.heightFeet,
            heightInch: calculator.heightInch,
            age: calculator.age,
            currentWeightLbs: calculator.currentWeightLbs,
            desiredWeightLbs: calculator.desiredWeightLbs,
            bloodType: calculator.bloodType,
            originalWeight: calculator.originalWeight,
            calculatorDailyRate: calculator.dailyRate,
            startDate: calculator.startDate,
          }
        }
        state.calculator.isLoggedIn = true;
        state.calculator.isRefreshing = false;
      })
      .addCase(postCalculator.rejected, (state, action) => {
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
  resetCalcState,
  resetUserState,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
