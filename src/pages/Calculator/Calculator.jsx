// external
import React from 'react';
import { useEffect, useState, useRef } from 'react';
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
  const refContainer = useRef();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!refContainer.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    });
    resizeObserver.observe(refContainer.current);
    return () => resizeObserver.disconnect(); // clean up 
  }, []);
  return (
    <div
      className="background Calc-DairyBackground"
      style={{ display: 'flex', flexDirection: 'column' }}
      ref={refContainer}
    >
      <section className="top-bottom">
        <Container className="left-right">
          <CaloriesCalc />
          {/* <NotAllowedProducts />*/}
        </Container>
      </section>
      <section className="no-bottom">
        <Container className="no-left-right">
          <Paper className={`${s.sidebarBox} ${themeMode === 'dark' ? s.darkMode : s.lightMode}`}

            style={{ height: dimensions.width > 1279 ? `${dimensions.height + 184}px` : '275px' }} />
          <RightSideBar>
            <StatsContainer />
          </RightSideBar>
        </Container>
      </section>
    </div>
  );
}

export default Calculator;
