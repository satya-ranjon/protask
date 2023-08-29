import { useRef, useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import DatePicker from "../../../components/datePicker/DatePicker";
import useOutsideClick from "../../../hooks/useOutsideClick";
import useCurrentDMY from "../../../hooks/useCurrentDMY";
import { useEffect } from "react";

const initialState = {
  year: null,
  month: null,
  day: null,
};

const SelectDate = () => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialState);
  const dropdownRef = useRef(null);
  const { currentMonth, currentYear } = useCurrentDMY();
  const currentDay = String(new Date().getDate()).padStart(2, "0");

  useEffect(() => {
    setSelectedDate({
      year: currentYear,
      month: currentMonth + 1,
      day: currentDay,
    });
  }, [currentDay, currentMonth, currentYear]);

  // Custom hook to handle clicks outside the dropdown
  useOutsideClick(dropdownRef, () => {
    setOpenDatePicker(false);
  });

  const openDateInput = () => {
    setOpenDatePicker((prv) => !prv);
  };

  const selectedDateHandler = (date) => {
    setSelectedDate(date);
  };

  return (
    <div
      ref={dropdownRef}
      className="flex justify-start items-center w-full text-dark-light text-sm">
      <div className="w-[25%] flex justify-start items-center gap-2 p-1 text-lg ">
        <BsCalendarDate />
        <span className=" text-sm">Date</span>
      </div>
      <div className="w-[75%] flex justify-start items-center gap-3 relative">
        <span className=" p-1 px-2 bg-hover cursor-pointer">
          <span>
            {selectedDate?.year}-{selectedDate?.month}-{selectedDate?.day}
          </span>
        </span>
        <div
          onClick={openDateInput}
          className=" p-1 hover:bg-hover  cursor-pointer text-xl">
          <SlCalender />
        </div>
        {openDatePicker && (
          <div className="absolute top-10 left-0 bg-white">
            <DatePicker getValue={selectedDateHandler} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDate;
