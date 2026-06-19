import React from 'react';
import { motion } from 'framer-motion';

const skillsList = [
  'Brand Identity', 'Social Media Design', 'Event Promos (Posters/Standees)', 
  'Typography', 'UI/UX Prototyping', 'Visual Storytelling', 'Adobe Creative Suite', 'Figma'
];

const Skills = () => {
  return (
    <section id="services" className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Skills &amp; Expertise</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
           {skillsList.map((skill, i) => (
             <motion.div 
               key={skill}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05, duration: 0.3 }}
               whileHover={{ y: -5, scale: 1.02 }}
               className="p-6 md:p-8 glass-panel rounded-2xl hover:border-primary/50 transition-all cursor-crosshair group flex items-center justify-center min-h-[120px]"
             >
                <h4 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{skill}</h4>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
