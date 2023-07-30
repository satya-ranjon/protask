import React from "react";
import TaskStatus from "./TaskStatus";
import convertISOToCustomFormat from "../../utils/convertISOToCustomFormat";

const SingleTask = () => {
  return (
    <div className="py-3 px-4 cursor-pointer border-t-2 border-gray-100 duration-300 transition-colors hover:bg-[#f1f0ec] singleTask">
      <div className=" flex justify-between items-start">
        <div>
          <h1 className=" font-semibold text-dark text-xl  singleTaskTitle">
            Complete Inspections
          </h1>
          <p className=" text-sm  pt-2 pb-4 text-dark-light">
            Complete municipality and internal inspections Complete municipality
            and internal inspections municipality and internal inspections
            municipality and internal inspections
          </p>
        </div>
        <TaskStatus />
      </div>
      <span className=" bg-slate-100 text-xs font-normal text-dark-light p-2 px-3 mr-2">
        React.js
      </span>
      <span className=" bg-slate-100 text-xs font-normal text-dark-light p-2 px-3 mr-2">
        Javascript
      </span>
      <div className="flex justify-between w-full items-center py-4">
        <p className=" text-dark-light text-base font-medium">
          {/* {convertISOToCustomFormat("2023-07-25T13:54:26.324+00:00")} */}
          {convertISOToCustomFormat("2023-07-30T19:17:05.222Z")}
        </p>
        <div className="flex">
          <img
            className="w-8 h-8 rounded-full border-2 border-white"
            src="http://source.unsplash.com/100x100/?woman"
            alt=""
          />
          <img
            className="w-8 h-8 rounded-full border-2 border-white -ml-3"
            src="http://source.unsplash.com/100x100/?woman"
            alt=""
          />
          <span className="flex items-center justify-center font-semibold text-gray-600 text-xs w-8 h-8 rounded-full bg-gray-200 border-2 border-white -ml-3">
            +3
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
