import { GiCheckMark } from "react-icons/gi";
import { useAddSleipnerMutation } from "../../../services/user/userApi";
import LoadingIconPrimary from "../../../components/common/LoadingIconPrimary";

const SingleSearchResult = ({ user }) => {
  // Destructure user data, including name, _id, and avatar URL
  const {
    name,
    _id,
    avatar: {
      64: { url },
    },
  } = user || {};

  // Use the useAddSleipnerMutation hook to add a user to Sleipner
  const [addSleipner, { isSuccess, isLoading }] = useAddSleipnerMutation();

  // Function to handle adding a user to Sleipner when clicked
  const handleAddSleipner = () => {
    // Only execute the addSleipner mutation if it's not already successful
    if (!isSuccess) {
      addSleipner(_id);
    }
  };

  return (
    <div className="w-full  hover:bg-hover duration-300 transition-colors border-t hover:border-t-primary">
      <div className="w-full flex justify-between items-center py-4 border-b">
        <div className="flex justify-start items-center gap-4">
          {/* Display user avatar */}
          <div className=" w-10 h-10 overflow-hidden rounded-full">
            <img className="w-10 h-10 " src={url} alt="avatar" />
          </div>
          <div>
            {/* Display user name and role */}
            <h1 className=" text-sm font-semibold">{name}</h1>
            <span className=" text-dark-light text-sm">Developer</span>
          </div>
        </div>

        {/* Display "Add" button, loading icon, or success checkmark */}
        <div
          onClick={handleAddSleipner}
          className="text-primary cursor-pointer border-b border-b-[#f5d592] text-lg font-medium">
          {isLoading ? (
            // Display a loading icon while the operation is in progress
            <LoadingIconPrimary />
          ) : isSuccess ? (
            // Display a checkmark icon when the operation is successful
            <GiCheckMark className=" text-2xl" />
          ) : (
            // Display "Add" if not loading or successful
            "Add"
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleSearchResult;
