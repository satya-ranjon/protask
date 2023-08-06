import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authError, userLogin } from "./authSlice";

const handleAuthResult = async (queryFulfilled, dispatch) => {
  try {
    const result = await queryFulfilled;
    localStorage.setItem(
      "auth",
      JSON.stringify({
        accessToken: result.data.accessToken,
        user: result.data.user,
      })
    );
    dispatch(
      userLogin({
        accessToken: result.data.accessToken,
        user: result.data.user,
      })
    );
  } catch (error) {
    dispatch(authError(error.message));
  }
};

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_AUTH_API_URL,
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        await handleAuthResult(queryFulfilled, dispatch);
      },
      onQueryFailed(_arg, err, { dispatch }) {
        dispatch(authError(err.message));
      },
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        await handleAuthResult(queryFulfilled, dispatch);
      },
      onQueryFailed(_arg, err, { dispatch }) {
        dispatch(authError(err.message));
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
export default authApi;
