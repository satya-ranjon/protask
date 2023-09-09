import { FiUsers } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useState } from "react";
import { useRef } from "react";
import SelectedSleipners from "./SelectedSleipners";
import SleipnerList from "./SleipnerList";

const AddSleipnerToProject = ({
  initialState = [],
  getSelectedSleipner = () => {},
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const handleSelectedSleipners = (value) => {
    const findSleipner = initialState?.find((item) => item._id === value._id);
    if (!findSleipner) getSelectedSleipner([...initialState, value]);
  };

  const handleSelectedSleipnersRemove = (id, event) => {
    event.stopPropagation();
    const newSleipners = initialState?.filter((item) => item._id !== id);
    getSelectedSleipner(newSleipners);
  };

  return (
    <div
      ref={dropdownRef}
      className="flex justify-start items-center w-full text-dark-light text-sm mt-2 z-10">
      {/* Access Label */}
      <div className="w-[25%] flex justify-start items-center gap-2 p-1 text-lg ">
        <FiUsers />
        <span className="text-sm">Access</span>
      </div>

      {/* Dropdown Section */}
      <div className="w-[75%] flex justify-start items-center gap-3 relative">
        {/* Add Button */}
        <button
          className="flex items-center justify-center w-10 h-10 p-2 text-xl font-medium text-white border-2 border-white bg-dark rounded-full"
          onClick={() => setIsDropdownOpen(true)}>
          <IoIosAdd />
        </button>
        <SelectedSleipners
          sleipners={initialState}
          getSleipnerIdOrEvent={handleSelectedSleipnersRemove}
        />

        {/* Dropdown Content */}
        {isDropdownOpen && (
          <div className="absolute w-full max-w-[800px] z-50 top-0 bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-2 min-h-[200px]">
            <div className="flex w-full bg-gray-200 p-1 z-50 flex-wrap mb-2">
              {/* Search input */}
              <input
                type="text"
                name="search"
                placeholder="Search Sleipner Email Or Name"
                className="bg-transparent w-full p-1 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Selected Sleipners */}
            <SelectedSleipners
              sleipners={initialState}
              getSleipnerIdOrEvent={handleSelectedSleipnersRemove}
            />

            {/* Sleipners List */}
            <SleipnerList
              searchQuery={searchQuery}
              getSleipner={handleSelectedSleipners}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSleipnerToProject;
