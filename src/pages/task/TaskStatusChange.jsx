import React, { useEffect, useRef, useState } from "react";
import { TiTick } from "react-icons/ti";
import { RxDotFilled } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import taskStatus from "../../data/taskStatus";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../../services/task/taskApi";
import { useDeleteTagMutation } from "../../services/user/userApi";

const TaskStatusChange = ({ id, status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleTask = () => {
    setIsOpen((prv) => !prv);
  };

  const dropdownRef = useRef(null);

  // Function to handle clicks outside the dropdown
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const handleUpdate = (value) => {
    updateTask({ data: { status: value }, taskId: id });
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="text-xs cursor-pointer " onClick={handleTask}>
        <RxDotFilled />
        <RxDotFilled />
      </div>
      {isOpen && (
        <div className=" absolute bg-white right-5 -top-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <ul className=" w-max text-xs font-normal text-dark-light">
            {taskStatus.map((item, index) => (
              <li
                onClick={() => handleUpdate(item)}
                key={item + index}
                className={` ${
                  status === item && "text-primary"
                } cursor-pointer hover:text-primary duration-200 transition-colors  px-4 py-2 w-full flex justify-between  items-center gap-3`}>
                <span>{item}</span> <TiTick />
              </li>
            ))}
            <li
              className={` text-red-400  cursor-pointer hover:text-primary duration-200 transition-colors  px-4 py-2 w-full flex justify-start  items-center gap-3`}
              onClick={handleDelete}>
              <AiFillDelete className="text-sm" />
              <span className="text-xs font-semibold">Delete</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskStatusChange;
