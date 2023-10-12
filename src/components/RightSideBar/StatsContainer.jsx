import dayjs from 'dayjs';

const { Stats } = require('./Stats');

export const StatsContainer = calculator => {
  const progressData = {
    originalDate: dayjs(calculator.startDate)
      .format('MM-DD-YYYY')
      .replaceAll('-', '/'),
    originalWeight: calculator.originalWeight,
    lost: calculator.originalWeight - calculator.currentWeight,
    inDays: dayjs().diff(calculator.enteredDate, 'day'),
    reachedGoal: calculator.currentWeight <= calculator.desiredWeight,
  };

  return <Stats calculator={calculator} progressData={progressData} />;
};
