const { resetAuthState } = require('./auth/authSlice');
const { resetUserState } = require('./user/userSlice');

export const resetState = dispatch => {
  dispatch(resetAuthState());
  dispatch(resetUserState());
};
