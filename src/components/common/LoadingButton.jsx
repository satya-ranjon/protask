import React from "react";
import LoadingIcon from "./LoadingIcon";

const LoadingButton = ({
  isLoading = false,
  disabled = false,
  children,
  ...argument
}) => {
  return (
    <button
      disabled={disabled}
      {...argument}
      className={`text-lg bg-black text-white flex justify-center items-center rounded-sm p-2 px-8 ${
        disabled && "opacity-50"
      }`}>
      {isLoading && <LoadingIcon />}
      {children}
    </button>
  );
};

export default LoadingButton;
