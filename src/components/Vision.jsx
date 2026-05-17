import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section className="py-32 bg-sand-beige text-charcoal relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl leading-tight font-light italic">
            "To design spaces that inspire people, elevate everyday experiences, and create timeless architectural value through sustainability, innovation, and refined design."
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
