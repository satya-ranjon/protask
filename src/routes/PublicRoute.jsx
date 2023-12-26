import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAuthAccessToken } from "../services/auth/authSelector";

const PublicRoute = () => {
  const accessToken = useSelector(selectAuthAccessToken);

  return accessToken ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
