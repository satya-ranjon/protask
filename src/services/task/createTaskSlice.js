import { createSlice } from "@reduxjs/toolkit";

/**
 *  
        "name": "",
        "description": "",
        "tags": [],
        "assignedUsers": [],
        "status": "start",
        "_id": "64d256494cc3992b460fafde",
        "createdAt": "2023-08-08T14:50:49.629Z",
        "updatedAt": "2023-08-08T14:50:49.629Z",
 */
const initialState = {
  id: "",
  name: "",
  description: "",
  status: "",
  createdAt: "",
  updatedAt: "",
  tags: [],
  assignedUsers: [],
};

const createTaskSlice = createSlice({
  name: "createTask",
  initialState,
  reducers: {
    updateTask: (state, action) => {
      state.id = action.payload._id;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.tags = action.payload.tags;
      state.assignedUsers = action.payload.assignedUsers;
      state.status = action.payload.status;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
    },
    updateTitle: (state, action) => {
      state.name = action.payload;
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
      state.description = action.payload;
    },
    resetCreateTaskState: () => initialState,
  },
});

export const {
  updateTask,
  updateTitle,
  updateStatus,
  addTag,
  removeTag,
  updateDocument,
  resetCreateTaskState,
} = createTaskSlice.actions;
export default createTaskSlice.reducer;
