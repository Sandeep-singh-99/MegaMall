import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Registration } from "../redux/slice/authSlice";
import { message } from "antd";

import Signup from "../assets/auth/signup.png";

function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const { isLoading, isError, errorMessage } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, email, phone, password };
    dispatch(Registration(user));
    message.success("Resgistration successfully");
    navigate("/home")
    setUserName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <div className="h-screen">
      <div className="flex justify-around items-center pt-5">
        <div>
          <img src={Signup} alt="not showing" />
        </div>

        <div className="bg-white shadow-2xl shadow-gray-500 rounded-lg px-5 py-5 w-[30%]">
          <form onSubmit={handleSubmit}>
            <div className="space-y-1 mb-5">
              <h1 className="text-4xl font-semibold">Registration</h1>
              <div className="h-1 w-10 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            </div>
            <div className="mb-3">
              <label className="font-semibold block mb-3">Full Name:</label>
              <input
                className="px-5 w-full outline-none py-3 border rounded"
                name="name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-3">
              <label className="font-semibold block mb-3">Email:</label>
              <input
                className="px-5 w-full outline-none py-3 border rounded"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                placeholder="Enter your Email"
              />
            </div>

            <div className="mb-3">
              <label className="font-semibold block mb-3">Phone:</label>
              <input
                className="px-5 w-full outline-none py-3 border rounded"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="off"
                placeholder="Enter your Phone no"
              />
            </div>

            <div className="mb-3">
              <label className="font-semibold block mb-3">Password:</label>
              <input
                className="px-5 w-full outline-none py-3 border rounded"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                placeholder="Enter your Password"
              />
            </div>

            <div>
              <button className="bg-gradient-to-r from-blue-900 to-purple-700 w-full py-3 text-white font-semibold text-xl rounded-md">
                Signup
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-3">
            <label>
              Already have an account?
              <NavLink className="text-blue-700" to="/login">
                Login 
              </NavLink>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
