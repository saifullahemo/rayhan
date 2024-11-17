// components/MySkills.tsx

import SkillsSection from './skils';
import Cube from '../components/three/cube';
import { motion } from 'framer-motion';

// Define the skill sets with icon paths
const sqaSkills = [
  { name: 'Manual Testing', icon: '/icon/manual.svg' },
  { name: 'Automation Testing', icon: '/icon/automation.svg' },
  { name: 'Test Case Design & Execution', icon: '/icon/automation.svg' },
  { name: 'Performance Testing', icon: '/icon/performance.svg' },
  { name: 'API Testing', icon: '/icon/performance.svg' },
  { name: 'Mobile Testing', icon: '/icon/performance.svg' },
  { name: 'Project Management', icon: '/icon/management.svg' },
  { name: 'Bug Tracking & Management', icon: '/icon/searching.svg' },
  { name: 'Agile and Scrum Knowledge', icon: '/icon/planning.svg' },
];

// const developerSkills = [
  
//   { name: 'JavaScript', icon: '/icon/javascript.svg' },
//   { name: 'React JS', icon: '/icon/react.svg' },
//   { name: 'Next JS', icon: '/icon/next.svg' },
//   { name: 'Typescript', icon: '/icon/typescript.svg' },
//   { name: 'Three JS', icon: '/icon/threejs.svg' },
//   { name: 'TailwindCSS', icon: '/icon/tailwind.svg' },
//   { name: 'SCSS', icon: '/icon/sass.svg' },
//   { name: 'Bootstrap', icon: '/icon/bootstrap.svg' },
// ];

const uiSkills = [
  
  { name: 'UI Design', icon: '/icon/javascript.svg' },
  { name: 'User Experience Design', icon: '/icon/javascript.svg' },
  { name: 'Web Design', icon: '/icon/react.svg' },
  { name: 'Wireframing', icon: '/icon/next.svg' },
  { name: 'Prototyping', icon: '/icon/typescript.svg' },
  { name: 'Strategy', icon: '/icon/threejs.svg' },
  { name: 'Human-Centered Design', icon: '/icon/tailwind.svg' },
  { name: 'Responsive Design', icon: '/icon/sass.svg' },
  { name: 'Visual Design', icon: '/icon/bootstrap.svg' },
  { name: 'JavaScript', icon: '/icon/javascript.svg' },
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
     
      
      {/* Cube animations */}
      <div className="absolute inset-0 flex justify-center items-center space-x-60 space-y-12">
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
          className="!mb-80 -z-10"
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
        <SkillsSection title="Skills as a SQA Engineer" skills={sqaSkills} />
      </div>
      <div className="max-w-6xl mx-auto">
        <SkillsSection title="Skills as a UI/UX Designer" skills={uiSkills} />
      </div>
    </motion.div>
  );
};

export default MySkills;
