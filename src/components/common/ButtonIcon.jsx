const ButtonIcon = ({
  tooltipLeft,
  tooltipRight,
  children,
  tooltipRightLeft,
  tooltipLeftRight,
  ...argument
}) => {
  return (
    <div className="relative group">
      <button
        {...argument}
        className="right-2 w-8 h-8 lg:w-10 lg:h-10 rounded-lg  text-dark flex justify-center items-center cursor-pointer hover:bg-gray-100  duration-100 -z-0"
        aria-label="Close Modal">
        {children}
      </button>
      {tooltipLeft && (
        <div className="absolute -top-8 left-0 w-max bg-dark px-2 rounded-md hidden  group-hover:flex">
          <p className=" text-white font-xs font-normal p-1">{tooltipLeft}</p>
        </div>
      )}
      {tooltipRight && (
        <div className="absolute -top-8 right-0 w-max bg-dark px-2 rounded-md hidden  group-hover:flex">
          <p className=" text-white font-xs font-normal p-1">{tooltipRight}</p>
        </div>
      )}
      {tooltipLeftRight && (
        <div className="absolute top-0 left-12 w-max bg-dark px-2 rounded-md hidden  group-hover:flex">
          <p className=" text-white font-xs font-normal p-1">
            {tooltipLeftRight}
          </p>
        </div>
      )}
      {tooltipRightLeft && (
        <div className="absolute top-0 right-12 w-max bg-dark px-2 rounded-md hidden  group-hover:flex">
          <p className=" text-white font-xs font-normal p-1">
            {tooltipRightLeft}
          </p>
        </div>
      )}
    </div>
  );
};

export default ButtonIcon;
