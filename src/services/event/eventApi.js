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
    updateEvent: builder.mutation({
      query: ({ eventId, data }) => ({
        url: `/event/${eventId}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ eventId, data }, { dispatch, queryFulfilled }) {
        console.log("onQuerYStarted eventId", eventId);
        console.log("onQuerYStarted data", data);
        // update getAllTasks cache
        const updateGetAllEventCache = dispatch(
          apiSlice.util.updateQueryData(
            "getAllEvents",
            undefined,
            (eventData) => {
              const newEventDate = data.date;
              eventData[newEventDate]?.map((event) => {
                if (event._id === data._id) {
                  event.title = data.title;
                  event.description = data.description;
                  event.date = data.date;
                  event.starttime = data.starttime;
                  event.endtime = data.endtime;
                  event.sleipner = data.sleipner;
                }
                return event;
              });
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          updateGetAllEventCache.undo();
        }
      },
    }),
  }),
});

export const {
  useCreateEventMutation,
  useGetAllEventsQuery,
  useUpdateEventMutation,
} = eventApi;
