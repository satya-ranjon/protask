import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.loading = false;
      state.error = null;
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    authError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userLogin, userLogout, authError } = authSlice.actions;

export default authSlice.reducer;
