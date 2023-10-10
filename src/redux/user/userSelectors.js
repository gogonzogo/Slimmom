export const getDiaryList = state => state.user.diary.diaryList;
export const getFoodsList = state => state.user.diary.allFoodsList;
export const getDiaryBackBtn = state => state.user.diaryBackBtn;
export const getCalDate = state => state.user.diary.calendarDate;
export const getDiaryDailyRate = state => state.user.diary.diaryDailyRate;
export const getDiaryIsLoading = state => state.user.diary.diaryIsLoading;
export const getCalculatorIsLoading = state => state.user.calculator.calculatorIsLoading;
export const getDiaryError = state => state.user.diary.diaryError;
export const getCalculatorError = state => state.user.calculator.calculatorError;
export const calculatorStatsSelector = state => state.user.calculator;
export const sideBarStats = state => state.user.stats;
export const getCalories = state => state.user.calculator.dailyRate;
export const getFilter = state => state.user.calculator.noEat;
export const getBadFoodSearchResults = state =>
  state.user.badFoodSearcList;
export const getIsRefreshing = state => state.user.isRefreshing;

