import apiSlice from "../api/api";
import { updateTask } from "./createTaskSlice";

const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query({
      query: (taskId) => `/task/${taskId}`,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("data", data);
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
          dispatch(updateTask(task));
        } catch {}
      },
    }),
    updateTask: builder.mutation({
      query: ({ data, taskId }) => ({
        url: `/task/${taskId}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useCreateTaskMutation,
  useGetTaskQuery,
  useUpdateTaskMutation,
} = taskApi;
