import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-luxury-white text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-stone-gray uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">Start Your Project</h2>
            <p className="text-charcoal/70 font-light mb-12 max-w-md">
              We look forward to discussing your next architectural or interior design project. Reach out to the studio to schedule a consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-sand-beige mt-1" size={24} />
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-sm mb-1">Studio Location</h4>
                  <p className="text-charcoal/70 font-light text-sm">123 Architecture Blvd, Design District<br />Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-sand-beige mt-1" size={24} />
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-sm mb-1">Phone</h4>
                  <p className="text-charcoal/70 font-light text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-sand-beige mt-1" size={24} />
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-sm mb-1">Email</h4>
                  <p className="text-charcoal/70 font-light text-sm">hello@amaira-studio.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Linkedin className="text-sand-beige mt-1" size={24} />
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-sm mb-1">LinkedIn</h4>
                  <a href="#" className="text-charcoal/70 font-light text-sm hover:text-sand-beige transition-colors">Devyani Bhojwani</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 border border-sand-beige/20 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-gray mb-2">First Name</label>
                  <input type="text" className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-sand-beige transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-gray mb-2">Last Name</label>
                  <input type="text" className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-sand-beige transition-colors bg-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-gray mb-2">Email Address</label>
                <input type="email" className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-sand-beige transition-colors bg-transparent" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-gray mb-2">Project Type</label>
                <select className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-sand-beige transition-colors bg-transparent text-charcoal/70">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Interior Design</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-gray mb-2">Message</label>
                <textarea rows="4" className="w-full border-b border-charcoal/20 py-2 focus:outline-none focus:border-sand-beige transition-colors bg-transparent resize-none"></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-charcoal text-white uppercase tracking-widest text-sm hover:bg-sand-beige transition-colors duration-300">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
