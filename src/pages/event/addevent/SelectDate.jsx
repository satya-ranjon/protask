import { useRef, useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import DatePicker from "../../../components/datePicker/DatePicker";
import useOutsideClick from "../../../hooks/useOutsideClick";
import useCurrentDMY from "../../../hooks/useCurrentDMY";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCreateEventDate } from "../../../services/event/eventSlice";

const SelectDate = ({ date }) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const dropdownRef = useRef(null);
  const { currentMonth, currentYear } = useCurrentDMY();
  const currentDay = String(new Date().getDate()).padStart(2, "0");

  const dispatch = useDispatch();

  useEffect(() => {
    if (!date.year && !date.month && !date.date) {
      dispatch(
        updateCreateEventDate({
          year: currentYear,
          month: currentMonth + 1,
          date: currentDay,
        })
      );
    }
  }, [currentDay, currentMonth, currentYear, date]);

  // Custom hook to handle clicks outside the dropdown
  useOutsideClick(dropdownRef, () => {
    setOpenDatePicker(false);
  });

  const openDateInput = () => {
    setOpenDatePicker((prv) => !prv);
  };

  const selectedDateHandler = (date) => {
    dispatch(updateCreateEventDate(date));
  };

  return (
    <div
      ref={dropdownRef}
      className="flex justify-start items-center w-full text-dark-light text-sm z-10">
      <div className="w-[25%] flex justify-start items-center gap-2 p-1 text-lg ">
        <BsCalendarDate />
        <span className=" text-sm">Date</span>
      </div>
      <div className="w-[75%] flex justify-start items-center gap-3 relative">
        <span className=" p-1 px-2 bg-hover cursor-pointer">
          <span>
            {date?.year}-{date?.month}-{date?.date}
          </span>
        </span>
        <div
          onClick={openDateInput}
          className=" p-1 hover:bg-hover  cursor-pointer text-xl">
          <SlCalender />
        </div>
        {openDatePicker && (
          <div className="absolute top-10 left-0 bg-white z-10">
            <DatePicker getValue={selectedDateHandler} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDate;
