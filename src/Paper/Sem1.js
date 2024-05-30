import React, { useEffect, useState } from "react";
import ll from "../image/p1.svg";
import { axiosClient } from "../utils/axiosClient";
import { Link } from "react-router-dom";
function Sem1() {
  const [data, setData] = useState([{}]);

  const getData = async () => {
    try {
      const res = await axiosClient.post("/sem1/get/paper");
      setData(res.result);
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="mx-auto lg:w-[1200px] min-h-screen mt-7 mb-10 ">
    <Link
      className="flex flex-col   mt-6 justify-center items-center mx-auto bg-red-600  text-white text-2xl rounded-md hover:scale-105 transition-all duration-500 p-4 w-[200px] cursor-pointer"
      to="/upload/paper"
    >
      Upload Papers
    </Link>

    {/* <h1 class=" text-2xl text-red-500 ">When you want to open Notes then use your Logged In Email</h1> */}
    <div class=" lg:w-[1200px]   text-white grid sm:grid-cols-3 grid-cols-2  ml-6 lg:mx-auto gap-4 lg:grid-cols-7 relative  justify-evenly  mt-8 overflow-hidden">
      {data?.map(item => {
        if (!item.isVerified) return;
        let T1 = true;
        if (item.T1.length <= 10) {
          T1 = false;
        }
        let T2 = true;
        if (item.T2.length <= 10) {
          T2 = false;
        }
        let T3 = true;
        if (item.T3.length <= 10) {
          T3 = false;
        }
        let StduentDetails = "";
        if (item.studentEmail.length > 12) {
          StduentDetails = item.studentEmail.slice(0, 12) + "...";
        } else {
          StduentDetails = item.studentEmail;
        }
        return (
          <div>
            {T1&& <div class="relative flex sm:mt-5 flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
               
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
              
            </div>}
            {T2 && (
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
            )}
            {T3 && (
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
            )}
            <p>
              shared by{" "}
              <span className=" text-pink-600">{StduentDetails}</span>
            </p>
          </div>
        );
      })}
    </div>
  </div>
  );
}

export default Sem1;
