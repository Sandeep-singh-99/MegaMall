import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Cart from "../Page/Cart";
import App from "../App";
import AdminPanel from "../Page/Admin/AdminPanel";
import AdminLogin from "../Page/Admin/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel/>,
      },
      {
        path: "admin-login",
        element: <AdminLogin/>,
      },
    ],
  },
]);

export default router;
