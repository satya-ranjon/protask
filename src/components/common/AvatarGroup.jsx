import { v4 as uuidv4 } from "uuid";

const AvatarGroup = ({
  avatar = [],
  show = 2,
  width = "w-8",
  height = "h-8",
}) => {
  // Render a single avatar
  const renderSingleAvatar = (avatarUrl) => {
    const url =
      avatarUrl ||
      "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1664309906/f/images/profile/profile_ob28l3.webp";

    return (
      <img
        key={uuidv4()}
        className={`${height} ${width} rounded-full border-2 border-white`}
        src={url}
        alt={avatarUrl}
      />
    );
  };

  // If there is only one avatar, display it
  if (avatar.length === 1) {
    return renderSingleAvatar(avatar[0]);
  } else {
    // If there are more than one avatars, display the first two and a count for the rest
    const firstTwoAvatars = avatar.slice(0, show);

    return (
      <div className="flex  -space-x-4 min-w-fit">
        {firstTwoAvatars.map((item) => renderSingleAvatar(item))}
        {/* Display a count of the remaining avatars */}
        <span
          className={`${height} ${width} flex items-center justify-center font-semibold text-gray-600 text-xs  rounded-full bg-gray-200 border-2 border-white -ml-3`}>
          +{avatar.length - show}
        </span>
      </div>
    );
  }
};

export default AvatarGroup;
