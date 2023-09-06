import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    resetSearchResult: (state, _action) => {
      state.searchResult = initialState.searchResult;
    },
  },
});

export const { addSearchResult, resetSearchResult } = userSlice.actions;

export default userSlice.reducer;
