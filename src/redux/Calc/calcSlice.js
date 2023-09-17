import { createSlice } from "@reduxjs/toolkit";

export const calculateSlice = createSlice({
    name: "calCalories",
    initialState: { value: { height: '', age: '', currentWeight: '', desiredWeight: '', bloodType: '' } },
    reducers: {
        storeCalulator: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { storeCalulator } = calculateSlice.actions
export default calculateSlice.reducer
