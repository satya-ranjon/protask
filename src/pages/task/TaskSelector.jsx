import { GrNext, GrPrevious } from "react-icons/gr";

const TaskSelector = () => {
  return (
    <div className=" flex gap-3 items-center relative">
      <GrPrevious className=" cursor-pointer" />
      <h2 className=" text-primary cursor-pointer font-semibold">To Do</h2>
      <GrNext className=" cursor-pointer" />
      <div className=" absolute bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] top-10">
        <ul className=" w-max">
          <li className="hover:text-primary px-4 text-sm border-b-2 border-transparent duration-300 transition-colors hover:border-primary py-2 cursor-pointer">
            To Do
          </li>
          <li className="hover:text-primary px-4 text-sm border-b-2 border-transparent duration-300 transition-colors hover:border-primary py-2 cursor-pointer">
            In Progress
          </li>
          <li className="hover:text-primary px-4 text-sm border-b-2 border-transparent duration-300 transition-colors hover:border-primary py-2 cursor-pointer">
            On Hold
          </li>
          <li className="hover:text-primary px-4 text-sm border-b-2 border-transparent duration-300 transition-colors hover:border-primary py-2 cursor-pointer">
            Done
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskSelector;
