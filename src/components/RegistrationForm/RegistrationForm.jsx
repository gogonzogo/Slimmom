import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, FormControl, TextField, Button, Grid } from '@mui/material';
import style from './RegistrationForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateFormData,
} from '../../redux/validation/validationSlice'; // Import Redux actions

import {
  getValidationReqs,
} from '../../redux/validation/validationSelectors'; // Import Redux selectors
 // Import Redux actions and selectors
import ValidationPopup from '../ValidationPopup/ValidationPopup';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationReqs = useSelector(getValidationReqs);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    dispatch(updateFormData({ [name]: value })); // Dispatch the action to update Redux store
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = { ...errors };

    // Validate form fields based on Redux validation requirements
    // Example validation based on validationReqs - modify this based on your actual validation requirements
    if (validationReqs.name.some((req) => !req.met)) {
      newErrors.name = 'Name validation failed';
      hasErrors = true;
    } else {
      newErrors.name = '';
    }

    if (validationReqs.email.some((req) => !req.met)) {
      newErrors.email = 'Email validation failed';
      hasErrors = true;
    } else {
      newErrors.email = '';
    }

    if (validationReqs.password.some((req) => !req.met)) {
      newErrors.password = 'Password validation failed';
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
      // toast.success('Registration successful!');
    }
  };

  const renderValidationPopup = () => {
    return <ValidationPopup validationData={validationReqs.name} />;
  };
  const areAllValidationFieldsValid = () => {
    return (
      validationReqs.name.every((req) => req.meet) &&
      validationReqs.email.every((req) => req.meet) &&
      validationReqs.password.every((req) => req.meet)
    )
  };
  return (
    <Box sx={{ width: '100%' }} className={style.form_container}>
      <Grid align="center">
        {/* registration form */}
        <h2
          style={{
            color: '#FC842D',
            margin: '40px',
            fontFamily: 'Verdana',
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          REGISTER
        </h2>
        <FormControl variant="standard">
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              variant="standard"
              label={'Name *'}
              type="text"
              name="name"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name ? errors.name : ''}
            />

            <TextField
              variant="standard"
              label={'Email *'}
              type="email"
              name="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email ? errors.email : ''}
            />

            <TextField
              variant="standard"
              label={'Password *'}
              type="password"
              name="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password ? errors.password : ''}
            />

            <Box sx={{ marginTop: '20px', paddingBottom: '20px' }}>
              <Button
                variant="contained"
                type="submit"
                className={style.register_button}
                disabled={!areAllValidationFieldsValid()}
              >
                Register
              </Button>
            </Box>
          </form>
        </FormControl>

        {/* Render ValidationPopup component */}
        {renderValidationPopup()}

        <Box sx={{ marginTop: '20px', paddingBottom: '20px' }}>
          <Link to="/Login">
            <Button variant="contained" className={style.login_button}>
              Log In
            </Button>
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
