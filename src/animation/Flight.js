import React from "react";
import "./flight.css";
function Flight() {
  return (
    <div class="cloud cloud1">
      <div className="flex gap-5">
        <div class="light w-[20px] h-[20px] -left-[20px] bg-red-500 rounded-full z-10 absolute bottom-[295px]  "></div>
        <div class="light w-[20px] h-[20px] -left-[50px] bg-red-500 rounded-full z-10 absolute bottom-[295px]  "></div>
        <div class="light w-[20px] h-[20px] -left-[80px] bg-red-500 rounded-full z-10 absolute bottom-[295px]  "></div>
        <div class="light w-[20px] h-[20px] -left-[110px] bg-red-500 rounded-full z-10 absolute bottom-[295px]  "></div>
        <div class="light w-[20px] h-[20px] -left-[140px] bg-red-500 rounded-full z-10 absolute bottom-[295px]  "></div>
        <div class="light w-[20px] h-[20px] -left-[170px] bg-red-500 rounded-full z-10 absolute bottom-[295px]  "></div>
        <div class="light w-[20px] h-[20px] -left-[200px] bg-red-500 rounded-full z-10 absolute bottom-[295px]  "></div>
      </div>
      <div
        class=" text-4xl text-violet-800 absolute bottom-[215px] 
         z-10 -left-[345px]"
      >
        <span className="text-5xl font-bold ">Elevate</span> Your Dream
      </div>
      <img src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png" />
    </div>
  );
}

export default Flight;
