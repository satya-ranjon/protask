import { useEffect } from "react";
import TitleInput from "./TitleInput";
import StatusSet from "./StatusSet";
import TagsSet from "./TagsSet";
import BlockNoteView from "./BlockNoteView";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetCreateTaskState } from "../../../services/task/createTaskSlice";
import {
  useCreateTaskMutation,
  useGetTaskQuery,
  useUpdateTaskMutation,
} from "../../../services/task/taskApi";

const CreateTask = () => {
  const taskDetails = useSelector((state) => state.createTask);

  // Get current pathname and navigation function from React Router
  const { taskId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Navigates back to the tasks list and resets create task state.
  const backToTasks = () => {
    dispatch(resetCreateTaskState());
    navigate("/task");
  };

  const [createTask] = useCreateTaskMutation();
  const { data } = useGetTaskQuery(taskId, {
    skip: taskId && !taskDetails.id ? false : true,
  });

  const [updateTask] = useUpdateTaskMutation();

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      updateTask({ data: taskDetails, taskId: taskId || taskDetails.id });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [taskDetails]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (!taskDetails.id && !taskId) {
        await createTask();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="p-8 pt-4">
      {/* Breadcrumb navigation */}
      {taskId && (
        <div className="text-dark-light flex justify-start gap-2 items-center">
          <span
            className="p-1 cursor-pointer hover:bg-gray-100"
            onClick={backToTasks}>
            Tasks
          </span>
          /
          <span className="p-1 cursor-pointer hover:bg-gray-100">
            {taskDetails.name ? taskDetails.name : "untitled"}
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
