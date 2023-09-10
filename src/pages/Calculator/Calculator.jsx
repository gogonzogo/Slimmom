import React from 'react';
import NotAllowedProducts from 'components/productsList/notAllowedProducts/NotAllowedProducts';
import { Container } from '@mui/material';

function Calculator() {
  return (
    <div className=" background mainBackground">
      Calculator
      <NotAllowedProducts />
    </div>
  )
}

export default Calculator