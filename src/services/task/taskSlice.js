import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: {
    id: "",
    name: "",
    description: null,
    status: "",
    createdAt: "",
    updatedAt: "",
    tags: [],
    assignedUsers: [],
  },
  filter: [
    { id: "Start", order: "oldest" },
    { id: "In Process", order: "oldest" },
    { id: "On Hold", order: "oldest" },
    { id: "Done", order: "oldest" },
  ],
};

const taskSlice = createSlice({
  name: "createTask",
  initialState,
  reducers: {
    updateTask: (state, action) => {
      state.task.id = action.payload._id;
      state.task.name = action.payload.name;
      state.task.description = action.payload.description;
      state.task.tags = action.payload.tags;
      state.task.assignedUsers = action.payload.assignedUsers;
      state.task.status = action.payload.status;
      state.task.createdAt = action.payload.createdAt;
      state.task.updatedAt = action.payload.updatedAt;
    },
    updateTitle: (state, action) => {
      state.task.name = action.payload;
    },
    updateStatus: (state, action) => {
      state.task.status = action.payload;
    },
    addTag: (state, action) => {
      state.task.tags.push(action.payload);
    },
    removeTag: (state, action) => {
      state.task.tags = state.task.tags.filter(
        (tag) => tag?.id !== action.payload
      );
    },
    updateDocument: (state, action) => {
      state.task.description = action.payload;
    },
    resetCreateTaskState: () => initialState,

    updateFilter: (state, action) => {
      state.filter = state.filter.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, order: action.payload.order };
        }
        return item;
      });
    },
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
  updateFilter,
} = taskSlice.actions;

export default taskSlice.reducer;
