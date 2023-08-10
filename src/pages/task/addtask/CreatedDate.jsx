import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";

const CreatedDate = ({ date }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formatDate =
    date && new Intl.DateTimeFormat("en-US", options).format(new Date(date));

  return (
    <div className="flex justify-start items-center w-full text-dark-light text-sm">
      {/* Dropdown header */}
      <div className="w-[25%] flex justify-start items-center gap-2 p-1 ">
        <MdOutlineAccessTime className="text-xl" />
        <span>Created</span>
      </div>
      {/* Dropdown content */}
      <div className="w-[75%]  p-2 duration-300 transition-colors relative">
        <div className="w-full">
          <span>{formatDate}</span>
        </div>
      </div>
    </div>
  );
};

export default CreatedDate;
