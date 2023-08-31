import React from "react";
import { daysOfWeek } from "../../../data/calenderData";
import BigShowMonth from "./BigShowMonth";
import useCurrentDMY from "../../../hooks/useCurrentDMY";

const BigCalendar = ({ currMonth, currYear }) => {
  const { currentDay, currentMonth, currentYear } = useCurrentDMY();
  //TODO
  console.log("BigCalendar");
  return (
    <div className="w-full overflow-scroll  mx-2 sm:mx-5">
      <div className="w-[914px] xl:w-full lg:h-[720px] overflow-y-scroll">
        <div className="flex space-x-5 justify-between w-full text-xl font-medium text-dark-light mb-8">
          {daysOfWeek?.map((day) => (
            <div
              key={day}
              className={`w-full p-2 pt-0 ${
                currentDay === day &&
                currentMonth === currMonth &&
                currentYear === currYear &&
                " text-primary"
              }`}>
              {day}
            </div>
          ))}
        </div>
        <BigShowMonth month={currMonth} year={currYear} />
      </div>
    </div>
  );
};

export default React.memo(BigCalendar);

{
  /* <div className="w-full flex flex-col gap-2">
  <div className="w-full text-start">
    <h1 className="text-[15.5px] leading-5 font-medium">
      Project overview and analysis
    </h1>
    <h5 className=" text-sm text-dark-light">11:00 - 12:30 PM</h5>
  </div>
  <div className="w-full text-start">
    <h1 className="text-[15.5px] leading-5 font-medium">
      Project overview and analysis
    </h1>
    <h5 className=" text-sm text-dark-light">11:00 - 12:30 PM</h5>
  </div>
  <div className="w-full text-start text-sm">And 3 more</div>
</div>; */
}
