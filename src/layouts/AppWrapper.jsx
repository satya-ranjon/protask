import SaidBar from "../components/sidebar/SaidBar";
import LogoutAndSetting from "../components/sidebar/LogoutAndSetting";
import { useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import RightModal from "../components/modal/RightModal";
import UpdateEvent from "../pages/event/addevent/UpdateEvent";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedUpdateEventId } from "../services/event/eventSelector";
import { resetSelectedUpdateEventData } from "../services/event/eventSlice";
import { useNavigate, useLocation } from "react-router-dom";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const selectedEventId = useSelector(selectSelectedUpdateEventId);

  const modalIsActive =
    selectedEventId &&
    (pathname === "/dashboard/event" || pathname === "/dashboard");

  const handleUpdateEventModal = () => {
    dispatch(resetSelectedUpdateEventData());
  };

  const handleUpdateEventFullPage = () => {
    navigate(`/dashboard/event/${selectedEventId}`);
  };
  return (
    <div ref={dropdownRef} className="flex font-roboto ">
      <SaidBar avatarClick={handleLogoutAndSettingBar} />
      {isOpen && <LogoutAndSetting setIsOpen={setIsOpen} />}
      <div className=" w-full mb-20 sm:mb-0 sm:ml-28">{children}</div>
      <RightModal
        isOpen={modalIsActive}
        onClose={handleUpdateEventModal}
        openFull={handleUpdateEventFullPage}>
        <UpdateEvent />
      </RightModal>
    </div>
  );
};

export default AppWrapper;
