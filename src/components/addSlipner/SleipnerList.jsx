import { useGetAllSleipnerQuery } from "../../services/user/userApi";
import SingleSleipnerSkelton from "../skeleton/SingleSleipnerSkelton";

const SleipnerList = ({ searchQuery, getSleipner }) => {
  const { data, isLoading } = useGetAllSleipnerQuery(1);
  const { sleipners } = data || {};

  const filteredSleipners =
    !isLoading && sleipners?.length > 0 && searchQuery
      ? sleipners.filter((sleipner) =>
          sleipner.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : sleipners || [];
  return (
    <div className="min-h-[200px] max-h-[300px] overflow-y-scroll flex flex-col gap-2 justify-start">
      {!isLoading &&
        filteredSleipners?.length > 0 &&
        filteredSleipners?.map((sleipner) => (
          <div
            onClick={() => getSleipner(sleipner)}
            key={sleipner._id}
            className="hover:bg-hover duration-300 flex justify-start items-center gap-2 transition-colors p-2 cursor-pointer">
            <img
              className="w-10 h-10 rounded-full"
              src={sleipner.avatar[64].url}
              alt="avatar"
            />
            <p className="text-lg font-semibold text-gray-700">
              {sleipner.name}
            </p>
          </div>
        ))}

      {/* Skeleton components for loading */}
      {isLoading && (
        <>
          <SingleSleipnerSkelton />
          <SingleSleipnerSkelton />
          <SingleSleipnerSkelton />
        </>
      )}
    </div>
  );
};

export default SleipnerList;
