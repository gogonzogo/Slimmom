export const calculatorStatsSelector = state => state.calCalories.value;
export const sideBarStats = state => state.calCalories.stats;
export const getCalories = state => state.calCalories.totalCalories;
export const getFilter = state => state.calCalories.noEat;
export const getIsLoading = state => state.calCalories.isLoading;
export const getBadFoodSearchResults = state =>
  state.calCalories.badFoodSearcList;
export const getIsRefreshing = state => state.calCalories.isRefreshing;
export const getError = state => state.calCalories.error;
