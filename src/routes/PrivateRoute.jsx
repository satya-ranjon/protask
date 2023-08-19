import { Outlet, Navigate } from "react-router-dom";
import AppWrapper from "../layouts/AppWrapper";
import { useSelector } from "react-redux";
import { selectAuthAccessToken } from "../services/auth/authSelector";

const PrivateRoute = () => {
  const accessToken = useSelector(selectAuthAccessToken);
  return !accessToken ? (
    <Navigate to="/login" />
  ) : (
    <AppWrapper>
      <Outlet />
    </AppWrapper>
  );
};

export default PrivateRoute;
