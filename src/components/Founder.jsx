import React from 'react';
import { motion } from 'framer-motion';

const Founder = () => {
  return (
    <section id="founder" className="py-24 bg-white text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
              {/* Using a premium placeholder, user can replace with their image */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Devyani Bhojwani - Founder"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-black/10 m-4 pointer-events-none"></div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sand-beige/20 -z-10"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-stone-gray uppercase tracking-widest text-sm mb-4">Meet The Founder</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Devyani Bhojwani
            </h2>
            <div className="w-16 h-px bg-sand-beige mb-8"></div>
            
            <p className="text-lg leading-relaxed text-charcoal/80 mb-6 font-light">
              Devyani Bhojwani is an architect with 7+ years of experience across residential, commercial, industrial, and luxury architecture projects. 
            </p>
            <p className="text-lg leading-relaxed text-charcoal/80 mb-10 font-light">
              With expertise in AutoCAD, Revit, SketchUp, BIM workflows, and sustainable planning, she focuses on creating spaces that are both aesthetically refined and functionally intelligent.
            </p>

            {/* Stats/Badges */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-playfair text-3xl font-bold text-charcoal mb-2">7+</h4>
                <p className="text-sm text-stone-gray uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="font-playfair text-3xl font-bold text-charcoal mb-2">BIM</h4>
                <p className="text-sm text-stone-gray uppercase tracking-wider">Expert Workflows</p>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-auto">
              <p className="font-playfair text-3xl italic text-charcoal/40">D. Bhojwani</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
