import dayjs from 'dayjs';
import { createSlice } from '@reduxjs/toolkit';
import {
  getUserInfo,
  getDiaryEntries,
  addDiaryEntry,
  deleteDiaryEntry,
  searchFoods,
  getDailyRate,
  postCalculator,
  searchNotAllowedFood,
  archiveInfo,
  deleteInfo,
  deleteAcct,
  getArchive,
  restoreDairyArchive,
  getGraphData

} from './userOperations';
import { Slide, toast } from 'react-toastify';

const initialState = {
  diary: {
    calendarDate: dayjs().format('MM-DD-YYYY'),
    diaryDailyRate: null,
    diaryList: [],
    allFoodsSearchList: [],
    diaryIsLoading: false,
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
    date: null,
    bloodTypesMetric: [0, 1, 2, 3, 4],
    bloodTypesStandard: [0, 'A', 'B', 'AB', 'O'],
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
    clearAllFoodsSearchList: (state, action) => {
      state.diary.allFoodsSearchList = [];
    },
    setDiaryBackBtn: (state, action) => {
      state.diary.diaryBackBtn = action.payload;
    },
    setDailyRate: (state, action) => {
      state.dailyRate = action.payload;
    },
    // CALCULATOR REDUCERS
    storeCalulator: (state, action) => {
      if (action.payload.unitOfMeasure === "M") {
        state.calculator = {
          ...state.calculator,
          height: action.payload.height,
          age: action.payload.age,
          currentWeight: action.payload.currentWeight,
          desiredWeight: action.payload.desiredWeight,
          bloodType: action.payload.bloodType,
          originalWeight: action.payload.originalWeight,
          calculatorDailyRate: action.payload.dailyRate,
          startDate: action.payload.startDate,
          unitOfMeasure: action.payload.unitOfMeasure,
          date: action.payload.date,
        }
      } else {
        state.calculator = {
          ...state.calculator,
          heightFeet: action.payload.heightFeet,
          heightInch: action.payload.heightInch,
          age: action.payload.age,
          currentWeightLbs: action.payload.currentWeightLbs,
          desiredWeightLbs: action.payload.desiredWeightLbs,
          bloodType: action.payload.bloodType,
          originalWeight: action.payload.originalWeight,
          calculatorDailyRate: action.payload.dailyRate,
          startDate: action.payload.startDate,
          unitOfMeasure: action.payload.unitOfMeasure,
          date: action.payload.date,
        }
      }
    },
    clearCalculator: (state, action) => {
      state.calculator = {
        ...state.calculator,
        height: null,
        age: null,
        currentWeight: null,
        desiredWeight: null,
        bloodType: null,
        originalWeight: null,
        calculatorDailyRate: null,
        startDate: null,
        unitOfMeasure: null,
        date: null,
        heightFeet: null,
        heightInch: null,
        currentWeightLbs: null,
        desiredWeightLbs: null,
      }
    },
    resetCalcState: state => { state.calculator = initialState },
    resetUserState: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getUserInfo.pending, state => {
        state.diary.diaryIsLoading = true;
        state.calculator.calculatorIsLoading = true;
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
            unitOfMeasure: calculatorInfo.unitOfMeasure,
            calculatorIsLoading: false,
            calculatorErro: null,
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
            unitOfMeasure: calculatorInfo.unitOfMeasure,
            calculatorIsLoading: false,
            calculatorErro: null,
          }
        }
        if (calculator === 404) {
          state.calculator.calculatorIsLoading = false;
          state.calculator.calculatorError = null;
        }
        if (diary !== 404) {
          state.diary = {
            ...state.diary,
            diaryDailyRate: diary.dailyRate,
            diaryList: diary.foodItems,
            diaryError: null,
            diaryIsLoading: false,
          }
        } else {
          state.diary.diaryError = null;
          state.diary.diaryIsLoading = false;
        };
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.diary.diaryError = true;
        state.calculator.calculatorError = true;
        state.diary.diaryIsLoading = false;
        state.calculator.calculatorIsLoading = false;
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
        state.diary.diaryError = true;
        state.diary.diaryList = [];
      })
      .addCase(addDiaryEntry.pending, state => {
        state.diary.diaryIsLoading = true;
      })
      .addCase(addDiaryEntry.fulfilled, (state, action) => {
        state.diary.diaryList = [...state.diary.diaryList, action.payload.newEntry];
        if (action.payload.dailyRate)
          state.diary.dailyRate = action.payload.dailyRate;
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
        state.diary.diaryError = true;
        toast.error('Something wrong');
      })
      .addCase(searchFoods.pending, state => {
        state.diary.diaryIsLoading = true;
      })
      .addCase(searchFoods.fulfilled, (state, action) => {
        state.diary.allFoodsSearchList = action.payload;
        state.diary.diaryIsLoading = false;
        state.diary.diaryError = null;
      })
      .addCase(searchFoods.rejected, (state, action) => {
        state.diary.diaryIsLoading = false;
        state.diary.diaryError = true;
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
        state.diary.diaryError = true;
        toast.error('Something wrong');
      })
      // CALCULATOR EXTRA REDUCERS
      .addCase(searchNotAllowedFood.fulfilled, (state, action) => {
        state.badFoodSearcList = action.payload;
      })
      .addCase(searchNotAllowedFood.rejected, (state, action) => {
        state.badFoodSearcList = [{ _id: 0, title: 'Nothing Found' }];
        state.calculator.calculatorError = true;
      })
      .addCase(getDailyRate.pending, state => {
        state.calculator.calculatorIsLoading = true;
      })
      .addCase(getDailyRate.fulfilled, (state, action) => {
        state.calculator.calculatorIsLoading = false;
        state.calculator.calculatorError = true;
      })
      .addCase(getDailyRate.rejected, (state, action) => {
        state.calculator.calculatorIsLoading = false;
        state.calculator.calculatorError = true;
      })
      .addCase(postCalculator.pending, state => {
        state.calculator.calculatorIsLoading = true;
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
            unitOfMeasure: calculator.unitOfMeasure,
            heightFeet: null,
            heightInch: null,
            currentWeightLbs: null,
            desiredWeightLbs: null,
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
            unitOfMeasure: calculator.unitOfMeasure,
            height: null,
            currentWeight: null,
            desiredWeight: null,
          }
        }
        state.calculator.calculatorIsLoading = false;
        state.calculator.calculatorError = null;
      })
      .addCase(postCalculator.rejected, (state, action) => {
        const calculator = action.payload;
        if (calculator.unitOfMeasure === "M") {
          state.calculator = {
            ...state.calculator,
            height: null,
            age: null,
            currentWeight: null,
            desiredWeight: null,
            bloodType: null,
            originalWeight: null,
            calculatorDailyRate: null,
            startDate: null,
          }
        } else {
          state.calculator = {
            ...state.calculator,
            heightFeet: null,
            heightInch: null,
            age: null,
            currentWeightLbs: null,
            desiredWeightLbs: null,
            bloodType: null,
            originalWeight: null,
            calculatorDailyRate: null,
            startDate: null,
          }
        }
        state.calculator.calculatorIsLoading = false;
        state.calculator.calculatorError = true;
      })
      .addCase(archiveInfo.pending, state => {
        state.diary.isLoading = true;

      })
      .addCase(archiveInfo.fulfilled, (state, action) => {

        state.diary.isLoading = false;
      })
      .addCase(archiveInfo.rejected, (state, action) => {

        state.diary.isLoading = false;
        console.log('Error');
      })
      .addCase(deleteInfo.pending, state => {
        state.diary.isLoading = true;

      })
      .addCase(deleteInfo.fulfilled, (state, action) => {
        state.diary.isLoading = false;
      })
      .addCase(deleteInfo.rejected, (state, action) => {
        state.diary.isLoading = false;
        console.log('Error');
      })
      .addCase(deleteAcct.pending, state => {
        state.diary.isLoading = true;

      })
      .addCase(deleteAcct.fulfilled, (state, action) => {
        state.diary.isLoading = false;
      })
      .addCase(deleteAcct.rejected, (state, action) => {
        state.diary.isLoading = false;
        console.log('Error');
      })

      .addCase(getArchive.pending, state => {
        state.diary.isLoading = true;

      })
      .addCase(getArchive.fulfilled, (state, action) => {

        state.diary.isLoading = false;
      })
      .addCase(getArchive.rejected, (state, action) => {

        state.diary.isLoading = false;
        console.log('Error');
      })
      .addCase(restoreDairyArchive.pending, state => {
        state.diary.isLoading = true;

      })
      .addCase(restoreDairyArchive.fulfilled, (state, action) => {

        state.diary.isLoading = false;
      })
      .addCase(restoreDairyArchive.rejected, (state, action) => {

        state.diary.isLoading = false;
        console.log('Error');
      })
      .addCase(getGraphData.pending, state => {
        state.diary.isLoading = true;

      })
      .addCase(getGraphData.fulfilled, (state, action) => {
        state.diary.isLoading = false;
      })
      .addCase(getGraphData.rejected, (state, action) => {

        state.diary.isLoading = false;
        console.log('Error');
      })
  },
});

export const {
  setCalDate,
  setDiaryList,
  clearAllFoodsSearchList,
  setDiaryBackBtn,
  resetDiaryState,
  storeCalulator,
  resetCalcState,
  resetUserState,
  clearCalculator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
