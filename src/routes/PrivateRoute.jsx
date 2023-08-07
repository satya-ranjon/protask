import { Outlet, Navigate } from "react-router-dom";
import AppWrapper from "../layouts/AppWrapper";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { accessToken } = useSelector((state) => state.auth);
  // console.log(!accessToken);
  return !accessToken ? (
    <Navigate to="/login" />
  ) : (
    <AppWrapper>
      <Outlet />
    </AppWrapper>
  );
};

export default PrivateRoute;
