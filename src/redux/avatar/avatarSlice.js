import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    avatarData: null
};

const avatarSlice = createSlice({
    name: 'avatar',
    initialState,
    reducers: {
        setAvatarData: (state, action) => {
            state.avatarData = action.payload;
        },
        resetAvatarState: state => initialState,
    }
});

export const { setAvatarData, resetAvatarState } = avatarSlice.actions;
export const avatarReducer = avatarSlice.reducer;