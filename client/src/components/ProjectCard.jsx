import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -12, scale: 1.02, boxShadow: '0px 15px 35px rgba(99, 102, 241, 0.3)' }}
      transition={{ duration: 0.3 }}
      className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700"
    >
      <div className="h-64 overflow-hidden relative group">
        <img 
          src={`/${project.image}`} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <span className="text-secondary text-xs uppercase tracking-wider font-semibold">{project.category}</span>
        <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
