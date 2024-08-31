import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Notes from "../Components/Notes";
import Loader from "../animation/Loader1";
import ErrorPage from "../Components/ErrorPage";
const Sem1 = lazy(() => import("../Notes/Sem1"));
const Sem2 = lazy(() => import("../Notes/Sem2"));
const Sem3 = lazy(() => import("../Notes/Sem3"));
const Sem4 = lazy(() => import("../Notes/Sem4"));
const Sem5 = lazy(() => import("../Notes/Sem5"));
const Sem6 = lazy(() => import("../Notes/Sem6"));

const NotesRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Notes />} />
      <Route
        path="sem1"
        element={
          <Suspense fallback={<Loader />}>
            <Sem1 />
          </Suspense>
        }
      />
      <Route
        path="sem2"
        element={
          <Suspense fallback={<Loader />}>
            <Sem2 />
          </Suspense>
        }
      />
      <Route
        path="sem3"
        element={
          <Suspense fallback={<Loader />}>
            <Sem3 />
          </Suspense>
        }
      />
      <Route
        path="sem4"
        element={
          <Suspense fallback={<Loader />}>
            <Sem4 />
          </Suspense>
        }
      />
      <Route
        path="sem5"
        element={
          <Suspense fallback={<Loader />}>
            <Sem5 />
          </Suspense>
        }
      />
      <Route
        path="sem6"
        element={
          <Suspense fallback={<Loader />}>
            <Sem6 />
          </Suspense>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default NotesRouter;
