const Button = ({ type = "black", children, ...argument }) => {
  const cls =
    type === "black"
      ? "bg-gray-800 text-white border-transparent"
      : "text-gray-800 border-gray-300";
  return (
    <button
      {...argument}
      className={`flex justify-between items-center gap-5 xl:gap-10 px-3   xl:px-6 py-2 text-sm xl:text-lg font-medium border-2   ${cls}`}>
      {children}
    </button>
  );
};

export default Button;
