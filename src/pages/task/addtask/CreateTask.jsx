import { useState } from "react";
import TitleInput from "./TitleInput";
import StatusSet from "./StatusSet";
import TagsSet from "./TagsSet";
import BlockNoteView from "./BlockNoteView";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { resetCreateTaskState } from "../../../services/task/createTaskSlice";

const CreateTask = () => {
  const title = useSelector((state) => state.createTask.title);

  // Get current pathname and navigation function from React Router
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * Navigates back to the tasks list and resets create task state.
   */
  const backToTasks = () => {
    dispatch(resetCreateTaskState());
    navigate("/task");
  };

  return (
    <div className="p-8 pt-4">
      {/* Breadcrumb navigation */}
      {pathname === "/create-task" && (
        <div className="text-dark-light flex justify-start gap-2 items-center">
          <span
            className="p-1 cursor-pointer hover:bg-gray-100"
            onClick={backToTasks}>
            Tasks
          </span>
          /
          <span className="p-1 cursor-pointer hover:bg-gray-100">
            {title ? title : "untitled"}
          </span>
        </div>
      )}

      {/* Input fields for task creation */}
      <TitleInput />

      <StatusSet />

      <TagsSet />

      <hr className="my-4" />

      {/* BlockNoteView for entering task notes */}
      <BlockNoteView />
    </div>
  );
};

export default CreateTask;
