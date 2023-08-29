import React from "react";
import { useState } from "react";
import TextareaInput from "../../../components/common/TextareaInput";
import { useNavigate, useParams } from "react-router-dom";
import { BsCalendarDate } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import SelectDate from "./SelectDate";
const initialState = {
  title: "",
  description: "",
  date: "",
  starttime: "",
  endtime: "",
  sleipner: [],
};

const CreateEvent = () => {
  const [eventValue, setEventValue] = useState(initialState);
  const { eventId: eventParmId } = useParams();
  const navigate = useNavigate();
  const backToEvent = () => {
    navigate("/event");
  };

  return (
    <div className="p-8 pt-4">
      {eventParmId && (
        <div className="text-dark-light flex justify-start gap-2 items-center">
          <span
            className="p-1 cursor-pointer hover:bg-gray-100"
            onClick={backToEvent}>
            Events
          </span>
          /
          <span className="p-1 cursor-pointer hover:bg-gray-100">
            {/* {taskDetails.name ? taskDetails.name : "untitled"} */}
          </span>
        </div>
      )}
      <TextareaInput placeholder="Untitled" />
      <SelectDate />
      <div className="flex justify-start items-center w-full text-dark-light text-sm">
        <div className="w-[25%] flex justify-start items-center gap-2 p-1 text-xl ">
          <CiTimer />
          <span className=" text-lg">Start Time</span>
        </div>
        <div className="w-[75%]">
          <input type="date" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
