import Avatar from "../common/Avatar";
import MenuItem from "./MenuItem";
import menuItems from "../../data/menu";
import { images } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { selectUserAvatar64 } from "../../services/auth/authSelector";
import { resetSelectedUpdateEventData } from "../../services/event/eventSlice";

const SaidBar = ({ avatarClick }) => {
  const avatar = useSelector(selectUserAvatar64);
  const dispatch = useDispatch();
  const handleUpdateEventModal = () => {
    dispatch(resetSelectedUpdateEventData());
  };

  return (
    <div className=" fixed bottom-0 w-full  left-0  sm:h-screen sm:block overflow-x-hidden sm:w-28 bg-white border-r-2 border-gray-100">
      <div className=" sm:flex sm:flex-col justify-between h-full items-center py-5">
        <div className=" hidden sm:block w-12 h-12">
          <img src={images.Logo} alt="" className="w-full h-full" />
        </div>
        <div className=" flex  justify-between  px-5 text-dark-light items-center sm:flex-col sm:gap-10">
          {menuItems.map((item) => (
            <MenuItem
              path={item.path}
              key={item.path}
              onClick={handleUpdateEventModal}>
              {item.icon}
            </MenuItem>
          ))}

          <Avatar cls="sm:hidden" url={avatar} />
        </div>
        <div className="hidden sm:block cursor-pointer" onClick={avatarClick}>
          <Avatar url={avatar} />
        </div>
      </div>
    </div>
  );
};

export default SaidBar;
