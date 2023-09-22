import { createSlice } from '@reduxjs/toolkit';
import { fetchDaySummary, getUserStats, CalNoEat  } from './calcOperations';


export const calculateSlice = createSlice({
  name: 'calCalories',
  initialState: {
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
      })
     .addCase(CalNoEat.pending, state => {
            state.cals.isRefreshing = true;
          })
          .addCase(CalNoEat.fulfilled, (state, action) => {
            state.cals.isLoggedIn = true;
            state.cals.isRefreshing = false;
            console.log('Success! You are registered');
          })
          .addCase(CalNoEat.rejected, (state, action) => {
            state.cals.isRefreshing = false;
              console.log('Error');
           
          })
  },
});

export const { storeCalulator, setStats } = calculateSlice.actions;
export default calculateSlice.reducer;
