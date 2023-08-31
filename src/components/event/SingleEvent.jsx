import AvatarGroup from "../common/AvatarGroup";
const avatar = [
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1692791687/user_profiles/k6gslc4ewmzpgri7gu0m.png",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1692791687/user_profiles/k6gslc4ewmzpgri7gu0m.png",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1692791687/user_profiles/k6gslc4ewmzpgri7gu0m.png",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1664309906/f/images/profile/profile_ob28l3.webp",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1664309906/f/images/profile/profile_ob28l3.webp",
];

const SingleEvent = ({
  event,
  titleLength = 30,
  docLength = 25,
  ...argument
}) => {
  const { title, starttime, endtime, description } = event || {};

  const doc = description?.find((item) => item.content[0])?.content[0]?.text;
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
      <AvatarGroup avatar={avatar} show={4} height="h-10" width="w-10" />
    </div>
  );
};

export default SingleEvent;
