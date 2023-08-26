function findEventsByDate(eventsList, targetDate) {
  const matchingEvents = [];

  for (const event of eventsList) {
    if (event.day === targetDate) {
      matchingEvents.push(event);
    }
  }

  return matchingEvents;
}
export default findEventsByDate;
