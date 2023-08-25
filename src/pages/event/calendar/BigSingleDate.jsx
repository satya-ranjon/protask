import React from "react";

const BigSingleDate = ({
  date,
  currentDate = true,
  active = false,
  children,
}) => {
  return (
    <div
      className={`w-full h-[255px] xl:h-56 border-t-2 cursor-pointer  p-2  ${
        active ? " border-t-primary bg-hover" : "border-t-gray-800"
      }`}>
      <h1
        className={`${!currentDate && "text-zinc-300"} ${
          active && "text-primary"
        }`}>
        {date}
      </h1>
      {children}
    </div>
  );
};

export default BigSingleDate;
