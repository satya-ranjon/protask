import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainWrapper = () => {
  const { pathname } = useLocation();
  return (
    <div className=" font-inter">
      {pathname !== "/" && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainWrapper;
