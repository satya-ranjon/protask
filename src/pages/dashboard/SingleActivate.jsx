import React from "react";
import { GoTasklist } from "react-icons/go";
import { BsSend } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineTags,
} from "react-icons/ai";
import { RxKeyboard } from "react-icons/rx";
import convertISOToCustomFormat from "../../utils/convertISOToCustomFormat";
import { useNavigate } from "react-router-dom";

const icons = {
  task: { icon: <GoTasklist />, url: "/task" },
  user: { icon: <AiOutlineUser /> },
  event: { icon: <AiOutlineCalendar />, url: "/event" },
  tags: { icon: <AiOutlineTags /> },
  sleipner: { icon: <AiOutlineUser /> },
  login: { icon: <RxKeyboard /> },
  invite: { icon: <BsSend /> },
};

const SingleActivate = ({ activate }) => {
  const { _id, type, title, dis, createdAt, activateId } = activate || {};

  const selectedIcon = icons[type].icon || null;
  const selectedUrl = icons[type]?.url || null;
  const url = (selectedUrl && `${selectedUrl}/${activateId}`) || null;

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (url) {
      navigate(url);
    }
  };

  return (
    <div
      onClick={handleNavigate}
      className={`${
        activateId && "cursor-pointer"
      } select-none py-3 px-4 border-b-2 border-t-2 border-t-transparent bg-transparent hover:border-t-primary  border-gray-100 duration-300 transition-colors hover:bg-hover singleTask`}>
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
                  key={item._id}
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
