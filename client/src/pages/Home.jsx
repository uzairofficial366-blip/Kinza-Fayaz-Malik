import React, { useEffect, useState } from 'react';
import { fetchProjects, fetchTestimonials } from '../services/api';

import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Gallery from '../components/Gallery';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

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

  return (
    <div className="w-full bg-dark">
      <Hero />
      <About />
      <Portfolio projects={projects} />
      <Gallery />
      <Skills />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </div>
  );
};

export default Home;
