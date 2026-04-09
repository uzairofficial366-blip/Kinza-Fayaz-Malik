import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Kanza Fayyaz Malik. All rights reserved.</p>
        <p className="mt-2 text-sm">Crafted with passion for design.</p>
      </div>
    </footer>
  );
};

export default Footer;
