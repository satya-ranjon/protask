import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";
import TaskGroup from "./TaskGroup";
import AddTaskBtn from "./AddTaskBtn";
import tasks from "../../data/tasks";
import { useGetAllTasksQuery } from "../../services/task/taskApi";
import Modal from "../../components/modal/Modal";
import { useNavigate } from "react-router-dom";
import CreateTask from "./addtask/CreateTask";

const Tasks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleModal = () => {
    setModalIsOpen((prv) => !prv);
  };

  const taskCreateFullPageHandle = () => {
    navigate("/create-task");
    handleModal();
  };

  const todo = tasks.filter((item) => item.status === "start");

  const { data } = useGetAllTasksQuery();
  console.log(data);

  return (
    <>
      <div className="mx-3 sm:mx-5 2xl:mx-16 py-3 2xl:py-10  flex justify-between items-start">
        <div className=" w-[80%]">
          <h1 className="font-bold text-4xl  lg:text-5xl 2xl:text-6xl">
            Tasks
          </h1>
          <p className="hidden sm:block text-dark-light text-sm 2xl:text-base">
            Here all tasks in the project.You will find information for each as
            well as assignees responsible for completion
          </p>
          <p className="sm:hidden text-sm text-dark-light">
            Here all tasks in the project.
          </p>
        </div>
        <div>
          <AddTaskBtn onClick={handleModal} />
        </div>
      </div>

      <div className="2xl:mx-14 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 ">
        <TaskGroup title="To Do" taskCount={todo.length}>
          {todo.map((task) => (
            <SingleTask key={task._id} task={task} />
          ))}
        </TaskGroup>
        {/* <TaskGroup title="In Progress" taskCount="5">
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
        </TaskGroup>
        <TaskGroup title="On Hold" taskCount="5">
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
        </TaskGroup>
        <TaskGroup title="Done" taskCount="5">
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
          <SingleTask />
        </TaskGroup> */}
      </div>
      <Modal
        cls="top-[10%]"
        isOpen={modalIsOpen}
        onClose={handleModal}
        fullPage={taskCreateFullPageHandle}>
        <CreateTask />
      </Modal>
    </>
  );
};

export default Tasks;
