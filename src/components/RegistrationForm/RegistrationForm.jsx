import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, FormControl, TextField, Grid } from '@mui/material';
import style from './RegistrationForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { validateEmail, validateName, validatePassword } from '../../redux/validation/registrationSlice';
import ValidationPopup from '../ValidationPopup/ValidationPopup';
import { selectFormIsValid, selectIsNameValid, selectIsEmailValid, selectIsPasswordValid } from '../../redux/validation/registrationSelectors';
import { register } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import CustomButton from 'components/Button/Button';

const RegistrationForm = () => {
  const isFormValid = useSelector(selectFormIsValid);
  const isEmailValid = useSelector(selectIsEmailValid);
  const isPasswordValid = useSelector(selectIsPasswordValid);
  const isNameValid = useSelector(selectIsNameValid);
  const validationReqs = useSelector((state) => state.registration.validationReqs);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State variables to track whether each field is in focus or not
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(register(formData));
    if (response.payload.code === 201) {
      resetForm();
      navigate('/calculator');
    }
  };

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });

    switch (name) {
    case 'name':
      dispatch(validateName({ fieldValue: value }));
      setIsNameFocused(true); // Always set the field as focused when changing
      break;
    case 'email':
      dispatch(validateEmail({ fieldValue: value }));
      setIsEmailFocused(true);
      break;
    case 'password':
      dispatch(validatePassword({ fieldValue: value }));
      setIsPasswordFocused(true);
      break;
    default:
      break;
  }
};

const handleBlur = (fieldName) => {
  // Validate the field's value and set the error state accordingly
  switch (fieldName) {
    case 'name':
      dispatch(validateName({ fieldValue: formData.name }));
      setIsNameFocused(false); // The field is no longer focused
      break;
    case 'email':
      dispatch(validateEmail({ fieldValue: formData.email }));
      setIsEmailFocused(false);
      break;
    case 'password':
      dispatch(validatePassword({ fieldValue: formData.password }));
      setIsPasswordFocused(false);
      break;
    default:
      break;
  }
};

  const handleFocus = (fieldName) => {
    // Set the respective field's focus state to true when the user clicks on it
    if (fieldName === 'name') {
      setIsNameFocused(true);
    } else if (fieldName === 'email') {
      setIsEmailFocused(true);
    } else if (fieldName === 'password') {
      setIsPasswordFocused(true);
    }
  };

  const renderValidationPopup = (fieldName) => {
    // Show the validation popup only if the field is focused or if there's an error
    if ((fieldName === 'name' && isNameFocused) || (fieldName === 'email' && isEmailFocused) || (fieldName === 'password' && isPasswordFocused)) {
      return (
        <ValidationPopup
          validationData={validationReqs[fieldName]}
          visible={true}
        />
      );
    }
    return null;
  };

  return (
    <Box sx={{ width: '100%' }} className={style.form_container}>
      <h2 className={style.form_title}>REGISTER</h2>
      <Grid className={style.form_grid}>
        <FormControl variant="standard">
          <form onSubmit={handleSubmit} noValidate>
<TextField
  className={style.name_input}
  InputLabelProps={{
    style: {
      color: !isNameValid ? 'red' : '#9B9FAA',
    },
  }}
  variant="standard"
  label='Name'
  type="text"
  name="name"
  fullWidth
  margin="normal"
  value={formData.name}
  onChange={handleChange}
  onFocus={() => handleFocus('name')}
  onBlur={() => handleBlur('name')}
  helperText={!formData.name ? 'Required' : renderValidationPopup('name')}
  error={!isNameValid}
  required
/>

<TextField
  className={style.email_input}
  InputLabelProps={{
    style: {
      color: !isEmailValid ? 'red' : '#9B9FAA',
    },
  }}
  variant="standard"
  label="Email"
  type="email"
  name="email"
  fullWidth
  margin="normal"
  value={formData.email}
  onChange={handleChange}
  onFocus={() => handleFocus('email')}
  onBlur={() => handleBlur('email')}
  helperText={!formData.email ? 'Required' : renderValidationPopup('email')}
  error={!isEmailValid}
  required
/>

<TextField
  className={style.password_input}
  InputLabelProps={{
    style: {
      color: !isPasswordValid ? 'red' : '#9B9FAA',
    },
  }}
  variant="standard"
  label={'Password '}
  type="password"
  name="password"
  fullWidth
  margin="normal"
  value={formData.password}
  onChange={handleChange}
  onFocus={() => handleFocus('password')}
  onBlur={() => handleBlur('password')}
  helperText={!formData.password ? 'Required' : renderValidationPopup('password')}
  error={!isPasswordValid}
  required
/>


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
