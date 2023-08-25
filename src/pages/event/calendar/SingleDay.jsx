import React from "react";

const SingleDay = ({ active = false, children }) => {
  return (
    <span
      className={`text-xl w-14 flex flex-col justify-start items-center ${
        active && "text-primary"
      }`}>
      {children}
    </span>
  );
};

export default SingleDay;
