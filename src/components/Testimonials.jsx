import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Devyani and her team at AMAIRA completely transformed our vision into a stunning reality. The attention to detail and material selection is unparalleled.",
    client: "R. Mehta",
    project: "Luxury Residence Client"
  },
  {
    text: "Working with AMAIRA on our new industrial campus was seamless. Their integration of sustainable design with functional workflow was exactly what we needed.",
    client: "S. Patel",
    project: "Calderys Campus"
  },
  {
    text: "The contemporary aesthetic and innovative space planning provided by Devyani elevated our commercial space beyond expectations.",
    client: "A. Sharma",
    project: "GIDC Office"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-charcoal text-luxury-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
        <Quote className="w-16 h-16 text-sand-beige/20 mx-auto mb-8" />
        
        <div className="min-h-[250px] md:min-h-[200px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <p className="font-playfair text-xl md:text-3xl font-light leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="font-semibold text-sand-beige uppercase tracking-widest text-sm mb-1">
                  {testimonials[currentIndex].client}
                </h4>
                <p className="text-stone-gray text-xs uppercase tracking-wider">
                  {testimonials[currentIndex].project}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <button 
            onClick={prevTestimonial}
            className="p-3 border border-white/20 hover:border-sand-beige hover:text-sand-beige transition-colors rounded-full"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="p-3 border border-white/20 hover:border-sand-beige hover:text-sand-beige transition-colors rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
