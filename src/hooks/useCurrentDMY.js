import { daysOfWeek } from "../data/calenderData";

const useCurrentDMY = () => {
  const today = new Date();
  const currentDayIndex = today.getDay();
  const currentDay = daysOfWeek[currentDayIndex];
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  return { currentDay, currentMonth, currentYear };
};

export default useCurrentDMY;
