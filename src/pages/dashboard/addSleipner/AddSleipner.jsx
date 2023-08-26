import Avatar from "../../../components/common/Avatar";
import { images } from "../../../constants";
import { BsSearch } from "react-icons/bs";
import SingleSearchResult from "./SingleSearchResult";

const AddSleipner = ({ handleAddOrSendSleipner }) => {
  return (
    <>
      <div className="flex justify-center items-center lg:absolute lg:left-0 lg:top-0 pointer-events-none">
        <img
          src={images.addSleipner}
          alt="inviteSend image"
          className="w-56 lg:w-72 xl:w-96 3xl:w-[700px]"
        />
      </div>
      <div className="w-full flex justify-center items-center lg:h-screen">
        <div className="max-w-[400px] xl:max-w-[520px]">
          <h1 className=" font-bold text-4xl lg:text-5xl xl:text-6xl">
            Add member to Sleipner
          </h1>
          <div className="w-full my-5 flex justify-between items-center border-b-2 border-b-gray-500 ">
            <input
              type="text"
              placeholder="Search by name or email"
              name="search"
              className=" w-full text-xl outline-none p-1 placeholder:text-sm placeholder:text-zinc-500"
            />
            <BsSearch className=" text-xl" />
          </div>
          <span
            onClick={handleAddOrSendSleipner}
            className=" font-medium text-primary border-b border-b-[#f5d592] cursor-pointer
            ">
            Or invite by email address
          </span>
          <div className="w-full mt-3 h-80 overflow-y-scroll">
            <SingleSearchResult />
            <SingleSearchResult />
            <SingleSearchResult />
            <SingleSearchResult />
            <SingleSearchResult />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSleipner;
