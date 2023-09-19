import React from 'react';
import { useState } from 'react';
import style from '../LoginForm/login.module.css';
import { Box, FormControl, TextField, Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFormIsValid, selectEmailValidationReqs, selectIsEmailValid, selectIsPasswordValid } from '../../redux/validation/registrationSelectors';
import {
  validateEmail,
  validatePassword,
  validateName,
} from '../../redux/validation/registrationSlice';
import { toast } from 'react-toastify';
import { updateValidationReqs } from '../../redux/validation/validationSlice';
import { getFormDataEmail, getValidationReqs } from 'redux/validation/validationSelectors';
import ValidationPopup from '../ValidationPopup/ValidationPopup';



const LoginForm = () => {
  const isEmailValid = useSelector(selectIsEmailValid);
  const isPasswordValid = useSelector(selectIsPasswordValid);
  const dispatch = useDispatch();
  const nav = useNavigate(); // react router hook
  const validationReqs = useSelector((state) => state.registration.validationReqs); // gets validation requirements from the slice

  // listens to validation changes
  const toggleValidationPopup = (fieldName, visible) => {
    setValidationPopups({ ...validationPopups, [fieldName]: visible });
  };


  const [validationPopups, setValidationPopups] = useState({
    name: false,
    email: false,
    password: false,
  });

  // form data state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [focusedField, setFocusedField] = useState('');
 

  
  // listens to input change
  const handleChange = e => {
    const { name, value } = e.target;
    // console.log('name', name);
    setFormData({ ...formData, [name]: value });
    // check if email is valid
    
    switch (name) { // dispatches validation reducers from the slice on change
      case 'email':
        console.log(dispatch(validateEmail({ fieldValue: value })));
        break;
      case 'password':
        dispatch(validatePassword({ fieldValue: value }));
        break;
      default:
        break;
    }
    toggleValidationPopup(name, true);
  };

  // listens to form submission and looks for errors
  const [loginError, setLoginError] = useState(null);

  // handles login
  async function handleLogin() {
    const userData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      console.log('login information', userData);
      await dispatch(login(userData));
      toast.success('Login successful');
      console.log('Login successful');
      nav('/');
    } catch (err) {
      console.err('Login error', loginError);
      setLoginError('An eroor occured. Please try again.');
    }
  }

  // handles form submission
  function handleSubmit(e) {
    e.preventDefault();
    handleLogin();
    // clear the form data after submission
    setFormData({ email: '', password: '' });
  }


  return (
    <Box className={style.form_container}>
      <h2 className={style.form_title}>LOG IN</h2>
      <Grid className={style.form_grid}>
        {/* login form */}

        <FormControl variant="standard">
          <form onSubmit={handleSubmit}> {/*pass validatioon schema */}
            <TextField
              className={style.email_input}
              variant="standard"
              label="Email"
              type="email"
              name="email"
              fullWidth
              margin="normal"
              required
              error={focusedField === 'email' && !isEmailValid}
              // styles the input field and checks whether email is not valid and when it is valid
              helperText={!formData.email ? 'Required' : isEmailValid && formData.email.length >3 ? <p className={style.error_message_valid}>Checks out!</p> : <p className={style.error_message}>Not quite!</p>}
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
            />
           
            <TextField
              className={style.password_input}
              variant="standard"
              label="Password"
              type="password"
              name="password"
              fullWidth
              margin="normal"
              required
              error={focusedField === 'password' && !isPasswordValid}
              // styles the input field and checks whether password is not valid and when it is valid
              helperText={!formData.password ? 'Required' : isPasswordValid ? <p className={style.error_message_valid}>Checks out!</p> : <p className={style.error_message}>Not quite!</p>}
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setFocusedField('password')}
            />
            {/* if password is not longer than 5 number and email is not longer than 5 chars then disable button  */}
            {isEmailValid && isPasswordValid ? (
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
            ) : (
              <Box className={style.button_container}>
                <Button
                  variant="contained"
                  disabled
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
            )}
          </form>
        </FormControl>
      </Grid>
    </Box>
  );
};

export default LoginForm;
