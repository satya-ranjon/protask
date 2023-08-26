import { useDispatch, useSelector } from "react-redux";
import { selectedDate } from "../../../services/event/eventSlice";
import { selectSelectedDate } from "../../../services/event/eventSelector";
import { useEffect } from "react";

const SingleDate = ({
  children,
  currentDate = true,
  active = false,
  day = "00",
  ...argument
}) => {
  const dispatch = useDispatch();

  const selectedCurrentDate = useSelector(selectSelectedDate);
  const curMonth = useSelector((state) => state.events.filter.select.month);
  const curM = curMonth < 9 ? `0${curMonth}` : curMonth;
  const curYear = useSelector((state) => state.events.filter.select.year);

  const dayOfEvents = useSelector((state) => {
    return state.events.events?.filter((event) => {
      return currentDate && event.day === `${curYear}-${curM}-${day}` && event;
    });
  });

  const eventsOfDot = () => {
    if (!currentDate) null;
    return (
      <div className=" -m-5 flex flex-wrap px-6 text-center">
        {dayOfEvents?.map((dot, index) => (
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
        } p-3 ${isActive && "bg-hover"}`}>
        {day < 10 ? `0${day}` : day}
      </span>
      {eventsOfDot()}
      {/* <div className=" -m-5 flex flex-wrap px-6 text-center">
        <span style={{ lineHeight: "10px" }}>.</span>
        <span style={{ lineHeight: "10px" }}>.</span>
        <span style={{ lineHeight: "10px" }}>.</span>
      </div> */}
    </span>
  );
};

export default SingleDate;
