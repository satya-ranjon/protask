import { TiTick } from "react-icons/ti";

const StatusOption = ({ status, isSelected, onClick }) => (
  <li
    onClick={onClick}
    className={`${
      isSelected && "text-primary"
    } cursor-pointer hover:text-primary duration-200 transition-colors px-4 py-2 w-full flex justify-between items-center gap-3`}>
    <span>{status}</span> <TiTick />
  </li>
);

export default StatusOption;
