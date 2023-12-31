import { GrClose } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

const FullModal = ({ isOpen, children, onClose }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed -right-31 top-0  bg-[#ffffff] w-full h-full modal "
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}>
          <div className="w-full flex sm:gap-5 justify-end items-start sm:pr-28">
            <div className="w-full h-screen px-3 sm:px-0">{children}</div>
            <div className=" sm:w-5 xl:w-10 sm:h-screen bg-hover "></div>
            <div className=" sm:w-8 xl:w-16 sm:h-screen bg-hover "></div>
            <div className="absolute top-0 right-0 sm:static  w-24 sm:w-24 xl:w-36 h-28 sm:h-screen bg-hover rounded-es-[80px] sm:rounded-es-none">
              <div
                className="border-2 w-10 h-10 flex justify-center items-center mx-auto mt-5 sm:mt-12 text-gray-900 border-gray-400 cursor-pointer"
                onClick={onClose}>
                <GrClose />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullModal;
