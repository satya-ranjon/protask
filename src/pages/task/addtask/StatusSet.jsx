import { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../../services/task/createTaskSlice";
import selectStatusBgColor from "../../../utils/selectStatusBgColor";

// Initial status options
// const initialStatus = [
//   { id: "1", status: "Start", color: "bg-red-200" },
//   { id: "2", status: "In Process", color: "bg-teal-200" },
//   { id: "3", status: "On Hold", color: "bg-orange-200" },
//   { id: "4", status: "Done", color: "bg-green-200" },
// ];

const initialStatus = ["Start", "In Process", "On Hold", "Done"];

const StatusSet = () => {
  // To control the open/close state of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // To hold the search query entered by the user
  const [searchQuery, setSearchQuery] = useState("");
  // To store the filtered status options
  const [filteredData, setFilteredData] = useState(initialStatus);

  const status = useSelector((state) => state.createTask.status);

  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  // Function to handle opening/closing of the dropdown
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

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

  // Function to handle search input changes
  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    filterData(value);
  };

  // Function to filter data based on the search query
  const filterData = (query) => {
    const filtered = initialStatus.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Function to handle selecting a status option
  const selectStatus = (status) => {
    dispatch(updateStatus(status));
    // Close the dropdown
    setIsOpen(false);
  };

  // Function to remove the selected status
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
      <div className="w-[75%]  hover:bg-gray-100 p-2 duration-300 transition-colors relative">
        <div className="w-full cursor-pointer" onClick={handleIsOpen}>
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
          <div className="absolute w-full top-0 left-0 bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-2 z-50">
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
                onChange={handleSearchInputChange}
                value={searchQuery}
              />
            </div>
            <p className="text-xs mt-1 text-dark-light">
              Select an option from the Status
            </p>
            {/* Status options */}
            <div className="flex flex-col gap-2 mt-2">
              {filteredData?.map((item) => (
                <div
                  className="cursor-pointer"
                  key={item}
                  onClick={() => selectStatus(item)}>
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
