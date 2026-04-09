import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchProjects, fetchTestimonials, submitContact } from '../services/api';
import ProjectCard from '../components/ProjectCard';

const galleryImages = [
  "Kanza.png",
  "11.png",
  // "1ST DIPLOMATIC DEBATE WINNER@4x.png",
  // "1ST OPEN MIC SESSION WINNER.png",
  "BRICS membership 1@4x.png",
  "BRICS membership 2@4x.png",
  "calendar 1@4x.png",
  "Calendar 5@4x.png",
  "coming soon@4x.png",
  "CONFERENCE WEBINAR.png",
  "Dolphins.png",
  "IR Reader's Club Inauguration Session@4x.png",
  "IR Reader's Club LOGO@4x.png",
  "IRSA TEAM LOGO@4x.png",
  // "Kanza.png",
  "KANZA@4x.png",
  "Penguins.png",
  "RS logo@4x.png",
  "slam poetry seesion 2 (a)@4x.png",
  "SP Ad 3@4x.png",
  "SP standee 3@4x.png",
  "Sp Standee 4@4x.png",
  "SP Standee1@4x.png",
  "Sports gala poster long 2@4x.png",
  "SPORTS INV CARD 2@4x.png",
  "SRJE logo (1).jpg.jpeg",
  "STANDEE (1.5x4).png",
  "TED TALK 5@4x.png",
  "TED TALK STANDEE 3_2@4x.png",
  "TEDx Organizer Cards.png"
];

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data: projData } = await fetchProjects();
        setProjects(projData);
        const { data: testData } = await fetchTestimonials();
        setTestimonials(testData);
      } catch (error) {
        console.error("Failed to load generic data", error);
      }
    };
    loadData();
  }, []);

  const handleOnChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContact(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 w-full">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="md:w-1/2 text-center md:text-left z-10"
          >
            <h2 className="text-secondary font-semibold tracking-wide text-lg mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Kanza Fayyaz <span className="text-primary">Malik</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              A Creative Graphic Designer with 3+ years of experience helping organizations elevate their brand identity through impactful visual campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#portfolio" className="btn-primary">View My Work</a>
              <a href="/resume.pdf" download className="btn-secondary">Download Resume</a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.5 }}
              className="relative w-72 h-72 md:w-96 md:h-96 cursor-pointer group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse opacity-50 blur-xl group-hover:opacity-80 group-hover:blur-2xl transition-all duration-300"></div>
              <img src="/profile.png" alt="Kanza Fayyaz Malik" className="relative z-10 w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl transition-all duration-300 group-hover:border-primary" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
            <p className="mb-6">
              I am a passionate Graphic Designer specializing in visual communication. I've spent the last few years working with student organizations and associations, crafting compelling visual narratives.
            </p>
            <p>
              My goal is to translate concepts into beautiful, intuitive designs that not only look great but deeply engage audiences and leave a lasting brand footprint. 
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Work</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-900 border-t border-gray-800">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Design Showcase</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">A visual collection of graphic design work, logos, and promotional materials.</p>
          </motion.div>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 10) * 0.1 }}
                whileHover={{ scale: 1.03, y: -5, boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.4), 0 10px 10px -5px rgba(99, 102, 241, 0.2)' }}
                className="break-inside-avoid mb-6 overflow-hidden rounded-xl bg-slate-800 shadow-md border border-slate-700 w-full inline-block group cursor-pointer"
              >
                <div className="relative overflow-hidden w-full h-full">
                  <img
                    src={`/gallery/${src}`}
                    alt={`Showcase ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto block object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Services Section */}
      <section id="services" className="py-20 border-t border-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Skills & Expertise</h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
               {['Brand Identity', 'Social Media Design', 'Event Promos (Posters/Standees)', 'Typography', 'UI UX Prototyping', 'Visual Storytelling', 'Adobe Creative Suite', 'Figma'].map(skill => (
                 <motion.div 
                   key={skill} 
                   whileHover={{ y: -8, scale: 1.05, boxShadow: '0px 10px 20px rgba(99, 102, 241, 0.2)' }}
                   transition={{ type: "spring", stiffness: 300,damping :20 }}
                   className="p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-primary transition-colors cursor-pointer"
                 >
                    <h4 className="text-lg font-medium text-white">{skill}</h4>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Client Feedback</h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               {testimonials.map(test => (
                 <div key={test._id} className="bg-slate-800 p-8 rounded-xl relative">
                    <span className="text-5xl text-primary absolute -top-4 -left-2 opacity-50">"</span>
                    <p className="text-gray-300 italic mb-6 relative z-10">{test.feedback}</p>
                    <h5 className="font-bold text-white">- {test.name}</h5>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-400">Have a project in mind or want to collaborate? Let's talk!</p>
            <p className="mt-2 text-gray-400">Or email me directly at: <a href="mailto:example@gmail.com" className="text-primary font-medium hover:underline">example@gmail.com</a></p>
          </motion.div>
          <form onSubmit={handleContactSubmit} className="space-y-6 bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700">
            {submitStatus === 'success' && <div className="p-4 bg-green-500/20 text-green-400 rounded">Message sent successfully!</div>}
            {submitStatus === 'error' && <div className="p-4 bg-red-500/20 text-red-500 rounded">Failed to send message. Please try again.</div>}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input required name="name" value={formData.name} onChange={handleOnChange} type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input required name="email" value={formData.email} onChange={handleOnChange} type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea required name="message" value={formData.message} onChange={handleOnChange} rows="5" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full btn-primary">Send Message</button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;
