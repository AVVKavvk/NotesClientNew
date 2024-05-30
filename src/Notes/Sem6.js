import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { Link } from "react-router-dom";

function Sem6() {
  const [data, setData] = useState([{}]);

  const getData = async () => {
    try {
      const res = await axiosClient.post("/sem6/get/notes");
      setData(res.result);
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="mx-auto min-h-screen lg:w-[1200px]  mt-7 ">
      <Link
        className="flex flex-col mt-6 justify-center items-center mx-auto bg-red-600  text-white text-2xl rounded-md hover:scale-105 transition-all duration-500 p-4 w-[200px] cursor-pointer"
        to="/uploadnotes"
      >
        Upload Notes
      </Link>{" "}
      {/* <h1 class=" text-2xl text-red-500 ">When you want to open Notes then use your Logged In Email</h1> */}
      <div class=" lg:w-[1200px] text-white grid sm:grid-cols-3 grid-cols-2 gap-4 ml-6 lg:mx-auto lg:grid-cols-7 relative  justify-evenly  mt-8 overflow-hidden">
      {data?.map(item => {
          if (!item.isVerified) return;
          if (item.pdfUrl?.length <= 3) return;
          let StduentDetails = "";
          if (item.studentEmail.length > 12) {
            StduentDetails = item.studentEmail.substring(0, 10) + "...";
          } else StduentDetails = item.studentEmail;
          let subjectName = "";
          if (item.subject_name.length > 7) {
            subjectName = item.subject_name.substring(0, 7) + "...";
          } else subjectName = item.subject_name;
          return (
            <div>
              <a
                href={item.pdfUrl}
                target="_blank"
                className=" flex-col text-2xl bg-red-500 m-3 rounded-md w-[120px] h-[120px] flex justify-center items-center mx-auto "
              >
                <h1>{subjectName}</h1>
              </a>
              <p className=" text-center">
                shared by{" "}
                <span className=" text-green-500">{StduentDetails}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sem6;
