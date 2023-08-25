import { GrClose } from "react-icons/gr";

const FullModal = ({ isOpen, children, onClose }) => {
  return (
    isOpen && (
      <div className="fixed -right-31 top-0  bg-[#ffffff] w-full h-full modal ">
        <div className="w-full flex gap-5 justify-end items-start pr-28">
          <div className="w-full h-screen">{children}</div>
          <div className="w-10 h-screen bg-hover "></div>
          <div className="w-16 h-screen bg-hover "></div>
          <div className="w-36 h-screen bg-hover">
            <div
              className="border-2 w-10 h-10 flex justify-center items-center mx-auto mt-12 text-gray-900 border-gray-400 cursor-pointer"
              onClick={onClose}>
              <GrClose />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default FullModal;
