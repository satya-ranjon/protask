import AvatarGroup from "../../components/common/AvatarGroup";
const avatar = [
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1692791687/user_profiles/k6gslc4ewmzpgri7gu0m.png",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1692791687/user_profiles/k6gslc4ewmzpgri7gu0m.png",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1692791687/user_profiles/k6gslc4ewmzpgri7gu0m.png",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1664309906/f/images/profile/profile_ob28l3.webp",
  "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1664309906/f/images/profile/profile_ob28l3.webp",
];

const SingleEvent = ({ event }) => {
  const {} = event || {};
  return (
    <div className="flex justify-between items-start py-3 px-4 border-b-2 border-b-zinc-200 hover:bg-hover hover:border-b-primary  duration-300 cursor-pointer">
      <div className="px-0 font-semibold  text-dark">
        <div className=" text-3xl ">11:00 - 12:30</div>
        <div className=" text-lg mt-2"> Review of the project</div>
        <div className=" text-sm font-normal text-dark-light mt-1">
          Video Call
        </div>
      </div>
      <AvatarGroup avatar={avatar} show={4} height="h-10" width="w-10" />
    </div>
  );
};

export default SingleEvent;
