import { MdOpenInFull } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import ButtonIcon from "../common/ButtonIcon";
import { motion, AnimatePresence } from "framer-motion";

const RightModal = ({
  isOpen = false,
  onClose = () => {},
  openFull = () => {},
  children,
}) => {
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
          className=" fixed top-0 right-0 h-screen bg-white min-w-[700px] border "
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}>
          <div className=" flex justify-between">
            <ButtonIcon tooltipLeftRight="Open in full page" onClick={openFull}>
              <MdOpenInFull />
            </ButtonIcon>
            <ButtonIcon tooltipRightLeft="Close" onClick={onClose}>
              <AiOutlineClose />
            </ButtonIcon>
          </div>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RightModal;
