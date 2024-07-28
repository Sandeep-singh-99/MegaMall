import React, { useState } from "react";
import signIn from "../assets/auth/signin.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginFeature } from "../redux/slice/authSlice";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const {isLoading, isError, errorMessage} = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {email, password}
    dispatch(LoginFeature(user))
    navigate("/home")
    setEmail('')
    setPassword('')
  }

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
    <>
      <div className=" px-10">
        <div className="h-screen flex justify-around items-center">
          <div>
            <img src={signIn} alt="not showing" />
          </div>
          <div className="bg-white shadow-2xl shadow-gray-500 rounded-lg px-5 py-5 w-[30%]">
            <form onSubmit={handleSubmit}>
              <div className="space-y-2 mb-5">
                <h1 className="text-4xl font-semibold">SignIn</h1>
                <div className="h-1 w-10 bg-gradient-to-r from-purple-600 to-blue-600"></div>
              </div>

              <div className="mb-5">
                <label className="font-semibold block mb-3">Email:</label>
                <input
                  className="px-5 w-full outline-none py-3 border rounded-md"
                  autoComplete="off"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                />
              </div>

              <div className="mb-5">
                <label className="font-semibold block mb-3">Password:</label>
                <input
                  className="px-5 w-full outline-none py-3 border rounded-md"
                  autoComplete="off"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                />
              </div>

              <div>
                <button className="bg-gradient-to-r from-blue-900 to-purple-700 w-full py-3 text-white font-semibold text-xl rounded-md">
                  Login
                </button>
              </div>
            </form>
            <div className="flex justify-center mt-3">
              <label>
                Don't have an account?
                <NavLink className="text-blue-700" to="/login">
                  Signup
                </NavLink>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
