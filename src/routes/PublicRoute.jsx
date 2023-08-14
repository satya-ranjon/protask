import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { accessToken } = useSelector((state) => state.auth);

  return accessToken ? <Navigate to="/tasks" /> : <Outlet />;
};

export default PublicRoute;
