const SectionTitle = ({ children }) => {
  return (
    <div className=" flex justify-start md:justify-center w-full">
      <h1 className=" font-bold text-start md:text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-3xl xl:max-w-6xl">
        {children}
      </h1>
    </div>
  );
};

export default SectionTitle;
