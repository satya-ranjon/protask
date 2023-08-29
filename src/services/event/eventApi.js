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
    getAllEvents: builder.query({
      query: () => `/event`,
    }),
  }),
});

export const { useCreateEventMutation, useGetAllEventsQuery } = eventApi;
