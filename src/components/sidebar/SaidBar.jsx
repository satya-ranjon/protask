import Avatar from "../common/Avatar";
import Logo from "../../assets/images/logo.svg";
import MenuItem from "./MenuItem";
import menuItems from "../../data/menu";

const SaidBar = () => {
  return (
    <div className=" fixed bottom-0 w-full  left-0  sm:h-screen sm:block overflow-x-hidden sm:w-28 bg-white border-r-2 border-gray-100">
      <div className=" sm:flex sm:flex-col justify-between h-full items-center py-5">
        <div className=" hidden sm:block w-12 h-12">
          <img src={Logo} alt="" className="w-full h-full" />
        </div>
        <div className=" flex  justify-between  px-5 text-dark-light items-center sm:flex-col sm:gap-10">
          {menuItems.map((item) => (
            <MenuItem path={item.path} key={item.path}>
              {item.icon}
            </MenuItem>
          ))}

          <Avatar
            cls="sm:hidden"
            url={"http://source.unsplash.com/100x100/?woman"}
          />
        </div>
        <div className="hidden sm:block">
          <Avatar url={"http://source.unsplash.com/100x100/?woman"} />
        </div>
      </div>
    </div>
  );
};

export default SaidBar;
