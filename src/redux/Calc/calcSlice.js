import { createSlice } from '@reduxjs/toolkit';
import {
  getUserStats,
  CalNoEat,
  sendCalculator,
  searchNotAllowedFood,
} from './calcOperations';

const initialState = {
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
export const calculateSlice = createSlice({
  name: 'calCalories',
  initialState,
  reducers: {
    storeCalulator: (state, action) => {
      state.cals.value = action.payload;
    },
    setStats: (state, action) => {
      state.stats = action.payload;
    },
    resetCalcState: state => initialState,
  },
  extraReducers: builder => {
    builder
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
        console.log('Error');
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
        console.log('Error');
      });
  },
});

export const { storeCalulator, setStats, resetCalcState } =
  calculateSlice.actions;

export default calculateSlice.reducer;
