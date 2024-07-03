import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

function Card({ index, title, tag }) {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="xs:w-[170px] w-full max-w-[400px] relative"
    >
      <motion.div
        variants={FadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full  rounded-lg p-[2px] shadow-card hover:green-pink-gradient relative z-10"
      >
        <div className="w-auto  rounded-lg py-5 px-5 max-h-[420px] min-h-[200px] flex justify-evenly items-center flex-col group hover:bg-tertiary relative z-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">{tag}</h1>
            <hr />
            <p>{title}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black  rounded-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
      </motion.div>
    </Tilt>
  );
}

export default Card;
