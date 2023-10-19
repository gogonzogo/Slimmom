import React from 'react';
import { useState, useRef } from 'react';
import style from '../LoginForm/login.module.css';
import { Box, FormControl, TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsEmailValid,
  selectIsPasswordValid,
} from '../../redux/validation/registrationSelectors';
import {
  validateEmail,
  validatePassword,
} from '../../redux/validation/registrationSlice';
import { getUserInfo } from 'redux/user/userOperations';
import { useUser } from 'hooks/useUser';
import CustomButton from 'components/CustomButton/CustomButton';
import { clearCalculator } from 'redux/user/userSlice';

const LoginForm = () => {
  const passwordRef = useRef(null);
  const isEmailValid = useSelector(selectIsEmailValid);
  const isPasswordValid = useSelector(selectIsPasswordValid);
  const dispatch = useDispatch();
  const { calendarDate } = useUser();
  const nav = useNavigate(); // react router hook

  // form data state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // used to set the focused text field
  const [focusedField, setFocusedField] = useState('');

  // listens to input change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // check if email is valid

    switch (
      name // dispatches validation reducers from the slice on change
    ) {
      case 'email':
        dispatch(validateEmail({ fieldValue: value }));
        break;
      case 'password':
        dispatch(validatePassword({ fieldValue: value }));
        break;
      default:
        break;
    }
  };

  // handles login
  async function handleLogin() {
    try {
      const { email, password } = formData;
      const sendData = { email: email.toLowerCase(), password };
      const loginResultAction = await dispatch(login(sendData));
      if (login.fulfilled.match(loginResultAction)) {
        const getUserInfoResultAction = await dispatch(
          getUserInfo(calendarDate)
        );
        if (getUserInfo.rejected.match(getUserInfoResultAction)) {
          dispatch(clearCalculator());
          nav('/calculator');
        } else {
          nav('/diary');
        }
      }
    } catch (err) {
      throw new Error('Error logging in: ' + err.message);
    }
  }

  // handles form submission
  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(); // calls the login function
  }

  return (
    <Box className={style.form_container}>
      <h2 className={style.form_title}>LOG IN</h2>
      <Grid className={style.form_grid}>
        {/* login form */}

        <FormControl variant="standard">
          <form onSubmit={handleSubmit} className={style.form}>
            {' '}
            {/*pass validatioon schema */}
            <TextField
              autoComplete="email"
              className={style.email_input}
              InputLabelProps={
                focusedField === 'email' && !isEmailValid
                  ? { style: { color: 'red' } }
                  : { style: { color: '#9B9FAA' } }
              }
              inputProps={{
                onKeyPress: event => {
                  const { key } = event;
                  if (key === 'Enter') {
                    passwordRef.current.focus();
                  }
                },
              }}
              variant="standard"
              label="Email"
              type="email"
              name="email"
              fullWidth
              margin="normal"
              required
              error={focusedField === 'email' && !isEmailValid}
              // styles the input field and checks whether email is not valid and when it is valid
              helperText={
                !formData.email ? (
                  'Required'
                ) : isEmailValid && formData.email.length > 3 ? (
                  <span className={style.error_message_valid}>Checks out!</span>
                ) : (
                  <span className={style.error_message}>Not quite!</span>
                )
              }
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
            />
            <TextField
              autoComplete="current-password"
              className={style.password_input}
              InputLabelProps={
                focusedField === 'password' && !isPasswordValid
                  ? { style: { color: 'red' } }
                  : { style: { color: '#9B9FAA' } }
              }
              inputRef={passwordRef}
              variant="standard"
              label="Password"
              type="password"
              name="password"
              fullWidth
              margin="normal"
              required
              error={focusedField === 'password' && !isPasswordValid}
              // styles the input field and checks whether password is not valid and when it is valid
              helperText={
                !formData.password ? (
                  'Required'
                ) : isPasswordValid ? (
                  <span className={style.error_message_valid}>Checks out!</span>
                ) : (
                  <span className={style.error_message}>Not quite!</span>
                )
              }
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setFocusedField('password')}
            />
            <Box className={style.button_container}>
              <CustomButton
                color="orange"
                type="submit"
                disabled={!isEmailValid || !isPasswordValid}
                className={style.login_button}
              >
                Log In
              </CustomButton>
            </Box>
          </form>
        </FormControl>
      </Grid>
    </Box>
  );
};

export default LoginForm;
