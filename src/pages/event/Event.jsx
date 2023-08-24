import React from "react";
import Calendar from "./calendar/Calendar";

const Event = () => {
  return (
    <div className="2xl:mx-14 flex flex-col lg:flex-row justify-between">
      <div className="w-full">
        <Calendar />
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default Event;
