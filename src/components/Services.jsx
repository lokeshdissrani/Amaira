import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Factory, Leaf, Layers, Monitor, Briefcase, Ruler } from 'lucide-react';

const servicesList = [
  { icon: Building2, title: 'Architectural Design', desc: 'Comprehensive architectural solutions from concept to execution.' },
  { icon: Home, title: 'Interior Design', desc: 'Crafting bespoke interiors that reflect your personal or brand identity.' },
  { icon: Home, title: 'Residential Projects', desc: 'Luxury villas, contemporary homes, and low-cost housing developments.' },
  { icon: Briefcase, title: 'Commercial Projects', desc: 'Optimized workspaces, retail environments, and office buildings.' },
  { icon: Factory, title: 'Industrial Planning', desc: 'Efficient layouts for campuses, factories, and industrial facilities.' },
  { icon: Monitor, title: 'BIM & Visualization', desc: 'Advanced 3D modeling, Revit workflows, and photorealistic rendering.' },
  { icon: Leaf, title: 'Sustainable Design', desc: 'Eco-conscious architecture prioritizing energy efficiency and materials.' },
  { icon: Layers, title: 'Project Management', desc: 'End-to-end oversight ensuring quality, timeline, and budget adherence.' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-charcoal text-luxury-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sand-beige uppercase tracking-widest text-sm mb-4 block"
          >
            Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold"
          >
            Studio Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-white/10 hover:border-sand-beige/50 hover:bg-white/5 transition-all duration-300 group cursor-default"
            >
              <service.icon className="w-10 h-10 text-sand-beige mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h3 className="font-playfair text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-stone-gray font-light text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
