const GridGroup = ({ title, doc, children }) => {
  return (
    <div>
      <div className="px-4 pr-2 flex justify-between items-start pb-5 border-b-2 border-dark">
        <div>
          <h1 className="text-3xl font-bold flex items-center justify-start gap-3 text-gray-700">
            <span>{title}</span>
          </h1>
          <p className="text-sm text-dark-light">{doc}</p>
        </div>
      </div>
      <div className="min-h-[25rem] lg:max-h-[45.3rem] 2xl:max-h-[40.7rem] overflow-scroll overflow-x-hidden scroll-m-1 w-full task pt-5">
        {children}
      </div>
    </div>
  );
};

export default GridGroup;
