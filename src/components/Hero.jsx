import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-charcoal/40 z-10" /> {/* Overlay for readability */}
        {/* Placeholder for the main founder/hero image (Logo or architectural shot) */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Amaira Architecture Hero"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-luxury-white font-bold tracking-widest mb-4">
            AMAIRA
          </h1>
          <p className="text-sand-beige text-lg md:text-xl uppercase tracking-[0.2em] mb-8 font-light">
            Founded by Devyani Bhojwani
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/80 text-sm md:text-base tracking-widest uppercase mb-12">
            <span>Architecture</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sand-beige"></span>
            <span>Interiors</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sand-beige"></span>
            <span>Sustainable Design</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-luxury-white text-xl md:text-2xl font-light font-playfair mb-16 leading-relaxed text-balance"
        >
          "Designing timeless spaces that merge elegance, functionality, and human experience."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-sand-beige text-charcoal hover:bg-white transition-colors duration-300 font-medium tracking-wide"
          >
            Explore Projects
          </a>
          <a
            href="#founder"
            className="px-8 py-4 border border-sand-beige text-sand-beige hover:bg-sand-beige hover:text-charcoal transition-colors duration-300 font-medium tracking-wide"
          >
            Meet the Founder
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest mb-3">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-sand-beige/50"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
