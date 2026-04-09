import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItemHover = { scale: 1.05, color: '#f43f5e' }; 

  return (
    <nav className="fixed w-full z-50 glass-panel border-b-0 shadow-lg shadow-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-3xl font-extrabold text-white tracking-tighter cursor-pointer">
              Kanza<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">.</span>
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8 text-gray-300 font-medium">
              <motion.a whileHover={navItemHover} href="#about" className="transition-all duration-300 px-3 py-2 text-sm uppercase tracking-wider block hover:text-white">About</motion.a>
              <motion.a whileHover={navItemHover} href="#portfolio" className="transition-all duration-300 px-3 py-2 text-sm uppercase tracking-wider block hover:text-white">Portfolio</motion.a>
              <motion.a whileHover={navItemHover} href="#services" className="transition-all duration-300 px-3 py-2 text-sm uppercase tracking-wider block hover:text-white">Services</motion.a>
              <motion.a whileHover={navItemHover} href="#contact" className="transition-all duration-300 px-3 py-2 text-sm uppercase tracking-wider block hover:text-white">Contact</motion.a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/resume.pdf" download className="btn-secondary py-2.5 px-6 text-sm uppercase tracking-wide inline-block shadow-lg">Download Resume</motion.a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors">
              {isOpen ? <FiX className="block h-7 w-7" /> : <FiMenu className="block h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-3xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
              <a href="#about" onClick={toggleMenu} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-gray-300 block px-3 py-3 rounded-md text-lg font-medium transition-all">About</a>
              <a href="#portfolio" onClick={toggleMenu} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-gray-300 block px-3 py-3 rounded-md text-lg font-medium transition-all">Portfolio</a>
              <a href="#services" onClick={toggleMenu} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-gray-300 block px-3 py-3 rounded-md text-lg font-medium transition-all">Services</a>
              <a href="#contact" onClick={toggleMenu} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-gray-300 block px-3 py-3 rounded-md text-lg font-medium transition-all">Contact</a>
              <a href="/resume.pdf" download onClick={toggleMenu} className="text-center mt-4 w-full block btn-primary py-3 px-4 text-base tracking-wide">Download Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
