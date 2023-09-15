import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, FormControl, TextField, Button, Grid } from '@mui/material';
import style from './RegistrationForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
//import { selectNameValidationReqs, selectEmailValidationReqs, selectPasswordValidationReqs } from '../../redux/validation/registrationSelectors';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../redux/validation/registrationSlice';

import ValidationPopup from '../ValidationPopup/ValidationPopup';
import { selectFormIsValid } from '../../redux/validation/registrationSelectors';

const RegistrationForm = () => {
  const isFormValid = useSelector(selectFormIsValid);
  const dispatch = useDispatch();
    //const nameValidationReqs = useSelector(selectNameValidationReqs);
  //const emailValidationReqs = useSelector(selectEmailValidationReqs);
  //const passwordValidationReqs = useSelector(selectPasswordValidationReqs);
  const [validationPopups, setValidationPopups] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [focusedField, setFocusedField] = useState(null);

  const toggleValidationPopup = (fieldName, visible) => {
    setValidationPopups({ ...validationPopups, [fieldName]: visible });
  };

  const validationReqs = useSelector((state) => state.registration.validationReqs);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    switch (name) {
      case 'name':
        dispatch(validateName({ fieldValue: value }));
        break;
      case 'email':
        dispatch(validateEmail({ fieldValue: value }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderValidationPopup = () => {
    return (
      <ValidationPopup
        validationData={validationReqs[focusedField]}
        visible={!!focusedField}
      />
    );
  };

  return (
    <Box sx={{ width: '100%' }} className={style.form_container}>
      <Grid align="center">
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
              InputLabelProps={{ style: { color: "#9B9FAA" } }}
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
              //error={!formData.name && nameValidationReqs.some((req) => !req.met)}
            />

            <TextField
              InputLabelProps={{ style: { color: "#9B9FAA" } }}
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
              //error={!formData.email && emailValidationReqs.some((req) => !req.met)}
            />

            <TextField
              InputLabelProps={{ style: { color: "#9B9FAA" } }}
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
              //error={!formData.password && passwordValidationReqs.some((req) => !req.met)}
            />

            <Box sx={{ marginTop: '20px', paddingBottom: '20px' }}>
              <Button
                variant="contained"
                type="submit"
                className={style.register_button}
                disabled={!isFormValid}
              >
                Register
              </Button>
            </Box>
          </form>
        </FormControl>

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