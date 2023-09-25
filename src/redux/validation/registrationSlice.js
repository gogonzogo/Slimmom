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
      formData: {
    name: '',
    password: '',
    email: '',
  },
    // add text field check to state
    isEmailValid: false,
    isNameValid: false,
    isPasswordValid: false,
    isFormValid: false,
  },
  reducers: {
    validateEmail: (state, action) => {
      const { fieldValue } = action.payload;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue);
      const domainExtension = fieldValue.split('@')[1]?.split('.')[1];
      const validDomainExtensions = ['com', 'net', 'org', 'edu', 'gov', 'us'];
       const isDomainValid = validDomainExtensions.includes(domainExtension);
      state.validationReqs.email[0].req1.met = isEmailValid;
      state.validationReqs.email[0].req1.met = isDomainValid
      // set text field validation in state
        state.isEmailValid = isEmailValid && isDomainValid;

    },

validateName: (state, action) => {
  const { fieldValue } = action.payload;
  const isNameValid = fieldValue.length >= 3 &&
    fieldValue.length <= 20 &&
    /^[a-zA-Z0-9]+(([a-zA-Z0-9- ])?[a-zA-Z0-9]*)*$/.test(fieldValue); 

  state.validationReqs.name[0].req1.met = fieldValue.length >= 3 &&
    fieldValue.length <= 20;
    state.validationReqs.name[1].req2.met = /^[a-zA-Z0-9]+(([a-zA-Z0-9- ])?[a-zA-Z0-9]*)*$/.test(fieldValue);

  state.isNameValid = isNameValid;
},

validatePassword: (state, action) => {
  const { fieldValue } = action.payload;
  const hasSpecialCharacter = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(fieldValue);


  const isPasswordValid =
    fieldValue.length >= 8 &&
    fieldValue.length <= 20 &&
    /[A-Z]/.test(fieldValue) &&    // At least 1 capital letter
    /\d/.test(fieldValue) &&        // At least 1 number
    hasSpecialCharacter &&          // At least 1 special character
    !/\s/.test(fieldValue);         // No spaces


  state.validationReqs.password[0].req1.met =    fieldValue.length >= 8 &&
    fieldValue.length <= 20;
  state.validationReqs.password[1].req2.met = /[A-Z]/.test(fieldValue);
  state.validationReqs.password[2].req3.met = /\d/.test(fieldValue);
  state.validationReqs.password[3].req4.met = hasSpecialCharacter;
  state.validationReqs.password[4].req5.met = !/\s/.test(fieldValue);

  state.isPasswordValid = isPasswordValid;
    },
    clearValidationReqs: (state, action) => {
    state.validationReqs = registrationSlice.validationReqs;
    },
    clearFormData: (state, action) => {
    state.formData = { name: '', email: '', password: '' };
    },
  },
});

export const { clearValidationReqs, clearFormData, validateEmail, validateName, validatePassword } = registrationSlice.actions;

export default registrationSlice.reducer;