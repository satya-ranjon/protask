import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilterSelectMonth,
  selectFilterSelectYear,
} from "../../../services/event/eventSelector";
import { useGetAllEventsQuery } from "../../../services/event/eventApi";
import { selectedUpdateEvent } from "../../../services/event/eventSlice";

const BigSingleDate = ({ date, currentDate = true, active = false }) => {
  const curMonth = useSelector(selectFilterSelectMonth);
  const curYear = useSelector(selectFilterSelectYear);

  //TODO
  console.log("%cBigSingleDate", "color:red", date);

  const dispatch = useDispatch();
  const { data } = useGetAllEventsQuery();
  const todayEvents = data[`${curYear}-${curMonth}-${date}`];

  const handleDetailsEvent = (event) => {
    const startTimeHour = event.starttime.split(":")[0];
    const startTimeMinute = event.starttime.split(":")[1];
    const endTimeHour = event.endtime.split(":")[1];
    const endTimeMinute = event.endtime.split(":")[1];
    const dateYear = event.date.split("-")[0];
    const dateMonth = event.date.split("-")[1];
    const dateDate = event.date.split("-")[2];
    dispatch(
      selectedUpdateEvent({
        ...event,
        date: { year: dateYear, month: dateMonth, date: dateDate },
        starttime: { hour: startTimeHour, minute: startTimeMinute },
        endtime: { hour: endTimeHour, minute: endTimeMinute },
      })
    );
  };

  const dateEvent = () => (
    <div className="w-full flex flex-col gap-2">
      {todayEvents?.slice(0, 2).map((event) => (
        <div
          key={event._id}
          className="w-full text-start"
          onClick={() => handleDetailsEvent(event)}>
          <h1 className="text-[15.5px] text-gray-800 hover:text-primary leading-5 font-medium">
            {event.title?.slice(0, 35)} {event.title?.length > 35 && "..."}
          </h1>
          <h5 className=" text-sm text-dark-light">
            {event.starttime} - {event.endtime}
          </h5>
        </div>
      ))}

      {todayEvents?.length > 2 && (
        <div className="w-full text-start text-sm hover:text-primary">
          And 3 more
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`w-full h-[255px] xl:h-56 border-t-2 cursor-pointer  p-2  ${
        active ? " border-t-primary bg-hover" : "border-t-gray-800"
      }`}>
      <h1
        className={`${currentDate ? "text-gray-700" : "text-zinc-300"} ${
          active && "text-primary"
        }`}>
        {date < 10 ? `0${date}` : date}
      </h1>
      {currentDate && dateEvent()}
    </div>
  );
};

export default BigSingleDate;
