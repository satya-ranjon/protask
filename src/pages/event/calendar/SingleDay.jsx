import React from "react";

const SingleDay = ({ children }) => {
  return (
    <span className="text-xl w-14 flex flex-col justify-start items-center">
      {children}
    </span>
  );
};

export default SingleDay;
