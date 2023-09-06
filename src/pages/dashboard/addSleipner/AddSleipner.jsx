import { images } from "../../../constants";
import { BsSearch } from "react-icons/bs";
import SingleSearchResult from "./SingleSearchResult";
import { useEffect, useState } from "react";
import { useGetSearchUsersQuery } from "../../../services/user/userApi";
import { useSelector } from "react-redux";
import { selectSearchResult } from "../../../services/user/userSelector";
import SingleSearchResultSkelton from "../../../components/skeleton/SingleSearchResultSkelton";

const AddSleipner = ({ handleAddOrSendSleipner }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [fetch, setFetch] = useState(true);
  const searchResult = useSelector(selectSearchResult); // Retrieve search results from Redux state

  // Fetch search results using a custom query hook
  const { isLoading, isSuccess } = useGetSearchUsersQuery(
    {
      nameOrEmail: searchQuery,
      page: 1,
      perPage: 10,
    },
    {
      skip: fetch,
    }
  );

  // Effect to set 'fetch' to true when search results are successfully loaded
  useEffect(() => {
    if (isSuccess) {
      setFetch(true);
    }
  }, [isSuccess]);

  // Handle Enter key press in the search input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setFetch(false);
    }
  };

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
          {/* Search input */}
          <div className="w-full my-5 flex justify-between items-center border-b-2 border-b-gray-500">
            <input
              type="text"
              placeholder="Search by name or email"
              name="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className=" w-full text-xl outline-none p-1 placeholder:text-sm placeholder:text-zinc-500"
            />
            <BsSearch className=" text-xl" />
          </div>
          {/* Option to invite by email address */}
          <span
            onClick={handleAddOrSendSleipner}
            className=" font-medium text-primary border-b border-b-[#f5d592] cursor-pointer
            ">
            Or invite by email address
          </span>
          {/* Display search results or loading skeleton */}
          <div className="w-full mt-3 h-80 overflow-y-scroll">
            {isLoading ? (
              // Display loading skeletons while data is loading
              <>
                <SingleSearchResultSkelton />
                <SingleSearchResultSkelton />
              </>
            ) : (
              // Map and display search results if available
              searchResult?.length > 0 &&
              searchResult?.map((user) => (
                <SingleSearchResult key={user._id} user={user} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSleipner;
