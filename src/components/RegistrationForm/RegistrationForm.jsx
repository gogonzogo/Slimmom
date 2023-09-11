import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  FormControl,
  TextField,
  Button,
  Grid,
} from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform actions with the form data here
    // For example, send it to a server for registration

    // Reset the form
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <Box sx={{ width: '100%' }}>
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
          <form onSubmit={handleSubmit}>
            <TextField
              variant="standard"
              label="Name"
              type="text"
              name="name"
              fullWidth
              margin="normal"
              required
              value={formData.name}
              onChange={handleChange}
            />
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
              <Button variant="contained" type="submit">
                Register
              </Button>
            </Box>
          </form>
        </FormControl>
        <Box>
          <Link to="/Login">
            <Button variant="contained">Log In</Button>
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
