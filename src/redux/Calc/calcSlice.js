import { createSlice } from '@reduxjs/toolkit';
import { fetchDaySummary, getUserStats } from './calcOperations';

export const calculateSlice = createSlice({
  name: 'calCalories',
  initialState: {
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
    stats: {
      height: null,
      age: null,
      currentWeight: null,
      desiredWeight: null,
      bloodType: '',
    },
  },
  reducers: {
    storeCalulator: (state, action) => {
      state.value = action.payload;
    },
    setStats: (state, action) => {
      state.stats = action.payload;
    },
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
        };
      })
      .addCase(fetchDaySummary.fulfilled, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const { storeCalulator, setStats } = calculateSlice.actions;
export default calculateSlice.reducer;
