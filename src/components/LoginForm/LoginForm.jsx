import React from 'react';
import { useState } from 'react';
import style from '../LoginForm/login.module.css';
import { Box, FormControl, TextField, Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate(); // react router hook

  // form data state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // listens to input change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // listens to form submission and looks for errors
  const [loginError, setLoginError] = useState(null);

  // handles login
  async function handleLogin() {
    try {
      console.log('login information', formData);
      await dispatch(login(formData));
      console.log('Login successful');
      nav('/');
      await dispatch(login(formData));
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

        <FormControl variant="standard" onSubmit={handleSubmit}>
          <form onSubmit={handleSubmit}>
            <TextField
              className={style.email_input}
              variant="standard"
              label="Email"
              type="email"
              name="email"
              fullWidth
              margin="normal"
              required
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
            />

            <Box className={style.button_container}>
              <Button variant="contained" className={style.login_button}>
                Log In
              </Button>
              {/* links back to registration page */}
              <Link to="/register" className={style.register_link}>
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
