'use client';
import { motion } from 'framer-motion';

export default function Clouds() {
  return (
    <>
      <motion.img
        src="/cloud1.png"
        className="absolute top-0 left-0 w-full opacity-50 z-10"
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 80, repeat: Infinity }}
      />
      <motion.img
        src="/cloud2.png"
        className="absolute top-20 left-0 w-full opacity-40 z-10"
        animate={{ x: [100, -100, 100] }}
        transition={{ duration: 100, repeat: Infinity }}
      />
    </>
  );
}
