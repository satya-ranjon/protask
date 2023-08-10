import React from "react";
import TaskStatus from "./TaskStatus";
import convertISOToCustomFormat from "../../utils/convertISOToCustomFormat";
import AvatarGroup from "./AvatarGroup";
import { useNavigate } from "react-router-dom";

const SingleTask = ({ task }) => {
  if (!task) {
    return;
  }
  const {
    _id,
    name,
    tags,
    description,
    createdAt,
    assignedUsers,
    user,
    status,
  } = task || {};

  // Tags
  const Tags =
    tags?.length > 0 &&
    tags?.map((item) => (
      <span
        className={` bg-gray-100 text-xs font-normal mb-1 text-dark-light p-2 px-3 mr-2`}
        key={item.id}>
        {item.name}
      </span>
    ));
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/task/${_id}`);
  };

  return (
    <div className="py-3 px-4 cursor-pointer border-t-2 border-gray-100 duration-300 transition-colors hover:bg-[#f1f0ec] singleTask">
      <div className=" flex justify-between items-start">
        <div>
          <h1
            onClick={handleNavigate}
            className=" font-semibold text-dark text-xl mb-2 singleTaskTitle">
            {name}
          </h1>
          {/* <p className=" text-sm  pt-2 pb-4 text-dark-light">
            {description[0]?.slice(0, 100)}
            {description?.length > 200 && "....."}
          </p> */}
        </div>
        <TaskStatus status={status} id={_id} />
      </div>
      <div className=" flex flex-wrap" onClick={handleNavigate}>
        {Tags}
      </div>

      <div className="flex justify-between w-full items-center ">
        <p className=" text-dark-light text-base font-medium">
          {convertISOToCustomFormat(createdAt)}
        </p>
        {/* <AvatarGroup /> */}
        <AvatarGroup avatar={[user, ...assignedUsers]} />
      </div>
    </div>
  );
};

export default SingleTask;
