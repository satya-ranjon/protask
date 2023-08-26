import useTitleSet from "../../hooks/useTitleSet";
import convertISOToCustomFormat from "../../utils/convertISOToCustomFormat";
import { GoTasklist } from "react-icons/go";
import { AiOutlineCheckCircle, AiOutlineCheck } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import SingleActivate from "./SingleActivate";
import GridGroup from "./GridGroup";
import AvatarGroup from "../../components/common/AvatarGroup";
import SingleEvent from "../../components/event/SingleEvent";
import DashBoardHeader from "./DashBoardHeader";
import FullModal from "../../components/modal/FullModal";
import { useState } from "react";
import { images } from "../../constants";
import Button from "../../components/common/Button";

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
  const [addSleipner, setAddSleipner] = useState(false);

  useTitleSet("Dashboard");

  const handleAddSleipner = () => {
    setAddSleipner((prv) => !prv);
  };

  return (
    <>
      <DashBoardHeader avatar={avatar} handleAddSleipner={handleAddSleipner} />

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
      <FullModal isOpen={addSleipner} onClose={handleAddSleipner}>
        <div className="flex justify-center items-center lg:absolute lg:left-0 lg:top-0 pointer-events-none">
          <img
            src={images.inviteSend}
            alt="inviteSend image"
            className="w-56 lg:w-72 xl:w-80 3xl:w-[700px]"
          />
        </div>
        <div className="w-full flex justify-center items-center lg:h-screen">
          <div className="max-w-[400px] xl:max-w-[520px]">
            <h1 className=" font-bold text-2xl xl:text-4xl"> Invite Send</h1>
            <div className=" text-dark-light text-sm xl:text-lg mt-2 xl:mt-4">
              You have add
              <span className=" font-medium text-gray-800">3 Members</span> to
              <span className=" font-medium text-gray-800"> Sleipner</span>
              workspace. You can manage them into the{" "}
              <span className=" font-medium text-primary">My team </span>
              section
            </div>
            <div className="w-full xl:mt-6  max-h-[300px] overflow-y-scroll">
              <div className="flex justify-between items-center text-sm xl:text-lg border-b-2 py-2">
                <span>demo@gmail.com</span>
                <AiOutlineCheckCircle />
              </div>
              <div className="flex justify-between items-center text-sm xl:text-lg border-b-2 py-2">
                <span>demo@gmail.com</span>
                <AiOutlineCheckCircle />
              </div>
              <div className="flex justify-between items-center text-sm xl:text-lg border-b-2 py-2">
                <span>demo@gmail.com</span>
                <AiOutlineCheckCircle />
              </div>
              <div className="flex justify-between items-center text-sm xl:text-lg border-b-2 py-2">
                <span>demo@gmail.com</span>
                <AiOutlineCheckCircle />
              </div>
              <div className="flex justify-between items-center text-sm xl:text-lg border-b-2 py-2">
                <span>demo@gmail.com</span>
                <AiOutlineCheckCircle />
              </div>
              <div className="flex justify-between items-center text-sm xl:text-lg border-b-2 py-2">
                <span>demo@gmail.com</span>
                <AiOutlineCheckCircle />
              </div>
              <div className="flex justify-between items-center text-sm xl:text-lg border-b-2 py-2">
                <span>demo@gmail.com</span>
                <AiOutlineCheckCircle />
              </div>
              <div className="flex justify-between items-center text-sm xl:text-lg border-b-2 py-2">
                <span>demo@gmail.com</span>
                <AiOutlineCheckCircle />
              </div>
              <div className="flex justify-between items-center text-sm xl:text-lg border-b-2 py-2">
                <span>demo@gmail.com</span>
                <AiOutlineCheckCircle />
              </div>
              <div className="flex justify-between items-center text-sm xl:text-lg border-b-2 py-2">
                <span>demo@gmail.com</span>
                <AiOutlineCheckCircle />
              </div>
            </div>
            <div className="w-full mt-3 xl:mt-6 flex justify-start items-center gap-10">
              <Button>Done</Button>
              <Button type="white">Add more members</Button>
            </div>
          </div>
        </div>
      </FullModal>
    </>
  );
};

export default Dashboard;
