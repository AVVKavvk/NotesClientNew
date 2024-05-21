import React, { useEffect, useState } from "react";
import ll from "../image/p2.svg";
import { axiosClient } from "../utils/axiosClient";
import { Link } from "react-router-dom";
function Sem2() {
  const [data, setData] = useState([{}]);

  const getData = async () => {
    try {
      const res = await axiosClient.post("/sem2/get/paper");
    setData(res.result);
    } catch (err) {
      
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class=" overflow-hidden mt-7 ">
      {/* <h1 class=" text-2xl text-red-500 ">When you want to see PYQ then use your Logged In Email</h1> */}
      <Link
        className="flex flex-col mt-6 justify-center items-center mx-auto bg-red-600  text-white text-2xl rounded-md hover:scale-105 transition-all duration-500 p-4 w-[200px] cursor-pointer"
        to="/uploadpaper"
        
      >
        Upload Paper
      </Link>
      <div class=" sm:w-[500px]  md:w-[650px] md:p-6 grid grid-cols-1  mx-auto sm:grid-cols-3  relative gap-2 pt-4 w-[200px]  mt-8 ">
        {data?.map(item => {
          if(!item.isVerified) return ;
          return (
            <div>
              <div class="relative flex sm:mt-5 flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
                <div>
                  <a href={item.T1} target="_blank">
                    <div>
                      <img
                        src={ll}
                        alt=""
                        class="hover:scale-110 transition-all duration-500"
                        height="170px"
                        width="170px"
                      />
                    </div>
                  </a>

                  <h1 class=" z-10 top-[60px] left-[80px] text-4xl  ">T1</h1>
                </div>
              </div>
              <div class="relative flex sm:mt-5 flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
                <div>
                  <a href={item.T2} target="_blank">
                    <div>
                      <img
                        src={ll}
                        alt=""
                        class="hover:scale-110 transition-all duration-500"
                        height="170px"
                        width="170px"
                      />
                    </div>
                  </a>

                  <h1 class=" z-10 top-[60px] left-[80px] text-4xl  ">T2</h1>
                </div>
              </div>
              <div class="relative flex sm:mt-5 flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
                <div>
                  <a href={item.T3} target="_blank">
                    <div>
                      <img
                        src={ll}
                        alt=""
                        class="hover:scale-110 transition-all duration-500"
                        height="170px"
                        width="170px"
                      />
                    </div>
                  </a>

                  <h1 class=" z-10 top-[60px] left-[80px] text-4xl  ">
                    Endsem
                  </h1>
                </div>
              </div>
              <h1>shared by {item.studentEmail}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sem2;
