import React from "react";
import LoadingIcon from "./LoadingIcon";

const LoadingButton = ({ isLoading = false, children, ...argument }) => {
  return (
    <button
      {...argument}
      className="text-lg bg-black text-white rounded-sm p-2 px-8">
      {isLoading && <LoadingIcon />}
      {children}
    </button>
  );
};

export default LoadingButton;
