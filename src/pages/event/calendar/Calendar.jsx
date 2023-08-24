import React from "react";
import SingleDate from "./SingleDate";
import SingleDay from "./SingleDay";

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Calendar = () => {
  return (
    <>
      <div className="w-full px-4">
        <div className="flex justify-between items-center font-semibold text-dark-light border-b-2 border-b-gray-800 pb-10 mb-7">
          {daysOfWeek?.map((day) => (
            <SingleDay key={day}> {day}</SingleDay>
          ))}
        </div>
        <div className="w-full flex flex-col gap-10 2xl:gap-14 ">
          <div className="flex justify-between items-start ">
            {daysOfWeek?.map((day, index) => (
              <SingleDate key={day}> 0{index + 1}</SingleDate>
            ))}
          </div>
          <div className="flex justify-between items-start ">
            {daysOfWeek?.map((day, index) => (
              <SingleDate key={day}> 0{index + 1}</SingleDate>
            ))}
          </div>

          <div className="flex justify-between items-start ">
            <SingleDate>
              <span>01</span>
              <div className=" -m-2 flex flex-wrap px-4">
                <span style={{ lineHeight: "10px" }}>.</span>
                <span style={{ lineHeight: "10px" }}>.</span>
                <span style={{ lineHeight: "10px" }}>.</span>
                <span style={{ lineHeight: "10px" }}>.</span>
                <span style={{ lineHeight: "10px" }}>.</span>
                <span style={{ lineHeight: "10px" }}>.</span>
                <span style={{ lineHeight: "10px" }}>.</span>
                <span style={{ lineHeight: "10px" }}>.</span>
                <span style={{ lineHeight: "10px" }}>.</span>
              </div>
            </SingleDate>
            <SingleDate> 01</SingleDate>
            <SingleDate> 02</SingleDate>
            <SingleDate> 03</SingleDate>
            <SingleDate> 04</SingleDate>
            <SingleDate> 05</SingleDate>
            <SingleDate> 06</SingleDate>
          </div>

          <div className="flex justify-between items-start ">
            {daysOfWeek?.map((day, index) => (
              <SingleDate key={day}> 0{index + 1}</SingleDate>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
