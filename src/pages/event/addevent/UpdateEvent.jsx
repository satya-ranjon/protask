import React, { useEffect } from "react";
import { useState } from "react";
import TextareaInput from "../../../components/common/TextareaInput";
import { useNavigate, useParams } from "react-router-dom";
import SelectDate from "./SelectDate";
import SelectTime from "./SelectTime";
import DocumentCreate from "../../../components/common/DocumentCreate";
import { useDispatch, useSelector } from "react-redux";
import {
  resetUpdateCreateEventData,
  selectedUpdateEventTitle,
  selectedUpdateEventDescription,
  selectedUpdateEventStartTime,
  selectedUpdateEventEndTime,
  selectedUpdateEventSleipner,
  selectedUpdateEvent,
  selectedUpdateEventDate,
} from "../../../services/event/eventSlice";
import { selectSelectedUpdateEvent } from "../../../services/event/eventSelector";
import LoadingButton from "../../../components/common/LoadingButton";
import {
  useGetSingleEventQuery,
  useUpdateEventMutation,
} from "../../../services/event/eventApi";
import Message from "../../../components/common/Message";

const UpdateEvent = () => {
  const [error, setError] = useState({});
  const [showMessage, setShowMessage] = useState({
    type: "success",
    message: "",
  });
  const { _id, title, description, date, starttime, endtime, sleipner } =
    useSelector(selectSelectedUpdateEvent);
  const [updateEvent, { isLoading, isSuccess }] = useUpdateEventMutation();

  const { eventId: eventParmId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchRequest = eventParmId && !_id;
  const {
    data,
    isSuccess: isSuccessDataFetch,
    isLoading: isLoadingDataFetch,
  } = useGetSingleEventQuery(eventParmId, {
    skip: !fetchRequest,
  });

  useEffect(() => {
    if (isSuccessDataFetch) {
      const startTimeHour = data.starttime.split(":")[0];
      const startTimeMinute = data.starttime.split(":")[1];
      const endTimeHour = data.endtime.split(":")[0];
      const endTimeMinute = data.endtime.split(":")[1];
      const dateYear = data.date.split("-")[0];
      const dateMonth = data.date.split("-")[1];
      const dateDate = data.date.split("-")[2];
      console.log({ hour: endTimeHour, minute: endTimeMinute });
      console.log({ hour: startTimeHour, minute: startTimeMinute });
      console.log({ year: dateYear, month: dateMonth, date: dateDate });
      dispatch(
        selectedUpdateEvent({
          ...data,
          date: { year: dateYear, month: dateMonth, date: dateDate },
          starttime: { hour: startTimeHour, minute: startTimeMinute },
          endtime: { hour: endTimeHour, minute: endTimeMinute },
        })
      );
    }
  }, [isSuccessDataFetch]);

  console.log(data);

  const backToEvent = () => {
    navigate("/event");
  };

  const handleEventTitle = (value) => {
    dispatch(selectedUpdateEventTitle(value));
  };
  const handleEventStartTime = (value) => {
    dispatch(selectedUpdateEventStartTime(value));
  };
  const handleEventEndTime = (value) => {
    dispatch(selectedUpdateEventEndTime(value));
  };
  const handleEventDescription = (value) => {
    dispatch(selectedUpdateEventDescription(value));
  };
  const handleEventDate = (value) => {
    dispatch(selectedUpdateEventDate(value));
  };

  const handleCreateEvent = () => {
    if (!title) {
      setError({ title: "Title is required !" });
    } else {
      updateEvent({
        eventId: _id,
        data: {
          _id,
          title,
          description,
          date: `${date.year}-${date.month}-${date.date}`,
          starttime: `${starttime.hour}:${starttime.minute}`,
          endtime: `${endtime.hour}:${endtime.minute}`,
          sleipner,
        },
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
        message: "Update Event successfully",
      });
      // Handle success message display and timeout
      clearMessages();
    }
  }, [isSuccess]);

  const createEventBtnDisabled = title ? true : false;

  return (
    !isLoadingDataFetch && (
      <div className="p-8 pt-4 min-w-[550px] overflow-x-scroll">
        <Message type={showMessage?.type} message={showMessage?.message} />
        {eventParmId && (
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
          size={eventParmId ? "lg" : "sm"}
          placeholder="event title is required"
          handleTitleValue={handleEventTitle}
        />
        <SelectDate date={date} getValue={handleEventDate} />
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
            eventParmId ? "max-h-[600px] " : "max-h-96"
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
            Update Event
          </LoadingButton>
        </div>
      </div>
    )
  );
};

export default UpdateEvent;
