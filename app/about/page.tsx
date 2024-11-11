"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Nav from '../components/nav';
import Cube from '../components/three/cube';
import MySkills from '../components/myskills';
import { ScrollProgress } from '../portfolio/ScrollElements';
import { SocialLinks } from '../portfolio/SocialLinks';
import { BackgroundDots, FloatingParticles } from '../portfolio/BackgroundElements';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const glowAnimationVariants = {
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [0.9, 1.1, 0.9],
  },
};

const About: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <main 
      ref={mainRef}
      className="min-h-screen w-full relative text-white"
      style={{
        background: `linear-gradient(145deg, 
          #009999 0%, 
          #005454 50%, 
           
          #001A1A 100%)`,
      }}
    >
      {/* Wrapper for all content to prevent overflow */}
      <div className="relative w-full pb-4">
        {/* Background Elements */}
        <BackgroundDots />
        <FloatingParticles />
        
        {/* Decorative gradient line */}
        <motion.div 
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent"
          style={{ top: '20%' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        {/* Navigation and UI Elements */}
        <Nav />
        <ScrollProgress />
        <SocialLinks />

        {/* Hero Section */}
        <motion.div
          className="mt-40 relative z-10 text-center"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <motion.div
            className="relative inline-block"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="absolute -inset-4 blur-xl"
              variants={glowAnimationVariants}
              animate="animate"
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <h1 className="text-white/90 mb-8 relative">
              From UI/UX Design To SQA
            </h1>
          </motion.div>

          <motion.h2
            className="text-white/80 text-3xl font-medium max-w-3xl mx-auto leading-12 relative"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            Crafting Better Digital Experiences
          </motion.h2>
        </motion.div>

        {/* Animated Cube Background */}
        <div className="absolute top-32 left-0 w-full flex justify-center items-center z-0">
          <motion.div
            className="opacity-50 mr-4 mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-cyan-400/10 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <Cube rotationSpeedX={-0.001} rotationSpeedY={-0.007} scale={1.0} />
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-[20rem] relative z-10 rounded-xl p-8 mx-auto max-w-6xl"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Glassmorphism layers */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-xl" />
          
          <motion.div className="relative text-center">
            <motion.div
              className="relative inline-block mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span
                className="absolute -inset-1 blur-lg bg-gradient-to-r from-cyan-400/20 via-teal-400/20 to-cyan-400/20"
                variants={glowAnimationVariants}
                animate="animate"
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              <h6 className="text-white/80 font-normal relative">
                Skills at a Glance
              </h6>
            </motion.div>
            <MySkills />
          </motion.div>
        </motion.div>
        <footer className="py-4 text-center border-t border-white/10 mt-32">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Abu Rayhan. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default About;