import apiSlice from "../api/api";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTags: builder.query({
      query: () => `/tags`,
    }),
    createTags: builder.mutation({
      query: (data) => ({
        url: "/tags",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllTagsQuery, useCreateTagsMutation } = userApi;
