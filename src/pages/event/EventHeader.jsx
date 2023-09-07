import { GrNext, GrPrevious } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { MdOutlineCalendarViewDay } from "react-icons/md";
import CreateButton from "../../components/common/CreateButton";
import { months } from "../../data/calenderData";

const EventHeader = ({
  currMonth,
  currYear,
  previousMonth,
  nextMonth,
  showBigCalender,
  setShowBigCalender,
  handleCreateEventModal,
}) => {
  return (
    <div className="mx-3 sm:mx-5 2xl:mx-16 text-gray-700 py-3 2xl:py-10 flex justify-between items-start">
      <div className="w-[80%]">
        <h1 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl flex justify-start gap-5 items-center select-none">
          <div className=" flex justify-start gap-2 items-center ">
            <div className="w-16 lg:w-28">{months[currMonth].slice(0, 3)}</div>
            <div>'{currYear}</div>
          </div>
          <div className="flex text-3xl lg:text-4xl">
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
          <div
            className="text-3xl p-2 cursor-pointer  hover:bg-zinc-100 duration-300 transition-colors"
            onClick={() => setShowBigCalender(!showBigCalender)}>
            {showBigCalender ? <MdOutlineCalendarViewDay /> : <SlCalender />}
          </div>
        </h1>
        <p className="select-none hidden sm:block text-dark-light text-sm 2xl:text-base max-w-[499px] mt-4">
          Hear all your planned events. You will find information for each event
          as well you can planned new one .
        </p>
      </div>

      {/* Create Event button */}

      <CreateButton onClick={handleCreateEventModal}>Create Event</CreateButton>
    </div>
  );
};

export default EventHeader;
