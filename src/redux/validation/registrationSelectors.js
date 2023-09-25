import { createSelector } from 'reselect';

// Select the registration slice from the Redux store
const selectRegistration = (state) => state.registration;

// Select individual validation requirements
export const selectNameValidationReqs = createSelector(
  [selectRegistration],
  (registration) => registration.validationReqs.name
);

export const selectEmailValidationReqs = createSelector(
  [selectRegistration],
  (registration) => registration.validationReqs.email
);

export const selectPasswordValidationReqs = createSelector(
  [selectRegistration],
  (registration) => registration.validationReqs.password
);

// Select individual field validation states - this works then?
export const selectIsNameValid = createSelector(
  [selectRegistration],
  (registration) => registration.isNameValid 
);

export const selectIsEmailValid = createSelector(
  [selectRegistration],
  (registration) => registration.isEmailValid 
);

export const selectIsPasswordValid = createSelector(
  [selectRegistration],
  (registration) => registration.isPasswordValid 
);

// Select the overall form validity
export const selectFormIsValid = createSelector(
  [selectIsNameValid, selectIsEmailValid, selectIsPasswordValid],
  (isNameValid, isEmailValid, isPasswordValid) =>
    isNameValid && isEmailValid && isPasswordValid
);