import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);

  const { data } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("Data from Redux: ", data);
    if (data) {
      setUser(data);
    }
  }, [data]);

  return (
    <div className="px-5 shadow-lg bg-gray-200 ">
      <div className="flex justify-between py-3 items-center">
        <NavLink to={""}>
          <h1 className="text-3xl font-semibold">MegaMall</h1>
        </NavLink>

        <div className={user ? `flex gap-24` : "flex gap-10"}>
          {user ? (
            <div>
              <div className="flex flex-col items-center">
                <span className="text-black ">{user.username}</span>
                <span className="text-black ">{user.email}</span>
              </div>
            </div>
          ) : (
            <div>
              <NavLink to={"login"}>
                <i class="ri-account-circle-line text-2xl mr-2 "></i>
                <span className="font-semibold">Login</span>
              </NavLink>
            </div>
          )}

          <div>
            <NavLink>
              <i class="ri-shopping-cart-2-line mr-2 text-2xl"></i>
              <span className="font-semibold">Cart</span>
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
