'use client';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-white text-sm tracking-wide"
      >
        SCROLL DOWN TO DISCOVER
      </motion.div>
    </div>
  );
}
