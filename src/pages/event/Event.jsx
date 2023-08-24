import React from "react";
import Calendar from "./calendar/Calendar";
import { GrNext, GrPrevious } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import CreateButton from "../../components/common/CreateButton";
import SingleEvent from "../../components/event/SingleEvent";

const Event = () => {
  return (
    <>
      <div className="mx-3 sm:mx-5 2xl:mx-16 text-gray-700 py-3 2xl:py-10 flex justify-between items-start">
        <div className="w-[80%]">
          <h1 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl flex justify-start gap-5 items-center">
            <p> Jun ' 2023</p>
            <div className="flex text-4xl">
              <GrPrevious className="cursor-pointer hover:bg-zinc-100 p-1 duration-300 transition-colors" />
              <GoDotFill />
              <GrNext className=" cursor-pointer hover:bg-zinc-100 p-1 duration-300 transition-colors" />
            </div>
          </h1>
          <p className="hidden sm:block text-dark-light text-sm 2xl:text-base max-w-[499px] mt-4">
            Hear all your planned events. You will find information for each
            event as well you can planned new one .
          </p>
        </div>
        {/* Add task button */}

        <CreateButton>Create Event</CreateButton>
      </div>
      <div className="2xl:mx-14 flex flex-col lg:flex-row justify-between lg:gap-7 xl:gap-14">
        <div className="w-full">
          <Calendar />
        </div>
        <div className="min-w-[600px]">
          <h1 className="px-4 font-medium text-xl text-dark-light mb-4 border-b-2 pb-10 border-b-gray-800 ">
            03'JUN, FRIDAY
          </h1>

          <SingleEvent />
        </div>
      </div>
    </>
  );
};

export default Event;
