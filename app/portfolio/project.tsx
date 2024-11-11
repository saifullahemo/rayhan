import React from "react";
import projectData from "./softCard.json";
import { motion } from "framer-motion";
import Three from "../components/three/threeDObject"; // Import your 3D model

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    projectName: string;
    role: string;
    projectType: string;
    imageUrl: string;
  };
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverse }) => {
  // Set positions based on the project id to create a different layout for each card
  const threeStyles = [
    { top: "-21%", left: "50%" },
    { top: "-20%", right: "50%" },
    { bottom: "-15%", left: "70%" },
    { top: "0%", right: "41%" },
  ];
  const threePosition = threeStyles[project.id % threeStyles.length];

  return (
    <motion.div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center text-white mx-auto text-left p-6 md:p-10 w-full md:w-[80vw] lg:w-[60vw] relative overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover="hover"
    >
      {/* 3D Model with unique positioning */}
      <motion.div
        className="absolute opacity-50"
        style={threePosition} // Apply position style based on project id
        initial={{ opacity: 0.2, scale: 0.2 }}
        animate={{ opacity: 0.5, scale: .5 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        variants={{
          hover: { scale: 1, rotate: 15 },
        }}
      >
        <Three opacity={1} />
      </motion.div>

      {/* Left Section with Text */}
      <motion.div
        className="flex-1 mb-16 md:mb-0 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-xl md:text-2xl text-white/90 font-semibold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >{`Project ${project.id}`}</motion.h2>
        <motion.p
          className="text-sm text-white/70 font-normal mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="font-medium text-white/90 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {project.projectName}
          </motion.p>
          <motion.p
            className="text-sm text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >{`My role: ${project.role}`}</motion.p>
          <motion.p
            className="text-sm text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >{`Project Type: ${project.projectType}`}</motion.p>
        </motion.div>
      </motion.div>

      {/* Right Section with Image */}
      <motion.div
        className="flex-1 md:flex-shrink-0 md:ml-6 md:mr-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <img
          src={project.imageUrl}
          alt={`${project.projectName} screenshot`}
          className="rounded-lg w-full object-cover shadow-md"
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectList: React.FC = () => {
  return (
    <div className="md:space-y-56 space-y-24 relative">
      {projectData.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default ProjectList;
