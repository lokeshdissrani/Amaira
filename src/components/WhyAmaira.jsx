import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  { num: '01', title: '7+ Years Experience', desc: 'A proven track record of successful projects across diverse sectors.' },
  { num: '02', title: 'Sustainable Approach', desc: 'Integrating eco-friendly practices and energy-efficient designs into every concept.' },
  { num: '03', title: 'Luxury Modern Aesthetics', desc: 'Signature contemporary style that balances minimalism with rich materiality.' },
  { num: '04', title: 'End-to-End Execution', desc: 'Seamless management from initial sketches to final site handover.' },
  { num: '05', title: 'Client-Centric Collaboration', desc: 'Deep involvement with clients to ensure their vision is flawlessly realized.' }
];

const WhyAmaira = () => {
  return (
    <section className="py-24 bg-luxury-white text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <span className="text-stone-gray uppercase tracking-widest text-sm mb-4 block">The AMAIRA Edge</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-10 border border-sand-beige/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-playfair text-4xl text-sand-beige font-bold opacity-50 mb-6 block">
                {reason.num}
              </span>
              <h3 className="font-playfair text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-charcoal/70 font-light text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAmaira;
