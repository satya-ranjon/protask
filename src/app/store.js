import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../services/api/api";
import authReducer from "../services/auth/authSlice";
import taskReducer from "../services/task/taskSlice";
import authApi from "../services/auth/authApi";
import eventReducer from "../services/event/eventSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    taskSlice: taskReducer,
    events: eventReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(apiSlice.middleware, authApi.middleware),

  devTools: !(import.meta.env.MODE == "production"),
});

export default store;
