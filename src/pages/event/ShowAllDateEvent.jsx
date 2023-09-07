import React from "react";
import { selectSelectedDate } from "../../services/event/eventSelector";
import { useDispatch, useSelector } from "react-redux";
import SingleEvent from "../../components/event/SingleEvent";
import { useGetAllEventsQuery } from "../../services/event/eventApi";
import { useNavigate } from "react-router-dom";
import { selectedUpdateEvent } from "../../services/event/eventSlice";

const ShowAllDateEvent = ({ currMonth, currYear }) => {
  const date = useSelector(selectSelectedDate);
  const { data } = useGetAllEventsQuery();
  const events = (date && data[`${currYear}-${currMonth + 1}-${date}`]) || [];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetailsEvent = (event) => {
    const startTimeHour = event.starttime.split(":")[0];
    const startTimeMinute = event.starttime.split(":")[1];
    const endTimeHour = event.endtime.split(":")[0];
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
    navigate(`/event/${event._id}`);
  };

  return (
    <div>
      {events?.map((event) => (
        <SingleEvent
          onClick={() => handleDetailsEvent(event)}
          key={event._id}
          event={event}
          titleLength={200}
          docLength={200}
        />
      ))}
    </div>
  );
};

export default ShowAllDateEvent;
