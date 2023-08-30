import ReactDOM from "react-dom";
import { MdOpenInFull } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import ButtonIcon from "../common/ButtonIcon";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen = false, onClose, children, cls, fullPage }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="w-full  h-full fixed top-0 left-0 overflow-hidden flex justify-center items-center bg-[#000000c4]">
          <motion.div
            className={`absolute w-[90%]  lg:w-[60%] bg-white  p-1 border-gray-500  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  ${cls} `}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}>
            <div className=" flex justify-between">
              {fullPage ? (
                <ButtonIcon onClick={fullPage} tooltipLeft="Open in full page">
                  <MdOpenInFull />
                </ButtonIcon>
              ) : (
                <div className=""></div>
              )}
              <ButtonIcon onClick={onClose} tooltipRight="Close">
                <AiOutlineClose />
              </ButtonIcon>
            </div>

            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
