import React, { useState, useRef } from 'react';
import { Box, FormControl, TextField, Grid } from '@mui/material';
import style from './RegistrationForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../redux/validation/registrationSlice';
import ValidationPopup from '../ValidationPopup/ValidationPopup';
import {
  selectFormIsValid,
  selectIsEmailValid,
  selectIsPasswordValid,
  selectIsNameValid,
} from '../../redux/validation/registrationSelectors';
import { register } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import CustomButton from 'components/CustomButton/CustomButton';
import { postCalculator } from 'redux/user/userOperations';
import { useUser } from 'hooks/useUser';

const RegistrationForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const isEmailValid = useSelector(selectIsEmailValid);
  const isPasswordValid = useSelector(selectIsPasswordValid);
  const isNameValid = useSelector(selectIsNameValid);
  const isFormValid = useSelector(selectFormIsValid);
  const { calculator } = useUser();
  const validationReqs = useSelector(
    state => state.registration.validationReqs
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validationPopups, setValidationPopups] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [focusedField, setFocusedField] = useState(null);
  const toggleValidationPopup = (fieldName, visible) => {
    setValidationPopups({ ...validationPopups, [fieldName]: visible });
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
    });
    dispatch(validateName({ fieldValue: '' }));
    dispatch(validateEmail({ fieldValue: '' }));
    dispatch(validatePassword({ fieldValue: '' }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    switch (name) {
      case 'name':
        dispatch(validateName({ fieldValue: value }));
        break;
      case 'email':
        dispatch(validateEmail({ fieldValue: value.toLowerCase() }));
        break;
      case 'password':
        dispatch(validatePassword({ fieldValue: value }));
        break;
      default:
        break;
    }
    setFocusedField(name);
    toggleValidationPopup(name, true);
  };

  const calculatorInfo = {
    height: calculator.height,
    age: calculator.age,
    bloodType: calculator.bloodType,
    currentWeight: calculator.currentWeight,
    desiredWeight: calculator.desiredWeight,
    heightFeet: calculator.heightFeet,
    heightInch: calculator.heightInch,
    currentWeightLbs: calculator.currentWeightLbs,
    desiredWeightLbs: calculator.desiredWeightLbs,
    dailyRate: calculator.calculatorDailyRate,
    unitOfMeasure: calculator.unitOfMeasure,
    date: calculator.date,
    startDate: calculator.startDate,
    originalWeight: calculator.originalWeight,
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { name, email, password } = formData;
      const senddate = { name, email: email.toLowerCase(), password };
      const registerResultAction = await dispatch(register(senddate));
      if (register.fulfilled.match(registerResultAction)) {
        const postCalculatorResultAction = await dispatch(
          postCalculator(calculatorInfo)
        );
        if (postCalculator.rejected.match(postCalculatorResultAction)) {
          navigate('/calculator');
        } else {
          navigate('/diary');
        }
        resetForm();
      }
    } catch (error) {
      throw new Error('Error registering user: ' + error.message);
    }
  };

  return (
    <Box sx={{ width: '100%' }} className={style.form_container}>
      <h2 className={style.form_title}>REGISTER</h2>
      <Grid className={style.form_grid}>
        <FormControl variant="standard">
          <form onSubmit={handleSubmit} noValidate className={style.form}>
            <TextField
              className={style.name_input}
              autoComplete="name"
              InputLabelProps={
                focusedField === 'name' && !isNameValid
                  ? { style: { color: 'red' } }
                  : { style: { color: '#9B9FAA' } }
              }
              inputProps={{
                onKeyPress: event => {
                  const { key } = event;
                  if (key === 'Enter') {
                    emailRef.current.focus();
                  }
                },
              }}
              variant="standard"
              label={'Name *'}
              type="text"
              name="name"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              error={focusedField === 'name' && !isNameValid}
              //  helperText={focusedField === 'name' && formData.name.length >= 3 ? <span>  {renderValidationPopup()}</span> : null}
              //error={!formData.name && nameValidationReqs.some((req) => !req.met)}
            />
            {focusedField === 'name' && (
              <ValidationPopup
                validationData={validationReqs[focusedField]}
                visible={focusedField}
              />
            )}
            <TextField
              className={style.email_input}
              autoComplete="email"
              InputLabelProps={
                focusedField === 'email' && !isEmailValid
                  ? { style: { color: 'red' } }
                  : { style: { color: '#9B9FAA' } }
              }
              inputRef={emailRef}
              inputProps={{
                onKeyPress: event => {
                  const { key } = event;
                  if (key === 'Enter') {
                    passwordRef.current.focus();
                  }
                },
              }}
              variant="standard"
              label={'Email *'}
              type="email"
              name="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              error={focusedField === 'email' && !isEmailValid}
              //  helperText={focusedField === 'email' && formData.email.length >= 3 ? <span>  {renderValidationPopup()}</span> : null}
              //error={!formData.email && emailValidationReqs.some((req) => !req.met)}
            />
            {focusedField === 'email' && (
              <ValidationPopup
                validationData={validationReqs[focusedField]}
                visible={focusedField}
              />
            )}
            <TextField
              className={style.password_input}
              autoComplete="current-password"
              InputLabelProps={
                focusedField === 'password' && !isPasswordValid
                  ? { style: { color: 'red' } }
                  : { style: { color: '#9B9FAA' } }
              }
              inputRef={passwordRef}
              variant="standard"
              label={'Password *'}
              type="password"
              name="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              error={focusedField === 'password' && !isPasswordValid}
              //  helperText={focusedField === 'password' && formData.password.length >= 3 ? <span>{(renderValidationPopup())}</span> : null}
              //  error={!formData.password}
            />
            {focusedField === 'password' && (
              <ValidationPopup
                validationData={validationReqs[focusedField]}
                visible={focusedField}
              />
            )}
            <Box className={style.button_container}>
              <CustomButton
                type="submit"
                color="orange"
                disabled={!isFormValid}
              >
                Register
              </CustomButton>
            </Box>
          </form>
        </FormControl>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
