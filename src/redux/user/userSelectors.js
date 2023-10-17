export const getDiaryList = state => state.user.diary.diaryList;
export const getFoodsList = state => state.user.diary.allFoodsSearchList;
export const getDiaryBackBtn = state => state.user.diary.diaryBackBtn;
export const getCalDate = state => state.user.diary.calendarDate;
export const getDiaryDailyRate = state => state.user.diary.diaryDailyRate;
export const getCalculatorDailyRate = state => state.user.calculator.calculatorDailyRate;
export const getDiaryIsLoading = state => state.user.diary.diaryIsLoading;
export const getCalculatorIsLoading = state => state.user.calculator.calculatorIsLoading;
export const getDiaryError = state => state.user.diary.diaryError;
export const getCalculatorError = state => state.user.calculator.calculatorError;
export const getCalculator = state => state.user.calculator;
export const sideBarStats = state => state.user.calculator;
export const getCalories = state => state.user.calculator.dailyRate;
export const getFilter = state => state.user.calculator.noEat;
export const getNotAllowedFoodsList = state =>
  state.user.badFoodSearcList;
export const getIsRefreshing = state => state.user.isRefreshing;
