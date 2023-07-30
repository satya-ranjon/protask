import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Tasks = () => {
  const [isMobile, setIsMobile] = useState(768 > window.innerWidth);
  console.log(isMobile);

  const handleResize = () => {
    setIsMobile(700 > window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
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
        <div className="">
          <button
            type="button"
            className="p-3 2xl:p-4 sm:px-5 2xl:px-8 rounded-full sm:rounded-none 
             font-medium bg-dark text-white text-2xl sm:text-sm 2xl:text-base">
            {isMobile ? <AiOutlinePlus /> : "Create Task"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
