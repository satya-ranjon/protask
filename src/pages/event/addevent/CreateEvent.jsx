import React from "react";
import { useState } from "react";
import TextareaInput from "../../../components/common/TextareaInput";
import { useNavigate, useParams } from "react-router-dom";
import { BsCalendarDate } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";
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
      <SelectTime />
    </div>
  );
};

export default CreateEvent;
