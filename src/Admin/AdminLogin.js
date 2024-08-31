import React, { useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { useNavigate } from "react-router-dom";
import {
  AdminEmail,
  AdminPassword,
  AdminToken,
  getItem,
  IsAdmin,
  setItem,
} from "../utils/localStorage";
import Home from "./Home";
function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  async function checkIsAdmin(e) {
    e.preventDefault();
    try {
      const result = await axiosClient.post("/admin/users", {
        adminEmail: email,
        adminPassword: password,
        token,
        number: 5,
      });

      setItem(AdminEmail, email);
      setItem(AdminPassword, password);
      setItem(AdminToken, token);
      setItem(IsAdmin, true);
      if (result) {
        navigate("/admin/home");
      } else {
        navigate("/");
      }
    } catch (e) {}
  }

  const IsAdminVipin = getItem(IsAdmin);

  if (IsAdminVipin) {
    return <Home />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-md border border-green-500 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>
        <form onSubmit={checkIsAdmin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="password"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            />
          </div>

          <div>
            <label
              htmlFor="token"
              className="block text-sm font-medium text-white"
            >
              Token
            </label>
            <input
              type="password" // Set as password type to mask input
              id="token"
              value={token}
              onChange={e => setToken(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login as Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AdminPage;
