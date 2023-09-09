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
  selectedUpdateEvent,
  selectedUpdateEventDate,
  resetSelectedUpdateEventData,
  selectedUpdateEventSleipner,
} from "../../../services/event/eventSlice";
import { selectSelectedUpdateEvent } from "../../../services/event/eventSelector";
import LoadingButton from "../../../components/common/LoadingButton";
import {
  useGetSingleEventQuery,
  useUpdateEventMutation,
} from "../../../services/event/eventApi";
import Message from "../../../components/common/Message";
import CreateTaskSkelton from "../../../components/skeleton/CreateTaskSkelton";
import AddSleipnerToProject from "../../../components/addSlipner/AddSleipnerToProject";

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
    isError,
    error: fetchError,
  } = useGetSingleEventQuery(eventParmId, {
    skip: !fetchRequest,
  });

  useEffect(() => {
    fetchError?.status === 500 && navigate("/notfound");
  }, [isError]);

  useEffect(() => {
    if (isSuccessDataFetch) {
      const startTimeHour = data.starttime.split(":")[0];
      const startTimeMinute = data.starttime.split(":")[1];
      const endTimeHour = data.endtime.split(":")[0];
      const endTimeMinute = data.endtime.split(":")[1];
      const dateYear = data.date.split("-")[0];
      const dateMonth = data.date.split("-")[1];
      const dateDate = data.date.split("-")[2];
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

  const backToEvent = () => {
    navigate("/event");
    dispatch(resetSelectedUpdateEventData());
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
  const handleSleipner = (value) => {
    dispatch(selectedUpdateEventSleipner(value));
  };

  const sleipnerIdList = sleipner.map((sl) => sl._id);

  const handleCreateEvent = () => {
    if (isLoading) return;
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
          sleipner: sleipnerIdList,
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

  return isLoadingDataFetch ? (
    <CreateTaskSkelton />
  ) : (
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

      <AddSleipnerToProject
        initialState={sleipner}
        getSelectedSleipner={handleSleipner}
      />

      <hr className="my-4" />
      <div
        className={` ${
          eventParmId ? "max-h-[600px] " : "max-h-96"
        } min-h-[300px] overflow-y-scroll`}>
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
  );
};

export default UpdateEvent;
