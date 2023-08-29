import React from "react";
import { useSelector } from "react-redux";
import SingleEvent from "../../components/event/SingleEvent";
import { selectSelectedDate } from "../../services/event/eventSelector";
import { months } from "../../data/calenderData";
import { useGetAllEventsQuery } from "../../services/event/eventApi";
import { images } from "../../constants";

const EventGroup = ({ currMonth, currYear }) => {
  const date = useSelector(selectSelectedDate);
  const { data } = useGetAllEventsQuery();

  const eventsOfMonth = Object.keys(data).reduce((accumulator, date) => {
    if (date.startsWith(`${currYear}-${currMonth + 1}`)) {
      return accumulator.concat(data[date]);
    }
    return accumulator;
  }, []);

  const events = date
    ? data[`${currYear}-${currMonth + 1}-${date}`] || []
    : eventsOfMonth;

  const showHeader = date
    ? `${date < 9 ? "0" + date : date} ${months[currMonth]} ${currYear} `
    : `${months[currMonth]} ${currYear}`;

  //TODO:
  console.log("%cEventGroup", "color:green");
  return (
    <div className="min-w-[400px] xl:min-w-[600px] pt-10 lg:pt-0 px-4 2xl:px-0 ">
      <h1 className="px-4 font-medium text-xl text-dark-light mb-4 border-b-2 pb-10 border-b-gray-800 ">
        {showHeader}
      </h1>
      <div className="lg:max-h-[590px] 2xl:max-h-[640px]  overflow-scroll">
        {events?.map((event) => (
          <SingleEvent key={event._id} event={event} />
        ))}
        {!events[0] && (
          <div className=" w-full flex justify-center items-center select-none mt-10 pointer-events-none">
            <img src={images.eventNotFound} className=" w-28 h-28" />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(EventGroup);
