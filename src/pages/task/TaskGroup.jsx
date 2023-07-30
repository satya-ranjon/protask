import React from "react";
import TaskStatus from "./TaskStatus";

const TaskGroup = ({ title, taskCount, children }) => {
  return (
    <div className="px-4">
      <div className=" flex justify-between items-start pb-5 border-b-2 border-dark">
        <div>
          <h1 className=" text-2xl font-bold">{title}</h1>
          <p className="text-sm text-dark-light">{taskCount} Tasks</p>
        </div>
        <TaskStatus />
      </div>
      <div
        className="max-h-[39.6rem] sm:max-h-[45.3rem] 2xl:max-h-[40.7rem] overflow-scroll overflow-x-hidden
      scroll-m-1 w-full task">
        {children}
      </div>
    </div>
  );
};

export default TaskGroup;
