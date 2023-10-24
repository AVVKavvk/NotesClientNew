import {Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import Loder from "./Loder";

import { Key_Access_Token, getItem } from "../utils/localStorage";
import {useNavigate } from "react-router-dom";

function Sem1() {
  const [target, setTarget] = useState("0");
  const [CGPA, setCGPA] = useState("0");
  const [currentCGPA, setcurrentCGPA] = useState("0");
  const [check, setCheck] = useState(false);
  const [loder, setLoder] = useState(false);
  function calculateCGPA(e) {
    e.preventDefault();
    setLoder(true);
    setTimeout(() => {
      setLoder(false);
      setcurrentCGPA(0);
      setCheck(true);
    }, 1500);
    setCGPA(target);
  }
  var a = 10;

  const navigate = useNavigate();
  useEffect(() => {}, [a]);

  a = getItem(Key_Access_Token);
  // a = 11;
  // const a = 10;
  function AA() {
    // console.log("vipin");
    setTimeout(() => {
      navigate("/auth/login");
    }, 100);
  }
  return (
    <>
     {a != 10 && a != undefined ?<div className="max-w-[900px]   flex-col flex  mx-auto pt-5">
      <div class=" border-4 px-7 mt-8 py-4 rounded-lg   mx-auto flex-col justify-center items-center  min-w-[320px] max-w-[600px] ">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 500,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
                 

          <Form.Item
            label="Target CGPA"
            name="Target CGPA"
            rules={[
              {
                required: true,
                message: "Please input your target CGPA!",
              },
            ]}
          >
            <Input
              className=""
              placeholder="Enter Target CGPA"
              onChange={e => {
                setTarget(e?.target?.value);
              }}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 1,
            }}
          >
            <button
              htmlType="submit"
              onClick={calculateCGPA}
              className="border-none  bg-blue-500 px-2 p-1 rounded-md text-xl  hover:bg-blue-600"
            >
              Calculate
            </button>
          </Form.Item>
        </Form>
      </div>
      {loder || check ?<Loder loder={loder} check={check} CGPA={CGPA} current={currentCGPA} />:''}

    </div>
    : <div>{AA()}</div>
          }
    </>
    
  );
}

export default Sem1;
