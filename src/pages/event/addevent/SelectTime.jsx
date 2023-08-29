import { useRef, useState } from "react";
import { CiTimer, CiViewTimeline } from "react-icons/ci";
import useOutsideClick from "../../../hooks/useOutsideClick";
import TimePicker from "../../../components/TimePicker/TimePicker";

const SelectTime = ({ label = "", initialState, getValue = () => {} }) => {
  const [openTimePicker, setOpenTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(initialState);

  const dropdownRef = useRef(null);

  // Custom hook to handle clicks outside the dropdown
  useOutsideClick(dropdownRef, () => {
    setOpenTimePicker(false);
  });

  const openTimeInput = () => {
    setOpenTimePicker((prv) => !prv);
  };

  const selectedDateHandler = (date) => {
    setSelectedTime(date);
    getValue(date);
  };

  return (
    <div
      ref={dropdownRef}
      className="flex justify-start items-center w-full text-dark-light text-sm mt-2 z-10">
      <div className="w-[25%] flex justify-start items-center gap-2 p-1 text-lg ">
        <CiTimer />
        <span className=" text-sm">{label}</span>
      </div>
      <div className="w-[75%] flex justify-start items-center gap-3 relative">
        <span className=" p-1 px-2 bg-hover cursor-pointer ">
          <span>
            {selectedTime?.hour}:{selectedTime?.minute}
          </span>
        </span>
        <div
          onClick={openTimeInput}
          className=" p-1 hover:bg-hover  cursor-pointer text-xl">
          <CiViewTimeline />
        </div>
        {openTimePicker && (
          <TimePicker
            getValue={selectedDateHandler}
            initialState={initialState}
          />
        )}
      </div>
    </div>
  );
};

export default SelectTime;
