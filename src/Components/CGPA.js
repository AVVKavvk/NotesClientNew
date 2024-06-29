import React, { useState } from "react";
import { useEffect } from "react";
import { Key_Access_Token, getItem } from "../utils/localStorage";
import { Link } from "react-router-dom";
import Login from "./Login";
import CalURL from "../Constant/CalURl.json";
import A from "../CGPA/A";
function CGPA() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = getItem(Key_Access_Token);
    if (token && token !== 10) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) return <Login />;
  // const a = 10;
  return (
    <>
      <div class="grid grid-cols-1 justify-center items-center mt-6 mb-11 mx-auto ">
        <div class="grid  grid-cols-2 sm:grid-cols-4  lg:grid-cols-8 mt-6 gap-4 justify-center items-center mx-auto lg:mt-2  max-w-[1300px]  ">
          {CalURL?.map(item => {
            return (
              <Link to={item.url} key={item.name}>
                <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center mt-3 gap-4 ml-4 sm:ml-10  sm:mt-7 lg:mt-9 justify-center flex bg-yellow-200">
                  {" "}
                  <span className="bg-yellow-400 p-3 py-1 rounded-md">
                    <span className="bg-yellow-600 p-1 rounded-md">
                      {item.name}
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <A/>
      </div>
    </>
  );
}

export default CGPA;
