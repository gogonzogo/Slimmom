import React, { useState, useRef,  } from 'react';
import { Link } from 'react-router-dom';
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
import { getUserStats } from 'redux/Calc/calcOperations';
//import { useAuthStore } from 'hooks/useAuth';
import { CalNoEat, sendCalculator } from '../../redux/Calc/calcOperations';

const RegistrationForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
     
  const returnedCal = useSelector(state => state.calCalories.cals.value);
  const [calculatorFormData] = useState({
    height: returnedCal.height,
    age: returnedCal.age,
    currentWeight: returnedCal.currentWeight,
    desiredWeight: returnedCal.desiredWeight,
    bloodType: returnedCal.bloodType,
    heightFeet: returnedCal.heightFeet,
    heightInch: returnedCal.heightInch,
    currentWeightLbs: returnedCal.currentWeightLbs,
    desiredWeightLbs: returnedCal.desiredWeightLbs,
  });

  //const { loggedIn, user, refreshing, error, token } = useAuthStore();
  const isEmailValid = useSelector(selectIsEmailValid);
  const isPasswordValid = useSelector(selectIsPasswordValid);
  const isNameValid = useSelector(selectIsNameValid);
  const isFormValid = useSelector(selectFormIsValid);
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
    dispatch(validateName({ fieldValue: "" }));
    dispatch(validateEmail({ fieldValue: "" }));
    dispatch(validatePassword({ fieldValue: "" }));


  };

  const createCalculator = async () => {
   const  {currentWeight, height, age, desiredWeight, bloodType} = calculatorFormData
    const entedInfo = {
      currentWeight,
      height,
      age,
      desiredWeight,
      bloodType,
    };
    try {
      const response = await dispatch(CalNoEat(entedInfo));
      const passinfo = response.payload.data;
        let convertBlood = 0
      switch (bloodType) {
        case 'A':
          convertBlood = 1;
          break;
        case 'B':
          convertBlood = 2;
          break;
        case 'AB':
          convertBlood = 3;
          break;
        case 'O':
          convertBlood = 4;
          break;
        default:
          convertBlood = 1;
          break;
      }
      
        const mestype = 'M';
      const CalculatorInfo = {
        height,
        age,
        bloodType: convertBlood,
        currentWeight,
        desiredWeight,
        totalCalories: passinfo.totalCalories,
        measurementType: mestype,
        originalDate: new Date(),
        enteredDate: new Date(),
      }
        const Calcresponse = await dispatch(sendCalculator(CalculatorInfo));
        console.log(Calcresponse)
      
    } catch (error) {
      console.error('returned Error', error.message);
    };
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    switch (
      name // dispatches validation reducers from the slice on change
    ) {
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

  const handleSubmit = async e => {    
    e.preventDefault();
    const { name, email, password } = formData;
    const senddate = { name, email: email.toLowerCase(), password };
    const response = await dispatch(register(senddate));

    if (response.payload.code === 201) {
const  {currentWeight, height, age, desiredWeight, bloodType} = calculatorFormData
      if (currentWeight.length > 0 && height.length > 0 && age.length > 0 && desiredWeight.length > 0 && bloodType.length > 0) {
  await createCalculator()
}
      resetForm();
      dispatch(getUserStats());
      navigate('/calculator');
    }
  };

  // const renderValidationPopup = () => {
  //   return (
  //     <ValidationPopup
  //       validationData={validationReqs[focusedField]}
  //       visible={!!focusedField}
  //     />
  //   );
  // };

  return (
    <Box sx={{ width: '100%' }} className={style.form_container}>
      <h2 className={style.form_title}>REGISTER</h2>
      <Grid className={style.form_grid}>
        <FormControl variant="standard">
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              className={style.name_input}
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
              <CustomButton color="orange" disabled={!isFormValid}>
                Register
              </CustomButton>
              <Link to="/Login">
                <CustomButton color="white">Log In</CustomButton>
              </Link>
            </Box>
          </form>
        </FormControl>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
