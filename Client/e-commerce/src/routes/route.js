import Login from "../Page/Login";
import Register from "../Page/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: App } = require("../App");
const { default: Home } = require("../Page/Home");

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "login",
                element: <Login/>
            }
        ]
    }
])

export default router