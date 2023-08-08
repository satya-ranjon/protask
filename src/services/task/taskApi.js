import apiSlice from "../api/api";

const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: () => `/task`,
    }),
  }),
});

export const { useGetAllTasksQuery } = taskApi;
