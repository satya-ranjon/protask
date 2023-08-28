import React from "react";

const SingleDay = ({ day, cls, selectedDay }) => {
  return (
    <td
      className={`py-3 px-4 hover:bg-hover text-center cursor-pointer ${cls}`}
      onClick={() => selectedDay(day)}>
      {day}
    </td>
  );
};

export default SingleDay;
