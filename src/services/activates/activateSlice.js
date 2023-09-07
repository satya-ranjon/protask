import { createSlice } from "@reduxjs/toolkit";

const initialState = { hasMore: true, page: 1 };

const activateSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { updateHasMore, updatePage } = activateSlice.actions;

export default activateSlice.reducer;
