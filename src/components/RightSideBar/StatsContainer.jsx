import React from 'react';
import dayjs from 'dayjs';
import { Stats } from './Stats';

export const StatsContainer = ({ calculator }) => {
  const startDate = dayjs(calculator.startDate, 'MM-DD-YYYY');
  const goalWeight = calculator.currentWeight ||
    calculator.currentWeightLbs;

  const lost = () => {
    if (calculator.unitOfMeasure === 'M') {
      if (
        calculator.originalWeight !== null &&
        calculator.currentWeight !== null
      ) {
        return Math.abs(calculator.originalWeight - calculator.currentWeight);
      }
    } else if (calculator.unitOfMeasure === 'S') {
      if (
        calculator.originalWeight !== null &&
        calculator.currentWeightLbs !== null
      ) {
        return Math.abs(
          calculator.originalWeight - calculator.currentWeightLbs
        );
      }
    }
    return 0;
  };
  const progressData = {
    originalDate: dayjs(calculator.startDate)
      .format('MM-DD-YYYY')
      .replaceAll('-', '/'),
    originalWeight: calculator.originalWeight,
    lost: lost(),
    inDays: dayjs().diff(startDate, 'day'),
    reachedGoal: calculator.desired <= goalWeight,
  };

  return <Stats calculator={calculator} progressData={progressData} />;
};
