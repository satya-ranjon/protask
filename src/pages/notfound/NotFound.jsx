import { useNavigate } from "react-router-dom";
import { images } from "../../constants";
import useTitleSet from "../../hooks/useTitleSet";

const NotFound = () => {
  const navigate = useNavigate();
  useTitleSet("Not Found");
  return (
    <div
      className={`notfound text-dark bg-cover bg-no-repeat bg-center h-screen flex justify-center items-center text-center select-none`}>
      <div className="">
        <h1 className=" font-bold  text-9xl ">404</h1>
        <h1 className=" font-bold text-5xl ">Page Not Found</h1>
        <p className=" text-xl w-[450px] mt-4">
          we’re sorry. the page you requested could no be found Please go back
          to the dashboard page
        </p>
        <button
          onClick={() => navigate("/")}
          className=" bg-black text-white border-none p-2 px-5 mt-3 rounded-lg">
          Go Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFound;
