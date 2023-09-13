import React from 'react';
// import NotAllowedProducts from 'components/ProductsList/NotAllowedProducts/NotAllowedProducts';

import RightSideBar from 'components/RightSideBar/RightSideBar';
import CaloriesCalc from 'components/CaloriesCalc/CaloriesCalc';
function Calculator() {
  return (
    <div className="background mainBackground">
      <CaloriesCalc />
      {/* <NotAllowedProducts />
       */}
      <RightSideBar />
    </div>
  );
}

export default Calculator;
