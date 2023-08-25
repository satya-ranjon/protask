import { GrNext, GrPrevious } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import CreateButton from "../../components/common/CreateButton";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const EventHeader = ({ currMonth, currYear, previousMonth, nextMonth }) => {
  return (
    <div className="mx-3 sm:mx-5 2xl:mx-16 text-gray-700 py-3 2xl:py-10 flex justify-between items-start">
      <div className="w-[80%]">
        <h1 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl flex justify-start gap-5 items-center select-none">
          <div className=" flex justify-start gap-2 items-center ">
            <div className="w-28 ">{months[currMonth]}</div>{" "}
            <div>'{currYear}</div>
          </div>
          <div className="flex text-4xl">
            <GrPrevious
              className="cursor-pointer hover:bg-zinc-100 p-1 duration-300 transition-colors"
              onClick={previousMonth}
            />
            <GoDotFill />
            <GrNext
              className=" cursor-pointer hover:bg-zinc-100 p-1 duration-300 transition-colors"
              onClick={nextMonth}
            />
          </div>
        </h1>
        <p className="select-none hidden sm:block text-dark-light text-sm 2xl:text-base max-w-[499px] mt-4">
          Hear all your planned events. You will find information for each event
          as well you can planned new one .
        </p>
      </div>
      {/* Add task button */}

      <CreateButton>Create Event</CreateButton>
    </div>
  );
};

export default EventHeader;
