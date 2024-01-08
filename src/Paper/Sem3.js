import React from "react";
import ll from "../image/p3.svg";

function Sem3() {
  return (
    <div class="mx-auto sm:w-[500px]  md:w-[650px] mt-7 ">
      {/* <h1 class=" text-2xl text-red-500 ">When you want to see PYQ then use your Logged In Email</h1> */}
      <div class=" sm:w-[500px]  md:w-[650px] md:p-6 grid grid-cols-1  sm:grid-cols-3  mx-auto relative gap-2 pt-4 w-[200px]  space-y-2 sm:space-x-8 sm:space-y-5 mt-8 overflow-hidden">
        <div class="relative flex sm:mt-5 flex-col  justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
          <div>
            <a
              href="https://drive.google.com/drive/folders/1gore-rLgAmCGQLAgnAoN6x7enrjSOLiA?usp=drive_link"
              target="_blank"
            >
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

            <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-2  ">T1</h1>
          </div>
        </div>
        <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
          <div>
            <a
              href="https://drive.google.com/drive/folders/1ls8toZIbCG8Q4QsusM_M-2wSWWJ7phPt?usp=drive_link"
              target="_blank"
            >
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

            <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-2  ">T2</h1>
          </div>
        </div>
        <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
          <div>
            <a
              href="https://drive.google.com/drive/folders/1XhdUrOCQnB5PIYIz4FxDe_ekIR2EgFn9?usp=drive_link"
              target="_blank"
            >
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

            <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-2  ">
              End Sem
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sem3;
