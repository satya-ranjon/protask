import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { RxDotFilled } from "react-icons/rx";

const TaskStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleTask = () => {
    setIsOpen((prv) => !prv);
  };
  return (
    <div className="relative">
      <div className="text-xs cursor-pointer " onClick={handleTask}>
        <RxDotFilled />
        <RxDotFilled />
      </div>
      {isOpen && (
        <div className=" absolute bg-white right-0 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <ul className=" w-max text-xs font-normal text-dark-light">
            <li className=" cursor-pointer hover:text-primary duration-200 transition-colors  px-4 py-2 w-full flex justify-between text-primary items-center gap-3">
              <span>Start</span> <TiTick />
            </li>
            <li className=" cursor-pointer hover:text-primary duration-200 transition-colors px-4 py-2 w-full flex justify-between items-center gap-3">
              <span> In Progress</span> <TiTick />
            </li>
            <li className=" cursor-pointer hover:text-primary duration-200 transition-colors px-4 py-2 w-full flex justify-between items-center gap-3">
              <span>On Hold</span> <TiTick />
            </li>
            <li className=" cursor-pointer hover:text-primary duration-200 transition-colors  px-4 py-2 w-full flex justify-between items-center gap-3">
              <span>Done</span> <TiTick />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskStatus;
