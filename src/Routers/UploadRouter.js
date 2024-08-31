import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Upload from "../Components/Upload";
import Loader from "../animation/Loader1";
import ErrorPage from "../Components/ErrorPage";

const UpdateLab = lazy(() => import("../Labs/UpdateLabs"));
const UpdateNotes = lazy(() => import("../Notes/UpdateNotes"));
const UpdatePaper = lazy(() => import("../Paper/UpdatePaper"));

function UploadRouter() {
  return (
    <Routes>
      <Route path="" element={<Upload />} />
      <Route
        path="lab"
        element={
          <Suspense fallback={<Loader />}>
            <UpdateLab />
          </Suspense>
        }
      />
      <Route
        path="paper"
        element={
          <Suspense fallback={<Loader />}>
            <UpdatePaper />
          </Suspense>
        }
      />
      <Route
        path="notes"
        element={
          <Suspense fallback={<Loader />}>
            <UpdateNotes />
          </Suspense>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default UploadRouter;
