import {Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import Loder from "./Loder";

import { Key_Access_Token, getItem } from "../utils/localStorage";
import {useNavigate } from "react-router-dom";

function Sem2() {
  const [sem1, setSem1] = useState("0");
  const [target, setTarget] = useState("0");
  const [CGPA, setCGPA] = useState("0");
  const [currentCGPA, setCurrentCGPA] = useState("0");
  const [check, setCheck] = useState(false);
  const [loder, setLoder] = useState(false);
  function calculateCGPA(e) {
    e.preventDefault();
    setLoder(true);
    const temp = 19 * sem1   ;
    // console.log();
    const temp2 = target * 161;
    const temp3 = temp2 - temp;
    const ans = temp3 / (142);

    setTimeout(() => {
      setLoder(false);
      setCheck(true);
    }, 1500);
    setCGPA(ans);
    setCurrentCGPA((temp/(19)))
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
     {a != 10 && a != undefined ?
    <div className="max-w-[900px]   flex-col flex  mx-auto pt-5">
      <div class=" border-4 px-7 py-4 rounded-lg   mx-auto flex-col justify-center items-center  min-w-[320px] max-w-[600px] ">
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
            label="Sem1"
            name="Sem1"
            rules={[
              {
                required: true,
                message: "Please input your SGPA!",
              },
            ]}
          >
            <Input
              className=""
              placeholder="Enter SGPA"
              onChange={e => {
                setSem1(e?.target?.value);
              }}
            />
          </Form.Item>  
          
        
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

export default Sem2;
