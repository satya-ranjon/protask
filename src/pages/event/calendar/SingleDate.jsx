const SingleDate = ({ children, currentDate = true, active = false }) => {
  return (
    <span
      className={` ${currentDate ? "cursor-pointer" : " text-zinc-300"} ${
        active ? "text-primary " : " text-gray-700"
      } text-3xl w-14 h-12 flex flex-col justify-start items-center font-medium `}>
      {children}
    </span>
  );
};

export default SingleDate;
