const SingleDate = ({
  children,
  currentDate = true,
  active = false,
  day = "00",
}) => {
  return (
    <span
      className={` ${currentDate ? "cursor-pointer" : " text-zinc-300"} ${
        active ? "text-primary " : " text-gray-700"
      } text-3xl w-14 h-12 flex flex-col justify-start text-center items-center font-medium  `}>
      <span
        className={`${
          currentDate && "hover:bg-zinc-100 duration-300 transition-colors "
        } p-3`}>
        {day}
      </span>
      {children}
    </span>
  );
};

export default SingleDate;
