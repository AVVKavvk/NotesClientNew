import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { Link } from "react-router-dom";

function Sem2() {
  const [data, setData] = useState([{}]);
  const getData = async () => {
    try {
      const result = await axiosClient.post("/sem2/get/lab", { sem: 1 });
      setData(result.result);
      // console.log(result.result);
    } catch (err) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div class="mx-auto lg:w-[1200px] min-h-screen mt-7 ">
      <Link
        className="flex flex-col   mt-6 justify-center items-center mx-auto bg-red-600  text-white text-2xl rounded-md hover:scale-105 transition-all duration-500 p-4 w-[200px] cursor-pointer"
        to="/upload/lab"
      >
        Upload Labs
      </Link>
      <div class=" lg:w-[1200px]   text-white grid sm:grid-cols-3 grid-cols-2  ml-6 lg:mx-auto gap-4 lg:grid-cols-7 relative  justify-evenly  mt-8  ">
        {data?.map(item => {
          if (!item.isVerified) return;
          if (item.pdfUrl?.length <= 3) return;
          let StduentDetails = "";
          if (item.studentEmail.length > 12) {
            StduentDetails = item.studentEmail.substring(0, 10) + "...";
          } else StduentDetails = item.studentEmail;
          let subjectName = "";
          if (item.subject.length > 7) {
            subjectName = item.subject_name.substring(0, 7) + "...";
          } else subjectName = item.subject;
          return (
            <div className="overflow-hidden  hover:skew-x-12 transition-all duration-500 hover:font-bold">
              <a
                href={item.link}
                target="_blank"
                className=" flex-col text-2xl bg-green-500 m-3 rounded-md w-[120px] h-[120px] flex justify-center items-center mx-auto  "
              >
                <h1>{subjectName}</h1>
              </a>
              <p className=" text-center">
                shared by{" "}
                <span className=" text-pink-500">{StduentDetails}</span>
              </p>
            </div>
          );
        })}
      </div>

     </div>
  );
}

export default Sem2;
