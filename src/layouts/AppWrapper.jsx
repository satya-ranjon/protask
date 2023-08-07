import SaidBar from "../components/sidebar/SaidBar";

const AppWrapper = ({ children }) => {
  return (
    <div className=" flex font-roboto">
      <SaidBar />
      <div className=" w-full mb-20 sm:mb-0 sm:ml-28">{children}</div>
    </div>
  );
};

export default AppWrapper;
