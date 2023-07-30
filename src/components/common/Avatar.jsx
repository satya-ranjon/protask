import React from "react";

const Avatar = ({ url, cls }) => {
  return (
    <div
      className={`w-10 sm:w-12 h-10 sm:h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white ${cls} `}>
      <img src={url} className="rounded-full" />
      <div className="absolute -right-2 top-0 w-5 h-5 flex items-center justify-center rounded-full bg-primary p-2 text-xs">
        13
      </div>
    </div>
  );
};

export default Avatar;
