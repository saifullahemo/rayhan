// components/About.tsx
"use client"; // Ensure it's a client-side component

import React from 'react';
import Nav from '../components/nav';
import Cube from '../components/three/cube'; // Use the updated Cube component

const About: React.FC = () => {
  return (
    <div className='bg-[#008080] text-white text-center h-screen relative'> {/* Make parent relative */}
      <Nav />
      <div className='mt-40'>
        <h1 className='text-white mb-8  z-10'>From UI/UX Design To SQA</h1> {/* Set z-index for text */}
        <h1 className='text-white max-w-3xl mx-auto leading-12  z-10'>Crafting Better Digital Experiences.</h1> {/* Set z-index for text */}
      </div>
      {/* Container for cubes */}
      <div className="flex justify-center items-center mt-10 mx-auto w-full absolute z-0 top-0"> {/* Lower z-index */}
        {/* Left cube with reduced opacity */}
        <div className=" left-1/6 mt-4 opacity-50 mr-4">
          <Cube />
        </div>
        {/* Center cube with reduced opacity */}
        <div className="opacity-50  mx-4">
          <Cube />
        </div>
        {/* Right cube with reduced opacity */}
        <div className="opacity-50 ml-4">
          <Cube />
        </div>
      </div>
    </div>
  );
};

export default About;
