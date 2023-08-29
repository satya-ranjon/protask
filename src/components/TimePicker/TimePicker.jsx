import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const hourList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 0,
];

const minuteList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 0,
];
const TimePicker = ({
  initialState = {
    hour: 0,
    minute: 0,
  },
  getValue = () => {},
}) => {
  const handleTime = (value) => {
    getValue({
      hour:
        value?.hour < 9 ? `0${value?.hour}` : value?.hour || initialState?.hour,
      minute:
        value?.minute < 9
          ? `0${value?.minute}`
          : value?.minute || initialState?.minute,
    });
  };

  return (
    <div className="absolute top-10 left-0 bg-white z-10">
      <div className=" flex justify-between items-center border border-grey-light">
        <div>
          <h1 className=" text-lg font-semibold text-center">Hour</h1>
          <div className="max-h-56 overflow-y-scroll w-20 select-none ">
            {hourList?.map((h) => (
              <li
                onClick={() => handleTime({ hour: h })}
                key={h + 2}
                className={`list-none cursor-pointer w-full p-1 hover:bg-hover flex justify-center items-center ${
                  initialState.hour === h && "bg-hover"
                }`}>
                {h}
              </li>
            ))}
          </div>
        </div>
        <div>
          <h1 className=" text-lg font-semibold text-center">Minute</h1>
          <div className="max-h-56 overflow-y-scroll w-20 select-none ">
            {minuteList?.map((m) => (
              <li
                onClick={() => handleTime({ minute: m })}
                key={m + 3}
                className={`list-none cursor-pointer w-full p-1 hover:bg-hover flex justify-center items-center ${
                  initialState.minute === m && "bg-hover"
                }`}>
                {m}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
