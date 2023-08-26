import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
const SingleSearchResult = () => {
  const [added, setAdded] = useState(false);
  return (
    <div className="w-full px-4 hover:bg-hover duration-300 transition-colors border-t hover:border-t-primary">
      <div className="w-full flex justify-between items-center py-4 border-b">
        <div className="flex justify-start items-center gap-4">
          <div className=" w-10 h-10 overflow-hidden rounded-full">
            <img
              className="w-10 h-10 "
              src="https://res.cloudinary.com/dcpbu1ffy/image/upload/v1692791687/user_profiles/k6gslc4ewmzpgri7gu0m.png"
              alt=""
            />
          </div>
          <div>
            <h1 className=" text-sm font-semibold">Satya Ranjon Sharma</h1>
            <span className=" text-dark-light text-sm">Developer</span>
          </div>
        </div>

        <div
          onClick={() => setAdded(true)}
          className="text-primary cursor-pointer border-b border-b-[#f5d592] text-lg font-medium">
          {added ? <GiCheckMark className=" text-2xl" /> : "Add"}
        </div>
      </div>
    </div>
  );
};

export default SingleSearchResult;
