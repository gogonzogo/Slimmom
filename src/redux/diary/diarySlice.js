import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  diary: {
    productName: '',
    grams: '',
    calories: '',
  },
  isLoading: false,
  error: null,
}

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    updateDiary: (state, action) => {
      state.diary = action.payload;
      console.log(action.payload)
      console.log(state.diary)
    }
  },
  extraReducers: builder => {
    // builder.addcase()
      
  }
})

export const { updateDiary } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;