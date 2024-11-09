import Image from 'next/image';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string; // Path to the icon image
}

interface SkillsSectionProps {
  title?: string;
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
  return (
    <motion.div
      className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {title && (
        <div className="text-left opacity-60 mb-6">
          <h2 className="text-white/90 text-sm font-normal mb-2">{title}</h2>
          <hr className="w-12 h-[2px] bg-white mb-4" />
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Image
                src={skill.icon}
                alt={`${skill.name} Icon`}
                width={40}
                height={40}
                className="opacity-70"
              />
            </div>
            <div className="text-white/80 text-xs font-normal w-24 text-center">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;
