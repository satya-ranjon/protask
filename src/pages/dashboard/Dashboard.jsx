import useTitleSet from "../../hooks/useTitleSet";

import SingleActivate from "./SingleActivate";
import GridGroup from "./GridGroup";
import SingleEvent from "../../components/event/SingleEvent";
import DashBoardHeader from "./DashBoardHeader";
import FullModal from "../../components/modal/FullModal";
import { useState } from "react";
import InviteSend from "./inviteSend/InviteSend";
import AddSleipner from "./addSleipner/AddSleipner";
import { useGetAllSleipnerQuery } from "../../services/user/userApi";
import useCurrentDMY from "../../hooks/useCurrentDMY";
import { useGetAllEventsQuery } from "../../services/event/eventApi";
import { images } from "../../constants";
import { useDispatch } from "react-redux";
import { selectedUpdateEvent } from "../../services/event/eventSlice";

const demo = [
  {
    _id: "as33nja32/3",
    type: "task",
    title: "New Task",
    dis: [
      { id: "1", bold: true, text: "Trishna" },
      { id: "2", bold: false, text: "Joined Project Sleipner" },
    ],
    createdAt: "2023-08-23T09:14:42.955+00:00",
  },
  {
    _id: "as33nja32/1",
    type: "task",
    title: "New Task",
    dis: [
      { id: "1", bold: true, text: "@trishna" },
      { id: "2", bold: false, text: "added" },
      { id: "4", bold: true, text: "@khokon" },
      { id: "5", bold: false, text: "to the project Sleipner" },
    ],
    createdAt: "2023-08-23T09:14:42.955+00:00",
  },
  {
    _id: "as33nja42/5",
    type: "user",
    title: "Add New Member",
    dis: [
      { id: "1", bold: true, text: "Trishna" },
      { id: "2", bold: false, text: "Joined Project Sleipner" },
    ],
    createdAt: "2023-08-23T09:14:42.955+00:00",
  },
  {
    _id: "as33nja52/7",
    type: "user",
    title: "Add New Member",
    dis: [
      { id: "1", bold: true, text: "Shamim" },
      { id: "2", bold: false, text: "Joined Project Sleipner" },
    ],
    createdAt: "2023-08-23T09:14:42.955+00:00",
  },
];

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addSleipner, setAddSleipner] = useState(true);
  const { data: sleipners, isLoading } = useGetAllSleipnerQuery(1);
  const { currentMonth, currentYear, currentDate } = useCurrentDMY();
  const { data: allEvents, isSuccess: getAllEventsSuccess } =
    useGetAllEventsQuery();
  const todayEvent =
    (getAllEventsSuccess &&
      allEvents[`${currentYear}-${currentMonth + 1}-${currentDate}`]) ||
    [];

  useTitleSet("Dashboard");
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setModalIsOpen((prv) => !prv);
    setAddSleipner(true);
  };
  const handleAddOrSendSleipner = () => {
    setAddSleipner((prv) => !prv);
  };

  const handleDetailsEvent = (event) => {
    const startTimeHour = event.starttime.split(":")[0];
    const startTimeMinute = event.starttime.split(":")[1];
    const endTimeHour = event.endtime.split(":")[0];
    const endTimeMinute = event.endtime.split(":")[1];
    const dateYear = event.date.split("-")[0];
    const dateMonth = event.date.split("-")[1];
    const dateDate = event.date.split("-")[2];
    dispatch(
      selectedUpdateEvent({
        ...event,
        date: { year: dateYear, month: dateMonth, date: dateDate },
        starttime: { hour: startTimeHour, minute: startTimeMinute },
        endtime: { hour: endTimeHour, minute: endTimeMinute },
      })
    );
  };

  return (
    <>
      <DashBoardHeader
        avatar={sleipners}
        isLoading={isLoading}
        handleAddSleipner={handleOpenModal}
      />

      <div className="2xl:mx-14 flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          <GridGroup title="Activates" doc={` 10 resent activates`}>
            {demo?.map((item) => (
              <SingleActivate key={item._id} activate={item} />
            ))}
          </GridGroup>
        </div>

        <div className="lg:ml-24 min-w-[400px]">
          <GridGroup title="ToDay events" doc={` 10 events for today`}>
            {todayEvent?.length > 0 &&
              todayEvent?.map((event) => (
                <SingleEvent
                  key={event._id}
                  event={event}
                  onClick={() => handleDetailsEvent(event)}
                />
              ))}
            {!todayEvent[0] && (
              <div className=" w-full flex justify-center items-center select-none mt-10 pointer-events-none">
                <img src={images.eventNotFound} className=" w-28 h-28" />
              </div>
            )}
          </GridGroup>
        </div>
      </div>
      <FullModal isOpen={modalIsOpen} onClose={handleOpenModal}>
        {/* <InviteSend /> */}
        {addSleipner ? (
          <AddSleipner handleAddOrSendSleipner={handleAddOrSendSleipner} />
        ) : (
          <InviteSend handleAddOrSendSleipner={handleAddOrSendSleipner} />
        )}
      </FullModal>
    </>
  );
};

export default Dashboard;
