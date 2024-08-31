import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import AdminPage from "../Admin/Home";
const Vipin = lazy(() => import("../Admin/Vipin"));
const AdminRouter = () => {
  return (
    <Routes>
      <Route path="" element={<AdminPage />} />
      <Route path="/vipin" element={<Vipin />} />
    </Routes>
  );
};

export default AdminRouter;
