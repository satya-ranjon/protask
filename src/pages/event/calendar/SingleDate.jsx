import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilterSelectMonth,
  selectFilterSelectYear,
  selectSelectedDate,
} from "../../../services/event/eventSelector";
import { useEffect } from "react";
import { useGetAllEventsQuery } from "../../../services/event/eventApi";
import { selectedDate } from "../../../services/event/eventSlice";

const SingleDate = ({
  children,
  currentDate = true,
  active = false,
  day = "00",
  ...argument
}) => {
  const curMonth = useSelector(selectFilterSelectMonth);
  const curYear = useSelector(selectFilterSelectYear);
  const selectedCurrentDate = useSelector(selectSelectedDate);

  const dispatch = useDispatch();
  const { data } = useGetAllEventsQuery();
  const todayEvents = data[`${curYear}-${curMonth}-${day}`];

  const eventsOfDot = () => {
    return (
      <div className=" -m-5 flex flex-wrap px-6 text-center">
        {todayEvents?.map((dot, index) => (
          <span key={index} style={{ lineHeight: "10px" }}>
            .
          </span>
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (active) {
      dispatch(selectedDate(day));
    }
  }, []);

  const selectDate = () => {
    if (currentDate) {
      dispatch(selectedDate(day));
    }
  };

  const isActive = selectedCurrentDate === day && currentDate;

  return (
    <span
      onClick={selectDate}
      {...argument}
      className={` ${currentDate ? "cursor-pointer" : " text-zinc-300"} ${
        active ? "text-primary " : " text-gray-700"
      } text-3xl w-14 h-12 flex flex-col justify-start text-center items-center font-medium  `}>
      <span
        className={`${
          currentDate && "hover:bg-hover duration-300 transition-colors  "
        } p-3 ${isActive && "bg-hover text-primary"}  `}>
        {day < 10 ? `0${day}` : day}
      </span>
      {currentDate && eventsOfDot()}
    </span>
  );
};

export default SingleDate;
