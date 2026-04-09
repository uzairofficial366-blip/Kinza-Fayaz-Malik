import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-secondary rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 w-full gap-12">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="md:w-1/2 text-center md:text-left z-10"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
             <span className="text-secondary font-semibold tracking-wider text-sm uppercase">Creative Professional</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Kanza Fayyaz <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Malik</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
            Graphic Designer helping organizations elevate their brand identity through impactful visual campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#portfolio" className="btn-primary">View My Work</a>
            <a href="/resume.pdf" download className="btn-secondary">Download Resume</a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.1 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center w-full"
        >
          <motion.div 
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            transition={{ duration: 0.3 }}
            className="relative w-72 h-72 lg:w-[450px] lg:h-[450px] cursor-pointer group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-30 blur-2xl group-hover:opacity-70 group-hover:blur-3xl transition-all duration-700"></div>
            <img src="/profilee.jpeg" alt="Kanza Fayyaz Malik" className="relative z-10 w-full h-full object-cover rounded-full border border-white/20 shadow-2xl transition-all duration-500 group-hover:border-white/50 bg-surface/50 p-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
