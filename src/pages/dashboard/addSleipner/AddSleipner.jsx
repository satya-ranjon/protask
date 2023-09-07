import { images } from "../../../constants";
import { BsSearch } from "react-icons/bs";
import SingleSearchResult from "./SingleSearchResult";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import SingleSearchResultSkelton from "../../../components/skeleton/SingleSearchResultSkelton";
import InfiniteScroll from "react-infinite-scroll-component";
import { selectAuthAccessToken } from "../../../services/auth/authSelector";

const AddSleipner = ({ handleAddOrSendSleipner }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const token = useSelector(selectAuthAccessToken);
  const fetchData = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_API_URL
        }user/search?nameOremail=${searchQuery}&page=${page}&perPage=${
          import.meta.env.VITE_BASE_PARPAGE_SEARCH_RESULT
        }`,
        {
          method: "GET",
          headers,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const newData = await response.json();

      if (newData.length === 0) {
        setHasMore(false); // No more data to load
      } else {
        // Append new data to existing data
        setSearchResult((prevData) => [...prevData, ...newData]);
        setPage((prv) => prv + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      const timeoutId = setTimeout(async () => {
        fetchData();
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
    }
  }, [searchQuery]);

  const handleKeyDown = (e) => {
    setSearchResult([]);
    setPage(1);
    setSearchQuery(e.target.value);
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
              onChange={(e) => handleKeyDown(e)}
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
          <div className="w-full mt-3  overflow-y-scroll" id="scrollableDiv">
            {searchResult?.length > 0 && (
              <InfiniteScroll
                dataLength={searchResult?.length}
                next={fetchData}
                hasMore={hasMore}
                height={"350px"}>
                {searchResult?.map((user) => (
                  <SingleSearchResult key={user._id} user={user} />
                ))}
              </InfiniteScroll>
            )}
            {isLoading && <SingleSearchResultSkelton />}
            {!isLoading && !searchResult?.length > 0 && (
              <div className=" w-full flex justify-center items-center">
                <img src={images.eventNotFound} alt="not" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSleipner;
