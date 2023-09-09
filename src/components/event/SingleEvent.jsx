const SingleEvent = ({
  event,
  titleLength = 30,
  docLength = 25,
  ...argument
}) => {
  const { title, starttime, endtime, description, sleipner } = event || {};

  const doc = description?.find((item) => item.content[0])?.content[0]?.text;

  const numOfAvatarShow = 4;
  return (
    <div
      {...argument}
      className="flex justify-between items-start py-3 px-4 border-b-2 border-b-zinc-200 hover:bg-hover hover:border-b-primary  duration-300 cursor-pointer">
      <div className="px-0 font-medium  text-gray-700">
        <div className=" text-3xl ">
          {starttime} - {endtime}
        </div>
        <div className=" text-lg mt-2"> {title?.slice(0, titleLength)}</div>
        {doc && (
          <div className=" text-sm font-normal text-dark-light mt-1">
            {doc?.slice(0, docLength)}
          </div>
        )}
      </div>
      {sleipner?.length > 0 && (
        <div className="flex -space-x-4 ">
          {sleipner?.slice(0, numOfAvatarShow)?.map((item) => (
            <img
              key={item._id}
              src={item?.avatar["64"]?.url}
              alt="avatar"
              className="h-10 w-10 rounded-full border border-white"
            />
          ))}
          {sleipner?.length > numOfAvatarShow && (
            <div className="h-10 w-10 rounded-full border border-white flex bg-hover justify-center items-center text-lg font-medium">
              {sleipner?.length - numOfAvatarShow}
            </div>
          )}
        </div>
      )}
      {/* <AvatarGroup avatar={avatar} show={4} height="h-10" width="w-10" /> */}
    </div>
  );
};

export default SingleEvent;
