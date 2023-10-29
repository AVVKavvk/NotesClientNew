import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showToast } from "../slice/appConfigSlice";
import { axiosClient } from "../utils/axiosClient";
import { TOAST_ERROR, TOAST_SUCCESS } from "../App";
import {
  UserName,
  UserNumber,
  UserPassword,
  getItem,
} from "../utils/localStorage";
function OTP() {
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
      // console.log(result.result);
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
      const name = getItem(UserName);
      const password = getItem(UserPassword);
      const number = getItem(UserNumber);
      try {
        const result = await axiosClient.post("/auth/signup", {
          email,
          password,
          name,
          number,
          real: true,
        });

        if (result) {
          setTimeout(() => {
            dispatch(
              showToast({
                type: TOAST_SUCCESS,
                message: "Now Login",
              })
            );
          }, 1000);
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
    <div className="max-w-[400px]  justify-center items-center px-6  flex flex-col mx-auto border border-gray-900 bg-gray-400 p-10 rounded-md ">
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
      ) : (
        ""
      )}
    </div>
  );
}

export default OTP;
