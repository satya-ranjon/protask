import React from "react";
import { v4 as uniqID } from "uuid";
import BigSingleDate from "./BigSingleDate";

const BigShowMonth = ({ year, month }) => {
  //TODO
  console.log("BigShowMonth");
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
        <div
          key={uniqID()}
          className="mt-2 flex space-x-2 xl:space-x-4 justify-between w-full text-4xl font-medium text-gray-800">
          {daysRow}
        </div>
      );
      daysRow = [];
    } else if (day === 1) {
      let k = lastDayOfLastMonth - firstDayOfMonth + 1;

      // not-current
      for (let j = 0; j < firstDayOfMonth; j++) {
        daysRow.push(
          <BigSingleDate
            currentDate={false}
            key={uniqID()}
            date={k}></BigSingleDate>
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
        <BigSingleDate active={true} key={uniqID()} date={day}></BigSingleDate>
      );
    } else {
      daysRow.push(<BigSingleDate key={uniqID()} date={day}></BigSingleDate>);
    }

    if (dow === 6 || day === lastDateOfMonth) {
      // not-current
      for (let x = 1; dow < 6; x++, dow++) {
        daysRow.push(
          <BigSingleDate
            currentDate={false}
            key={uniqID()}
            date={x}></BigSingleDate>
        );
      }

      calendarRows.push(
        <div
          key={uniqID()}
          className="mt-2 flex space-x-2 xl:space-x-4 justify-between w-full text-4xl font-medium text-gray-800">
          {daysRow}
        </div>
      );
      daysRow = [];
    }

    day++;
    dow = (dow + 1) % 7;
  }

  return calendarRows;
};

export default BigShowMonth;
