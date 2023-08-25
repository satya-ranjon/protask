import React from "react";
import { v4 as uniqID } from "uuid";
import SingleDate from "./SingleDate";
import { useState } from "react";

const ShowMonth = ({ year, month }) => {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
  const lastDayOfLastMonth =
    month === 0
      ? new Date(year - 1, 11, 0).getDate()
      : new Date(year, month, 0).getDate();

  const calendarRows = [];
  let daysRow = [];
  let day = 1;
  let dow = firstDayOfMonth;

  while (day <= lastDateOfMonth) {
    if (dow === 0) {
      calendarRows.push(
        <div key={uniqID()} className="flex justify-between items-start">
          {daysRow}
        </div>
      );
      daysRow = [];
    } else if (day === 1) {
      let k = lastDayOfLastMonth - firstDayOfMonth + 1;

      // not-current
      for (let j = 0; j < firstDayOfMonth; j++) {
        daysRow.push(
          <SingleDate currentDate={false} key={uniqID()}>
            {k}
          </SingleDate>
        );
        k++;
      }
    }

    const today = new Date();
    const chkY = today.getFullYear();
    const chkM = today.getMonth();
    const currDay = new Date().getDate();

    if (chkY === year && chkM === month && day === currDay) {
      daysRow.push(
        <SingleDate active={true} key={uniqID()} txtColor="text-primary">
          {day < 10 ? `0${day}` : day}
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
      );
    } else {
      daysRow.push(
        <SingleDate key={uniqID()}> {day < 10 ? `0${day}` : day}</SingleDate>
      );
    }

    if (dow === 6 || day === lastDateOfMonth) {
      // not-current
      for (let x = 1; dow < 6; x++, dow++) {
        daysRow.push(
          <SingleDate currentDate={false} key={uniqID()}>
            {x < 10 ? `0${x}` : x}
          </SingleDate>
        );
      }

      calendarRows.push(
        <div key={uniqID()} className="flex justify-between items-start ">
          {daysRow}
        </div>
      );
      daysRow = [];
    }

    day++;
    dow = (dow + 1) % 7;
  }

  return (
    <div className="w-full flex flex-col gap-10 xl:max-h-[590px] 2xl:max-h-[620px] 3xl:max-h-none overflow-scroll  ">
      {calendarRows}
    </div>
  );
};

export default ShowMonth;
