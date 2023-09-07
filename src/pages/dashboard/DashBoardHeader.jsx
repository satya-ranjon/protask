import { IoIosAdd } from "react-icons/io";
import AvatarGroupSkelton from "../../components/skeleton/AvatarGroupSkelton";

const DashBoardHeader = ({ avatar, isLoading, handleAddSleipner }) => {
  return (
    <div className="mx-3 sm:mx-5 2xl:mx-16 py-3 2xl:py-10 flex justify-between items-start">
      <div className="w-[80%]">
        <h1 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl text-gray-700">
          Dashboard
        </h1>
        <p className="hidden sm:block text-dark-light text-sm 2xl:text-base max-w-[799px] mt-4">
          This section displays a list of events that are scheduled to take
          place in the near future. You'll find information such as event names,
          dates, times, and brief descriptions. Click on an event for more
          details.
        </p>
      </div>
      {/* Add Sleipner button */}
      {isLoading ? (
        <AvatarGroupSkelton />
      ) : (
        <div className="flex -space-x-4 min-w-fit">
          {avatar?.length > 0 &&
            avatar?.map((sleipner, index) => (
              <img
                key={index}
                className="w-10 h-10 xl:w-12 xl:h-12 border-2 border-white rounded-full "
                src={sleipner.avatar["64"].url}
                alt="avatar"
              />
            ))}

          <button
            className="flex items-center justify-center w-10 h-10 xl:w-12 xl:h-12 text-xl font-medium text-white border-2 border-white bg-dark rounded-full "
            onClick={handleAddSleipner}>
            <IoIosAdd />
          </button>
        </div>
      )}
    </div>
  );
};

export default DashBoardHeader;
