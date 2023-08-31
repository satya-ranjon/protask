import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  update: {
    _id: null,
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

    // Selected Update Event

    selectedUpdateEvent: (state, action) => {
      state.update = action.payload;
    },
    selectedUpdateEventTitle: (state, action) => {
      state.update.title = action.payload;
    },
    selectedUpdateEventDescription: (state, action) => {
      state.update.description = action.payload;
    },
    selectedUpdateEventDate: (state, action) => {
      state.update.date = action.payload;
    },
    selectedUpdateEventStartTime: (state, action) => {
      state.update.starttime = action.payload;
    },
    selectedUpdateEventEndTime: (state, action) => {
      state.update.endtime = action.payload;
    },
    selectedUpdateEventSleipner: (state, action) => {
      state.update.sleipner = action.payload;
    },
    resetSelectedUpdateEventData: (state, _action) => {
      state.update = initialState.update;
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
  // Selected Update Event
  selectedUpdateEvent,
  selectedUpdateEventTitle,
  selectedUpdateEventDescription,
  selectedUpdateEventDate,
  selectedUpdateEventStartTime,
  selectedUpdateEventEndTime,
  selectedUpdateEventSleipner,
  resetSelectedUpdateEventData,
} = eventSlice.actions;

export default eventSlice.reducer;
