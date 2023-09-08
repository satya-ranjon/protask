import apiSlice from "../api/api";

const inviteApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendInvite: builder.mutation({
      query: (data) => ({
        url: "/send/invite",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["getAllActivate"],
    }),
  }),
});

export const { useSendInviteMutation } = inviteApi;
