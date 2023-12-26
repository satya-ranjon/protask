import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Container from "../common/Container";
import { images } from "../../constants";
import { useSelector } from "react-redux";
import { selectAuthAccessToken } from "../../services/auth/authSelector";

const menu = [
  { label: "Home", link: "/" },
  { label: "Features", link: "/features" },
  { label: "Pricing", link: "/pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = useSelector(selectAuthAccessToken);
  return (
    <div className="py-8 font-medium text-zinc-600">
      <Container>
        <div className=" flex justify-between lg:justify-start items-center gap-20">
          <div className=" flex justify-start items-center gap-3">
            <img
              src={images.Logo1}
              alt="logo"
              className=" w-10 h-10 lg:w-11 lg:h-11"
            />
            <span className="text-zinc-950 font-bold text-2xl lg:text-3xl">
              Protask
            </span>
          </div>

          <div className=" relative lg:hidden">
            {/* Menu Controller  */}
            {isOpen ? (
              <IoMdClose
                onClick={() => setIsOpen(false)}
                className="text-4xl"
              />
            ) : (
              <IoMdMenu onClick={() => setIsOpen(true)} className="text-4xl" />
            )}
            {/* Mobile & Tablet menu  */}
            {isOpen && (
              <div className=" absolute w-72  bg-red-50 right-0 top-12 rounded-sm">
                <div className=" w-full flex flex-col  justify-start gap-4 items-center py-10 ">
                  {menu.map((item) => (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-primary" : ""
                      }
                      to={item.link}
                      key={item.link}>
                      {item.label}
                    </NavLink>
                  ))}
                  {accessToken ? (
                    <Link to="/dashboard">
                      <button className="px-3 py-2 text-base bg-zinc-900 text-zinc-200 rounded-md font-semibold ">
                        Dashboard
                      </button>
                    </Link>
                  ) : (
                    <>
                      <NavLink to="/login"> Login</NavLink>
                      <Link to="/dashboard">
                        <button className="px-3 py-2 text-base bg-zinc-900 text-zinc-200 rounded-md font-semibold ">
                          Let’s Explore
                        </button>{" "}
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Desktop menu  */}
          <div className="w-full hidden lg:flex justify-between items-center text-lg ">
            <div className="flex justify-start gap-8 items-center  ">
              {menu.map((item) => (
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to={item.link}
                  key={item.link}>
                  {item.label}
                </NavLink>
              ))}
            </div>
            {accessToken ? (
              <Link to="/dashboard">
                <button className="px-3 py-2 text-base bg-zinc-900 text-zinc-200 rounded-md font-semibold ">
                  Dashboard
                </button>
              </Link>
            ) : (
              <div className=" flex justify-start gap-8 items-center">
                <NavLink to="/login"> Login</NavLink>
                <Link to="/dashboard">
                  <button className="px-3 py-2 text-base bg-zinc-900 text-zinc-200 rounded-md font-semibold ">
                    Let’s Explore
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
