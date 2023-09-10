import React from 'react';
import NotAllowedProducts from 'components/productsList/notAllowedProducts/NotAllowedProducts';
import { Container } from '@mui/material';

function Calculator() {
  return (
    <Container>
      Calculator
      <NotAllowedProducts />
    </Container>
  )
}

export default Calculator