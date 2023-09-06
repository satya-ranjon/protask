import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../services/api/api";
import authReducer from "../services/auth/authSlice";
import taskReducer from "../services/task/taskSlice";
import authApi from "../services/auth/authApi";
import eventReducer from "../services/event/eventSlice";
import userReducer from "../services/user/userSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    taskSlice: taskReducer,
    events: eventReducer,
    users: userReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(apiSlice.middleware, authApi.middleware),

  devTools: !(import.meta.env.MODE == "production"),
});

export default store;
