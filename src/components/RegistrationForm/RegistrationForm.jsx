import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, FormControl, TextField, Button, Grid } from '@mui/material';
import style from './RegistrationForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {validateEmail,validateName,validatePassword} from '../../redux/validation/registrationSlice';
import ValidationPopup from '../ValidationPopup/ValidationPopup';
import { selectFormIsValid } from '../../redux/validation/registrationSelectors';
import { register } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
//import { useAuthStore } from 'hooks/useAuth';


const RegistrationForm = () => {
//const { loggedIn, user, refreshing, error, token } = useAuthStore();
  const isFormValid = useSelector(selectFormIsValid);
  const validationReqs = useSelector((state) => state.registration.validationReqs);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validationPopups, setValidationPopups] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [focusedField, setFocusedField] = useState(null);
  const toggleValidationPopup = (fieldName, visible) => {
    setValidationPopups({ ...validationPopups, [fieldName]: visible });
  };
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    switch (name) { // dispatches validation reducers from the slice on change
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

  const handleSubmit = async(e) => {
    e.preventDefault();
      const response = await dispatch(register(formData));
      if (response.payload.code === 201) {
      resetForm()
        navigate('/calculator')
      }
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
      <h2 className={style.form_title}>REGISTER</h2>
      <Grid className={style.form_grid}>
        <FormControl variant="standard">
          <form
            onSubmit={handleSubmit}
            noValidate>
            <TextField 
              className={style.name_input}
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
              helperText={formData.name.length > 5 && renderValidationPopup()}
              //error={!formData.name && nameValidationReqs.some((req) => !req.met)}
            />

            <TextField
              className={style.email_input}
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
              className={style.password_input}
              InputLabelProps={{ style: { color: "#9B9FAA" } }} // input field styles
              variant="standard"
              label={'Password *'}
              type="password"
              name="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}// add to track each keystroke
              onFocus={() => setFocusedField('password')}// needed for validation
              onBlur={() => setFocusedField(null)}// needed for validation
              //error={!formData.password && passwordValidationReqs.some((req) => !req.met)}
            /> 
 {renderValidationPopup()} {/** render the popup  */}
            <Box className={style.button_container}> 
              <Button
                variant="contained"
                type="submit"
                className={style.login_button}
                disabled={!isFormValid}
              >
                Register
              </Button>
            <Link to="/Login">
            <Button variant="contained" className={style.register_button}>
              Log In
            </Button>
          </Link>
            </Box>
          </form>
        </FormControl>

      </Grid>
    </Box>
  );
};

export default RegistrationForm;