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

const Router = () => {
  const authenticationCheck = useAuthCheck();

  return !authenticationCheck ? (
    <h1> Checking Authentication </h1>
  ) : (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task/:taskId" element={<CreateTask />} />
        <Route path="/document" element={<Document />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/create" element={<CreateEvent />} />
        <Route path="/event/:eventId" element={<UpdateEvent />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
