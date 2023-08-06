import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Tasks from "../pages/task/Tasks";
import Dashboard from "../pages/Dashboard/Dashboard";
import Document from "../pages/document/Document";
import Event from "../pages/event/Event";
import PublicRoute from "./PublicRoute";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import CreateTask from "../pages/task/addtask/CreateTask";

const Router = () => {
  const isAuthenticated = true;
  return (
    <Routes>
      <Route
        path="/"
        element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/task" element={<Tasks />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/document" element={<Document />} />
        <Route path="/event" element={<Event />} />
      </Route>
      <Route
        path="/"
        element={<PublicRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<h1>Not Found This Page</h1>} />
    </Routes>
  );
};

export default Router;
