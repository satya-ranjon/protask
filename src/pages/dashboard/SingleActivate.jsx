import React from "react";
import { GoTasklist } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import convertISOToCustomFormat from "../../utils/convertISOToCustomFormat";

const icons = {
  task: <GoTasklist />,
  user: <AiOutlineUser />,
};

const SingleActivate = ({ activate }) => {
  const { _id, type, title, dis, createdAt } = activate || {};

  const selectedIcon = icons[type] || null;

  return (
    <div className="cursor-pointer py-3 px-4 border-b-2 border-t-2 border-t-transparent bg-transparent hover:border-t-primary  border-gray-100 duration-300 transition-colors hover:bg-hover singleTask">
      <div className="flex justify-between items-start">
        <div className="flex gap-2 justify-start items-start">
          <div className=" p-3 text-zinc-500 bg-zinc-200 text-2xl">
            {selectedIcon}
          </div>
          <div>
            <h1 className="font-medium text-xl text-gray-700">{title}</h1>
            <div className=" text-sm text-dark-light">
              {dis?.map((item) => (
                <span
                  key={item.id}
                  className={`${item?.bold ? " font-medium text-dark" : ""}`}>
                  {item?.text + " "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <h1 className=" min-w-fit text-lg font-semibold text-dark-light">
          {createdAt && convertISOToCustomFormat(createdAt)}
        </h1>
      </div>
    </div>
  );
};

export default SingleActivate;
