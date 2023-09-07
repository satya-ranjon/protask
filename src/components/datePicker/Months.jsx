import React from "react";
import { v4 as uniqID } from "uuid";
import SingleDay from "./SingleDay";

const Months = ({ year, month, selectedDay }) => {
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
      calendarRows.push(<tr key={uniqID()}>{daysRow}</tr>);
      daysRow = [];
    } else if (day === 1) {
      let k = lastDayOfLastMonth - firstDayOfMonth + 1;

      // not-current
      for (let j = 0; j < firstDayOfMonth; j++) {
        daysRow.push(
          <td key={uniqID()} className="py-3 px-4 text-center text-zinc-200 ">
            {k}
          </td>
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
        <SingleDay
          selectedDay={selectedDay}
          day={day}
          key={uniqID()}
          cls=" text-primary"
        />
      );
    } else {
      daysRow.push(
        <SingleDay selectedDay={selectedDay} day={day} key={uniqID()} />
      );
    }

    if (dow === 6 || day === lastDateOfMonth) {
      // not-current
      for (let x = 1; dow < 6; x++, dow++) {
        daysRow.push(
          <td key={uniqID()} className="py-3 px-4 text-center text-zinc-200 ">
            {x}
          </td>
        );
      }

      calendarRows.push(<tr key={uniqID()}>{daysRow}</tr>);
      daysRow = [];
    }

    day++;
    dow = (dow + 1) % 7;
  }

  return <>{calendarRows}</>;
};

export default Months;
