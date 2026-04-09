import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContact } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleOnChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContact(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary)_0%,_transparent_50%)] opacity-5 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg font-light">Have a project in mind or want to collaborate? Let's talk!</p>
          <p className="mt-2 text-gray-400">Or email me directly at: <a href="mailto:example@gmail.com" className="text-primary font-medium hover:underline">example@gmail.com</a></p>
        </motion.div>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={handleContactSubmit} 
          className="space-y-6 glass-panel p-8 md:p-12 rounded-3xl"
        >
          {submitStatus === 'success' && <div className="p-4 bg-secondary/20 border border-secondary/50 text-secondary rounded-xl text-center">Message sent successfully!</div>}
          {submitStatus === 'error' && <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-500 rounded-xl text-center">Failed to send message. Please try again.</div>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input required name="name" value={formData.name} onChange={handleOnChange} type="text" className="w-full bg-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input required name="email" value={formData.email} onChange={handleOnChange} type="email" className="w-full bg-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
            <textarea required name="message" value={formData.message} onChange={handleOnChange} rows="5" className="w-full bg-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
          </div>
          <button type="submit" className="w-full btn-primary text-lg">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};
export default Contact;
