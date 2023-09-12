import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, FormControl, TextField, Button, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import style from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

 // listens to input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = { ...errors };

    if (!formData.name) {
      newErrors.name = 'Must be at least 3 characters long';
      toast.error('Name is required');
      hasErrors = true;
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
      toast.error('Name must be at least 3 characters long');
      hasErrors = true;
    } else {
      newErrors.name = '';
    }

    if (!formData.email) {
      newErrors.email = 'Please enter a valid email address';
      toast.error('Email is required');
      hasErrors = true;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address: example@mail.com';
      toast.error('Please enter a valid email address');
      hasErrors = true;
    } else {
      newErrors.email = '';
    }

    if (!formData.password) {
      newErrors.password = 'Must be at least 8 characters long';
      toast.error('Password is required');
      hasErrors = true;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      toast.error('Password must be at least 8 characters long');
      hasErrors = true;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);

    if (!hasErrors) {
      // Validation passed; perform actions with the form data here
      // For example, send it to a server for registration

      setFormData({ name: '', email: '', password: '' });

      // Show a success message
      toast.success('Registration successful!');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Box sx={{ width: '100%' }} className={style.form_container}>
      <Grid align="center">
        {/* registration form */}
        <h2 style={{ color: '#FC842D', margin: '40px', fontFamily: 'Verdana', fontSize: '14px', fontWeight: '700'}}>REGISTER</h2>
        <FormControl variant="standard">
          <form onSubmit={handleSubmit} noValidate>
<TextField
  variant="standard"
  label={"Name *"}
  type="text"
  name="name"
  fullWidth
  margin="normal"
  value={formData.name}
  onChange={handleChange}
  error={!!errors.name} // Set error prop to true when there is an error
  helperText={errors.name ? errors.name : ''} // Display error message as helper text
/>

<TextField
  variant="standard"
  label={"Email *"}
  type="email"
  name="email"
  fullWidth
  margin="normal"
  value={formData.email}
  onChange={handleChange}
  error={!!errors.email} // Set error prop to true when there is an error
  helperText={errors.email ? errors.email : ''} // Display error message as helper text
/>

<TextField
  variant="standard"
  label={"Password *"}
  type="password"
  name="password"
  fullWidth
  margin="normal"
  value={formData.password}
  onChange={handleChange}
  error={!!errors.password} // Set error prop to true when there is an error
  helperText={errors.password ? errors.password : ''} // Display error message as helper text
/>


            <Box sx={{ marginTop: '20px', paddingBottom: '20px' }}>
              <Button variant="contained" type="submit" className={style.register_button}>
                Register
              </Button>
            </Box>
          </form>
        </FormControl>
        <Box sx={{ marginTop: '20px', paddingBottom: '20px' }}>
          <Link to="/Login">
            <Button variant="contained" className={style.login_button}>Log In</Button>
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
