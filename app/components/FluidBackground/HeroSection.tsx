// Example usage component: components/sections/HeroSection.tsx
import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import FluidCanvas from './FluidCanvas';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16 overflow-hidden bg-white">
      <FluidCanvas />
      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl text-black lg:text-8xl font-black mb-6 leading-tight">
            Hi, I am Rayhan
            
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-black/90 font-light mb-8 max-w-3xl">
            SQA Engineer & UX/UI Designer
          </p>
          
                   
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-black font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
              View Portfolio
            </button>
            <button className="px-8 py-4 bg-transparent backdrop-blur-sm text-black font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/50">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
