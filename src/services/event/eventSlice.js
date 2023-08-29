import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: {},
  filter: {
    select: {
      date: null,
      month: null,
      year: null,
    },
  },
  create: {
    title: "",
    description: null,
    date: { year: null, month: null, date: null },
    starttime: { hour: "00", minute: "00" },
    endtime: { hour: "00", minute: "00" },
    sleipner: [],
  },
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    selectedDate: (state, action) => {
      state.filter.select.date = action.payload;
    },
    selectedMonth: (state, action) => {
      state.filter.select.month = action.payload;
    },
    selectedYear: (state, action) => {
      state.filter.select.year = action.payload;
    },
    updateCreateEvent: (state, action) => {
      state.create.title = action.payload.title || state.create.title;
      state.create.description =
        action.payload.description || state.create.description;
      state.create.starttime =
        action.payload.starttime || state.create.starttime;
      state.create.endtime = action.payload.endtime || state.create.endtime;
      state.create.sleipner = action.payload.sleipner || state.create.sleipner;
    },
    updateCreateEventTitle: (state, action) => {
      state.create.title = action.payload;
    },
    updateCreateEventDescription: (state, action) => {
      state.create.description = action.payload;
    },
    updateCreateEventDate: (state, action) => {
      state.create.date = action.payload;
    },
    updateCreateEventStartTime: (state, action) => {
      state.create.starttime = action.payload;
    },
    updateCreateEventEndTime: (state, action) => {
      state.create.endtime = action.payload;
    },
    updateCreateEventSleipner: (state, action) => {
      state.create.sleipner = action.payload;
    },
    resetUpdateCreateEventData: (state, _action) => {
      state.create = initialState.create;
    },
    addEventsData: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const {
  selectedDate,
  selectedMonth,
  selectedYear,
  updateCreateEvent,
  updateCreateEventTitle,
  updateCreateEventDescription,
  updateCreateEventDate,
  updateCreateEventStartTime,
  updateCreateEventEndTime,
  updateCreateEventSleipner,
  resetUpdateCreateEventData,
} = eventSlice.actions;

export default eventSlice.reducer;
