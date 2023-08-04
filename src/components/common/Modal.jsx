import ReactDOM from "react-dom";
import { MdOpenInFull } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ isOpen = false, onClose, children, top = "20", fullPage }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="w-full  h-full fixed top-0 left-0 overflow-hidden flex justify-center items-center bg-[#000000c4]">
      <div
        className={`relative top-[-${top}%] w-[90%] lg:w-[60%] bg-white  p-1 border-gray-500  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]`}>
        <div className=" flex justify-between">
          <div className="relative group">
            <button
              onClick={fullPage}
              className="right-2 w-8 h-8 lg:w-10 lg:h-10 rounded-lg  text-dark flex justify-center items-center cursor-pointer hover:bg-gray-100  duration-100 -z-0"
              aria-label="Close Modal">
              <MdOpenInFull />
            </button>
            <div className="absolute -top-8 left-0 w-max bg-dark px-2 rounded-md hidden  group-hover:flex">
              <p className=" text-white font-xs font-normal p-1">
                Open in full page
              </p>
            </div>
          </div>
          <div className="relative group">
            <button
              className="right-2 w-8 h-8 lg:w-10 lg:h-10 rounded-lg  text-dark flex justify-center items-center cursor-pointer hover:bg-gray-100  duration-100 -z-0"
              onClick={onClose}
              aria-label="Close Modal">
              <AiOutlineClose />
            </button>
            <div className="absolute -top-8 right-0 w-max bg-dark px-2 rounded-md hidden  group-hover:flex">
              <p className=" text-white font-xs font-normal p-1">Close</p>
            </div>
          </div>
        </div>

        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
