import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleEvent from "../../components/event/SingleEvent";
import { selectSelectedDate } from "../../services/event/eventSelector";
import { months } from "../../data/calenderData";
import { useGetAllEventsQuery } from "../../services/event/eventApi";
import { images } from "../../constants";
import { selectedUpdateEvent } from "../../services/event/eventSlice";
import SingleEventSkelton from "../../components/skeleton/SingleEventSkelton";

const EventGroup = ({ currMonth, currYear }) => {
  const date = useSelector(selectSelectedDate);
  const { data, isLoading, isSuccess } = useGetAllEventsQuery();
  const dispatch = useDispatch();

  const eventsOfMonth =
    isSuccess &&
    Object.keys(data).reduce((accumulator, date) => {
      if (date.startsWith(`${currYear}-${currMonth + 1}`)) {
        return accumulator.concat(data[date]);
      }
      return accumulator;
    }, []);

  const events =
    isSuccess && date
      ? data[`${currYear}-${currMonth + 1}-${date}`] || []
      : eventsOfMonth;

  const showHeader =
    isSuccess && date
      ? `${date < 9 ? "0" + date : date} ${months[currMonth]} ${currYear} `
      : `${months[currMonth]} ${currYear}`;

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
    <div className="min-w-[400px] xl:min-w-[600px] pt-10 lg:pt-0 px-4 2xl:px-0 ">
      <h1 className="px-4 font-medium text-xl text-dark-light mb-4 border-b-2 pb-10 border-b-gray-800 ">
        {showHeader}
      </h1>
      <div className="lg:max-h-[590px] 2xl:max-h-[640px]  overflow-scroll">
        {isSuccess &&
          events?.map((event) => (
            <SingleEvent
              key={event._id}
              event={event}
              onClick={() => handleDetailsEvent(event)}
            />
          ))}
        {isSuccess && !events[0] && (
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
      </div>
    </div>
  );
};

export default React.memo(EventGroup);
