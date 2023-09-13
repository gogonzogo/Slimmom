import React from 'react';
import { useState } from 'react';
import style from '../LoginForm/login.module.css';

import { Box, FormControl, TextField, Button, Grid } from '@mui/material';

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
    <Box className={style.form_container}>
      <h2 className={style.form_title}>LOG IN</h2>
      <Grid className={style.form_grid}>
        {/* login form */}

        <FormControl variant="standard">
          <form>
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
            
              <Button variant="contained" className={style.register_button}>
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
