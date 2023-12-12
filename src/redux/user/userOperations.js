import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (date, { rejectWithValue }) => {
    try {
      const response = await axios.get('/user/info/day', {
        params: { date: date },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// DIARY OPERATIONS
export const getDiaryEntries = createAsyncThunk(
  'diary/getDiaryEntries',
  async (date, { rejectWithValue }) => {
    const formatDate = date.replaceAll("/", "-")
    try {
      const response = await axios.post('/diary/day', { date: formatDate, });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDiaryEntry = createAsyncThunk(
  'diary/add',
  async (data, { rejectWithValue }) => {
    const newDiaryEntry = {
      date: data.calendarDate.replaceAll("/", "-"),
      title: data.productName,
      weight: data.grams,
      calories: data.calories,
    };
    try {
      const response = await axios.post('/diary/add', newDiaryEntry);
      const newEntry = response.data.data.newEntry;
      const dailyRate = response.data.data.dailyRate;
      return {
        newEntry,
        dailyRate,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryEntry = createAsyncThunk(
  'diary/delete',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `/diary/delete/${JSON.stringify(data)}`
      );
      return response.data.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchFoods = createAsyncThunk(
  'diary/updateDiary',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/diary/allFoods/search/${data}`
      );
      return response.data.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.clear();
      }
      toast.error(error.response.data.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const searchNotAllowedFood = createAsyncThunk(
  'calcCalories/searchBadFood',
  async (data, { rejectWithValue }) => {
    const newBloodType = data.bloodType === 'n/a' ? '' : data.bloodType;
    try {
      const response = await axios.get(
        `badFood?title=${data.title}&bloodType=${newBloodType}`
      );
      return response.data.data;
    } catch (err) {
      if (err.response && err.response.status === 404) {
        console.clear();
        toast.error(`No foods found for ${data.title}`);

      }

      return rejectWithValue(err.message);
    }
  }
);

export const getDailyRate = createAsyncThunk(
  'calculator/calsNotFood',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/dailyRate/', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const postCalculator = createAsyncThunk(
  'calculator/postCalculator',
  async (calculator, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/calculator/', calculator);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const archiveInfo = createAsyncThunk(
  'diary/archivedata',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/user/archive/`, credentials
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const getArchive = createAsyncThunk(
  'diary/getarchivedata',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/user/getarchive/`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getArchiveDateinfo = createAsyncThunk(
  'diary/getarchiveFromDate',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/user/getarchiveDate/`, credentials
      );


      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteInfo = createAsyncThunk(
  'diary/deletediary',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/user/deleteDiary/`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteAcct = createAsyncThunk(
  'diary/deleteAccount',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/user/deleteAccount/`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const restoreDairyArchive = createAsyncThunk(
  'diary/restoreArchive',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/user/restoreArchive/`, credentials
      );


      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getGraphData = createAsyncThunk(
  'diary/getGraphData',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/user/graph/`, credentials
      );

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);