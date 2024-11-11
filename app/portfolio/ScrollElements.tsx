import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400/50 to-coral-400/50 z-50"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
};

export const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: .51, duration: 0.8 }}
  >
    <span className="text-sm text-white/60">Scroll to explore</span>
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <ArrowDown className="w-5 h-5" />
    </motion.div>
  </motion.div>
);
