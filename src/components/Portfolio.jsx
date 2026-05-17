import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Luxury Residence',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1613490900233-141c5560d75d?q=80&w=1967&auto=format&fit=crop',
    desc: 'Contemporary 5-bedroom villa with integrated sustainable energy systems.'
  },
  {
    title: 'GIDC Office',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    desc: 'Modern industrial workspace designed for collaboration and natural light.'
  },
  {
    title: 'Contemporary Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    desc: 'Minimalist architecture focusing on indoor-outdoor living flow.'
  },
  {
    title: 'Calderys Industrial Campus',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    desc: 'Optimized master planning for a large-scale manufacturing facility.'
  },
  {
    title: 'DAV School',
    category: 'Institutional',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
    desc: 'Educational campus designed for modern learning paradigms.'
  },
  {
    title: 'Low Cost Housing',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    desc: 'Sustainable, cost-effective community housing development.'
  },
  {
    title: 'Sports Complex',
    category: 'Recreational',
    image: 'https://images.unsplash.com/photo-1576082902340-02300078018e?q=80&w=1964&auto=format&fit=crop',
    desc: 'State-of-the-art indoor and outdoor sports facility.'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-stone-gray uppercase tracking-widest text-sm mb-4 block">Selected Works</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          <a href="#" className="hidden md:inline-block mt-6 md:mt-0 pb-1 border-b border-charcoal uppercase tracking-widest text-sm hover:text-stone-gray hover:border-stone-gray transition-colors">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.2 }}
              className={`group cursor-pointer ${index === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="overflow-hidden mb-6 bg-sand-beige/20 relative">
                <div className={`aspect-video ${index === 2 ? 'md:aspect-[21/9]' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="px-6 py-3 bg-white text-charcoal tracking-widest uppercase text-xs">View Project</span>
                </div>
              </div>
              <div>
                <span className="text-stone-gray text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="font-playfair text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-charcoal/70 font-light text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-block pb-1 border-b border-charcoal uppercase tracking-widest text-sm">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
