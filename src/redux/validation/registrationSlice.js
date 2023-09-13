import { createSlice } from '@reduxjs/toolkit';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    validationReqs: {
      name: [
        { req1: { id: 1, message: 'Between 3-20 alphanumeric characters', met: false } },
        { req2: { id: 2, message: 'No special characters', met: true } },
      ],
      password: [
        { req1: { id: 1, message: 'Between 8-20 alphanumeric characters', met: false } },
        { req2: { id: 2, message: 'At least 1 capital letter', met: false } },
        { req3: { id: 3, message: 'At least 1 number', met: false } },
        { req4: { id: 4, message: 'At least 1 special character', met: false } },
        { req5: { id: 5, message: 'No spaces', met: true } },
      ],
      email: [
        { req1: { id: 1, message: 'Valid email address', met: false } },
      ],
    },
    // add text field check to state
    isEmailValid: false,
    isNameValid: false,
    isPaswswordValid: false,
  },
  reducers: {
    // Action reducers for validation
    validateEmail: (state, action) => {
      const { fieldValue } = action.payload;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue);
      state.validationReqs.email[0].req1.met = isEmailValid;
      // set text field validation in state
      state.isEmailValid = isEmailValid;
      console.log(state.isEmailValid);
    },

    validateName: (state, action) => {
      const { fieldValue } = action.payload;
      state.validationReqs.name[0].req1.met =
        fieldValue.trim().length >= 3 && fieldValue.trim().length <= 20;
    },

    validatePassword : (state, action) => {
  const { fieldValue } = action.payload;
  const isPasswordValid =
    fieldValue.length >= 8 &&
    fieldValue.length <= 20 &&
    /[A-Z]/.test(fieldValue) &&
    /\d/.test(fieldValue) &&
    !/^\s/.test(fieldValue) && 
    !/\s/.test(fieldValue);

     state.validationReqs.password[0].req1.met = isPasswordValid;
  state.validationReqs.password[1].req2.met = /[A-Z]/.test(fieldValue);
  state.validationReqs.password[2].req3.met = /\d/.test(fieldValue);
  state.validationReqs.password[3].req4.met = !/^\s/.test(fieldValue);
  state.validationReqs.password[4].req5.met = !/\s/.test(fieldValue);
  state.validationReqs.password[4].req5.message = 'No spaces'; // Update the message
      },
    checkFormValidity: (state) => {
      const isNameValid = state.validationReqs.name.every((req) => req.met);
      const isEmailValid = state.validationReqs.email.every((req) => req.met);
      const isPasswordValid = state.validationReqs.password.every((req) => req.met);

      state.isFormValid = isNameValid && isEmailValid && isPasswordValid;
    },
  },
}
);

export const { validateEmail, validateName, validatePassword, checkFormValidity } = registrationSlice.actions;

export default registrationSlice.reducer;
