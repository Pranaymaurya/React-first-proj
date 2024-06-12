import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Cover() {
  return (
    <>
      <motion.div
        className="w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 text-center flex flex-col items-center justify-center font-mono"
      >
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: 300, transition: { duration: 2 } }}
          className="text-7xl mb-4"
        >
          Welcome to our website
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: -300, transition: { duration: 2 } }}
          className="text-7xl"
        >
          Pranay's Portfolio
        </motion.h1>
        <NavLink to="/app" className="text-2xl mt-8">Enter</NavLink>
      </motion.div>
    </>
  );
}



