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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          userApi.util.updateQueryData("getAllTags", undefined, (tagsData) => {
            tagsData.tags.push(args);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    deleteTag: builder.mutation({
      query: (id) => ({
        url: `/tags/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          userApi.util.updateQueryData("getAllTags", undefined, (tagsData) => {
            tagsData.tags = tagsData.tags.filter((tag) => tag.id !== id);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    updateUserInfo: builder.mutation({
      query: (data) => ({
        url: "/postcss.config.jsuser/update-profile",
        method: "PATCH",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/user/update-password",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllTagsQuery,
  useCreateTagsMutation,
  useDeleteTagMutation,
  useUpdateUserInfoMutation,
  useChangePasswordMutation,
} = userApi;
