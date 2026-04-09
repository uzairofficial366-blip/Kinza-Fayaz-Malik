import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter">
          Kanza<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">.</span>
        </h3>
        <p className="font-light tracking-wide text-sm mb-6">&copy; {new Date().getFullYear()} Kanza Fayyaz Malik. All rights reserved.</p>
        <p className="mt-2 text-xs uppercase tracking-widest text-primary/80 font-bold display-inline flex items-center justify-center gap-2">
          <span className="w-4 h-px bg-primary/50"></span>
          Crafted with passion for design
          <span className="w-4 h-px bg-primary/50"></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
