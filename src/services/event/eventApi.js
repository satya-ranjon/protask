import apiSlice from "../api/api";

const eventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => `/event`,
    }),

    createEvent: builder.mutation({
      query: (data) => ({
        url: "/event",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          // update getAllTasks cache
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllEvents",
              undefined,
              (eventData) => {
                const newEventDate = data.date;
                if (eventData.hasOwnProperty(newEventDate)) {
                  eventData[newEventDate].push(data);
                } else {
                  eventData[newEventDate] = [data];
                }
              }
            )
          );
        } catch {}
      },
    }),
  }),
});

export const { useCreateEventMutation, useGetAllEventsQuery } = eventApi;
