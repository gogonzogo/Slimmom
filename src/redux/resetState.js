const { resetAuthState } = require('./auth/authSlice');
const { resetUserState } = require('./user/userSlice');
const { resetAvatarState } = require('./avatar/avatarSlice');

export const resetState = dispatch => {
  dispatch(resetAuthState());
  dispatch(resetUserState());
  dispatch(resetAvatarState());
};
