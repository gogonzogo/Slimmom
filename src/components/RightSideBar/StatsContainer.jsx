import dayjs from 'dayjs';

const { Stats } = require('./Stats');

export const StatsContainer = stats => {
  const progressData = {
    originalDate: dayjs(stats.enteredDate)
      .format('MM-DD-YYYY')
      .replaceAll('-', '/'),
    originalWeight: stats.originalWeight,
    lost: stats.originalWeight - stats.currentWeight,
    inDays: dayjs().diff(stats.enteredDate, 'day'),
    reachedGoal: stats.currentWeight <= stats.desiredWeight,
  };

  return <Stats stats={stats} progressData={progressData} />;
};
