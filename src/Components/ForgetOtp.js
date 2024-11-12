import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showToast } from "../slice/appConfigSlice";
import { axiosClient } from "../utils/axiosClient";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";
import { UserPassword, getItem } from "../utils/localStorage";
function ForgetOtp() {
  const [userotp, setUserOtp] = useState("");
  const [email, setemail] = useState("");
  const [inputOTP, setInputOTP] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleSignup(e) {
    e.preventDefault();

    try {
      const result = await axiosClient.post("/otp/signup", {
        email,
      });
      // setItem(Key_Access_Token,result.result.token)
      //   console.log(result.result);
      dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: `${result.result.message}`,
        })
      );

      if (result) {
        //
        // navigate("/auth/login");

        setShowOtpInput(true);
        setShowInput(false);
        setUserOtp(result.result.otp);
      }
    } catch (e) {
      dispatch(
        showToast({
          type: TOAST_ERROR,
          message: `${e}`,
        })
      );
    }
  }

  async function handleInputOTP() {
    if (inputOTP == userotp) {
      const password = getItem(UserPassword);
      try {
        const result = await axiosClient.put("/auth/", {
          email,
          password,
          confirmpassword: password,
          real: true,
        });

        if (result) {
          dispatch(
            showToast({
              type: TOAST_SUCCESS,
              message: "Now Login",
            })
          );

          navigate("/auth/login");
        }
      } catch (e) {
        dispatch(
          showToast({
            type: TOAST_ERROR,
            message: `${e}`,
          })
        );
      }
    } else {
      dispatch(
        showToast({
          type: TOAST_ERROR,
          message: `Wrong OTP`,
        })
      );
    }
  }
  return (
    <div className="  min-h-screen ">
      <div className="max-w-[400px] max-h-[500px]  mt-10 text-black justify-center items-center px-6  flex flex-col mx-auto border border-gray-900 bg-gray-400 p-10 rounded-md ">
        {showInput ? (
          <div className="max-w-[400px] gap-4 flex flex-col mx-auto ">
            <div>
              <label htmlFor="" className="text-xl  font-bold mr-4 ">
                {" "}
                Email{" "}
              </label>
              <input
                className="border border-black rounded-md p-2 "
                type="text"
                placeholder="Enter Email"
                onChange={e => setemail(e.target.value)}
              />
            </div>
            <button
              className="text-2xl px-2 p-1 bg-blue-500 rounded-md "
              onClick={handleSignup}
            >
              Get OTP
            </button>
          </div>
        ) : (
          ""
        )}
        {showOtpInput ? (
          <>
            <div className="max-w-[400px] gap-4 flex flex-col mx-auto ">
              <div>
                <label htmlFor="" className="text-xl  font-bold mr-4 ">
                  {" "}
                  OTP{" "}
                </label>
                <input
                  className="border border-red-500 p-4"
                  type="text"
                  placeholder="Enter OTP"
                  onChange={e => setInputOTP(e.target.value)}
                />
              </div>
              <button
                onClick={handleInputOTP}
                className="text-2xl px-2 p-1 bg-blue-500 rounded-md "
              >
                submit
              </button>
              <button
                onClick={() => {
                  setShowOtpInput(false);
                  setShowInput(true);
                }}
                className="text-xl  "
              >
                Resend
              </button>
            </div>
            <div className="flex mt-12 items-center justify-center  bg-gray-100">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  Check Your Email
                </h2>
                <p className="mt-4 text-gray-600">
                  If you don’t see the email in your inbox, please check your
                  spam or junk folder.
                </p>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ForgetOtp;
