import { AiOutlineClose } from "react-icons/ai";

const Message = ({ type, message = "", onClick = () => {} }) => {
  return (
    <div
      className={`p-2 rounded-sm w-fit text-sm border-[1px] border-gray-100  flex justify-between items-center absolute  left-[50%] duration-300 transition-all ${
        type === "error" ? "bg-red-50 text-red-500" : "bg-hover text-primary"
      } ${message ? "top-20 opacity-100" : "-top-10 opacity-0"} `}>
      {message}
      <AiOutlineClose
        onClick={onClick}
        className=" ml-10 cursor-pointer text-xl"
      />
    </div>
  );
};

export default Message;
