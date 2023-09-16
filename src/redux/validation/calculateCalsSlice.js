import { createSlice } from '@reduxjs/toolkit';

const calculateCalsSlice = createSlice({
  name: 'calculate',
  initialState: {
    validationReqs: {
      height: [
        { req1: { id: 1, message: 'At lease 122cm ', met: false } },
        { req2: { id: 2, message: '214cm and under', met: true } },
      ],
      age: [
        { req1: { id: 1, message: 'At lease 18 ', met: false } },
        { req2: { id: 2, message: '80 and under', met: true } },
      ],
     
      currentWeight: [
        { req1: { id: 1, message: 'At lease 35kg ', met: false } },
        { req2: { id: 2, message: '181kg and under', met: true } },
      ],
 desiredWeight: [
        { req1: { id: 1, message: 'At lease 35kg ', met: false } },
        { req2: { id: 2, message: '181kg and under', met: true } },
      ],

      bloodType: [
        { req1: { id: 1, message: 'Pick a blood type ', met: false } },
      ]
    },
    // add text field check to state
    isHeightValid: false,
    isAgeValid: false,
    isCurrentValid: false,
    isDesiredValid: false,
    isBloodValid: false,
  },
  reducers: {
    validateHeight: (state, action) => {
      const { fieldValue } = action.payload;
      const isHeightValid = parseInt(fieldValue) >= 122 && parseInt(fieldValue) <= 214
      console.log('isHeightValid', isHeightValid)
      state.validationReqs.height[0].req1.met = parseInt(fieldValue) >= 122;
      state.validationReqs.height[1].req2.met = parseInt(fieldValue) <= 214;
      state.isHeightValid = isHeightValid;
    },

validateAge: (state, action) => {
            const { fieldValue } = action.payload;
  const isAgeValid = parseInt(fieldValue) >= 18 && parseInt(fieldValue) <= 80
        console.log('isAgeValid', isAgeValid)

      state.validationReqs.age[0].req1.met = parseInt(fieldValue) >= 18;
      state.validationReqs.age[1].req2.met = parseInt(fieldValue) >= 80;

  state.isAgeValid = isAgeValid;
    },

   validateCurrent: (state, action) => {
            const { fieldValue } = action.payload;
const isCurrentValid = parseInt(fieldValue) >= 34 && parseInt(fieldValue) <= 181
        console.log('isCurrentValid', isCurrentValid)

      state.validationReqs.currentWeight[0].req1.met = parseInt(fieldValue) >= 34;
      state.validationReqs.currentWeight[1].req2.met = parseInt(fieldValue) <= 181;
      state.isCurrentValid = isCurrentValid;
    },

    validateDesired: (state, action) => {
      const { fieldValue } = action.payload;
      
        const isDesiredValid = parseInt(fieldValue) >= 34 && parseInt(fieldValue) <= 181
        console.log('isDesiredValid', isDesiredValid)
      state.validationReqs.desiredWeight[0].req1.met = parseInt(fieldValue) >= 34;
      state.validationReqs.desiredWeight[1].req2.met = parseInt(fieldValue) <= 181;
      state.isDesiredValid = isDesiredValid;
    },
    validateBlood: (state, action) => {
            const { fieldValue } = action.payload;
      const isBloodValid = (fieldValue === 'A' || fieldValue === 'B' || fieldValue === 'AB' || fieldValue === 'O')
       console.log('isBloodValid', isBloodValid)
      state.validationReqs.bloodType[0].req1.met = isBloodValid;
      state.isBloodValid = isBloodValid;
    }





  },
});

export const { validateHeight, validateAge,validateCurrent, validateDesired, validateBlood   } = calculateCalsSlice.actions;

export default calculateCalsSlice.reducer;