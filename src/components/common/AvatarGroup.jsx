const AvatarGroup = ({ avatar = [] }) => {
  // Render a single avatar
  const renderSingleAvatar = (avatarUrl) => {
    const url =
      avatarUrl ||
      "https://res.cloudinary.com/dcpbu1ffy/image/upload/v1664309906/f/images/profile/profile_ob28l3.webp";

    return (
      <img
        key={avatarUrl}
        className="w-8 h-8 rounded-full border-2 border-white"
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
    const firstTwoAvatars = avatar.slice(0, 2);

    return (
      <div className="flex">
        {firstTwoAvatars.map((item) => renderSingleAvatar(item))}
        {/* Display a count of the remaining avatars */}
        <span className="flex items-center justify-center font-semibold text-gray-600 text-xs w-8 h-8 rounded-full bg-gray-200 border-2 border-white -ml-3">
          +{avatar.length - 2}
        </span>
      </div>
    );
  }
};

export default AvatarGroup;
