import React from "react";

const BigSingleDate = ({ date, children }) => {
  return (
    <div className="w-full h-52 border-t-2 border-t-gray-800">
      <h1>{date}</h1>
      {children}
    </div>
  );
};

export default BigSingleDate;
