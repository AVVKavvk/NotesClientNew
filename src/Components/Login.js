import React, { useState } from "react";
import { Checkbox, Form, Input } from "antd";
import men from "../image/men.png";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../utils/axiosClient";
import { Key_Access_Token, UserEmail, UserID, UserImage, count_User, setItem } from "../utils/localStorage";
import { useDispatch } from "react-redux";
import { setcount, showToast } from "../slice/appConfigSlice";
import { TOAST_SUCCESS } from "../App";
function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  // const [count, setcount1] = useState(0);
  async function submitHandle(e) {
    e.preventDefault();

    try {
      const result = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      // console.log(result.result);
      // // console.log( result.result.token);
      // console.log( result.result?.user?.email);
      // console.log( result.result?.user?._id);
      
      setItem(Key_Access_Token, result.result?.token);
      setItem(UserEmail, result.result?.user?.email);
      setItem(UserID, result.result?.user?._id);
      setItem(UserImage, result.result?.user?.image);
      countU();
      dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: "Successfully Login",
        })
      );
      if (result) {
        navigate("/");
      }
    } catch (e) {}
  }

  async function countU() {
    try {
      const result = await axiosClient.get("/auth/count");
      //  countUser(count_User , result.result)
      dispatch(setcount(result.result));
      setItem(count_User, result.result);
    } catch (e) {
      // console.log(process.env.REACT_APP_SERVER_BASE_URL);
      // console.log(e);
    }
  }
  // useEffect(() => {
  //   countU();
  // }, []);
  return (
    <>
      <div class="grid  min-h-screen lg:grid-cols-2 mx-auto lg:mx-72 mb-4 items-center ">
        <div class="w-[580px] hidden  lg:block mt-3 rounded-lg ">
          <img src={men} alt="" height="200px" width="400px" style={{}} />
        </div>
        <div class="flex text-white  flex-col justify-center items-center mx-auto h-[420px] mb-5 lg:h-[400px] lg:p-10 p-6  border-2 max-w-[600px] rounded-lg mt-11  border-green-400">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label={<span className="text-gray-300">Email</span>}
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                class=""
                placeholder="email"
                onChange={e => setemail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-gray-300">Password</span>}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="password"
                onChange={e => setpassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 1,
              }}
            >
              <button
                class="bg-blue-700 rounded-md text-lg p-1 px-5 text-white hover:bg-blue-600 transition-all duration-200  "
                onClick={submitHandle}
              >
                Login
              </button>
            </Form.Item>
          </Form>
          <Link to="/auth/forpass">
            <h1 class="m-1 p-2  ">Forget Password</h1>
          </Link>
          <h1 class="m-1 p-2 ">
            Do not have account{" "}
            <Link
              to="/auth/signup"
              class="bg-blue-700 p-2 m-1 px-2 text-xl rounded-md text-white mb-3 hover:bg-blue-600 transition-all duration-200 "
            >
              SignUp
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Login;
