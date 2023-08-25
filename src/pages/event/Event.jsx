import React from "react";
import Calendar from "./calendar/Calendar";
import { GrNext, GrPrevious } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import CreateButton from "../../components/common/CreateButton";
import SingleEvent from "../../components/event/SingleEvent";
import { useState } from "react";
import EventHeader from "./EventHeader";
import EventGroup from "./EventGroup";

const Event = () => {
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [currYear, setCurrYear] = useState(new Date().getFullYear());

  const nextMonth = () => {
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  const previousMonth = () => {
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };
  return (
    <>
      <EventHeader
        currMonth={currMonth}
        currYear={currYear}
        nextMonth={nextMonth}
        previousMonth={previousMonth}
      />
      <div className="2xl:mx-14 flex flex-col lg:flex-row justify-between lg:gap-7 xl:gap-14">
        <Calendar currMonth={currMonth} currYear={currYear} />
        <EventGroup />
      </div>
    </>
  );
};

export default Event;
