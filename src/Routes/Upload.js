import React from "react";
import { Link, Outlet } from "react-router-dom";

function Upload() {
  return (
    <div className="min-h-screen">
      <div class="grid  sm:grid-cols-2  md:grid-cols-3   mt-6 justify-center items-center mx-auto   max-w-[1200px]   ">
        <Link
          className="flex flex-col mb-10   mt-6 justify-center items-center mx-auto bg-red-600  text-white text-4xl rounded-md hover:scale-105 transition-all duration-500 p-4 w-[300px] cursor-pointer"
          to="/upload/notes"
        >
          Upload Notes
        </Link>
        <Link
          className="flex flex-col mb-10   mt-6 justify-center items-center mx-auto bg-red-600  text-white text-4xl rounded-md hover:scale-105 transition-all duration-500 p-4 w-[300px] cursor-pointer"
          to="/upload/lab"
        >
          Upload Labs
        </Link>
        <Link
          className="flex flex-col mb-10   mt-6 justify-center items-center mx-auto bg-red-600  text-white text-4xl rounded-md hover:scale-105 transition-all duration-500 p-4 w-[300px] cursor-pointer"
          to="/upload/paper"
        >
          Upload Papers
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Upload;
