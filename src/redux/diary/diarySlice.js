import { createSlice } from '@reduxjs/toolkit';
import { fetchDiary, addDiaryEntry, deleteDiaryEntry, updateDiaryEntry } from './diaryOperations';

const initialState = {
  diary: {
    calDate: '',
    diaryList: [],
  },
  isLoading: false,
  error: null,
  filter: '',
}

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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDiary.pending, state => {
        state.diary.isLoading = true;
      })
      .addCase(fetchDiary.fulfilled, (state, action) => {
        state.diary.diaryList = action.payload;
        state.diary.error = null;
        state.diary.isLoading = false;
        console.log(action.payload)
      })
      .addCase(fetchDiary.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        state.diary.diaryList = [];
        console.log(action.payload);
      })
      .addCase(addDiaryEntry.pending, state => {
        state.diary.isLoading = true;
      })
      .addCase(addDiaryEntry.fulfilled, state => {
        state.diary.isLoading = false;
        state.diary.error = null;
      })
      .addCase(addDiaryEntry.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        console.log('Server Error!');
      })
      .addCase(updateDiaryEntry.pending, (state) => {
        state.diary.isLoading = true;
      })
      .addCase(updateDiaryEntry.fulfilled, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = null;
      })
      .addCase(updateDiaryEntry.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        console.log('Server Error!');
      })
      .addCase(deleteDiaryEntry.pending, (state) => {
        state.diary.isLoading = true;
      })
      .addCase(deleteDiaryEntry.fulfilled, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = null;
      })
      .addCase(deleteDiaryEntry.rejected, (state, action) => {
        state.diary.isLoading = false;
        state.diary.error = action.payload;
        console.log('Server Error!');
      })
  }
})

export const { setCalDate, setDiaryList } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;