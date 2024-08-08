import Checkbox from "antd/es/checkbox/Checkbox";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from 'antd';

function AdminLogin() {
  const [isChecked, setIsChecked] = useState(() => {
    const savedCheckedState = localStorage.getItem('rememberMe');
    return savedCheckedState === 'true';
  });

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    // Redirect to admin panel if user is already logged in and checkbox was previously checked
    if (localStorage.getItem('rememberMe') === 'true') {
      window.location.href = "/admin-panel";
    }
  }, []);

  const authLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/admin", user);
      if (response.data.success) {
        message.success("Login successful!");
        setUser({ username: "", password: "" });
        // Save the checkbox state to localStorage
        localStorage.setItem('rememberMe', isChecked ? 'true' : 'false');
        window.location.href = "/admin-panel";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const handleCheckBox = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin();
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 to-indigo-500">
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-md shadow-md p-5 bg-white w-1/3">
          <h1 className="text-3xl font-semibold pb-1">Admin Login</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600"></div>
          <div className="pt-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInputChange}
                  className="block outline-none border border-indigo-900 px-5 py-3 rounded-md w-full"
                  placeholder="Enter your username"
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  className="block outline-none border border-indigo-900 px-5 py-3 rounded-md w-full"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-5">
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckBox}
                >
                  Remember me
                </Checkbox>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-fuchsia-700 to-indigo-800 text-white px-5 py-3 rounded-md w-full text-xl font-semibold"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
