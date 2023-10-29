import { Route, Routes } from "react-router-dom";

import Home from "./Routes/Home";
import Paper from "./Routes/Paper";
import Notes from "./Routes/Notes";
import Labs from "./Routes/Labs";
import Navbar from "./Navbar";
import Login from "./Routes/Login";
import Aluminia from "./Routes/Aluminia";
import Signup from "./Routes/Signup";
import Sem1 from "../src/Notes/Sem1";
import Sem2 from "../src/Notes/Sem2";
import Sem3 from "../src/Notes/Sem3";
import Sem4 from "../src/Notes/Sem4";
import Sem5 from "../src/Notes/Sem5";
import Sem6 from "../src/Notes/Sem6";
import Semp6 from "../src/Paper/Sem6";
import Semp1 from "../src/Paper/Sem1";
import Semp2 from "../src/Paper/Sem2";
import Semp3 from "../src/Paper/Sem3";
import Semp4 from "../src/Paper/Sem4";
import Semp5 from "../src/Paper/Sem5";
import Seml5 from "../src/Labs/Sem5";
import Seml1 from "../src/Labs/Sem1";
import Seml2 from "../src/Labs/Sem2";
import Seml3 from "../src/Labs/Sem3";
import Seml4 from "../src/Labs/Sem4";
import Seml6 from "../src/Labs/Sem6";
import Semc1 from "../src/CGPA/Sem1";
import Semc2 from "../src/CGPA/Sem2";
import Semc3 from "../src/CGPA/Sem3";
import Semc4 from "../src/CGPA/Sem4";
import Semc5 from "../src/CGPA/Sem5";
import Semc6 from "../src/CGPA/Sem6";
import Semc7 from "../src/CGPA/Sem7";
import Semc8 from "../src/CGPA/Sem8";
import A from "./Notes/A";
import Ap from "./Paper/A";
import Al from "./Labs/A";
import Ac from "./CGPA/A";
import toast, { Toaster } from "react-hot-toast";
import { Key_Access_Token, getItem } from "./utils/localStorage";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import Visitor from "./Routes/Visitor";
import Creator from "./Routes/Creator";
import Unavaiable from "./Routes/Unavaiable";
import ForgetPassword from "./Routes/ForgetPassword";
import Logout from "./Routes/Logout";
import Resume from "./Routes/Resume";
import RichText from "./Routes/RichText";
import ResumePage from "./Routes/ResumePage";
import Academics from "./Routes/Academics";
import CertificationPrograms from "./Routes/CertificationPrograms";
import Book from "./Routes/Book";
import Feedback from "./Routes/Feedback";
import Placement from "./Routes/Placement";
import OTP from "./Routes/OTPVaild";
import MentalHealth from "./Routes/MentalHealth";
import PersonalBlogs from "./Routes/PersonalBlogs";
import Extra from "./Routes/Extra";
import Coding from "./Routes/Coding";
import CGPA from "./Routes/CGPA";
import { useState } from "react";
import Loader from "./animation/Loader";
export const TOAST_SUCCESS = "toast_success";
export const TOAST_ERROR = "toast_error";
function App() {
  const a = getItem(Key_Access_Token);
  const isLoading = useSelector(state => state.appConfigReducer.isloading);
  const toastData = useSelector(state => state.appConfigReducer.toastData);
  const loadingRef = useRef(null);
  const [loader, setLoader] = useState(true);
  const [app, setApp] = useState(false);
  useEffect(() => {
    if (isLoading) {
      loadingRef.current?.continuousStart();
    } else {
      loadingRef.current?.complete();
    }
    setTimeout(() => {
      setApp(true);
      setLoader(false);
    }, 2500);
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
      <div
        className={` ${
          loader ? "block" : "hidden"
        } bg-slate-900 h-[100vh] flex justify-center items-center mx-auto `}
      >
        {" "}
        {<Loader />} {<Loader />} {<Loader />}{" "}
      </div>
      <div
        className="App"
        class={` ${app ? "block" : "hidden"} overflow-hidden mx-auto `}
      >
        <LoadingBar color="#f11946" ref={loadingRef} />
        <div>
          <Toaster />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/academics" element={<Academics />} />
          {
            <Route path="/user/cgpa" element={<CGPA />}>
              <Route path="" element={<Ac />} />
              <Route path="sem1" element={<Semc1 />} />
              <Route path="sem2" element={<Semc2 />} />
              <Route path="sem3" element={<Semc3 />} />
              <Route path="sem4" element={<Semc4 />} />
              <Route path="sem5" element={<Semc5 />} />
              <Route path="sem6" element={<Semc6 />} />
              <Route path="sem7" element={<Semc7 />} />
              <Route path="sem8" element={<Semc8 />} />
            </Route>
          }
          {
            <Route path="/user/paper" element={<Paper />}>
              <Route path="" element={<Ap />} />
              <Route path="sem1" element={<Semp1 />} />
              <Route path="sem2" element={<Semp2 />} />
              <Route path="sem3" element={<Semp3 />} />
              <Route path="sem4" element={<Semp4 />} />
              <Route path="sem5" element={<Semp5 />} />
              <Route path="sem6" element={<Semp6 />} />
            </Route>
          }
          <Route path="/user/notes" element={<Notes />}>
            <Route path="" element={<A />} />
            <Route path="sem1" element={<Sem1 />} />
            <Route path="sem2" element={<Sem2 />} />
            <Route path="sem3" element={<Sem3 />} />
            <Route path="sem4" element={<Sem4 />} />
            <Route path="sem5" element={<Sem5 />} />
            <Route path="sem6" element={<Sem6 />} />
          </Route>
          {/* <Route path="/labs" element={<Labs />} /> */}
          <Route path="/user/labs" element={<Labs />}>
            <Route path="" element={<Al />} />
            <Route path="sem1" element={<Seml1 />} />
            <Route path="sem2" element={<Seml2 />} />
            <Route path="sem3" element={<Seml3 />} />
            <Route path="sem4" element={<Seml4 />} />
            {/* <Route path="sem5" element={<Unavaiable />} />
          <Route path="sem6" element={<Unavaiable />} /> */}
            <Route path="sem5" element={<Seml5 />} />
            <Route path="sem6" element={<Seml6 />} />
          </Route>

          <Route path="/auth/login" element={<Login />} />
          <Route path="/e-book" element={<Book />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/certificates" element={<CertificationPrograms />} />
          <Route path="/aluminia" element={<Aluminia />} />
          <Route path="/resume" element={<ResumePage />}>
            <Route path="in-5-min" element={<Resume />} />
            <Route path="customize" element={<RichText />} />
          </Route>
          <Route path="/user/feedback" element={<Feedback />} />
          <Route path="/mentalheath" element={<MentalHealth />} />
          <Route path="/personalblogs" element={<PersonalBlogs />} />
          <Route path="/extras" element={<Extra />} />
          <Route path="/coding" element={<Coding />} />

          <Route path="/auth/forpass" element={<ForgetPassword />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/otp/signup" element={<OTP />} />
          <Route path="/auth/visitor" element={<Visitor />} />
          <Route path="/user/creator" element={<Creator />} />
          <Route path="/user/unavail" element={<Unavaiable />} />
          <Route path="/user/logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
