import React from 'react';

import RightSideBar from 'components/RightSideBar/RightSideBar';
import CaloriesCalc from 'components/CaloriesCalc/CaloriesCalc';
import Container from 'components/Container/Container';
import { StatsContainer } from 'components/RightSideBar/StatsContainer';

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
            <StatsContainer />
          </RightSideBar>
        </Container>
      </section>
    </div>
  );
}

export default Calculator;
