import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
        <ParticlesBackground />
        <Navbar />
        
        <main className="relative z-10 flex flex-col gap-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
