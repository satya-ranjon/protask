export const selectSelectedDate = (state) => state.events.filter.select.date;
export const selectCreatedEvent = (state) => state.events.create;
export const selectCreatedEventDate = (state) => state.events.create.date;
export const selectCreatedEventStartTime = (state) =>
  state.events.create.starttime;
export const selectCreatedEventEndTime = (state) => state.events.create.endtime;
