// components/About.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/nav';
import Cube from '../components/three/cube';
import MySkills from '../components/myskills';

const About: React.FC = () => {
  return (
    <div className='bg-[#008080] text-white text-center relative overflow-hidden pb-32'>
      <Nav />

      {/* Animated Title Section */}
      <motion.div
        className='mt-40 relative z-10'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className='text-white/90 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          From UI/UX Design To SQA
        </motion.h1>
        <motion.h2
          className='text-white/80 text-3xl font-medium max-w-3xl mx-auto leading-12'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          Crafting Better Digital Experiences.
        </motion.h2>
      </motion.div>

      {/* Background cubes with motion effects */}
      <div className="absolute top-32 left-0 w-full flex justify-center items-center z-0">
        <motion.div
          className="opacity-50 mr-4 mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          <Cube rotationSpeedX={-0.001} rotationSpeedY={-0.005} scale={1.0} />
        </motion.div>
        <motion.div
          className="mt-32 mx-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 3.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          <Cube rotationSpeedX={0.015} rotationSpeedY={0.005} scale={1.2} />
        </motion.div>
        <motion.div
          className="opacity-50 ml-4 mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 3.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          <Cube rotationSpeedX={0.001} rotationSpeedY={-0.015} scale={1.0} />
        </motion.div>
      </div>

      {/* Skills Section with Motion */}
      <motion.div
        className="mt-[25rem] relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h6
          className='text-white/80 font-normal'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Skills at a Glance
        </motion.h6>
        <MySkills />
      </motion.div>
    </div>
  );
};

export default About;
