'use client'
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Nav from "../components/nav";
import { BackgroundDots, FloatingParticles } from "./BackgroundElements";
import { ScrollProgress } from "./ScrollElements";
import { SocialLinks } from "./SocialLinks";
import { ParallaxThree } from "./ParallaxThree";
import SoftwareUsed from "./mySoft";
import Project from "./project";

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

// Scroll Indicator Component with unmount logic
const ScrollIndicator = ({ setIndicatorVisible }: { setIndicatorVisible: (visible: boolean) => void }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIndicatorVisible(false);  // Hide scroll indicator once scrolled past
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIndicatorVisible]);

  return (
    <motion.div
      className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 5 }}
      transition={{ delay: .5, duration: 0.8 }}
    >
      <span className="text-white/60 text-sm">Scroll to explore</span>
      <motion.div
        className="w-0.5 h-10 bg-gradient-to-b from-white/60 to-transparent"
        animate={{
          scaleY: [1, 0.5, 1],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};


const Portfolio: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);
  const [indicatorVisible, setIndicatorVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    return () => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <main 
      ref={mainRef}
      className="min-h-screen w-full relative text-white"
      style={{
        background: `linear-gradient(145deg, 
          #009999 0%, 
          #005454 50%, 
          #001A1A 100%)`
      }}
    >
      <div className="relative w-full pb-4">
        <BackgroundDots />
        <FloatingParticles />

        <Nav />
        <ScrollProgress />
        <SocialLinks />

        <motion.div
          className="mt-40 relative z-10 text-center min-h-[calc(100vh-10rem)]"
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
            <h1 className="text-5xl md:text-7xl font-bold text-white/90 relative">
              Beyond appearances,
            </h1>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl text-white/80 mt-8"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            Achieving conversions.
          </motion.h2>

          <motion.p
            className="text-lg text-white/60 max-w-2xl mx-auto mt-8"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            Transforming ideas into seamless digital experiences through 
            innovative design and development solutions.
          </motion.p>

          {/* Scroll Indicator */}
          {indicatorVisible && <ScrollIndicator setIndicatorVisible={setIndicatorVisible} />}
        </motion.div>

        <ParallaxThree opacity={0.5} speed={0.5} />

        {/* Rest of the code remains the same... */}
        {/* Software Section */}
        <motion.div
          className="mt relative z-10 rounded-xl p-8 mx-auto max-w-6xl"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Glassmorphism layers */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-xl" />
          
          <motion.div className="relative text-center mt-12">
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
              <h2 className="text-3xl md:text-4xl text-white/80 font-semibold relative">
                Core Technologies
              </h2>
            </motion.div>
            <SoftwareUsed />
          </motion.div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="mt-32 relative z-10 rounded-xl p-8 mx-auto max-w-6xl"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-xl" />
          
          <motion.div className="relative text-center mt-12">
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
              <h2 className="text-3xl md:text-4xl text-white/80 font-semibold relative">
                Featured Projects
              </h2>
            </motion.div>
            <Project />
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-32 relative z-10 rounded-xl p-8 mx-auto max-w-6xl text-center"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-xl" />
          
          <div className="relative space-y-8">
            <h2 className="text-3xl md:text-4xl text-white/80 font-bold">
              Let's Connect
            </h2>
            
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about 
              technology, I'm always open to new connections and opportunities.
            </p>
            
            <motion.a
              href="mailto:saifullahemo@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-900/20 to-cyan-900/40 
                hover:from-cyan-900/50 hover:to-cyan-900/50 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="py-4 text-center border-t border-white/10 mt-32">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Abu Rayhan. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Portfolio;