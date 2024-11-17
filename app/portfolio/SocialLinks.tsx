import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const SocialLinks = () => (
  <motion.div 
    className="fixed right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1 }}
  >
    <a 
      href="https://github.com/saifullahemo" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors group"
    >
      <Github className="w-6 h-6 group-hover:text-teal-400 transition-colors" />
    </a>
    <a 
      href="https://linkedin.com/in/saifullahemo" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors group"
    >
      <Linkedin className="w-6 h-6 group-hover:text-teal-400 transition-colors" />
    </a>
    <a 
      href="mailto:saifullahemo@gmail.com"
      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors group"
    >
      <Mail className="w-6 h-6 group-hover:text-teal-400 transition-colors" />
    </a>
  </motion.div>
);