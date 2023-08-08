import apiSlice from "../api/api";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTags: builder.query({
      query: () => `/tags`,
    }),
  }),
});

export const { useGetAllTagsQuery } = userApi;
