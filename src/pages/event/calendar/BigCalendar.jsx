import React from "react";
import { daysOfWeek } from "../../../data/calenderData";
import BigSingleDate from "./BigSingleDate";

const BigCalendar = () => {
  return (
    <div className="w-full overflow-scroll overflow-y-hidden mx-2 sm:mx-5">
      <div className="w-full min-w-[914px] ">
        <div className="flex space-x-5 justify-between w-full text-xl font-medium text-dark-light">
          {daysOfWeek?.map((day) => (
            <div key={day} className="w-full">
              {day}
            </div>
          ))}
        </div>
        <div className="mt-10 flex space-x-5 justify-between w-full text-4xl font-medium text-gray-800">
          <BigSingleDate date="00"></BigSingleDate>
          <BigSingleDate date="00"></BigSingleDate>
          <BigSingleDate date="00"></BigSingleDate>
          <BigSingleDate date="00"></BigSingleDate>
          <BigSingleDate date="00"></BigSingleDate>
          <BigSingleDate date="00"></BigSingleDate>
          <BigSingleDate date="00"></BigSingleDate>
        </div>
      </div>
    </div>
  );
};

export default BigCalendar;

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
