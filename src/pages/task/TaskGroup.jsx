import React from "react";
import TaskStatus from "./TaskStatusChange";
import TaskSelector from "./TaskSelector";

const TaskGroup = ({ title, taskCount, children }) => {
  return (
    <div>
      <div className=" px-4 flex justify-between items-start pb-5 border-b-2 border-dark">
        <div>
          <h1 className=" text-3xl font-bold">{title}</h1>
          <p className="text-sm text-dark-light">{taskCount} Tasks</p>
        </div>
        {/* <TaskSelector /> */}
        <TaskStatus />
      </div>
      <div
        className=" lg:h-[45.3rem] 2xl:h-[40.7rem] overflow-scroll overflow-x-hidden
      scroll-m-1 w-full task">
        {children}
      </div>
    </div>
  );
};

export default TaskGroup;
