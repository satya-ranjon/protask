import React from "react";
import SingleDay from "./SingleDay";
import ShowMonth from "./ShowMonth";
import { daysOfWeek } from "../../../data/calenderData";
import useCurrentDMY from "../../../hooks/useCurrentDMY";

const Calendar = ({ currMonth, currYear }) => {
  const { currentDay, currentMonth, currentYear } = useCurrentDMY();

  return (
    <div className="w-full px-4">
      <div className="flex justify-between items-center font-medium text-dark-light border-b-2 border-b-gray-800 pb-10 mb-7">
        {daysOfWeek?.map((day) => (
          <SingleDay
            key={day}
            active={
              currentDay === day &&
              currentMonth === currMonth &&
              currentYear === currYear
            }>
            {day}
          </SingleDay>
        ))}
      </div>
      <ShowMonth year={currYear} month={currMonth} />
    </div>
  );
};

export default React.memo(Calendar);
