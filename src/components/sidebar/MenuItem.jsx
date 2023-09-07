import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuItem = ({ path, children, onClick }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      onClick={onClick}
      className={`group relative transition-all text-3xl sm:text-4xl duration-500 hover:text-primary  ${
        pathname === path && "text-primary -top-3 sm:-top-0"
      }`}>
      {children}
      <span
        className={`absolute text-primary font-semibold transition-all duration-500 rotate-90 sm:rotate-0 right-3 sm:right-0  sm:-top-1 group-hover:-bottom-8  sm:group-hover:-left-5  group-hover:opacity-100
                ${
                  pathname == path
                    ? "-bottom-8 sm:-bottom-0  sm:-left-5 opacity-100"
                    : " bottom-2 sm:bottom-0 sm:left-10 opacity-0"
                } `}>
        |
      </span>
    </Link>
  );
};

export default MenuItem;
