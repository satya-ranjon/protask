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
  updateCreateEventDate,
  updateCreateEventDescription,
  updateCreateEventEndTime,
  updateCreateEventSleipner,
  updateCreateEventStartTime,
  updateCreateEventTitle,
} from "../../../services/event/eventSlice";
import { selectCreatedEvent } from "../../../services/event/eventSelector";
import LoadingButton from "../../../components/common/LoadingButton";
import { useCreateEventMutation } from "../../../services/event/eventApi";
import Message from "../../../components/common/Message";
import AddSleipnerToProject from "../../../components/addSlipner/AddSleipnerToProject";

const CreateEvent = () => {
  const [error, setError] = useState({});
  const [showMessage, setShowMessage] = useState({
    type: "success",
    message: "",
  });
  const [resetSelectedSleipner, setResetSelectedSleipner] = useState(false);

  // Select data from Redux store
  const { title, description, date, starttime, endtime, sleipner } =
    useSelector(selectCreatedEvent);

  // Mutation function for creating an event
  const [createEvent, { isLoading, isSuccess }] = useCreateEventMutation();

  // React Router location and navigation
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to navigate back to the events page
  const backToEvent = () => {
    navigate("/event");
  };

  // Event handler functions for updating Redux store
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
  const handleEventDate = (value) => {
    dispatch(updateCreateEventDate(value));
  };
  const handleSleipner = (value) => {
    dispatch(updateCreateEventSleipner(value));
  };

  const sleipnerIdList = sleipner.map((sl) => sl._id);

  // Function to handle event creation
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
        sleipner: sleipnerIdList,
      });
    }
  };

  // Function to clear success message after a delay
  const clearMessages = () => {
    setTimeout(() => {
      setShowMessage({ type: "", message: "" });
    }, 3000);
  };

  // useEffect to handle success message display and Redux state reset
  useEffect(() => {
    if (isSuccess) {
      dispatch(resetUpdateCreateEventData());
      setResetSelectedSleipner(true);

      setShowMessage({
        type: "success",
        message: "Update successfully",
      });
      // Handle success message display and timeout
      clearMessages();
    }
  }, [isSuccess]);

  // Determine if the create event button should be disabled
  const createEventBtnDisabled = title ? true : false;

  // Determine if the page is in full screen mode
  const isFullPage = pathname === "/event/create";
  return (
    <div className="p-8 pt-4 min-w-[550px] overflow-x-scroll">
      {/* Display success or error messages */}
      <Message type={showMessage?.type} message={showMessage?.message} />

      {/* Display breadcrumb navigation */}
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

      {/* Display error message for the event title */}
      {error?.title && (
        <div className="text-red-600 text-xs"> {error?.title}</div>
      )}

      {/* Input field for event title */}
      <TextareaInput
        value={title}
        size={isFullPage ? "lg" : "sm"}
        placeholder="event title is required"
        handleTitleValue={handleEventTitle}
      />

      {/* Select date component */}
      <SelectDate date={date} getValue={handleEventDate} />

      {/* Select start time component */}
      <SelectTime
        label="Start Time"
        getValue={handleEventStartTime}
        initialState={starttime}
      />

      {/* Select end time component */}
      <SelectTime
        label="End Time"
        getValue={handleEventEndTime}
        initialState={endtime}
      />

      {/* Component for adding Sleipner to project */}
      <AddSleipnerToProject
        initialState={sleipner}
        getSelectedSleipner={handleSleipner}
        resetValue={resetSelectedSleipner}
      />

      <hr className="my-4" />

      {/* Document creation component */}
      <div
        className={` ${
          isFullPage ? "max-h-[600px] " : "max-h-96"
        } min-h-[300px] overflow-y-scroll`}>
        <DocumentCreate
          value={description}
          handleValue={handleEventDescription}
        />
      </div>

      {/* Button to create event */}
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
