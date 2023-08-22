import React from "react";
import FilterTasks from "./FilterTasks";

const TaskGroup = ({ title, taskCount, children }) => {
  // Function to select border and background color based on task status
  function borderBgColorSelector(id) {
    const colorMap = {
      Start: "border-[#38bdf8]",
      "In Process": "border-[#ec4899]",
      "On Hold": "border-[#FB923C]",
      Done: "border-[#4ADE80]",
    };
    // Use a default gray color if the status is not in the map
    return colorMap[id] || "border-gray-500";
  }

  //TODO
  console.log("%cTaskGroup = ", "color:yellow", title);

  return (
    <div>
      {/* Task group header */}
      <div className="px-4 pr-2 flex justify-between items-start pb-5 border-b-2 border-dark">
        <div>
          <h1 className="text-3xl font-bold flex items-center justify-start gap-3">
            {/* Task group title */}
            <span>{title}</span>
            {/* Colored status indicator */}
            <div
              className={`h-4 w-4 border-[3px] ${borderBgColorSelector(
                title
              )} rounded-full`}></div>
          </h1>
          {/* Task count */}
          <p className="text-sm text-dark-light">{taskCount} Tasks</p>
        </div>
        {/* Filter tasks component */}
        <FilterTasks title={title} />
      </div>
      {/* Task list */}
      <div className="min-h-[25rem] lg:max-h-[45.3rem] 2xl:max-h-[40.7rem] overflow-scroll overflow-x-hidden scroll-m-1 w-full task">
        {children}
      </div>
    </div>
  );
};

export default TaskGroup;
