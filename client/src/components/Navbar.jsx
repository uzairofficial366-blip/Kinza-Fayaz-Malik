import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItemHover = { scale: 1.1, color: '#6366f1', textShadow: '0px 0px 8px rgb(99 102 241 / 0.8)' };

  return (
    <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.8, type: "spring" }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
              Kanza<span className="text-primary">.</span>
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-gray-300">
              <motion.a whileHover={navItemHover} href="#about" className="transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium block">About</motion.a>
              <motion.a whileHover={navItemHover} href="#portfolio" className="transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium block">Portfolio</motion.a>
              <motion.a whileHover={navItemHover} href="#services" className="transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium block">Services</motion.a>
              <motion.a whileHover={navItemHover} href="#contact" className="transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium block">Contact</motion.a>
            </div>
          </div>
          <div className="hidden md:block">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/resume.pdf" download className="btn-primary py-2 px-4 text-sm inline-block">Download Resume</motion.a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={toggleMenu} className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#portfolio" onClick={toggleMenu} className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
            <a href="#services" onClick={toggleMenu} className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="/resume.pdf" download onClick={toggleMenu} className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Resume</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
