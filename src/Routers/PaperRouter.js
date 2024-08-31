import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Paper from "../Components/Paper";
import Loader from "../animation/Loader1";
import ErrorPage from "../Components/ErrorPage";

const Sem1 = lazy(() => import("../Paper/Sem1"));
const Sem2 = lazy(() => import("../Paper/Sem2"));
const Sem3 = lazy(() => import("../Paper/Sem3"));
const Sem4 = lazy(() => import("../Paper/Sem4"));
const Sem5 = lazy(() => import("../Paper/Sem5"));
const Sem6 = lazy(() => import("../Paper/Sem6"));

const PaperRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Paper />} />
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

export default PaperRouter;
