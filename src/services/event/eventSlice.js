import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    {
      _id: 1,
      title: "Event title 1",
      description: "Description for Event 1",
      day: "2023-08-27",
      starttime: { hour: 10, minute: 56 },
      endtime: { hour: 0, minute: 13 },
    },
    {
      _id: 2,
      title: "Event title 2",
      description: "Description for Event 2",
      day: "2023-08-29",
      starttime: { hour: 14, minute: 9 },
      endtime: { hour: 12, minute: 5 },
    },
    {
      _id: 3,
      title: "Event title 3",
      description: "Description for Event 3",
      day: "2023-08-28",
      starttime: { hour: 15, minute: 58 },
      endtime: { hour: 20, minute: 38 },
    },
    {
      _id: 4,
      title: "Event title 4",
      description: "Description for Event 4",
      day: "2023-08-31",
      starttime: { hour: 20, minute: 25 },
      endtime: { hour: 10, minute: 25 },
    },
    {
      _id: 5,
      title: "Event title 5",
      description: "Description for Event 5",
      day: "2023-08-29",
      starttime: { hour: 7, minute: 41 },
      endtime: { hour: 16, minute: 32 },
    },
    {
      _id: 6,
      title: "Event title 6",
      description: "Description for Event 6",
      day: "2023-08-28",
      starttime: { hour: 9, minute: 58 },
      endtime: { hour: 17, minute: 34 },
    },
    {
      _id: 7,
      title: "Event title 7",
      description: "Description for Event 7",
      day: "2023-08-27",
      starttime: { hour: 13, minute: 39 },
      endtime: { hour: 7, minute: 4 },
    },
    {
      _id: 8,
      title: "Event title 8",
      description: "Description for Event 8",
      day: "2023-08-28",
      starttime: { hour: 21, minute: 37 },
      endtime: { hour: 9, minute: 0 },
    },
    {
      _id: 9,
      title: "Event title 9",
      description: "Description for Event 9",
      day: "2023-08-26",
      starttime: { hour: 19, minute: 25 },
      endtime: { hour: 22, minute: 48 },
    },
    {
      _id: 10,
      title: "Event title 10",
      description: "Description for Event 10",
      day: "2023-08-31",
      starttime: { hour: 6, minute: 47 },
      endtime: { hour: 13, minute: 42 },
    },
    {
      _id: 11,
      title: "Event title 11",
      description: "Description for Event 11",
      day: "2023-08-26",
      starttime: { hour: 22, minute: 34 },
      endtime: { hour: 8, minute: 55 },
    },
    {
      _id: 12,
      title: "Event title 12",
      description: "Description for Event 12",
      day: "2023-08-29",
      starttime: { hour: 22, minute: 24 },
      endtime: { hour: 15, minute: 8 },
    },
    {
      _id: 13,
      title: "Event title 13",
      description: "Description for Event 13",
      day: "2023-08-29",
      starttime: { hour: 15, minute: 8 },
      endtime: { hour: 14, minute: 54 },
    },
    {
      _id: 14,
      title: "Event title 14",
      description: "Description for Event 14",
      day: "2023-08-30",
      starttime: { hour: 21, minute: 21 },
      endtime: { hour: 3, minute: 51 },
    },
    {
      _id: 15,
      title: "Event title 15",
      description: "Description for Event 15",
      day: "2023-08-28",
      starttime: { hour: 12, minute: 15 },
      endtime: { hour: 17, minute: 14 },
    },
    {
      _id: 16,
      title: "Event title 16",
      description: "Description for Event 16",
      day: "2023-09-01",
      starttime: { hour: 16, minute: 36 },
      endtime: { hour: 7, minute: 45 },
    },
    {
      _id: 17,
      title: "Event title 17",
      description: "Description for Event 17",
      day: "2023-09-31",
      starttime: { hour: 3, minute: 54 },
      endtime: { hour: 5, minute: 36 },
    },
    {
      _id: 18,
      title: "Event title 18",
      description: "Description for Event 18",
      day: "2023-09-01",
      starttime: { hour: 19, minute: 9 },
      endtime: { hour: 22, minute: 19 },
    },
    {
      _id: 19,
      title: "Event title 19",
      description: "Description for Event 19",
      day: "2023-09-30",
      starttime: { hour: 22, minute: 2 },
      endtime: { hour: 7, minute: 20 },
    },
    {
      _id: 20,
      title: "Event title 20",
      description: "Description for Event 20",
      day: "2023-09-26",
      starttime: { hour: 20, minute: 8 },
      endtime: { hour: 14, minute: 44 },
    },
  ],
  filter: {
    select: {
      date: null,
      month: null,
      year: null,
    },
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
  },
});

export const { selectedDate, selectedMonth, selectedYear } = eventSlice.actions;

export default eventSlice.reducer;
