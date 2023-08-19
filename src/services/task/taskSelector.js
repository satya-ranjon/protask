export const selectTask = (state) => state.taskSlice.task;
export const selectTaskStatus = (state) => state.taskSlice.task.status;
export const selectTaskTags = (state) => state.taskSlice.task.tags;
export const selectTaskName = (state) => state.taskSlice.task.name;
export const selectTaskDescription = (state) =>
  state.taskSlice.task.description;
export const selectTaskOrder = (state, title) =>
  state.taskSlice.filter.find((item) => item.id === title)?.order || "oldest";
