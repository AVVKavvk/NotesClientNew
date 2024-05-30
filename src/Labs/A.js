import React from "react";
import { Link } from "react-router-dom";

function A() {
  return (
    <div class="lg:w-[1200px] min-h-screen   mx-auto space-y-6 ">
      <div class="flex t p-4  text-black items-center justify-center rounded-lg w-[300px]  mt-9 bg-green-300 mx-auto sm:w-[500px] md:w-[700px] ">
        <h1 class="text-2xl ">
          Choose any one of the semester
          <span class=" text-red-500"> Labs </span> you want to access
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
        className="flex flex-col mb-10   mt-6 justify-center items-center mx-auto bg-red-600  text-white text-4xl rounded-md hover:scale-105 transition-all duration-500 p-4 w-[300px] cursor-pointer"
        to="/upload/lab"
      >
        Upload Labs
      </Link>
    </div>
  );
}

export default A;
