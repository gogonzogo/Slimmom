import React from 'react';
import { useState } from 'react';
import style from '../LoginForm/login.module.css';

import {
  Box,
  FormControl,
  TextField,
  Button,
  Grid
} from '@mui/material';



const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // listens to input change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box sx={{ width: '100%' }} className={style.form_container}>
      <Grid align="center">
        {/* login form */}
        <h2 style={{ color: '#FC842D', margin: '40px', fontFamily: 'Verdana', fontSize: '14px', fontWeight: '700'}}>LOG IN</h2>
        <FormControl variant="standard">
          <form>
            <TextField
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

            <Box sx={{ marginTop: '60px', paddingBottom: '20px' }}>
              <Button variant="contained" className={style.login_button}>
                Log In
              </Button>
            </Box>
            <Box>
              <Button variant="contained" className={style.register_button} >
                Register
              </Button>
            </Box>
          </form>
        </FormControl>
      </Grid>
    </Box>
  );
};

export default LoginForm;
