import React from "react";
import { useGetAllEventsQuery } from "../../services/event/eventApi";
import useCurrentDMY from "../../hooks/useCurrentDMY";
import { selectedUpdateEvent } from "../../services/event/eventSlice";
import { useDispatch } from "react-redux";
import { images } from "../../constants";
import GridGroup from "./GridGroup";
import SingleEvent from "../../components/event/SingleEvent";
import SingleEventSkelton from "../../components/skeleton/SingleEventSkelton";

const ToDayEvents = () => {
  const { currentMonth, currentYear, currentDate } = useCurrentDMY();

  const { data: allEvents, isSuccess, isLoading } = useGetAllEventsQuery();
  const todayEvent =
    (isSuccess &&
      allEvents[`${currentYear}-${currentMonth + 1}-${currentDate}`]) ||
    [];

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
  };
  return (
    <GridGroup
      title="ToDay events"
      doc={` ${todayEvent?.length} events for today`}>
      {todayEvent?.length > 0 &&
        todayEvent?.map((event) => (
          <SingleEvent
            key={event._id}
            event={event}
            onClick={() => handleDetailsEvent(event)}
          />
        ))}
      {!isLoading && !todayEvent[0] && (
        <div className=" w-full flex justify-center items-center select-none mt-10 pointer-events-none">
          <img src={images.eventNotFound} className=" w-28 h-28" />
        </div>
      )}

      {isLoading && (
        <>
          <SingleEventSkelton />
          <SingleEventSkelton />
          <SingleEventSkelton />
        </>
      )}
    </GridGroup>
  );
};

export default ToDayEvents;
