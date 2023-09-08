export const TaskItemSkelton = () => (
  <div className=" animate-pulse py-1">
    <div className="h-6 bg-gray-200  dark:bg-gray-400 w-[95%] mb-2"></div>
    <div className="flex gap-3 my-3 justify-start items-center">
      <div className="h-10 bg-gray-200  dark:bg-gray-400 w-28 mb-2"></div>
      <div className="h-10 bg-gray-200  dark:bg-gray-400 w-28 mb-2"></div>
    </div>
    <div className=" flex justify-between items-center">
      <div className="h-5 bg-gray-200  dark:bg-gray-400 w-32 mb-2"></div>
      <svg
        className="w-8 h-8 text-gray-200 dark:text-gray-700 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
    </div>
  </div>
);

const TaskList = () => (
  <div className="w-full">
    <div className=" w-full border-b-2 ">
      <div className="h-8 bg-gray-200  dark:bg-gray-400 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200  dark:bg-gray-400 w-32 mb-4"></div>
    </div>
    <div className="my-2  flex flex-col gap-3">
      <TaskItemSkelton />
      <TaskItemSkelton />
      <TaskItemSkelton />
    </div>
  </div>
);
const TaskSkelton = () => {
  return (
    <div className="mx-3 sm:mx-5 2xl:mx-16 py-3 2xl:py-10  ">
      <div role="status" className="w-full animate-pulse ">
        <div className="flex justify-between items-center">
          <div className="">
            <div className="h-12 bg-gray-200  dark:bg-gray-400 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200  dark:bg-gray-400 w-96 mb-4"></div>
          </div>

          <div className=" hidden lg:block">
            <div className="h-12 bg-gray-200  dark:bg-gray-400 w-48 mb-4"></div>{" "}
          </div>
        </div>
        <div className="mt-14 flex gap-2 justify-between items-center">
          <TaskList />
          <div className=" w-full hidden lg:block">
            <TaskList />
          </div>
          <div className=" w-full hidden xl:block">
            <TaskList />
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default TaskSkelton;
