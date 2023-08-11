import { RxDotFilled } from "react-icons/rx";

const DropdownIcon = ({ onClick, size = 2 }) => (
  <div className="text-xs cursor-pointer" onClick={onClick}>
    <RxDotFilled />
    <RxDotFilled />
    {size === 3 && <RxDotFilled />}
  </div>
);

export default DropdownIcon;
