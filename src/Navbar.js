import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "./image/logonotes.png";
import { RxHamburgerMenu } from "react-icons/rx";
// import { Dropdown } from "antd";
import { Key_Access_Token, count_User, getItem } from "./utils/localStorage";
import { useSelector } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import NavbarItem1 from "./assets/NavbarItems1.json";
import useOnline from "./Hooks/useOnline";
import NavbarItemLaptop from "./assets/NavbarItemLaptop.json";
function Navbar() {
  const a = getItem(Key_Access_Token);
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
                    <Link to="/user/logout" style={{ textDecoration: "none" }}>
                      <li
                        class="text-[16px] font-josefin font-bold cursor-pointer transition-all duration-200 "
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        {" "}
                        LogOut
                      </li>
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
        </div>
        <div class="w-[85%] flex flex-row  flex-wrap  justify-evenly items-center mx-auto">
          <ul className="nav_bar sm:flex justify-center  items-center gap-3 hidden   ">
            {NavbarItemLaptop?.map(item => {
              return(
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

            {isOnline ? (
              <div className="mr-4"> 🟢</div>
            ) : (
              <div className="mr-4">🔴</div>
            )}
          </ul>
          <ul class="sm:flex hidden justify-center items-center gap-4 px-3">
            <>
              {a ? (
                <>
                  <Link to="/user/logout" style={{ textDecoration: "none" }}>
                    <li class=" text-2xl relative group  p-1 hover:underline rounded-md px-2 transition-all duration-200 flex justify-center items-center group ">
                      {" "}
                      <AiOutlineLogout />
                      {/* <span class="text-4xl ml-4 group-hover:scale-125 transition-all duration-300    ">
                    {count}{" "}
                  </span> */}
                      <p class="absolute text-sm hidden group-hover:flex -top-4 ">
                        Logout{" "}
                      </p>
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <li class="hover:underline p-2 rounded-md transition-all duration-500">
                    <Link to="/auth/login" style={{ textDecoration: "none" }}>
                      Login
                    </Link>
                  </li>
                  <li class="hover:underline    p-2 rounded-md transition-all duration-500">
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
