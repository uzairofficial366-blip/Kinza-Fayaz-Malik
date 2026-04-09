import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="glass-panel rounded-2xl overflow-hidden group cursor-pointer"
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={`/${project.image}`} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
           <span className="text-secondary text-xs uppercase tracking-widest font-bold bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">{project.category}</span>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{project.title}</h3>
        <p className="text-gray-400 text-base line-clamp-3 font-light leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
