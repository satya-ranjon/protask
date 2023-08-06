import { Outlet, Navigate } from "react-router-dom";
import AppWrapper from "../layouts/AppWrapper";

const PrivateRoute = ({ isAuthenticated }) => {
  return !isAuthenticated ? (
    <Navigate to="/login" />
  ) : (
    <AppWrapper>
      <Outlet />
    </AppWrapper>
  );
};

export default PrivateRoute;
