import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Tasks from "../pages/task/Tasks";
import Dashboard from "../pages/dashboard/Dashboard";
import Document from "../pages/document/Document";
import Event from "../pages/event/Event";
import PublicRoute from "./PublicRoute";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import CreateTask from "../pages/task/addtask/CreateTask";
import useAuthCheck from "../hooks/useAuthCheck";
import NotFound from "../pages/notfound/NotFound";
import Setting from "../pages/setting/Setting";
import CreateEvent from "../pages/event/addevent/CreateEvent";
import UpdateEvent from "../pages/event/addevent/UpdateEvent";
import Loader from "../components/common/Loader";
import VerifySuccess from "../pages/verify/VerifySuccess";
import ForgetPassword from "../pages/auth/ForgetPassword";
import Home from "../pages/home/Home";
import MainWrapper from "../layouts/MainWrapper";
import Features from "../pages/features/Features";
import Pricing from "../pages/pricing/Pricing";

const Router = () => {
  const authenticationCheck = useAuthCheck();

  return !authenticationCheck ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<MainWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>
      <Route path="dashboard" element={<PrivateRoute />}>
        <Route path="" element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="task/:taskId" element={<CreateTask />} />
        <Route path="document" element={<Document />} />
        <Route path="event" element={<Event />} />
        <Route path="event/create" element={<CreateEvent />} />
        <Route path="event/:eventId" element={<UpdateEvent />} />
        <Route path="setting" element={<Setting />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget/password" element={<ForgetPassword />} />
        <Route path="/verify/:token" element={<VerifySuccess />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
