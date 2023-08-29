import apiSlice from "../api/api";

const eventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (data) => ({
        url: "/event",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateEventMutation } = eventApi;
