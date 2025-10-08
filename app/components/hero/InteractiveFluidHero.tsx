'use client';

import React, { useEffect, useRef } from 'react';
import FluidSimulation from '../FluidBackground/sample/fluidSimulation';

export default function InteractiveFluidHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const simulationRef = useRef<FluidSimulation | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Initialize the fluid simulation
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    // Create fluid simulation instance
    const simulation = new FluidSimulation(canvas, {
      SPLAT_RADIUS: 0.5,
      SPLAT_FORCE: 6000,
      CURL: 30,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      VELOCITY_DISSIPATION: 0.2,
      DENSITY_DISSIPATION: 1.0,
      BLOOM: true,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: true,
      SUNRAYS_WEIGHT: 0.3,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 0.3,
      BACK_COLOR: { r: 0.0, g: 0.0, b: 0.0 },
      TRANSPARENT: false
    });

    simulationRef.current = simulation;

    // Handle resize
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      if (simulationRef.current) {
        simulationRef.current.destroy();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gray-900"
    >
      {/* Fluid Simulation Background */}
      <div className="absolute inset-0 z-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ 
            display: 'block', 
            width: '100%', 
            height: '100%',
            cursor: 'crosshair'
          }}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight">
            Abu Rayhan
            <span className="block text-4xl md:text-6xl lg:text-7xl font-light mt-2">
              Md Saifullah
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-8 max-w-3xl">
            Software Quality Assurance Engineer & UX/UI Designer
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Move your mouse across the screen to create beautiful fluid dynamics. 
            Each interaction generates unique color waves that respond to your movements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
              View Portfolio
            </button>
            <button className="px-8 py-4 bg-transparent backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/50">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
