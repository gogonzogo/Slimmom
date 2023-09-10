import {
  Box,
  FormControl,
  TextField,
  Button,
  Grid,
  Container,
  ButtonGroup,
} from '@mui/material';
import React from 'react';

const buttons = [
  <Button key={1} variant="contained" color="primary">
    Log In
  </Button>,
  <Button key={2} variant="contained" color="primary">
    Register
  </Button>,
];

const LoginForm = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid align="center">
        {/* login form */}
        <h2>LOG IN</h2>
        <FormControl variant="standard">
          <TextField
            variant="standard"
            label="Email"
            type="email"
            fullWidth
            required
          />
          <TextField
            variant="standard"
            label="Password"
            type="password"
            fullWidth
            required
          />
        </FormControl>
        <Grid>
          <ButtonGroup orientation="vertical">{buttons}</ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
