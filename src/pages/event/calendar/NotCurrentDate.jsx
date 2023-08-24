const NotCurrentDate = ({ children }) => {
  return (
    <span
      className={` text-3xl w-14 h-12 flex flex-col justify-start items-center font-medium text-zinc-300`}>
      {children}
    </span>
  );
};

export default NotCurrentDate;
