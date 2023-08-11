import { AiFillDelete } from "react-icons/ai";

const DeleteOption = ({ onClick }) => (
  <li
    className={`text-red-400 cursor-pointer hover:text-primary duration-200 transition-colors px-4 py-2 w-full flex justify-start items-center gap-3`}
    onClick={onClick}>
    <AiFillDelete className="text-sm" />
    <span className="text-xs font-semibold">Delete</span>
  </li>
);

export default DeleteOption;
