// createTaskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  status: "",
  tags: [],
  document: "",
};

const createTaskSlice = createSlice({
  name: "createTask",
  initialState,
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
    addTag: (state, action) => {
      state.tags.push(action.payload);
    },
    removeTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag?.id !== action.payload);
    },
    updateDocument: (state, action) => {
      state.document = action.payload;
    },
    resetCreateTaskState: () => initialState,
  },
});

export const {
  updateTitle,
  updateStatus,
  addTag,
  removeTag,
  updateDocument,
  resetCreateTaskState,
} = createTaskSlice.actions;
export default createTaskSlice.reducer;
