import { createSelector } from "reselect";

export const selectSelectedDate = (state) => state.events.filter.select.date;
export const selectCreatedEvent = (state) => state.events.create;
export const selectCreatedEventDate = (state) => state.events.create.date;
export const selectCreatedEventStartTime = (state) =>
  state.events.create.starttime;
export const selectCreatedEventEndTime = (state) => state.events.create.endtime;

export const selectFilterSelectMonth = (state) =>
  state.events.filter.select.month;

export const selectFilterSelectYear = (state) =>
  state.events.filter.select.year;

export const selectSelectedUpdateEventId = (state) => state.events.update._id;
export const selectSelectedUpdateEvent = (state) => state.events.update;

// Memoized selector selectFilterSelectYear
// export const selectMemoizedFilterSelectYear = createSelector();
