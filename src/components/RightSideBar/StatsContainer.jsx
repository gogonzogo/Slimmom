const { Stats } = require('./Stats');

export const StatsContainer = stats => {
  console.log(stats);
  return <Stats stats={stats} />;
};
