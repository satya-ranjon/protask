import React from "react";
import { v4 as uniqID } from "uuid";
import CurrentDate from "./CurrentDate";
import NotCurrentDate from "./NotCurrentDate";
import { useState } from "react";

const ShowMonth = ({ year, month }) => {
  const [currDay, setCurrDay] = useState(new Date().getDate());

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
        <div key={uniqID()} className="flex justify-between items-start ">
          {daysRow}
        </div>
      );
      daysRow = [];
    } else if (day === 1) {
      let k = lastDayOfLastMonth - firstDayOfMonth + 1;

      // not-current
      for (let j = 0; j < firstDayOfMonth; j++) {
        daysRow.push(<NotCurrentDate key={uniqID()}>{k}</NotCurrentDate>);
        k++;
      }
    }

    const today = new Date();
    const chkY = today.getFullYear();
    const chkM = today.getMonth();

    if (chkY === year && chkM === month && day === currDay) {
      daysRow.push(
        <CurrentDate key={uniqID()} txtColor="text-primary">
          {day}
        </CurrentDate>
      );
    } else {
      daysRow.push(<CurrentDate key={uniqID()}> {day}</CurrentDate>);
    }

    if (dow === 6 || day === lastDateOfMonth) {
      let x = 1;
      while (dow < 6) {
        daysRow.push(<NotCurrentDate key={uniqID()}>{x}</NotCurrentDate>);
        dow++;
        x++;
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

  return <div className="w-full flex flex-col gap-10  ">{calendarRows}</div>;
};

export default ShowMonth;
