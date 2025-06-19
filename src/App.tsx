import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Videos from './components/Music';
import Shows from './components/Tours';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Videos />
      <Shows />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;