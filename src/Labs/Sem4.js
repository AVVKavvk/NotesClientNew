import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { Link } from "react-router-dom";
function Sem4() {
  const [data, setData] = useState([{}]);
  const getData = async () => {
    try {
      const result = await axiosClient.post("/sem4/get/lab", { sem: 1 });
      setData(result.result);
      // console.log(result.result);
    } catch (err) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div class="min-h-screen  mb-5  mt-7 overflow-hidden ">
      <Link
        className="flex flex-col mt-6 justify-center items-center mx-auto bg-red-600  text-white text-2xl rounded-md hover:scale-105 transition-all duration-500 p-4 w-[200px] cursor-pointer"
        to="/uploadlab"
      >
        Upload Lab
      </Link>

      {/* <h1 class=" text-2xl text-red-500 ">When you want to see Labs then use your Logged In Email</h1> */}
      <div class="mx-auto  md:max-w-[1000px] flex pl-10  justify-evenly items-center flex-col  mt-8 ">
        {data?.map(item => {
          if (!item.isVerified) return;
          return (
            <div class="flex px-2   gap-5 justify-center items-center  mt-10  ">
              <div>
                <a href={item.link} target="_blank">
                  <h1 class=" bg-green-700  hover:scale-110    text-white rounded-md  w-[120px] h-[120px] text-center flex justify-center items-center transition-all duration-500 text-4xl mt-3 ">
                    {item.subject}
                  </h1>
                </a>
              </div>
              <h3 class=" rounded-md  text-center flex justify-center items-center  mt-3 ">
                shared by {item.studentEmail}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sem4;
