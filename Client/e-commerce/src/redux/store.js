import { configureStore } from "@reduxjs/toolkit";
import authReducer, { setCredentials } from "./slice/authSlice";

const token = localStorage.getItem("token");
const preloadedState = token
  ? { auth: { isLogged: true, data: { token } } }
  : {};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
  devTools: true
});


// Dispatch action to set credentials if token exists
if (token) {
  store.dispatch(setCredentials({ token }));
}

export default store;
