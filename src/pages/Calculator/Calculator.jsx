// external
import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'components/Container/Container';
import { Paper } from '@mui/material';

// internal
import RightSideBar from 'components/RightSideBar/RightSideBar';
import CaloriesCalc from 'components/CaloriesCalc/CaloriesCalc';
import { StatsContainer } from 'components/RightSideBar/StatsContainer';
import s from '../../components/RightSideBar/rightSideBar.module.css'
import { selectThemeMode } from 'redux/theme/themeSelectors';

function Calculator() {
  const themeMode = useSelector(selectThemeMode);
  return (
    <div
      className="background Calc-DairyBackground"
      style={{ display: 'flex', flexDirection: 'column'}}
    >
      <section className="top-bottom">
        <Container className="left-right">
          <CaloriesCalc />
          {/* <NotAllowedProducts />*/}
        </Container>
      </section>
      <section className="no-bottom">
        <Container className="no-left-right">
          <Paper className={`${s.sidebarBox} ${themeMode === 'dark' ? s.darkMode : s.lightMode}`}/>
            <RightSideBar>
              <StatsContainer />
          </RightSideBar>
        </Container>
      </section>
    </div>
  );
}

export default Calculator;
