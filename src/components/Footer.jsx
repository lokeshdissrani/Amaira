import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <h2 className="font-playfair text-3xl font-bold tracking-widest mb-4">AMAIRA</h2>
            <p className="text-stone-gray uppercase tracking-widest text-xs mb-6">Founded by Devyani Bhojwani</p>
            <p className="text-white/60 font-light text-sm max-w-sm">
              A contemporary architecture and interior design studio dedicated to creating thoughtful, sustainable, and beautifully crafted spaces.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/60 hover:text-sand-beige transition-colors text-sm font-light">About</a></li>
              <li><a href="#founder" className="text-white/60 hover:text-sand-beige transition-colors text-sm font-light">Founder</a></li>
              <li><a href="#portfolio" className="text-white/60 hover:text-sand-beige transition-colors text-sm font-light">Projects</a></li>
              <li><a href="#services" className="text-white/60 hover:text-sand-beige transition-colors text-sm font-light">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm font-semibold mb-6">Social</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-sand-beige transition-colors text-sm font-light">Instagram</a></li>
              <li><a href="#" className="text-white/60 hover:text-sand-beige transition-colors text-sm font-light">LinkedIn</a></li>
              <li><a href="#" className="text-white/60 hover:text-sand-beige transition-colors text-sm font-light">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AMAIRA Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-light">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
