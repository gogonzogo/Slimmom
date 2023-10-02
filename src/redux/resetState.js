const { resetAuthState } = require('./auth/authSlice');
const { resetCalcState } = require('./Calc/calcSlice');
const { resetDiaryState } = require('./diary/diarySlice');

export const resetState = dispatch => {
  dispatch(resetAuthState());
  dispatch(resetCalcState());
  dispatch(resetDiaryState());
};
