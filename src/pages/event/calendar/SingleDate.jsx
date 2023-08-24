import React from "react";

const SingleDate = ({ children }) => {
  return (
    <span className=" text-3xl w-14 h-16 flex flex-col justify-start items-center font-medium text-gray-700">
      {children}
    </span>
  );
};

export default SingleDate;
