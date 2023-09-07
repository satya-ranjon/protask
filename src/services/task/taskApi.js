import apiSlice from "../api/api";
import { updateTask } from "./taskSlice";

const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query({
      query: (taskId) => `/task/${taskId}`,
    }),
    getAllTasks: builder.query({
      query: () => `/task`,
    }),
    createTask: builder.mutation({
      query: () => ({
        url: `/task`,
        method: "POST",
      }),
      invalidatesTags: ["getAllActivate"],

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
      async onQueryStarted({ data, taskId }, { dispatch, queryFulfilled }) {
        if (data.status) {
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllTasks",
              undefined,
              (taskData) => {
                const findTaskData = taskData.find(
                  (item) => item._id === taskId
                );
                findTaskData.status = data.status;
              }
            )
          );
        }

        try {
          const { data } = await queryFulfilled;
          // update getTask cache
          dispatch(
            apiSlice.util.updateQueryData("getTask", data._id, (taskData) => {
              taskData.name = data.name;
              taskData.status = data.status;
              taskData.description = data.description;
              taskData.tags = data.tags;
              taskData.assignedUsers = data.assignedUsers;
            })
          );
          // update getAllTasks cache
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllTasks",
              undefined,
              (taskData) => {
                const findTaskData = taskData.find(
                  (item) => item._id === taskId
                );
                findTaskData.name = data.name;
                findTaskData.description = data.description;
                findTaskData.tags = data.tags;
                findTaskData.assignedUsers = data.assignedUsers;
              }
            )
          );
        } catch {}
      },
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      // Update GetAllTasks cache data
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const updateTaskCache = dispatch(
          apiSlice.util.updateQueryData("getAllTasks", undefined, (tasks) => {
            return tasks.filter((item) => item._id !== id);
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          updateTaskCache.undo();
        }
      },
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useCreateTaskMutation,
  useGetTaskQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
