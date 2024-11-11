import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Three from '../components/three/threeDObject';

export const ParallaxThree: React.FC<ParallaxThreeProps> = ({ opacity, speed = 1 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <motion.div ref={ref} style={{ y }} className="absolute">
      <Three opacity={opacity} />
    </motion.div>
  );
};