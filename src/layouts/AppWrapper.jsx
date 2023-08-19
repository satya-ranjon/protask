import SaidBar from "../components/sidebar/SaidBar";
import LogoutAndSetting from "../components/sidebar/LogoutAndSetting";
import { useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const AppWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoutAndSettingBar = () => {
    setIsOpen((prv) => !prv);
  };
  const dropdownRef = useRef(null);

  // Custom hook to handle clicks outside the dropdown
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={dropdownRef} className="flex font-roboto ">
      <SaidBar avatarClick={handleLogoutAndSettingBar} />
      {isOpen && <LogoutAndSetting setIsOpen={setIsOpen} />}
      <div className=" w-full mb-20 sm:mb-0 sm:ml-28">{children}</div>
    </div>
  );
};

export default AppWrapper;
