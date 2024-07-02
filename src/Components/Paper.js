import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Key_Access_Token, getItem } from "../utils/localStorage";
import PaperURL from "../Constant/PaperURL.json";
import A from "../Paper/A";
import Login from "./Login";
function Paper() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = getItem(Key_Access_Token);
    if (token && token !== 10) {
      setIsAuthenticated(true);
    } 
  }, []);
  if(!isAuthenticated) return <Login/>
  return (
    <>
      <div class="grid grid-cols-1 justify-center items-center mt-6 mx-auto ">
        <div class="grid  grid-cols-2 sm:grid-cols-3  lg:grid-cols-6 mt-6 justify-center items-center mx-auto  lg:mt-2   max-w-[1200px] gap-6  ">
          {PaperURL?.map(item => {
            return (
              <Link to={item.url} key={item.name}>
                <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center mt-3 gap-4 ml-4 sm:ml-10  sm:mt-7 lg:mt-9 justify-center flex bg-green-200">
                  {" "}
                  <span className="bg-green-300 p-3 py-1 rounded-md">
                    <span className="bg-green-400 p-1 rounded-md">
                      {item.name}
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <A />
        {/* <Outlet /> */}
      </div>
    </>
  );
}

export default Paper;
