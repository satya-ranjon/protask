import useTitleSet from "../../hooks/useTitleSet";

import SingleActivate from "./SingleActivate";
import GridGroup from "./GridGroup";
import SingleEvent from "../../components/event/SingleEvent";
import DashBoardHeader from "./DashBoardHeader";
import FullModal from "../../components/modal/FullModal";
import { useState } from "react";
import InviteSend from "./inviteSend/InviteSend";
import AddSleipner from "./addSleipner/AddSleipner";

const avatar = [
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1692791687/user_profiles/k6gslc4ewmzpgri7gu0m.png",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1692791687/user_profiles/k6gslc4ewmzpgri7gu0m.png",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1692791687/user_profiles/k6gslc4ewmzpgri7gu0m.png",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1664309906/f/images/profile/profile_ob28l3.webp",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1664309906/f/images/profile/profile_ob28l3.webp",
];

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

  useTitleSet("Dashboard");

  const handleOpenModal = () => {
    setModalIsOpen((prv) => !prv);
    setAddSleipner(true);
  };
  const handleAddOrSendSleipner = () => {
    setAddSleipner((prv) => !prv);
  };

  return (
    <>
      <DashBoardHeader avatar={avatar} handleAddSleipner={handleOpenModal} />

      <div className="2xl:mx-14 flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          <GridGroup title="Activates" doc={` 10 resent activates`}>
            {demo?.map((item) => (
              <SingleActivate key={item._id} activate={item} />
            ))}
          </GridGroup>
        </div>

        <div className="lg:ml-24 min-w-[400px]">
          <GridGroup title="Upcoming events" doc={` 10 events for today`}>
            <SingleEvent />
            <SingleEvent />
            <SingleEvent />
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
