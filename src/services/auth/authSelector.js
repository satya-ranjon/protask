export const selectAuthAccessToken = (state) => state.auth.accessToken;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserAvatar64 = (state) => state.auth.user.avatar["64"].url;
export const selectUserAvatar200 = (state) => state.auth.user.avatar["200"].url;
export const selectUser = (state) => state.auth.user;
