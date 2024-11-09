// components/MySkills.tsx

import SkillsSection from './skils';
import Cube from '../components/three/cube';
import { motion } from 'framer-motion';

// Define the skill sets with icon paths
const sqaSkills = [
  { name: 'Manual Testing', icon: '/icon/manual.svg' },
  { name: 'Automation Testing', icon: '/icon/automation.svg' },
  { name: 'Performance Testing', icon: '/icon/performance.svg' },
  { name: 'Project Management', icon: '/icon/management.svg' },
  { name: 'Bug Tracking', icon: '/icon/searching.svg' },
  { name: 'Test Planning', icon: '/icon/planning.svg' },
];

const developerSkills = [
  
  { name: 'JavaScript', icon: '/icon/javascript.svg' },
  { name: 'React JS', icon: '/icon/react.svg' },
  { name: 'Next JS', icon: '/icon/next.svg' },
  { name: 'Typescript', icon: '/icon/typescript.svg' },
  { name: 'Three JS', icon: '/icon/threejs.svg' },
  { name: 'TailwindCSS', icon: '/icon/tailwind.svg' },
  { name: 'SCSS', icon: '/icon/sass.svg' },
  { name: 'Bootstrap', icon: '/icon/bootstrap.svg' },
];

// Main component that uses SkillsSection
const MySkills: React.FC = () => {
  return (
    <motion.div
      className="space-y-16 relative flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Set a consistent max width for both sections */}
      <div className="max-w-6xl mx-auto">
        <SkillsSection title="Skills as a SQA Engineer" skills={sqaSkills} />
      </div>
      
      {/* Cube animations */}
      <div className="absolute inset-0 flex justify-center items-center space-x-24 space-y-12">
        <motion.div
          className="mb-60"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Cube rotationSpeedX={-0.01} rotationSpeedY={-0.002} scale={0.50} />
        </motion.div>
        <motion.div
          className="!mb-80"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <Cube rotationSpeedX={-0.01} rotationSpeedY={-0.002} scale={1.5} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          <Cube rotationSpeedX={-0.01} rotationSpeedY={-0.002} scale={0.80} />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto">
        <SkillsSection title="Skills as a Web Developer" skills={developerSkills} />
      </div>
    </motion.div>
  );
};

export default MySkills;
