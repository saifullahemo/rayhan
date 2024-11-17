import React from "react";
import { motion } from "framer-motion";
import Three from "../components/three/threeDObject";
import projectData from "./softCard.json";

// Define Badge component props interface
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "default" }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "outline":
        return "border border-white/20 bg-transparent";
      case "secondary":
        return "bg-white/10";
      default:
        return "bg-blue-500/80";
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs ${getVariantStyles()}`}>
      {children}
    </span>
  );
};

// Define the Metric type
interface Metric {
  label: string;
  value: string;
}

// Define the Project type
interface Project {
  id: number;
  title: string;
  description: string;
  projectName: string;
  role: string[];
  projectType: string;
  imageUrl: string;
  responsibilities: string[];
  tools: string[];
  metrics?: Metric[];
  duration: string;
  status: "Completed" | "Maintenance" | "Ongoing";
  keyFeatures?: string[]; // Made optional since not all projects have it
}

// Update ProjectCardProps to use the Project interface
interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

// Type assertion for projectData
const typedProjectData = projectData as Project[];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverse }) => {
  const threeStyles = [
    { top: "0%", left: "50%" },
    { top: "0%", right: "50%" },
    { bottom: "5%", left: "0%" },
    { top: "0%", right: "41%" },
  ];
  const threePosition = threeStyles[project.id % threeStyles.length];

  return (
    <motion.div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-start text-white mx-auto text-left p-6 md:p-10 w-full relative overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover="hover"
    >
      <motion.div
        className="absolute opacity-50 -z-10"
        style={threePosition}
        initial={{ opacity: 0.2, scale: 0.4 }}
        animate={{ opacity: 0.5, scale: 0.7 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        variants={{
          hover: { scale: 1, rotate: 15 },
        }}
      >
        <Three opacity={1} />
      </motion.div>

      <motion.div className="flex-1 mb-16 md:mb-0 z-10 space-y-6">
        <div className="mb-16">
          <motion.div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl md:text-2xl text-white/90 font-semibold">
              {project.projectName}
            </h2>
            <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
              {project.status}
            </Badge>
          </motion.div>
          <p className="text-sm text-white/70 font-normal">
            {project.description}
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h4 className="text-white/90 font-medium mb-2">Roles</h4>
            <div className="flex flex-wrap gap-2">
              {project.role.map((role) => (
                <Badge key={role} variant="secondary">
                  {role}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/90 font-medium mb-2">Key Responsibilities</h4>
            <ul className="list-disc list-inside text-sm text-white space-y-1">
              {project.responsibilities.map((resp, index) => (
                <li className="text-white/70" key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/90 font-medium mb-2">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="secondary">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {project.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.metrics.map((metric, index) => (
                <div key={index} className="text-center p-3 bg-white/10 rounded-lg">
                  <p className="text-lg text-white/80 font-semibold">{metric.value}</p>
                  <p className="text-sm text-white/70">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

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
      {typedProjectData.map((project, index) => (
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