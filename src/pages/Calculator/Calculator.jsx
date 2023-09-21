import React from 'react';
// import NotAllowedProducts from 'components/ProductsList/NotAllowedProducts/NotAllowedProducts';


import RightSideBar from 'components/RightSideBar/RightSideBar';
import CaloriesCalc from 'components/CaloriesCalc/CaloriesCalc';
import { Stats } from 'components/RightSideBar/Stats';
import Container from 'components/Container/Container';

function Calculator() {
  return (
    <div
      className="background mainBackground"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <section className="top-bottom">
        <Container className="left-right">
          <CaloriesCalc />
          {/* <NotAllowedProducts />*/}
        </Container>
      </section>
      <section className="no-bottom">
        <Container className="no-left-right">
          <RightSideBar>
            <Stats />
          </RightSideBar> 
        </Container>
      </section>
    </div>
  );
}

export default Calculator;
