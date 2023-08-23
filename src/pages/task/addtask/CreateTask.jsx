import { useEffect } from "react";
import TitleInput from "./TitleInput";
import StatusSet from "./StatusSet";
import TagsSet from "./TagsSet";
import DocumentAdd from "./DocumentAdd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  resetCreateTaskState,
  updateTask,
} from "../../../services/task/taskSlice";
import {
  useCreateTaskMutation,
  useGetTaskQuery,
  useUpdateTaskMutation,
} from "../../../services/task/taskApi";
import CreatedDate from "./CreatedDate";
import CreateTaskSkelton from "../../../components/skeleton/CreateTaskSkelton";
import useTitleSet from "../../../hooks/useTitleSet";
import { selectTask } from "../../../services/task/taskSelector";

const CreateTask = () => {
  const taskDetails = useSelector(selectTask);

  // Get the current pathname and navigation function from React Router
  const { taskId: taskParmId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useTitleSet("Create Task");

  // Function to navigate back to the tasks list and reset create task state
  const backToTasks = () => {
    dispatch(resetCreateTaskState());
    navigate("/task");
  };

  const [createTask] = useCreateTaskMutation();

  // Fetch task data if taskParmId is provided
  const { data, isSuccess, isLoading } = useGetTaskQuery(taskParmId, {
    skip: taskParmId && !taskDetails.id ? false : true,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(updateTask(data));
    }
  }, [isSuccess]);

  const [updateTaskMutation] = useUpdateTaskMutation();

  // Automatically update the task when taskDetails change
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      // Update the task using the taskDetails
      updateTaskMutation({
        data: taskDetails,
        taskId: taskParmId || taskDetails.id,
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [taskDetails]);

  // Create a new task if taskParmId is not provided
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (!taskDetails.id && !taskParmId) {
        console.log("create Task request");
        createTask();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return isLoading ? (
    <CreateTaskSkelton />
  ) : (
    <div className="p-8 pt-4">
      {/* Breadcrumb navigation */}
      {taskParmId && (
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
      <CreatedDate date={taskDetails.createdAt} />
      <StatusSet />
      <TagsSet />
      <hr className="my-4" />

      {/* DocumentAdd for entering task notes */}
      {taskParmId ? (
        taskDetails.description?.length > 0 && <DocumentAdd />
      ) : (
        <DocumentAdd />
      )}
    </div>
  );
};

export default CreateTask;
