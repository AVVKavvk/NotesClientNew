import React from "react";
import { a } from "react-router-dom";
import i1 from "../image/doubleArrow.svg";
import wave from "../image/wave.svg";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../animation/Loader2";
function Coding() {
  const [loader, setLoader] = useState(true);
  const [app, setApp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      setApp(true);
    }, 800);
  }, []);
  return (
    <>
      <div
        className={`${
          loader ? "block" : "hidden"
        } bg-slate-900 flex justify-center items-center mx-auto h-[120vh] -mt-[200px]`}
      >
        {<Loader />}
      </div>
      <div className={`${app ? "block" : "hidden"}`}>
        <div class=" font-mullish mb-20 md:w-[970px] w-[350px] flex-wrap flex md:flex-row  flex-col gap-10 justify-center mx-auto  ">
          <a
            href="https://vipineditor.netlify.app/"
            target="_blank"
            class="border  border-gray-300 md:w-[45%] w-[330px] h-[370px] md:h-[290px] mx-auto rounded-md"
          >
            <div class="w-full  relative cursor-pointer  min-h-[16.2rem] group rounded-md">
              <img
                src={i1}
                alt=""
                class="absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
              />
              <div class="z-[100] absolute w-full h-full flex flex-col text-justify justify-between pl-5 py-6 pr-8">
                <div>
                  <h1 class="font-mullish font-bold text-[1.5rem] leading-[1.2] text-deepBlueHead">
                    Vipin's Editor
                  </h1>
                  <p class="font-mullish text-grayText mt-6">
                    Vipin Editor is like a special online club for people who
                    enjoy playing with computer codes for making websites. It's
                    a friendly place where you can try out your own creative
                    ideas in HTML, CSS, and JavaScript.It's a great spot for
                    both beginners and experienced coders to learn, share, and
                    work together.
                  </p>
                  {/* <img
                    src={wave}
                    alt=""
                    class="hidden absolute bottom-0 right-0 group-hover:block transition-all duration-200"
                  /> */}
                </div>
                <div class="flex items-center space-x-2 font-mullish font-bold text-lightBlue group">
                  <FiExternalLink
                    size={40}
                    class="px-1 mx-1 mt-0 group-hover:text-grayBlue"
                  />
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://t.me/avvk_bot"
            target="_blank"
            class="border  border-gray-300 md:w-[50%] w-[330px] h-[370px] md:h-[290px] mx-auto rounded-md"
          >
            <div class="w-full  relative cursor-pointer  min-h-[16.2rem] group rounded-md">
              <img
                src={i1}
                alt=""
                class="absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
              />
              <div class="z-[100] absolute w-full h-full flex flex-col text-justify justify-between pl-5 py-6 pr-8">
                <div>
                  <h1 class="font-mullish font-bold text-[1.5rem] leading-[1.2] text-deepBlueHead">
                    Coding Bot
                  </h1>
                  <p class="font-mullish text-grayText mt-6">
                    Welcome to the DSA and C++ Algorithms Bot! This special bot
                    is your gateway to DSA knowledge and essential C++ code for
                    key problems. To begin your journey, all you need to do is
                    type a command that starts with '/'. We've made it super
                    easy for you. You can also simply click on any of the
                    commands provided.This way, you can quickly access a world
                    of algorithms and code snippets.
                  </p>
                  {/* <img
                    src={wave}
                    alt=""
                    class="hidden absolute bottom-0 right-0 group-hover:block transition-all duration-200"
                  /> */}
                </div>
                <div class="flex items-center space-x-2 font-mullish font-bold text-lightBlue group">
                  <FiExternalLink
                    size={40}
                    class="px-1 mx-1 mt-0 group-hover:text-grayBlue"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Coding;
