import React from "react";

const SingleDay = ({ txtColor, children }) => {
  return (
    <span
      className={`text-xl w-14 flex flex-col justify-start items-center ${txtColor}`}>
      {children}
    </span>
  );
};

export default SingleDay;
