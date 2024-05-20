import React, { useState } from "react";
import { useEffect } from "react";

import { axiosClient } from "../utils/axiosClient";
import UpdateLab from "./UpdateLabs";
import { Link } from "react-router-dom";
function Sem1() {
  const [data, setData] = useState([{}]);
  const getData = async () => {
    try {
      const result = await axiosClient.post("/sem1/get/lab", { sem: 1 });
      setData(result.result);
      // console.log(result.result);
    } catch (err) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="min-h-screen  mb-5   mt-7 overflow-hidden ">
      <Link
        className="flex flex-col mt-6 justify-center items-center mx-auto bg-gray-800 text-white text-2xl rounded-md hover:scale-105 transition-all duration-500 p-4 w-[200px] cursor-pointer"
        to="/uploadlab"
        
      >
        Upload Lab
      </Link>
      <div class="mx-auto  md:max-w-[800px] flex  justify-evenly items-center  flex-col  mt-8 ">
        {data?.map(item => {
          if(!item.isVerified) return;
          return (
            <div class="flex gap-5 justify-center items-center  mt-10  ">
              <div>
                <a href={item.link} target="_blank">
                  <h1 class=" bg-gray-600  hover:scale-110    text-white rounded-md  w-[200px] h-[200px] text-center flex justify-center items-center transition-all duration-500 text-4xl mt-3 ">
                    {item.subject}
                  </h1>
                </a>
              </div>
              <h1 class=" rounded-md  text-center flex justify-center items-center text-md mt-3 ">
                shared by {item.studentEmail}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sem1;
