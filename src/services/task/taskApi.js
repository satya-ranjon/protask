import apiSlice from "../api/api";
import { updateTask } from "./createTaskSlice";

const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query({
      query: (taskId) => `/task/${taskId}`,
      keepUnusedDataFor: 0,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateTask(data));
        } catch {}
      },
    }),
    getAllTasks: builder.query({
      query: () => `/task`,
    }),
    createTask: builder.mutation({
      query: () => ({
        url: `/task`,
        method: "POST",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { task },
          } = await queryFulfilled;

          // update creteTask slice data
          dispatch(updateTask(task));

          // update getAllTasks cache
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllTasks",
              undefined,
              (taskData) => {
                taskData.push(task);
              }
            )
          );
        } catch {}
      },
    }),
    updateTask: builder.mutation({
      query: ({ data, taskId }) => ({
        url: `/task/${taskId}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          // update getAllTasks cache
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllTasks",
              undefined,
              (taskData) => {
                const findTaskData = taskData.find(
                  (item) => item._id === data._id
                );
                findTaskData.name = data.name;
                findTaskData.description = data.description;
                findTaskData.tags = data.tags;
                findTaskData.assignedUsers = data.assignedUsers;
                findTaskData.status = data.status;
              }
            )
          );
        } catch {}
      },
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useCreateTaskMutation,
  useGetTaskQuery,
  useUpdateTaskMutation,
} = taskApi;
