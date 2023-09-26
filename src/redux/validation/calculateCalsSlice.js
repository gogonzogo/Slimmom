import { createSlice } from '@reduxjs/toolkit';

const calculateCalsSlice = createSlice({
  name: 'calculate',
  initialState: {
    validationReqs: {
      height: [
        { req1: { id: 1, message: 'At least 122cm ', met: false } },
        { req2: { id: 2, message: '214cm and under', met: true } },
      ],
      age: [
        { req1: { id: 1, message: 'At least 18 ', met: false } },
        { req2: { id: 2, message: '80 and under', met: true } },
      ],
     
      currentWeight: [
        { req1: { id: 1, message: 'At least 34kg ', met: false } },
        { req2: { id: 2, message: '181kg and under', met: true } },
      ],
 desiredWeight: [
        { req1: { id: 1, message: 'At least 34kg ', met: false } },
        { req2: { id: 2, message: '181kg and under', met: true } },
      ],

      bloodType: [
        { req1: { id: 1, message: 'Pick a blood type ', met: false } },
      ],
       heightFeet: [
        { req1: { id: 1, message: 'At least 4 feet ', met: false } },
        { req2: { id: 2, message: '7 Feet and under', met: true } },
      ],
      heightInch: [
        { req1: { id: 1, message: '0 Inch or more ', met: true } },
        { req2: { id: 2, message: '11 inches or less', met: true } },
      ],
      currentWeightLbs: [
        { req1: { id: 1, message: 'At least 75 Lbs ', met: false } },
        { req2: { id: 2, message: '400 Lbs and under', met: true } },
      ],
      desiredWeightLbs: [
        { req1: { id: 1, message: 'At least 75 Lbs ', met: false } },
        { req2: { id: 2, message: '400 Lbs and under', met: true } },
      ],
    },
    // add text field check to state
    isHeightValid: false,
    isAgeValid: false,
    isCurrentValid: false,
    isDesiredValid: false,
    isBloodValid: false,
    isHeightFeetValid: false,
    isHeightInchValid: true,
    isCurrentLbsValid: false,
    isDesiredLbsValidLbs: false,
  },
  reducers: {
    validateHeight: (state, action) => {
      const { fieldValue } = action.payload;
      const isHeightValid = parseInt(fieldValue) >= 122 && parseInt(fieldValue) <= 214
      state.validationReqs.height[0].req1.met = parseInt(fieldValue) >= 122;
      state.validationReqs.height[1].req2.met = parseInt(fieldValue) <= 214;
      state.isHeightValid = isHeightValid;
    },

validateHeightFeet: (state, action) => {
      const { fieldValue } = action.payload;
  const isHeightFeetValid = parseInt(fieldValue) >= 4 && parseInt(fieldValue) <= 7
      state.validationReqs.heightFeet[0].req1.met = parseInt(fieldValue) >= 4;
      state.validationReqs.heightFeet[1].req2.met = parseInt(fieldValue) <= 7;
      state.isHeightFeetValid = isHeightFeetValid;
    },
  validateHeightInch: (state, action) => {
    const { fieldValue } = action.payload;
    const isHeightInchValid = (parseInt(fieldValue) >= 0 && parseInt(fieldValue) <= 11);

    state.validationReqs.heightInch[0].req1.met = parseInt(fieldValue) >= 0;
      state.validationReqs.heightInch[1].req2.met = parseInt(fieldValue) <= 11;
      state.isHeightInchValid = isHeightInchValid;
    },  
validateAge: (state, action) => {
  const { fieldValue } = action.payload;
  const isAgeValid = parseInt(fieldValue) >= 18 && parseInt(fieldValue) <= 80

      state.validationReqs.age[0].req1.met = parseInt(fieldValue) >= 18;
      state.validationReqs.age[1].req2.met = parseInt(fieldValue) <= 80;

  state.isAgeValid = isAgeValid;
    },

   validateCurrent: (state, action) => {
            const { fieldValue } = action.payload;
const isCurrentValid = parseInt(fieldValue) >= 34 && parseInt(fieldValue) <= 181

      state.validationReqs.currentWeight[0].req1.met = parseInt(fieldValue) >= 34;
      state.validationReqs.currentWeight[1].req2.met = parseInt(fieldValue) <= 181;
      state.isCurrentValid = isCurrentValid;
    },
   
   validateCurrentLbs: (state, action) => {
            const { fieldValue } = action.payload;
     const isCurrentLbsValid = parseInt(fieldValue) >= 75 && parseInt(fieldValue) <= 400

      state.validationReqs.currentWeightLbs[0].req1.met = parseInt(fieldValue) >= 75;
      state.validationReqs.currentWeightLbs[1].req2.met = parseInt(fieldValue) <= 400;
      state.isCurrentLbsValid = isCurrentLbsValid;
    },

    validateDesired: (state, action) => {
      const { fieldValue } = action.payload;
      
        const isDesiredValid = parseInt(fieldValue) >= 34 && parseInt(fieldValue) <= 181
      state.validationReqs.desiredWeight[0].req1.met = parseInt(fieldValue) >= 34;
      state.validationReqs.desiredWeight[1].req2.met = parseInt(fieldValue) <= 181;
      state.isDesiredValid = isDesiredValid;
    },
validateDesiredLbs: (state, action) => {
      const { fieldValue } = action.payload;
      
        const isDesiredLbsValid = parseInt(fieldValue) >= 75 && parseInt(fieldValue) <= 400

  state.validationReqs.desiredWeightLbs[0].req1.met = parseInt(fieldValue) >= 75;
      state.validationReqs.desiredWeightLbs[1].req2.met = parseInt(fieldValue) <= 400;
      state.isDesiredLbsValid = isDesiredLbsValid;
    },

    validateBlood: (state, action) => {
            const { fieldValue } = action.payload;
      const isBloodValid = (fieldValue === 'A' || fieldValue === 'B' || fieldValue === 'AB' || fieldValue === 'O')
      state.validationReqs.bloodType[0].req1.met = isBloodValid;
      state.isBloodValid = isBloodValid;
    }

  },
});

export const { validateHeight, validateAge, validateCurrent, validateDesired, validateBlood, validateHeightFeet, validateHeightInch, validateCurrentLbs, validateDesiredLbs,   } = calculateCalsSlice.actions;

export default calculateCalsSlice.reducer;