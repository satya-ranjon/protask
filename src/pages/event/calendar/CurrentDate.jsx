const CurrentDate = ({ txtColor = "text-gray-700", cls, children }) => {
  return (
    <span
      className={` text-3xl w-14 h-12 flex flex-col justify-start items-center font-medium ${txtColor} ${cls}`}>
      {children}
    </span>
  );
};

export default CurrentDate;
