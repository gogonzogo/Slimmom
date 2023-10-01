import React from 'react';
import { useState, useRef } from 'react';
import style from '../LoginForm/login.module.css';
import { Box, FormControl, TextField, Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
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
import { toast } from 'react-toastify';
import { getUserStats } from 'redux/Calc/calcOperations';

const LoginForm = () => {
  const passwordRef = useRef(null);
  const isEmailValid = useSelector(selectIsEmailValid);
  const isPasswordValid = useSelector(selectIsPasswordValid);
  // const isFormValid = useSelector(selectFormIsValid);
  const dispatch = useDispatch();
  const nav = useNavigate(); // react router hook
  // const validationReqs = useSelector((state) => state.registration.validationReqs); // gets validation requirements from the slice

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

  // listens to form submission and looks for errors
  const [loginError, setLoginError] = useState(null);

  // handles login
  async function handleLogin() {
    try {
      const { email, password } = formData;
      const senddata = { email: email.toLowerCase(), password };
      const response = await dispatch(login(senddata));
      console.log(response.payload);
      if (response.payload.token) {
        dispatch(getUserStats({}));
        nav('/diary');
      }
    } catch (err) {
      console.err('Login error', loginError);
      setLoginError('An error occured. Please try again.');
      toast.error('An error occured. Please try again.');
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
          <form onSubmit={handleSubmit}>
            {' '}
            {/*pass validatioon schema */}
            <TextField
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
            {/* if password is not longer than 5 number and email is not longer than 5 chars then disable button  */}
            {/* {isEmailValid && isPasswordValid ? (
              <Box className={style.button_container}>
                <Button variant="contained" className={style.login_button}>
                  Log In
                </Button>
                <Link to="/Register">
                  <Button variant="contained" className={style.register_button}>
                    Register
                  </Button>
                </Link>
              </Box>
            ) : ( */}
            <Box className={style.button_container}>
              <Button
                variant="contained"
                type="submit"
                disabled={!isEmailValid || !isPasswordValid}
                className={style.login_button}
              >
                Log In
              </Button>
              <Link to="/Register">
                <Button variant="contained" className={style.register_button}>
                  Register
                </Button>
              </Link>
            </Box>
          </form>
        </FormControl>
      </Grid>
    </Box>
  );
};

export default LoginForm;
