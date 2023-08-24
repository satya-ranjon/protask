import React from "react";
import SingleDate from "./CurrentDate";
import SingleDay from "./SingleDay";
import { useState } from "react";
import ShowMonth from "./ShowMonth";

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Calendar = ({ currMonth, currYear }) => {
  const today = new Date();
  const currentDayIndex = today.getDay(); // Returns a number (0 for Sunday, 1 for Monday, etc.)
  const currentDay = daysOfWeek[currentDayIndex];
  const currentMonth = today.getMonth();

  return (
    <>
      <div className="w-full px-4">
        <div className="flex justify-between items-center font-semibold text-dark-light border-b-2 border-b-gray-800 pb-10 mb-7">
          {daysOfWeek?.map((day) => (
            <SingleDay
              key={day}
              txtColor={
                currentDay === day &&
                currentMonth === currMonth &&
                "text-primary"
              }>
              {day}
            </SingleDay>
          ))}
        </div>
        <ShowMonth year={currYear} month={currMonth} />
      </div>
    </>
  );
};

export default Calendar;

//  <SingleDate>
//    <span>01</span>
//    <div className=" -m-2 flex flex-wrap px-4">
//      <span style={{ lineHeight: "10px" }}>.</span>
//      <span style={{ lineHeight: "10px" }}>.</span>
//      <span style={{ lineHeight: "10px" }}>.</span>
//      <span style={{ lineHeight: "10px" }}>.</span>
//      <span style={{ lineHeight: "10px" }}>.</span>
//      <span style={{ lineHeight: "10px" }}>.</span>
//      <span style={{ lineHeight: "10px" }}>.</span>
//      <span style={{ lineHeight: "10px" }}>.</span>
//      <span style={{ lineHeight: "10px" }}>.</span>
//    </div>
//  </SingleDate>;