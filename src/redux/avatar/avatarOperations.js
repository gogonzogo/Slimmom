import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAvatarData } from "./avatarSlice";
import generateAvatarCode from "./avatarUtils";

const generateDefaultAvatarCode = createAsyncThunk(
    'avatar/generateDefaultAvatar',
    async (email, { dispatch }) => {
        const avatarSvgCode = generateAvatarCode(email);
        dispatch(setAvatarData(avatarSvgCode));
    }
);

export default generateDefaultAvatarCode;