import React from "react";

const SingleEventSkelton = () => {
  return (
    <div role="status" className="animate-pulse px-2 py-3">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="w-52 h-8 bg-gray-200  dark:bg-gray-400  "></div>
          <div className="w-32 h-5 bg-gray-200  dark:bg-gray-400  "></div>
        </div>
        <div className="flex -space-x-4">
          <div className="w-10 h-10 xl:w-12 xl:h-12 border-2 border-white rounded-full bg-gray-200  dark:bg-gray-400  mb-4"></div>
          <div className="w-10 h-10 xl:w-12 xl:h-12 border-2 border-white rounded-full bg-gray-200  dark:bg-gray-400  mb-4"></div>
          <div className="w-10 h-10 xl:w-12 xl:h-12 border-2 border-white rounded-full bg-gray-200  dark:bg-gray-400  mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleEventSkelton;
