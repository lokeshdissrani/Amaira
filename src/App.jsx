import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Vision from './components/Vision';
import WhyAmaira from './components/WhyAmaira';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-charcoal bg-luxury-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <Portfolio />
        <Vision />
        <WhyAmaira />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
