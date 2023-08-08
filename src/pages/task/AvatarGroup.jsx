import React from "react";

const AvatarGroup = ({ avatar = [] }) => {
  if (avatar?.length === 1) {
    return (
      <img
        className="w-8 h-8 rounded-full border-2 border-white"
        src={avatar[0].avatar}
        alt={avatar[0].avatar}
      />
    );
  } else {
    return (
      <div className="flex">
        {avatar?.slice(0, 2).map((item) => (
          <img
            key={item._id}
            className="w-8 h-8 rounded-full border-2 border-white -ml-3"
            src={item.avatar}
            alt={item.avatar}
          />
        ))}
        <span className="flex items-center justify-center font-semibold text-gray-600 text-xs w-8 h-8 rounded-full bg-gray-200 border-2 border-white -ml-3">
          +{avatar?.length - 2}
        </span>
      </div>
    );
  }
};

export default AvatarGroup;
