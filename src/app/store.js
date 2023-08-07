import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../services/api/api";
import authReducer from "../services/auth/authSlice";
import createTaskReducer from "../services/task/createTaskSlice";
import authApi from "../services/auth/authApi";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    createTask: createTaskReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(apiSlice.middleware, authApi.middleware),

  devTools: !(import.meta.env.MODE == "production"),
});

export default store;
