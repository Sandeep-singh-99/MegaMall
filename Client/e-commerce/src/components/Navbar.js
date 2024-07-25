import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-5 shadow-lg bg-gray-200 ">
      <div className="flex justify-between py-3 items-center">
        <h1 className="text-3xl font-semibold">MegaMall</h1>

        <div className="flex gap-10">
          <div>
            <NavLink className="bg-blue-500 px-5 py-3 rounded-md hover:bg-blue-400">
              <i class="ri-shopping-cart-2-line mr-2 text-2xl text-white"></i>
              <span className="text-white">Cart</span>
            </NavLink>
          </div>

          <div>
            <NavLink to={"login"} className="bg-blue-500 px-5 py-3 rounded-md hover:bg-blue-400">
              <i class="ri-account-circle-line text-2xl mr-2 text-white"></i>
              <span className="text-white">Login</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
