import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundDots = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10">
    <div className="relative w-full h-full">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `pulse ${2 + Math.random() * 2}s infinite`
          }}
        />
      ))}
    </div>
  </div>
);

export const FloatingParticles = () => {
  const particles = [...Array(20)].map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * -20
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/20 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};
