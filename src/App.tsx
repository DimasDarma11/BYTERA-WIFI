import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Packages from './components/Packages';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import SpeedTest from './components/SpeedTest';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Packages />
      <Coverage />
      <SpeedTest />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
