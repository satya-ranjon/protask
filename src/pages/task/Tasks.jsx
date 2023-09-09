import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";
import TaskGroup from "./TaskGroup";
import { useGetAllTasksQuery } from "../../services/task/taskApi";
import Modal from "../../components/modal/Modal";
import { useNavigate, useParams } from "react-router-dom";
import CreateTask from "./addtask/CreateTask";
import { useDispatch, useSelector } from "react-redux";
import { resetCreateTaskState } from "../../services/task/taskSlice";
import { TaskItemSkelton } from "../../components/skeleton/TaskSkelton";
import useTitleSet from "../../hooks/useTitleSet";
import { userLogout } from "../../services/auth/authSlice";
import CreateButton from "../../components/common/CreateButton";

const Tasks = () => {
  // State and utility hooks
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { taskId: taskIdParm } = useParams();
  useTitleSet("Tasks");
  // Selector for task data and filter from Redux store
  const {
    task: { id: taskId },
    filter,
  } = useSelector((state) => state.taskSlice);

  // Function to handle opening and closing the modal
  const handleModal = () => {
    setModalIsOpen((prv) => !prv);
  };

  // Function to handle creating a task and opening the modal
  const taskCreateFullPageHandle = () => {
    if (taskId) {
      navigate(`/task/${taskId}`);
      handleModal();
    }
  };

  // Reset task state when taskIdParm is not provided or modal is not open
  useEffect(() => {
    if (!taskIdParm && !modalIsOpen) {
      dispatch(resetCreateTaskState());
    }
  }, [taskIdParm, modalIsOpen]);

  // Fetch task data using query
  const {
    data: taskData,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetAllTasksQuery();

  useEffect(() => {
    if (error?.status === 404) {
      dispatch(userLogout());
      localStorage.removeItem("auth");
    }
  }, [isError]);

  // Helper function to get filtered and sorted tasks
  function getFilteredTasks(status, order) {
    const filterTaskData = isSuccess ? taskData : [];

    const filteredTasks = filterTaskData.filter(
      (item) => item.status === status
    );

    // Sort tasks based on the filter order
    return order === "newest"
      ? filteredTasks
          .slice()
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      : filteredTasks
          .slice()
          .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  }

  return (
    <>
      {/* Header */}
      <div className="mx-3 sm:mx-5 2xl:mx-16 py-3 2xl:py-10 flex justify-between items-start">
        <div className="w-[80%]">
          <h1 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl text-gray-700">
            Tasks
          </h1>
          {/* Task description */}
          <p className="hidden sm:block text-dark-light text-sm 2xl:text-base">
            Here all tasks in the project. You will find information for each as
            well as assignees responsible for completion
          </p>
          <p className="sm:hidden text-sm text-dark-light">
            Here all tasks in the project.
          </p>
        </div>
        {/* Add task button */}
        <div>
          <CreateButton onClick={handleModal}>Create Task</CreateButton>
        </div>
      </div>

      {/* Task groups */}
      <div className="2xl:mx-14 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 ">
        {filter?.map((filterItem) => (
          <TaskGroup
            key={filterItem.id}
            title={filterItem.id}
            taskCount={
              getFilteredTasks(filterItem.id, filterItem.order).length
            }>
            {/* Display filtered and sorted tasks */}
            {getFilteredTasks(filterItem.id, filterItem.order).map((task) => (
              <SingleTask key={task._id} task={task} />
            ))}
            {isLoading && (
              <>
                <TaskItemSkelton />
                <TaskItemSkelton />
                <TaskItemSkelton />
              </>
            )}
          </TaskGroup>
        ))}
      </div>
      {/* Modal for adding tasks */}
      <Modal
        cls="top-[10%]"
        isOpen={modalIsOpen}
        onClose={handleModal}
        fullPage={taskCreateFullPageHandle}>
        <div className="min-h-[600px] max-h-[700px] ">
          <CreateTask />
        </div>
      </Modal>
    </>
  );
};

export default Tasks;
