import React from 'react';
import dayjs from 'dayjs';
import { Stats } from './Stats';

export const StatsContainer = ({ calculator }) => {
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
        calculator.originalWeightLbs !== null &&
        calculator.currentWeightLbs !== null
      ) {
        return Math.abs(
          calculator.originalWeightLbs - calculator.currentWeightLbs
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
    inDays: dayjs().diff(calculator.date, 'day'),
    reachedGoal:
      calculator.originalWeight <= calculator.currentWeight ||
      calculator.originalWeightLbs <= calculator.currentWeightLbs,
  };

  return <Stats calculator={calculator} progressData={progressData} />;
};
