import React, { useEffect } from "react";
import { useState } from "react";
import TextareaInput from "../../../components/common/TextareaInput";
import { useLocation, useNavigate } from "react-router-dom";
import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";
import DocumentCreate from "../../../components/common/DocumentCreate";
import { useDispatch, useSelector } from "react-redux";
import {
  resetUpdateCreateEventData,
  updateCreateEventDescription,
  updateCreateEventEndTime,
  updateCreateEventStartTime,
  updateCreateEventTitle,
} from "../../../services/event/eventSlice";
import { selectCreatedEvent } from "../../../services/event/eventSelector";
import LoadingButton from "../../../components/common/LoadingButton";
import { useCreateEventMutation } from "../../../services/event/eventApi";
import Message from "../../../components/common/Message";

const CreateEvent = () => {
  const [error, setError] = useState({});
  const [showMessage, setShowMessage] = useState({
    type: "success",
    message: "",
  });
  const { title, description, date, starttime, endtime, sleipner } =
    useSelector(selectCreatedEvent);
  const [createEvent, { isLoading, isSuccess }] = useCreateEventMutation();

  const { pathname } = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const backToEvent = () => {
    navigate("/event");
  };

  const handleEventTitle = (value) => {
    dispatch(updateCreateEventTitle(value));
  };
  const handleEventStartTime = (value) => {
    dispatch(updateCreateEventStartTime(value));
  };
  const handleEventEndTime = (value) => {
    dispatch(updateCreateEventEndTime(value));
  };
  const handleEventDescription = (value) => {
    dispatch(updateCreateEventDescription(value));
  };

  const handleCreateEvent = () => {
    if (!title) {
      setError({ title: "Title is required !" });
    } else {
      createEvent({
        title,
        description,
        date: `${date.year}-${date.month}-${date.date}`,
        starttime: `${starttime.hour}:${starttime.minute}`,
        endtime: `${endtime.hour}:${endtime.minute}`,
        sleipner,
      });
    }
  };

  const clearMessages = () => {
    setTimeout(() => {
      setShowMessage({ type: "", message: "" });
    }, 3000);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetUpdateCreateEventData());

      setShowMessage({
        type: "success",
        message: "Update successfully",
      });
      // Handle success message display and timeout
      clearMessages();
    }
  }, [isSuccess]);

  const createEventBtnDisabled = title ? true : false;

  const isFullPage = pathname === "/event/create";
  return (
    <div className="p-8 pt-4 min-w-[550px] overflow-x-scroll">
      <Message type={showMessage?.type} message={showMessage?.message} />
      {isFullPage && (
        <div className="text-dark-light flex justify-start gap-2 items-center ">
          <span
            className="p-1 cursor-pointer hover:bg-gray-100"
            onClick={backToEvent}>
            Events
          </span>
          /
          <span className="p-1 cursor-pointer hover:bg-gray-100">
            {title ? title : "untitled"}
          </span>
        </div>
      )}
      {error?.title && (
        <div className="text-red-600 text-xs"> {error?.title}</div>
      )}
      <TextareaInput
        value={title}
        size={isFullPage ? "lg" : "sm"}
        placeholder="event title is required"
        handleTitleValue={handleEventTitle}
      />
      <SelectDate date={date} />
      <SelectTime
        label="Start Time"
        getValue={handleEventStartTime}
        initialState={starttime}
      />
      <SelectTime
        label="End Time"
        getValue={handleEventEndTime}
        initialState={endtime}
      />
      <hr className="my-4" />
      <div
        className={` ${
          isFullPage ? "max-h-[600px] " : "max-h-96"
        } min-h-[100px] overflow-y-scroll`}>
        <DocumentCreate
          value={description}
          handleValue={handleEventDescription}
        />
      </div>

      <div className="flex justify-end items-center">
        <LoadingButton
          isLoading={isLoading}
          disabled={!createEventBtnDisabled}
          onClick={handleCreateEvent}>
          Create Event
        </LoadingButton>
      </div>
    </div>
  );
};

export default CreateEvent;
