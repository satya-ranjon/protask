import apiSlice from "../api/api";
import { userLogin } from "../auth/authSlice";
import { addSearchResult } from "./userSlice";

const updateUserCaseDate = async (queryFulfilled, dispatch) => {
  try {
    const { data } = await queryFulfilled;
    if (data._id) {
      // update user Info
      const existingData = JSON.parse(localStorage.getItem("auth"));
      existingData.user = data;
      localStorage.setItem("auth", JSON.stringify(existingData));
      dispatch(
        userLogin({
          user: data,
        })
      );
    }
  } catch {}
};

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
        url: "/user/update-profile",
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        await updateUserCaseDate(queryFulfilled, dispatch);
      },
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/user/update-password",
        method: "PATCH",
        body: data,
      }),
    }),
    updateProfilePicture: builder.mutation({
      query: (data) => ({
        url: "/user/update-profile-picture",
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        await updateUserCaseDate(queryFulfilled, dispatch);
      },
    }),

    getSearchUsers: builder.query({
      query: ({ nameOrEmail, page, perPage }) =>
        `user/search?nameOremail=${nameOrEmail}&page=${page}&perPage=${perPage}`,
      // cacheTime: 0,
      provides: "nothing",

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addSearchResult(data));
        } catch (error) {}
      },
    }),

    addSleipner: builder.mutation({
      query: (data) => ({
        url: "/user/sleipner",
        method: "PATCH",
        body: { id: data },
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
  useUpdateProfilePictureMutation,
  useGetSearchUsersQuery,
  useAddSleipnerMutation,
} = userApi;
