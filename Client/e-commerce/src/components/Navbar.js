import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/slice/authSlice";
import { message } from "antd";

function Navbar() {

  const dispatch = useDispatch()

   const { data, isLogged } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("Data from Redux: ", data);
  }, [data]);

  const handlelogout = () => {
    message.success("logout")
    dispatch(logout())
  }

  return (
    <div className="px-5 shadow-lg bg-[#162a38] ">
      <div className="flex justify-between py-3 items-center">
        <NavLink to={"home"}>
          <h1 className="text-3xl text-white font-semibold">MegaMall</h1>
        </NavLink>

        <div className={data ? `flex gap-24` : "flex gap-14"}>
          <div className="cursor-pointer relative group">
          {data ? (
            <div>
              <div className="flex flex-col items-center">
                <span className="text-white ">{data.username}</span>
                <span className="text-white ">{data.email}</span>
              </div>
            </div>
          ) : (
            <div className="">
              <div>
                <NavLink to={"login"}>
                  <i class="ri-account-circle-fill text-white text-2xl"></i>
                  {/* <span className="font-semibold">Login</span> */}
                </NavLink>
              </div>
            </div>
          )}
          <div className="z-auto invisible  shadow-2xl rounded-md absolute bg-white group-hover:visible">
            <div className="px-5 py-2 hover:bg-gray-200">
            <i class="ri-user-fill  font-semibold mr-4"></i>
            <span className="font-semibold">Profile</span>
            </div>

           {isLogged &&(
             <div onClick={handlelogout} className="px-5 py-2 hover:bg-gray-200">
             <i class="ri-logout-circle-r-line  font-semibold mr-3"></i>
             <span className="font-semibold">Logout</span>
             </div>
           )}
          </div>

          </div>

          <div>
            <NavLink>
              <i class="ri-shopping-cart-2-fill text-white text-2xl"></i>
              {/* <span className="font-semibold">Cart</span> */}
            </NavLink>
          </div>
        </div>

        {/* <div className="flex gap-10">
          <div>
            <NavLink className="bg-blue-500 px-5 py-3 rounded-md hover:bg-blue-400">
              <i class="ri-shopping-cart-2-line mr-2 text-2xl text-white"></i>
              <span className="text-white">Cart</span>
            </NavLink>
          </div>

          <div>
            <NavLink
              to={"login"}
              className="bg-blue-500 px-5 py-3 rounded-md hover:bg-blue-400"
            >
              <i class="ri-account-circle-line text-2xl mr-2 text-white"></i>
              <span className="text-white">Login</span>
            </NavLink>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
