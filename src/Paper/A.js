import React from "react";
import { Link } from "react-router-dom";

function A() {
  return (
    <div class="lg:w-[1200px]  min-h-screen  mx-auto space-y-6 ">
      <div class="flex t p-4  text-black items-center justify-center rounded-lg w-[300px]  mt-9 bg-pink-300 mx-auto sm:w-[500px] md:w-[700px] ">
        <h1 class="text-2xl ">
          Choose any one of the semester
          <span class=" text-red-500"> PYQ </span> you want to access
        </h1>
      </div>
      <hr
        style={{
          height: "1px",
          backgroundColor: "white",
          border: "none",
        }}
        class="m-3"
      />
      <Link
        className="flex flex-col   text-4xl  mt-10 justify-center items-center mx-auto bg-red-600  text-white rounded-md hover:scale-105 transition-all duration-500 p-4 w-[300px] cursor-pointer"
        to="/upload/paper"
      >
        Upload Papers
      </Link>
    </div>
  );
}

export default A;
