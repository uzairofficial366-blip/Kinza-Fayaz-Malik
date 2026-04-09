import React, { useState } from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  "Kanza.png", "11.png", "BRICS membership 1@4x.png", "BRICS membership 2@4x.png",
  "calendar 1@4x.png", "Calendar 5@4x.png", "coming soon@4x.png", "CONFERENCE WEBINAR.png",
  "Dolphins.png", "IR Reader's Club Inauguration Session@4x.png", "IR Reader's Club LOGO@4x.png",
  "IRSA TEAM LOGO@4x.png", "KANZA@4x.png", "Penguins.png", "RS logo@4x.png",
  "slam poetry seesion 2 (a)@4x.png", "SP Ad 3@4x.png", "SP standee 3@4x.png",
  "Sp Standee 4@4x.png", "SP Standee1@4x.png", "Sports gala poster long 2@4x.png",
  "SPORTS INV CARD 2@4x.png", "SRJE logo (1).jpg.jpeg", "STANDEE (1.5x4).png",
  "TED TALK 5@4x.png", "TED TALK STANDEE 3_2@4x.png", "TEDx Organizer Cards.png"
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(16);

  const showMore = () => setVisibleCount(prev => Math.min(prev + 12, galleryImages.length));
  const showLess = () => setVisibleCount(16);

  return (
    <section id="gallery" className="py-24 bg-surface/30 border-t border-white/5">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Design Showcase</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg font-light">A visual collection of graphic design work, logos, and promotional materials.</p>
        </motion.div>
        
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryImages.slice(0, visibleCount).map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid overflow-hidden rounded-2xl bg-surface shadow-xl border border-white/10 group relative"
            >
              <img
                src={`/gallery/optimized/${src.replace(/\.[^/.]+$/, '.webp')}`}
                alt={`Showcase ${index + 1}`}
                loading="lazy"
                className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        {galleryImages.length > 16 && (
          <div className="mt-16 text-center">
            {visibleCount < galleryImages.length ? (
              <button onClick={showMore} className="btn-secondary">Show More Projects</button>
            ) : (
              <button onClick={showLess} className="btn-secondary">Show Less</button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
export default Gallery;
