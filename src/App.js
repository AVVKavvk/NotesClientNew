import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Navbar";

import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import Loader from "./animation/Loader1";
import ErrorPage from "./Components/ErrorPage";
import ForgetOtp from "./Components/ForgetOtp";

const Login = lazy(() => import("./Components/Login"));
const Signup = lazy(() => import("./Components/Signup"));
const ForgetPassword = lazy(() => import("./Components/ForgetPassword"));
const Logout = lazy(() => import("./Components/Logout"));

const Academics = lazy(() => import("./Components/Academics"));
const Aluminia = lazy(() => import("./Components/Aluminia"));

const LabsRouter = lazy(() => import("./Routers/LabsRouter"));
const CGPARouter = lazy(() => import("./Routers/CGPARouter"));
const PaperRouter = lazy(() => import("./Routers/PaperRouter"));
const NotesRouter = lazy(() => import("./Routers/NotesRouter"));
const BookRouter = lazy(() => import("./Components/Book"));

const UploadRouter = lazy(() => import("./Routers/UploadRouter"));
const AdminRouter = lazy(() => import("./Routers/AdminRouter"));

const Visitor = lazy(() => import("./Components/Visitor"));
const Creator = lazy(() => import("./Components/Creator"));
const Unavaiable = lazy(() => import("./Components/Unavaiable"));
const Resume = lazy(() => import("./Components/Resume"));
const RichText = lazy(() => import("./Components/RichText"));
const ResumePage = lazy(() => import("./Components/ResumePage"));

const Account = lazy(()=>import("./Account/Account"))

const CertificationPrograms = lazy(() =>
  import("./Components/CertificationPrograms")
);
const Feedback = lazy(() => import("./Components/Feedback"));
const Placement = lazy(() => import("./Components/Placement"));
const OTP = lazy(() => import("./Components/OTPVaild"));

const MentalHealth = lazy(() => import("./Components/MentalHealth"));
const PersonalBlogs = lazy(() => import("./Components/PersonalBlogs"));
const Extra = lazy(() => import("./Components/Extra"));
const Coding = lazy(() => import("./Components/Coding"));
const Rating = lazy(() => import("./Components/Rating"));
export const TOAST_SUCCESS = "toast_success";
export const TOAST_ERROR = "toast_error";

function App() {
  const isLoading = useSelector(state => state.appConfigReducer.isloading);
  const toastData = useSelector(state => state.appConfigReducer.toastData);
  const loadingRef = useRef(null);
  useEffect(() => {
    if (isLoading) {
      loadingRef.current?.continuousStart();
    } else {
      loadingRef.current?.complete();
    }
  }, [isLoading]);
  useEffect(() => {
    switch (toastData.type) {
      case TOAST_SUCCESS:
        toast.success(toastData.message);
        break;
      case TOAST_ERROR:
        toast.error(toastData.message);

        break;
    }
  }, [toastData]);
  return (
    <>
      <div className="App" class={`text-white overflow-hidden mx-auto `}>
        <LoadingBar color="#f11946" ref={loadingRef} />
        <div>
          <Toaster />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/user/academics"
            element={
              <Suspense fallback={<Loader />}>
                <Academics />
              </Suspense>
            }
          />

          <Route
            path="/user/cgpa/*"
            element={
              <Suspense fallback={<Loader />}>
                <CGPARouter />
              </Suspense>
            }
          ></Route>

          <Route
            path="/user/paper/*"
            element={
              <Suspense fallback={<Loader />}>
                <PaperRouter />
              </Suspense>
            }
          ></Route>

          <Route
            path="/user/notes/*"
            element={
              <Suspense fallback={<Loader />}>
                <NotesRouter />
              </Suspense>
            }
          ></Route>
          <Route
            path="/user/labs/*"
            element={
              <Suspense fallback={<Loader />}>
                <LabsRouter />
              </Suspense>
            }
          ></Route>

          <Route
            path="/upload/*"
            element={
              <Suspense fallback={<Loader />}>
                <UploadRouter />
              </Suspense>
            }
          ></Route>
          <Route
            path="/account/*"
            element={
              <Suspense fallback={<Loader />}>
                <Account />
              </Suspense>
            }
          ></Route>

          <Route
            path="/auth/login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />

          <Route
            path="/e-book"
            element={
              <Suspense fallback={<Loader />}>
                <BookRouter />
              </Suspense>
            }
          />

          <Route
            path="/placement"
            element={
              <Suspense fallback={<Loader />}>
                <Placement />
              </Suspense>
            }
          />
          <Route
            path="/certificates"
            element={
              <Suspense fallback={<Loader />}>
                <CertificationPrograms />
              </Suspense>
            }
          />
          <Route
            path="/aluminia"
            element={
              <Suspense fallback={<Loader />}>
                <Aluminia />
              </Suspense>
            }
          />
          <Route
            path="/resume"
            element={
              <Suspense fallback={<Loader />}>
                <ResumePage />
              </Suspense>
            }
          >
            <Route
              path="in-5-min"
              element={
                <Suspense fallback={<Loader />}>
                  <Resume />
                </Suspense>
              }
            />
            <Route
              path="customize"
              element={
                <Suspense fallback={<Loader />}>
                  <RichText />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/user/feedback"
            element={
              <Suspense fallback={<Loader />}>
                <Feedback />
              </Suspense>
            }
          />
          <Route
            path="/mentalheath"
            element={
              <Suspense fallback={<Loader />}>
                <MentalHealth />
              </Suspense>
            }
          />
          <Route
            path="/personalblogs"
            element={
              <Suspense fallback={<Loader />}>
                <PersonalBlogs />
              </Suspense>
            }
          />
          <Route
            path="/extras"
            element={
              <Suspense fallback={<Loader />}>
                <Extra />
              </Suspense>
            }
          />
          <Route
            path="/coding"
            element={
              <Suspense fallback={<Loader />}>
                <Coding />
              </Suspense>
            }
          />

          <Route
            path="/auth/forpass"
            element={
              <Suspense fallback={<Loader />}>
                <ForgetPassword />
              </Suspense>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <Suspense fallback={<Loader />}>
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/user/rating"
            element={
              <Suspense fallback={<Loader />}>
                <Rating />
              </Suspense>
            }
          />
          <Route
            path="/otp/signup"
            element={
              <Suspense fallback={<Loader />}>
                <OTP />
              </Suspense>
            }
          />
          <Route
            path="/otp/forget"
            element={
              <Suspense fallback={<Loader />}>
                <ForgetOtp />
              </Suspense>
            }
          />
          <Route
            path="/auth/visitor"
            element={
              <Suspense fallback={<Loader />}>
                <Visitor />
              </Suspense>
            }
          />
          <Route
            path="/user/creator"
            element={
              <Suspense fallback={<Loader />}>
                <Creator />
              </Suspense>
            }
          />
          <Route
            path="/user/unavail"
            element={
              <Suspense fallback={<Loader />}>
                <Unavaiable />
              </Suspense>
            }
          />
          <Route
            path="/user/logout"
            element={
              <Suspense fallback={<Loader />}>
                <Logout />
              </Suspense>
            }
          />
          <Route
            path="/admin/*"
            element={
              <Suspense fallback={<Loader />}>
                <AdminRouter />
              </Suspense>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
