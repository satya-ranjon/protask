import useTitleSet from "../../hooks/useTitleSet";
import convertISOToCustomFormat from "../../utils/convertISOToCustomFormat";
import { GoTasklist } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import SingleActivate from "./SingleActivate";
import GridGroup from "./GridGroup";
import AvatarGroup from "../../components/common/AvatarGroup";
import SingleEvent from "./SingleEvent";

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
  useTitleSet("Dashboard");

  return (
    <>
      <div className="mx-3 sm:mx-5 2xl:mx-16 py-3 2xl:py-10 flex justify-between items-start">
        <div className="w-[80%]">
          <h1 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl">
            Dashboard
          </h1>
          <p className="hidden sm:block text-dark-light text-sm 2xl:text-base max-w-[799px]">
            This section displays a list of events that are scheduled to take
            place in the near future. You'll find information such as event
            names, dates, times, and brief descriptions. Click on an event for
            more details.
          </p>
        </div>
        {/* Add task button */}
        <div className="flex -space-x-4 min-w-fit">
          {avatar?.map((url, index) => (
            <img
              key={index}
              className="w-10 h-10 border-2 border-white rounded-full "
              src={url}
              alt="avatar"
            />
          ))}

          <button className="flex items-center justify-center w-10 h-10 text-xl font-medium text-white border-2 border-white bg-dark rounded-full ">
            <IoIosAdd />
          </button>
        </div>
      </div>

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
          </GridGroup>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
