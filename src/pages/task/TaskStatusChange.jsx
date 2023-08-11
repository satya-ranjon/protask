import React, { useRef, useState } from "react";
import taskStatus from "../../data/taskStatus";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../../services/task/taskApi";
import useOutsideClick from "../../hooks/useOutsideClick";
import DropdownIcon from "../../components/common/DropdownIcon";
import StatusOption from "../../components/common/StatusOption";
import DeleteOption from "../../components/common/DeleteOption";

const TaskStatusChange = ({ id, status }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown when the dropdown icon is clicked
  const handleTask = () => {
    setIsOpen((prev) => !prev);
  };

  const dropdownRef = useRef(null);

  // Mutation for updating task status
  const [updateTask] = useUpdateTaskMutation();

  // Mutation for deleting the task
  const [deleteTask] = useDeleteTaskMutation();

  // Handle task status update
  const handleUpdate = (newStatus) => {
    updateTask({ data: { status: newStatus }, taskId: id });
  };

  // Handle task deletion
  const handleDelete = () => {
    deleteTask(id);
  };

  // Custom hook to handle clicks outside the dropdown
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown icon */}
      <DropdownIcon onClick={handleTask} />

      {isOpen && (
        <div className="absolute bg-white right-5 -top-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <ul className="w-max text-xs font-normal text-dark-light">
            {/* Render each status change option */}
            {taskStatus.map((item, index) => (
              <StatusOption
                key={item + index}
                status={item}
                isSelected={status === item}
                onClick={() => handleUpdate(item)}
              />
            ))}
            {/* Render the delete option */}
            <DeleteOption onClick={handleDelete} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskStatusChange;
