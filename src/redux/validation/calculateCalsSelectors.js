import { createSelector } from 'reselect';

const selectCalculation = (state) => state.calculate;

export const selectAgeValidationReqs = createSelector(
  [selectCalculation],
  (calculate) => calculate.validationReqs.age
);

export const selectCurrentValidationReqs = createSelector(
  [selectCalculation],
  (calculate) => calculate.validationReqs.currentWeight
);

export const selectDesiredValidationReqs = createSelector(
  [selectCalculation],
  (calculate) => calculate.validationReqs.desiredWeight
);

export const selectHeightValidationReqs = createSelector(
  [selectCalculation],
  (calculate) => calculate.validationReqs.height
);

export const selectHBloodReqs = createSelector(
  [selectCalculation],
  (calculate) => calculate.validationReqs.blood
);

export const selectHeightFeetValidationReqs = createSelector(
  [selectCalculation],
  (calculate) => calculate.validationReqs.heightFeet
);

export const selectHeightInchValidationReqs = createSelector(
  [selectCalculation],
  (calculate) => calculate.validationReqs.heightInch
);

export const selectCurrentLbsValidationReqs = createSelector(
  [selectCalculation],
  (calculate) => calculate.validationReqs.currentWeightLbs
);

export const selectDesiredLbsValidationReqs = createSelector(
  [selectCalculation],
  (calculate) => calculate.validationReqs.desiredWeightLbs
);



export const selectAgeValid = createSelector(
  [selectCalculation],
  (calculate) => calculate.isAgeValid
);


export const selectIsHeightValid = createSelector(
  [selectCalculation],
  (calculate) => calculate.IsHeightValid
);



export const selectCurrentValid = createSelector(
  [selectCalculation],
  (calculate) => calculate.isCurrentValid
);
export const selectDesiredValid = createSelector(
  [selectCalculation],
  (calculate) => calculate.isDesiredValid
);

export const selectBloodValid = createSelector(
  [selectCalculation],
  (calculate) => calculate.isBloodValid
);

export const selectFormIsValid = createSelector(
    [selectIsHeightValid, selectAgeValid, selectCurrentValid, selectDesiredValid, selectBloodValid],
  ( isHeightValid,isAgeValid, isCurrentValid, isDesiredValid, isBloodValid ) =>
     isHeightValid && isAgeValid && isCurrentValid && isDesiredValid && isBloodValid
);

