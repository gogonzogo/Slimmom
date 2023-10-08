export const getDiaryList = state => state.user.diary.diaryList;
export const getFoodsList = state => state.user.diary.allFoodsList;
export const getDiaryBackBtn = state => state.user.diaryBackBtn;
export const getCalDate = state => state.user.diary.calendarDate;
export const getDailyRate = state => state.user.diary.dailyRate;
export const getDiaryIsLoading = state => state.user.diary.diaryIsLoading;
export const getCalculatorIsLoading = state => state.user.cals.calculatorIsLoading;
export const getDiaryError = state => state.user.diary.diaryError;
export const getCalculatorError = state => state.user.cals.calculatorError;
export const calculatorStatsSelector = state => state.user.value;
export const sideBarStats = state => state.user.stats;
export const getCalories = state => state.user.totalCalories;
export const getFilter = state => state.user.noEat;
export const getBadFoodSearchResults = state =>
  state.user.badFoodSearcList;
export const getIsRefreshing = state => state.user.isRefreshing;

