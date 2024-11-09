"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "../components/nav";
import Three from "../components/three/threeDObject"; // Import your first 3D model
import SoftwareUsed from "./mySoft";
import Project from "./project";

const Portfolio: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position
  const handleMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX / 40, y: e.clientY / 60 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-[#054244] text-white text-center relative">
      <Nav />

      <motion.div
        className="mt-40 relative z-10 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-white/90 mb-8 text-xl sm:text-2xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Beyond appearances,{" "}
        </motion.h1>
        <motion.h2
          className="text-white/80 max-w-3xl text-2xl sm:text-3xl lg:text-5xl mx-auto leading-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Achieving conversions.
        </motion.h2>
      </motion.div>

      {/* Background cubes with different sizes, speeds, and directions */}
      <div className="absolute top-32 left-0 w-full flex justify-center items-center z-0">
        <motion.div
          className="mt-[20rem] mx-4"
          style={{
            translateX: cursorPosition.x,
            translateY: cursorPosition.y,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Three opacity={1} />
        </motion.div>

        <motion.div
          className="opacity-50 ml-4 mb-20"
          style={{
            translateX: -cursorPosition.x,
            translateY: -cursorPosition.y,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 0.5 }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Three opacity={1} />
        </motion.div>
      </div>

      <motion.div
        className="mt-[25rem] px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h6
          className="text-white/80 mb-12 text-lg sm:text-xl lg:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Core Software Used
        </motion.h6>

        <motion.div
          className=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute flex gap-8 sm:gap-16 justify-between items-center w-full"
            style={{
              translateX: cursorPosition.x * 0.8,
              translateY: cursorPosition.y * 0.8,
            }}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 0.3, scale: 0.5 }}
            transition={{
              duration: 3.5,
            }}
          >
            <Three opacity={1} />
          </motion.div>

          <motion.div
            className="absolute flex space-x-8 sm:space-x-16 justify-center items-center w-full mt-[24rem] ml-8 sm:ml-16 lg:ml-40"
            style={{
              translateX: -cursorPosition.x * 0.8,
              translateY: -cursorPosition.y * 0.8,
            }}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 0.8, scale: 0.5 }}
            transition={{
              duration: 3.5,
            }}
          >
            <Three opacity={1} />
          </motion.div>

          <SoftwareUsed />
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-24 md:mt-40 relative z-10 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      >
        <Project />
      </motion.div>
    </div>
  );
};

export default Portfolio;
