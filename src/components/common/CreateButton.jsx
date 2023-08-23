import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const CreateButton = ({ children, ...argument }) => {
  const [isMobile, setIsMobile] = useState(768 > window.innerWidth);

  const handleResize = () => {
    setIsMobile(700 > window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <button
      type="button"
      {...argument}
      className="p-3 2xl:p-4 sm:px-5 2xl:px-8 rounded-full sm:rounded-none 
             font-medium bg-dark text-white text-2xl sm:text-sm 2xl:text-base">
      {isMobile ? <AiOutlinePlus /> : children}
    </button>
  );
};

export default CreateButton;
