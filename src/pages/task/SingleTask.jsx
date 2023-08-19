import React from "react";
import TaskStatusChange from "./TaskStatusChange";
import convertISOToCustomFormat from "../../utils/convertISOToCustomFormat";
import AvatarGroup from "../../components/common/AvatarGroup";
import { useNavigate } from "react-router-dom";

const SingleTask = ({ task }) => {
  // Destructure task properties
  if (!task) {
    return null; // Return null if no task is provided
  }
  const { _id, name, tags, createdAt, assignedUsers, user, status } = task;

  // Tags: Render tags if they exist
  const Tags =
    tags?.length > 0 &&
    tags?.map((item) => (
      <span
        className={`bg-gray-100 text-xs font-normal mb-1 text-dark-light p-2 px-3 mr-2`}
        key={item.id}>
        {item.name}
      </span>
    ));

  // Use the react-router-dom hook for navigation
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/task/${_id}`); // Navigate to the task details page when clicked
  };

  const avatarList = [
    user?.avatar,
    ...assignedUsers?.map((item) => item.avatar),
  ];

  return (
    <div className="py-3 px-4 border-b-2 bg-transparent hover:border-b-primary border-t-2 border-gray-100 duration-300 transition-colors hover:bg-hover singleTask">
      <div className="flex justify-between items-start">
        <div>
          {/* Task title: Make the title clickable */}
          <h1
            onClick={handleNavigate}
            className="font-semibold cursor-pointer text-dark text-xl mb-2 singleTaskTitle">
            {name}
          </h1>
        </div>
        {/* Task status change component */}
        <TaskStatusChange status={status} id={_id} />
      </div>
      <div className="cursor-pointer flex flex-wrap" onClick={handleNavigate}>
        {Tags} {/* Display tags */}
      </div>
      <div
        className="flex justify-between w-full items-center cursor-pointer"
        onClick={handleNavigate}>
        {/* Display task creation date */}
        <p className="text-dark-light text-base font-medium">
          {convertISOToCustomFormat(createdAt)}
        </p>
        {/* Display the avatar group */}
        <AvatarGroup avatar={avatarList} />
      </div>
    </div>
  );
};

export default React.memo(SingleTask);
