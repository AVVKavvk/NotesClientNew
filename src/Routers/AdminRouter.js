import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import AdminPage from "../Admin/AdminLogin";
import ErrorPage from "../Components/ErrorPage";
const Home = lazy(() => import("../Admin/Home"));
const Users = lazy(() => import("../Admin/User"));
const Notes = lazy(() => import("../Admin/Notes"));
const Papers = lazy(() => import("../Admin/Paper"));
const Labs = lazy(() => import("../Admin/Labs"));
const AdminRouter = () => {
  return (
    <Routes>
      <Route path="" element={<AdminPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/papers" element={<Papers />} />
      <Route path="/labs" element={<Labs />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AdminRouter;
