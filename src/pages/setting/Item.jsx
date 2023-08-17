const Item = ({ children, isActive = false, cls, onClick, ...argument }) => {
  return (
    <div
      onClick={onClick}
      {...argument}
      className={`flex justify-start items-center gap-2 w-full  p-2 border-[1px] border-gray-300 cursor-pointer hover:text-primary hover:bg-hover hover:border-b-primary duration-300 transition-colors ${
        isActive && "border-b-primary bg-hover text-primary"
      } ${cls}`}>
      {children}
    </div>
  );
};

export default Item;
