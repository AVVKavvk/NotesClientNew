import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "./image/logonotes.png";
import { RxHamburgerMenu } from "react-icons/rx";
// import { Dropdown } from "antd";
import { Key_Access_Token, UserImage, count_User, getItem } from "./utils/localStorage";
import { useSelector } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import NavbarItem1 from "./assets/NavbarItems1.json";
import useOnline from "./Hooks/useOnline";
import NavbarItemLaptop from "./assets/NavbarItemLaptop.json";
function Navbar() {
  const a = getItem(Key_Access_Token);
  const Userimage = getItem(UserImage)
  var b = useSelector(state => state.appConfigReducer.count);
  const isOnline = useOnline();
  var count = 1;
  if (b === 0) {
    count = getItem(count_User);
  } else {
    count = b;
  }
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    count = getItem(count_User);
  }, [count]);

  return (
    <div class="font-mullish mb-3  text-white mt-4 md:mt-1 w-full max-w-[1420px] mx-auto relative rounded-sm text-xl px-3  ">
      {/* //TODO /simple */}
      <div class="sm:hidden z-50 flex  justify-between w-full  items-center max-w-[600px] relative ">
        <a href="">
          <img src={logo} alt="" width="200px" height="140px" />
        </a>

        <div class="flex relative w-[65%] justify-end pr-3">
          {isOnline ? (
            <div className="mr-4"> 🟢</div>
          ) : (
            <div className="mr-4">🔴</div>
          )}
          <RxHamburgerMenu size={30} onClick={() => setToggle(!toggle)} />
          <div
            class={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#e5e4e2] absolute text-black  w-[120%] top-7 left-8 transition-all duration-200   my-3  z-10 rounded-xl `}
          >
            <ul class=" flex flex-col z-[100] justify-end items-center gap-1 ">
              {NavbarItem1?.map(item => {
                return (
                  <li
                    class={` text-[16px] font-josefin font-medium cursor-pointer transition-all duration-200 `}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    key={item.tag}
                  >
                    <Link to={item.link} style={{ textDecoration: "none" }}>
                      {item.tag}
                    </Link>
                  </li>
                );
              })}
              <>
                {a ? (
                  <>
                    <Link 
                    to="/account" 
                    style={{ textDecoration: "none" }} 
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    className="flex justify-center items-center mx-auto bg-green-500 rounded p-2"
                  >
                    Account
                  </Link>
                  </>
                ) : (
                  <>
                    <li
                      class="  text-[16px] font-josefin font-bold cursor-pointer transition-all duration-200"
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      <Link to="/auth/login" style={{ textDecoration: "none" }}>
                        Login
                      </Link>
                    </li>
                    <li
                      class="   text-[16px] font-josefin font-bold cursor-pointer transition-all duration-200"
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      <Link
                        to="/auth/signup"
                        style={{ textDecoration: "none" }}
                      >
                        SignUp
                      </Link>
                    </li>
                  </>
                )}
              </>
            </ul>
          </div>
        </div>
      </div>

      {/* //TODO /sm */}
      <div class="flex lg:max-w-[1400px] mx-auto  justify-center items-center  rounded-lg">
        <div class="w-[23%]  pb-3 sm:flex hidden  ">
          <a href="#">
            {" "}
            <img src={logo} alt="" width="250px" />{" "}
          </a>
          {isOnline ? (
            <div className="mr-4"> 🟢</div>
          ) : (
            <div className="mr-4">🔴</div>
          )}
        </div>
        <div class="w-[85%] flex flex-row  flex-wrap  justify-evenly items-center mx-auto">
          <ul className="nav_bar sm:flex justify-center  items-center gap-3 hidden   ">
            {NavbarItemLaptop?.map(item => {
              return (
                <li
                  key={item.tag}
                  class="hover:underline  p-2 rounded-md transition-all duration-500"
                >
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    {item.tag}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul class="sm:flex hidden justify-center items-center gap-4 px-3">
            <>
              {a ? (
                <>
                  <Link 
                    to="/account" 
                    style={{ textDecoration: "none" }} 
                    className="flex justify-center items-center mx-auto bg-white w-[60px] h-[60px] rounded-full relative group"
                  >
                    <img
                      src={Userimage || "https://res.cloudinary.com/dufi9bxnq/image/upload/v1731948868/VipinNotes%20Users/dummy.png"}
                      alt="Profile"
                      className="w-[50px] h-[50px] rounded-full object-cover"
                    />
                    <span className="absolute top-full mb-2 hidden group-hover:block bg-gray-800 text-white text-lg rounded py-1 px-2">
                      Account
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <li class="hover:underline p-1 px-2 bg-pink-700 rounded-md transition-all duration-500">
                    <Link to="/auth/login" style={{ textDecoration: "none" }}>
                      Login
                    </Link>
                  </li>
                  <li class="hover:underline    p-1 px-2 bg-pink-700 rounded-md transition-all duration-500">
                    <Link to="/auth/signup" style={{ textDecoration: "none" }}>
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
