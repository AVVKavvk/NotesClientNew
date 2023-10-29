import React from "react";
import Anima from './Img2_1'
import { Link } from "react-router-dom";
function Img2() {
  return (
    <>
      <div class="container  px-3  relative font-mullish flex flex-col bg-[#fff] w-[100vw]  h-[670px]">
        <div className=" absolute z-10 hidden md:block top-7  left-[370px]">
          <Anima />
        </div>
        <div class="box  absolute h-[670px]  ">
          <div class="product__img w-[350px] md:w-[540px] absolute -left-10 md:-left-[150px] md:top-[50px]  opacity-0 ">
            <img
              src="https://i.ibb.co/QJYVTRn/Your-paragraph-text.png"
              alt=""
            />
          </div>

          <div class="product__disc h-[400px] w-[600px] rounded-md bg-[#FFCA1B] flex items-center justify-center absolute border border-blue-600 top-[50px] ">
            <div class="product__disc--content w-[80%] h-[80%] flex justify-between flex-col  ">
              <div class="disc__content--about w-[100%] ">
                <h1 className=" text-3xl font-bold">Elevate</h1>

                <p className=" text-xl mt-5   text-justify">
                  Our website offers a rich repository of notes, labs, and
                  previous year's exam papers along with Books to boost your
                  academic journey. Dive into comprehensive lecture notes,
                  embark on hands-on learning experiences, and prepare
                  effectively with real exam papers.We're dedicated to providing
                  you with the tools and knowledge you need to succeed in your
                  academic and professional pursuits.
                </p>
              </div>
            </div>
          </div>

          <div class="product_buttons hidden md:block">
            <button class="btn wishlist text-center">
              <Link to="/user/academics" style={{ textDecoration: "none" }}>
                <h1 class="w-[150px]   mx-auto text-xl cursor-pointer">
                  Academics
                </h1>
              </Link>
            </button>
          </div>
        </div>
        <div class="mt-[370px] flex md:hidden text-xl mb-4  text-justify text-gray-600">
          Our website offers a rich repository of notes, labs, and previous
          year's exam papers along with Books to boost your academic journey.
          Dive into comprehensive lecture notes, embark on hands-on learning
          experiences, and prepare effectively with real exam papers.We're
          dedicated to providing you with the tools and knowledge you need to
          succeed in your academic and professional pursuits.
        </div>
      </div>
    </>
  );
}

export default Img2;
