import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = { opacity: 0, y: 40 };
  const visible = { opacity: 1, y: 0, transition: { duration: 0.4 } };

  return (
    <section id="about" className="py-24 bg-surface/50 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={fadeInUp} whileInView={visible} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl text-center md:text-left">
           <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mb-6">
             I am a passionate Graphic Designer specializing in visual communication. I've spent the last few years working with organizations and associations, crafting compelling visual narratives.
           </p>
           <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
             My goal is to translate concepts into beautiful, intuitive designs that not only look great but deeply engage audiences and leave a lasting brand footprint. 
           </p>
        </div>
      </div>
    </section>
  );
};
export default About;
