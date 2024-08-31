import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import CGPA from "../Components/CGPA";
import Loader from "../animation/Loader1";
import ErrorPage from "../Components/ErrorPage";

const Sem1 = lazy(() => import("../CGPA/Sem1"));
const Sem2 = lazy(() => import("../CGPA/Sem2"));
const Sem3 = lazy(() => import("../CGPA/Sem3"));
const Sem4 = lazy(() => import("../CGPA/Sem4"));
const Sem5 = lazy(() => import("../CGPA/Sem5"));
const Sem6 = lazy(() => import("../CGPA/Sem6"));
const Sem7 = lazy(() => import("../CGPA/Sem7"));
const Sem8 = lazy(() => import("../CGPA/Sem8"));
const CGPARouter = () => {
  return (
    <Routes>
      <Route path="" element={<CGPA />} />
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
      <Route
        path="sem7"
        element={
          <Suspense fallback={<Loader />}>
            <Sem7 />
          </Suspense>
        }
      />
      <Route
        path="sem8"
        element={
          <Suspense fallback={<Loader />}>
            <Sem8 />
          </Suspense>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default CGPARouter;
