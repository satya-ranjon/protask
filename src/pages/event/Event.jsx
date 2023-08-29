import React, { useEffect } from "react";
import Calendar from "./calendar/Calendar";
import { useState } from "react";
import EventHeader from "./EventHeader";
import EventGroup from "./EventGroup";
import BigCalendar from "./calendar/BigCalendar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedDate,
  selectedMonth,
  selectedYear,
} from "../../services/event/eventSlice";
import Modal from "../../components/modal/Modal";
import CreateEvent from "./addevent/CreateEvent";
import { useNavigate } from "react-router-dom";
import { useGetAllEventsQuery } from "../../services/event/eventApi";

const Event = () => {
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [showBigCalender, setShowBigCalender] = useState(false);
  const [createEventModalIsOpen, setCreateEventModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(selectedMonth(currMonth + 1));
    dispatch(selectedYear(currYear));
  }, [currMonth, currMonth]);

  // Function to navigate to the next month
  const nextMonth = () => {
    const newMonth = currMonth === 11 ? 0 : currMonth + 1;
    updateMonthAndYear(newMonth);
  };

  // Function to navigate to the previous month
  const previousMonth = () => {
    const newMonth = currMonth === 0 ? 11 : currMonth - 1;
    updateMonthAndYear(newMonth);
  };

  // Function to update both month and year
  const updateMonthAndYear = (newMonth) => {
    if (newMonth === 0 && currMonth === 11) {
      setCurrYear(currYear + 1);
    } else if (newMonth === 11 && currMonth === 0) {
      setCurrYear(currYear - 1);
    }
    setCurrMonth(newMonth);
    dispatch(selectedDate(null));
  };

  const handleCreateEventModal = () => {
    setCreateEventModalIsOpen((prv) => !prv);
  };

  const openFullPageCreateEvent = () => {
    navigate("/event/create");
  };

  const { data, isLoading, isSuccess } = useGetAllEventsQuery();

  console.log("%cEvent", "color:blue");

  return isLoading ? (
    "Loading"
  ) : (
    <>
      <EventHeader
        currMonth={currMonth}
        currYear={currYear}
        nextMonth={nextMonth}
        previousMonth={previousMonth}
        showBigCalender={showBigCalender}
        setShowBigCalender={setShowBigCalender}
        handleCreateEventModal={handleCreateEventModal}
      />
      <div
        className={`2xl:mx-14 2xl:ml-10 flex flex-col lg:flex-row justify-between lg:gap-7 xl:gap-14 select-none`}>
        {showBigCalender ? (
          <BigCalendar currMonth={currMonth} currYear={currYear} />
        ) : (
          <>
            <Calendar currMonth={currMonth} currYear={currYear} />
            <EventGroup currMonth={currMonth} currYear={currYear} />
          </>
        )}
      </div>
      <Modal
        isOpen={createEventModalIsOpen}
        onClose={handleCreateEventModal}
        fullPage={openFullPageCreateEvent}>
        <div className="max-h-[700px] overflow-y-scroll ">
          <CreateEvent />
        </div>
      </Modal>
    </>
  );
};

export default Event;
