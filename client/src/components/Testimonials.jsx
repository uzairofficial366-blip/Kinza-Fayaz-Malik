import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-24 bg-surface/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Client Feedback</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, i) => (
             <motion.div 
               key={test._id || i} 
               initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4 }}
               className="glass-panel p-8 md:p-10 rounded-2xl relative"
             >
                <div className="text-6xl text-primary/20 absolute -top-4 -left-2 select-none pointer-events-none">&ldquo;</div>
                <p className="text-gray-300 italic mb-6 relative z-10 text-lg leading-relaxed">{test.feedback}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                  <h5 className="font-bold text-white tracking-wide">{test.name}</h5>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
