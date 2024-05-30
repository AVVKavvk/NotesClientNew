import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { count_User, getItem } from "../utils/localStorage";
import { Key_Access_Token } from "../utils/localStorage";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import upcoming from "../assets/upcoming.json";
import Features from "../assets/HomeFeatures.json";
function Home() {
  // const count = useSelector((state) => state.appConfigReducer.count);
  // console.log(count);
  // const dispatch = useDispatch();
  const a = getItem(Key_Access_Token);
  var b = useSelector(state => state.appConfigReducer.count);
  var count = 730;
  if (b === 0) {
    count = getItem(count_User);
  } else {
    count = b;
  }

  useEffect(() => {
    count = getItem(count_User);
  }, [count]);
  const navigate = useNavigate();
  function AA() {
    navigate("/auth/login");
  }

  return (
    <>
      <div class="mt-4 mb-24 mx-4  ">
        <div className=" flex-col font-mullish  max-w-[1250px] flex mx-auto gap-2 justify-center items-center ">
          <div className="container mx-auto py-12 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="text-5xl md:text-7xl font-bold mb-4 text-white"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              <span className="text-purple-400 text-5xl">Welcome to</span>{" "}
              <br /> Vipin Notes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-xl md:text-2xl mb-4"
            >
              Ultimate Academic, Career, and Personal Growth <br /> Platform for
              IIIT Pune Students
            </motion.p>
          </div>

          <div class="w-full flex-col md:flex-row mt-8 md:mt-[4.6rem] flex  text-justify  gap-5 items-center mx-auto ">
            <div className="container mx-auto py-12 text-center">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: .5 }}
                className="text-xl md:text-2xl mb-4"
              >
                At <span class=" text-2xl  ">Vipin Notes</span> , I am committed
                to fostering a dynamic learning environment, and my website is
                your gateway to a world of educational resources and support.
                Whether you're a student seeking course materials, a researcher
                exploring the latest findings, or a job-seeker looking to craft
                the perfect resume, I've got you covered.
              </motion.p>
              <motion.div
                class="flex flex-col md:flex-row justify-between items-center "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <h1
                  onClick={AA}
                  class="w-[150px]  font-bold bg-yellow-600 text-2xl hover:bg-yellow-500 rounded-lg px-2  py-3 mt-5 cursor-pointer"
                >
                  Get Started
                </h1>
                <Link
                  to="/upload/notes"
                  class="w-[150px]  font-bold bg-pink-600 text-xl hover:bg-pink-500 rounded-lg px-2  py-3 mt-5 cursor-pointer"
                >
                  Upload Notes
                </Link>
                <Link
                  to="/upload/paper"
                  class="w-[150px]  font-bold bg-pink-600 text-xl hover:bg-pink-500 rounded-lg px-2  py-3 mt-5 cursor-pointer"
                >
                  Upload Paper
                </Link>
                <Link
                  to="/upload/lab"
                  class="w-[150px]  font-bold bg-pink-600 text-xl hover:bg-pink-500 rounded-lg px-2  py-3 mt-5 cursor-pointer"
                >
                  Upload Lab
                </Link>

                <h1 class="text-xl mt-6 font-bold bg-green-700 rounded-lg px-3 py-3 items-center flex  ">
                  {" "}
                  <span class="text-3xl mr-3">
                    {" "}
                    {count != undefined ? count : "730"}+
                  </span>{" "}
                  Students{" "}
                </h1>
              </motion.div>
            </div>
          </div>
          <hr
            style={{ width: "100%", height: "2px" }}
            className="bg-gray-700"
          />
          <hr
            style={{ width: "100%", height: "2px" }}
            className="bg-gray-700"
          />
          <h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.3 }}
            className=" text-4xl font-bold mt-5  bg-slate-900 p-2 px-6 shadow-md mb-6 shadow-yellow-400 rounded-md"
          >
            Features
          </h1>
          <motion.div
            className="grid mb-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-justify gap-9 justify-center items-center mx-auto "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            {Features?.map((item, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 3 }}
                  className=" shadow-md shadow-slate-400  p-3 rounded-md  bg-[#06173363] "
                >
                  <h1 className=" text-2xl mb-2">{item.tag} :-</h1>
                  <hr
                    style={{ width: "100%", height: "2px" }}
                    className="bg-gray-700 mb-2"
                  />
                  <p>{item.content}</p>
                </motion.div>
              );
            })}
          </motion.div>
          <hr
            style={{ width: "100%", height: "2px" }}
            className="bg-gray-700"
          />
          <hr
            style={{ width: "100%", height: "2px" }}
            className="bg-gray-700"
          />
          <motion.div
            class="mt-8 flex flex-col justify-center items-center mx-auto "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <h1 class="text-4xl bg-green-700 rounded-lg px-5 py-2 mb-6 ">
              {" "}
              Upcoming Features
            </h1>
            <div class="md:mt-10  grid md:grid-cols-3  gap-5 justify-center items-center mx-auto ">
              {upcoming?.map(item => {
                return (
                  <div class="max-[270px] flex flex-col space-y-4 px-6 rounded-lg text-justify h-[170px] shadow-md hover:scale-105 transition-all duration-200 shadow-slate-400  border border-gray-500 mx-auto justify-center items-center ">
                    <h1 class="text-2xl font-bold ">{item?.title}</h1>
                    <p class=" ">{item?.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
