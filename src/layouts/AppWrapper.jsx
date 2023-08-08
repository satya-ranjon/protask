import SaidBar from "../components/sidebar/SaidBar";
import LogoutAndSetting from "../components/sidebar/LogoutAndSetting";
import { useEffect, useRef, useState } from "react";

const AppWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogoutAndSettingBar = () => {
    setIsOpen((prv) => !prv);
  };
  const dropdownRef = useRef(null);

  // Function to handle clicks outside the dropdown
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className=" flex font-roboto">
      <SaidBar avatarClick={handleLogoutAndSettingBar} />
      {isOpen && <LogoutAndSetting />}
      <div className=" w-full mb-20 sm:mb-0 sm:ml-28">{children}</div>
    </div>
  );
};

export default AppWrapper;
