import { useSelector } from "react-redux";

const ProfilePicture = () => {
  const { avatar } = useSelector((state) => state.auth.user);
  return (
    <div className=" w-52 h-52 rounded-full overflow-hidden">
      <img
        className=" w-52 h-52"
        src="http://source.unsplash.com/200x200/?man"
        alt={avatar}
      />
    </div>
  );
};

export default ProfilePicture;
