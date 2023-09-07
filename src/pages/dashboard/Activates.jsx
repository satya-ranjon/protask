import React from "react";
import activateApi, {
  useGetAllActivateQuery,
} from "../../services/activates/activateApi";
import SingleActivate from "./SingleActivate";
import ActivatesSkelton from "../../components/skeleton/ActivatesSkelton";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHasMore,
  selectPage,
} from "../../services/activates/activateSelector";
import { updatePage } from "../../services/activates/activateSlice";

const Activates = () => {
  const { data, isLoading } = useGetAllActivateQuery();

  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectPage);

  useEffect(() => {
    if (page > 1) {
      dispatch(activateApi.endpoints.getMoreActivate.initiate(page));
    }
  }, [page]);

  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(updatePage(page + 1));
    console.log("fetch");
  };

  return (
    <div>
      <div className="px-4 pr-2 flex justify-between items-start pb-5 border-b-2 border-dark">
        <div>
          <h1 className="text-3xl font-bold flex items-center justify-start gap-3 text-gray-700">
            <span>Activates</span>
          </h1>
          <p className="text-sm text-dark-light">
            {data?.length} resent activates
          </p>
        </div>
      </div>
      <div className=" pt-5">
        {data?.length > 0 && (
          <InfiniteScroll
            dataLength={data?.length}
            next={fetchData}
            hasMore={hasMore}
            height={"40.3rem"}>
            {data?.map((activate) => (
              <SingleActivate key={activate._id} activate={activate} />
            ))}
          </InfiniteScroll>
        )}
        {isLoading && <ActivatesSkelton />}
        {!isLoading && !data?.length > 0 && <h1>You have no activate</h1>}
      </div>
    </div>
  );
};

export default Activates;
