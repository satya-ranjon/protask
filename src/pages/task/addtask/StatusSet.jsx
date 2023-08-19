import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../../services/task/taskSlice";
import selectStatusBgColor from "../../../utils/selectStatusBgColor";
import taskStatus from "../../../data/taskStatus";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { selectTaskStatus } from "../../../services/task/taskSelector";

const StatusSet = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStatusOptions, setFilteredStatusOptions] =
    useState(taskStatus);

  // Redux
  const status = useSelector(selectTaskStatus);
  const dispatch = useDispatch();

  // Ref for the dropdown
  const dropdownRef = useRef(null);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle clicks outside the dropdown
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  // Handle search input changes and filter the status options
  useEffect(() => {
    const filterData = () => {
      const filtered = taskStatus.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStatusOptions(filtered);
    };
    filterData();
  }, [searchQuery]);

  // Handle selecting a status option
  const selectStatusOption = (selectedStatus) => {
    dispatch(updateStatus(selectedStatus));
    setIsOpen(false); // Close the dropdown
  };

  // Handle removing the selected status
  const removeStatus = (e) => {
    e.stopPropagation();
    dispatch(updateStatus(""));
  };

  return (
    <div
      ref={dropdownRef}
      className="flex justify-start items-center w-full text-dark-light text-sm">
      {/* Dropdown header */}
      <div className="w-[25%] flex justify-start items-center gap-2 p-1 ">
        <MdOutlineArrowDropDownCircle className="text-xl" />
        <span>Status</span>
      </div>
      {/* Dropdown content */}
      <div className="w-[75%] hover:bg-gray-100 p-2 duration-300 transition-colors relative">
        <div className="w-full cursor-pointer" onClick={toggleDropdown}>
          {/* Display the selected status or "Empty" */}
          {status ? (
            <span
              className={`${selectStatusBgColor(
                status
              )} text-dark p-1 px-2 text-xs rounded-sm`}>
              {status}
            </span>
          ) : (
            <span>Empty</span>
          )}
        </div>
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute w-full top-0 left-0 bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-2 z-[9999]">
            <div className="flex w-full bg-gray-200 p-1">
              {/* Display the selected status (if any) with a close button */}
              {status && (
                <span
                  className={`${selectStatusBgColor(
                    status
                  )} text-dark p-1 px-2 text-xs rounded-sm flex justify-start gap-1 items-center min-w-fit`}>
                  <p> {status} </p>
                  <AiOutlineClose
                    className="cursor-pointer"
                    onClick={(e) => removeStatus(e)}
                  />
                </span>
              )}
              {/* Search input */}
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="bg-transparent w-full p-1 outline-none"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </div>
            <p className="text-xs mt-1 text-dark-light">
              Select an option from the Status
            </p>
            {/* Status options */}
            <div className="flex flex-col gap-2 mt-2">
              {filteredStatusOptions?.map((item) => (
                <div
                  className="cursor-pointer"
                  key={item}
                  onClick={() => selectStatusOption(item)}>
                  <span
                    className={`p-1 px-3 text-dark ${selectStatusBgColor(
                      item
                    )}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusSet;
