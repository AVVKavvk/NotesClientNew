import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { Link } from "react-router-dom";

function Sem4() {
  const [data, setData] = useState([{}]);

  const getData = async () => {
    try {
      const res = await axiosClient.post("/sem4/get/notes");
      setData(res.result);
     
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="mx-auto lg:w-[1200px] mt-7  text-white">
      <Link
        className="flex flex-col mt-6 justify-center items-center mx-auto bg-gray-800 text-white text-2xl rounded-md hover:scale-105 transition-all duration-500 p-4 w-[200px] cursor-pointer"
        to="/uploadnotes"
      >
        Upload Notes
      </Link>
     
      {/* <h1 class=" text-2xl text-red-500 ">When you want to open Notes then use your Logged In Email</h1> */}
      <div class=" lg:w-[1200px] grid sm:grid-cols-3 grid-cols-2 ml-6 lg:mx-auto lg:grid-cols-7 gap-4 relative  justify-evenly  mt-8 overflow-hidden">
        {data?.map(item => {
          if(!item.isVerified) return ;
          return (
            (item.pdfUrl?.length > 3 )&& (
              <a href={item.pdfUrl} target="_blank" className=" bg-green-500 m-3 rounded-md w-[100px] h-[100px] flex justify-center items-center mx-auto ">
                <h1>{item.subject_name}</h1>
              </a>
            )
            
          );
        })}
      </div>
    </div>
  );
}

export default Sem4;
