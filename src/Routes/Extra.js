import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import i1 from "../image/doubleArrow.svg";
import wave from "../image/wave.svg";
function Extra() {
  const content = [
    {
      link: "/mentalheath",
      tag: "MentalHeath",
      description:
        "Mental health is crucial for developers. Taking care of your mind and well-being can lead to increased productivity and creativity in your coding journey.",
    },
    {
      link: "/personalblogs",
      tag: "PersonalBlogs",
      description:
        "self-improvement, is the process of developing and enhancing your skills, knowledge, and abilities to become a better version of yourself.",
    },
  ];
  return (
    <div className=" font-mullish hidden md:flex font-mullish mt-4 mb-10 md:mt-5  rounded-md  max-w-[900px] mx-auto relative text-xl">
      <div className="w-[50%] rounded-md flex flex-col border border-gray-300 justify-between gap-3">
        {content?.map(item => {
          return (
            <Link to={item?.link}>
              <div class="w-full relative cursor-pointer  min-h-[15rem] group rounded-md">
                <img
                  src={i1}
                  alt=""
                  class="absolute w-12 h-12 rounded-full bg-lightBlue text-white right-3 top-3 -z-[8] group-hover:bg-gradient-to-r from-cyan-300 to-blue-500 transition-all duration-200"
                />
                <div class="z-[100] absolute w-full h-full flex flex-col text-justify justify-between pl-5 py-6 pr-8">
                  <div>
                    <h1 class="font-mullish font-bold text-[1.5rem] leading-[1.2] text-deepBlueHead">
                      {item?.tag}
                    </h1>
                    <p class="font-mullish text-grayText mt-6">
                      {item?.description}
                    </p>
                    <img
                      src={wave}
                      alt=""
                      class="hidden absolute bottom-0 right-0 group-hover:block transition-all duration-200"
                    />
                  </div>
                  <div class="flex items-center space-x-2 font-mullish font-bold text-lightBlue group">
                    <FiExternalLink
                      size={40}
                      class="px-1 mx-1 mt-0 group-hover:text-grayBlue"
                    />
                  </div>
                </div>
              </div>
              <hr class="mt-5" />
            </Link>
          );
        })}
      </div>
      <div className=" w-[50%] ml-[5%] gap-8">
        <div class="flex from-white justify-center text-grayText font-mullish items-center mx-auto p-2 text-justify gap-4 mt-4 ">
          <p>
            Taking breaks, maintaining a work-life balance, and seeking support
            when needed can lead to a happier and more successful coding
            career.Set clear boundaries for work hours.ngage in hobbies and
            spend time with loved ones.
          </p>
        </div>
        <div class="flex from-white justify-center text-grayText font-mullish items-center mx-auto p-2 text-justify gap-4 mt-4 ">
          <p>
            Leadership is the ability to guide, inspire, and influence
            individuals or groups to achieve a common goal or vision.Time
            management is the practice of planning and organizing how you
            allocate your time to various tasks and activities to be more
            productive, efficient, and effective.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Extra;
