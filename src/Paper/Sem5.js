import React from 'react'
import ll from '../image/p5.svg'
function Sem5() {
  return (
    <div class="mx-auto sm:w-[500px]  md:w-[650px] mt-7 ">
    {/* <h1 class=" text-2xl text-red-500 ">When you want to see PYQ then use your Logged In Email</h1> */}
    <div class=" sm:w-[500px]  md:w-[650px] md:p-6 grid grid-cols-1  sm:grid-cols-3  mx-auto relative gap-2 pt-4 w-[200px]  space-y-2 sm:space-x-8 sm:space-y-5 mt-8 overflow-hidden">
    <div class="relative sm:mt-5 flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="https://drive.google.com/drive/folders/13zDWi1KKtghCaygV8Ofkal30wL9x6GSH?usp=drive_link"
        target="_blank"
      >
        <div>
          <img src={ll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-4  ">
          T1
        </h1>
      </div>
      
    </div>
    <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="https://drive.google.com/drive/folders/1-k7z_LvdyjbQCalHSmtz3NOHITDruZmN?usp=drive_link"
        target="_blank"
      >
        <div>
          <img src={ll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl mt-4 ">
          T2
        </h1>
      </div>
      
    </div>
    <div class="relative flex flex-col justify-center items-center text-center  w-full h-[250px] space-x-16  px-5 ">
      <div>
      <a
        href="https://drive.google.com/drive/folders/1ZWi-cfLiyWKV24m0euAduZHvODXkeBnw?usp=drive_link"
        target="_blank"
      >
        <div>
          <img src={ll} alt=""  class="hover:scale-110 transition-all duration-500" height="170px"  width="170px"  />
        </div>
      </a>
        
        <h1 class=" z-10 top-[60px] left-[80px] text-4xl  mt-4 ">
          End Sem
        </h1>
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Sem5