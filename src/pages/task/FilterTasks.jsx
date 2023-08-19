import React, { useRef, useState } from "react";
import { BsThreeDotsVertical, BsArrowUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../services/task/taskSlice";
import useOutsideClick from "../../hooks/useOutsideClick";
import { selectTaskOrder } from "../../services/task/taskSelector";

const FilterTasks = ({ title }) => {
  // State to control the dropdown's open/closed state
  const [isOpen, setIsOpen] = useState(false);

  // Ref for the dropdown element
  const dropdownRef = useRef(null);

  // Redux dispatch function
  const dispatch = useDispatch();

  const taskFilterOrder = useSelector((state) => selectTaskOrder(state, title));

  // Function to toggle the dropdown open/closed state
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Custom hook to handle clicks outside the dropdown
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  // Component for each dropdown option
  const DropdownOption = ({ label, value }) => (
    <div
      className={`${
        taskFilterOrder === value && "text-primary"
      } w-full p-2 gap-2 cursor-pointer hover:text-primary duration-300 transition-colors flex justify-start items-center`}
      onClick={() => {
        // Dispatch the updateFilter action when a dropdown option is clicked
        dispatch(updateFilter({ id: title, order: value }));
      }}>
      <BsArrowUp /> <span>{label}</span>
    </div>
  );

  return (
    <div ref={dropdownRef} className="relative">
      <div
        className="p-1 rounded-full w-10 h-10 cursor-pointer duration-300 transition-colors hover:bg-slate-100 flex items-center justify-center"
        onClick={toggleDropdown}>
        <BsThreeDotsVertical className="text-xl" />
      </div>
      {isOpen && (
        <div className="p-1 absolute -left-28 top-0 w-fit text-center flex flex-col justify-start items-center bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-xs">
          {/* Render the DropdownOption for Oldest First */}
          <DropdownOption label="Oldest First" value="oldest" />

          {/* Render the DropdownOption for Newest First */}
          <DropdownOption label="Newest First" value="newest" />
        </div>
      )}
    </div>
  );
};

export default FilterTasks;
