export const getDiaryList = state => state.user.diary.diaryList;
export const getFoodsList = state => state.user.foodsList;
export const getDiaryBackBtn = state => state.user.diaryBackBtn;
export const getCalDate = state => state.user.diary.calDate;
export const getDailyRate = state => state.user.diary.dailyRate;
export const getIsLoading = state => state.user.isLoading;
export const getError = state => state.user.error;
export const calculatorStatsSelector = state => state.user.value;
export const sideBarStats = state => state.user.stats;
export const getCalories = state => state.user.totalCalories;
export const getFilter = state => state.user.noEat;
export const getBadFoodSearchResults = state =>
  state.user.badFoodSearcList;
export const getIsRefreshing = state => state.user.isRefreshing;

