import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-luxury-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand-beige/10 transform skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-sand-beige uppercase tracking-[0.3em] text-sm mb-6 block font-medium">
            About The Studio
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl leading-tight text-charcoal font-light">
            <span className="font-bold">AMAIRA</span> is a contemporary architecture and interior design studio founded by Devyani Bhojwani. 
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            The studio specializes in thoughtful, sustainable, and modern spaces that balance aesthetics, innovation, and usability.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
