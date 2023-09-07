import apiSlice from "../api/api";
import { updateHasMore, updatePage } from "./activateSlice";

const activateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllActivate: builder.query({
      query: () =>
        `activates?page=1&perPage=${
          import.meta.env.VITE_BASE_PARPAGE_ACTIVATES
        }`,
      providesTags: ["getAllActivate"],

      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(updateHasMore(true));
          dispatch(updatePage(1));
        } catch (err) {}
      },
    }),
    getMoreActivate: builder.query({
      query: (page) =>
        `activates?page=${page}&perPage=${
          import.meta.env.VITE_BASE_PARPAGE_ACTIVATES
        }`,
      // cachePolicy: "cacheNever",
      keepUnusedDataFor: 0,

      // provides: (results, error, args) => [
      //   { type: "data", id: customCacheKey() },
      // ],

      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.length === 0) {
            dispatch(updateHasMore(false));
          }
          if (data?.length > 0) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllActivate",
                undefined,
                (draft) => {
                  return [...draft, ...data];
                }
              )
            );
          }
        } catch (err) {}
      },
    }),
  }),
});

export const { useGetAllActivateQuery, useGetMoreActivateQuery } = activateApi;
export default activateApi;
