import React, { useState, useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import WhatIDo from './sections/WhatIDo';
import Activity from './sections/Activity';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ChatbotUI from './components/ChatbotUI';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
          <div className="relative min-h-screen bg-[#FAF6F0] text-[#2C2621] overflow-hidden font-sans">
            <CustomCursor />
            <ParticlesBackground />
            
            {/* Ambient Noise Overlay */}
            <div className="noise-bg"></div>

            <Navbar />
            <ChatbotUI />
            
            <main className="relative z-10 flex flex-col gap-24 pb-20">
              <Hero />
              <About />
              <WhatIDo />
              <Skills />
              <Activity />
              <Projects />
              <Experience />
              <Contact />
            </main>
            
            <Footer />
          </div>
        </ReactLenis>
      )}
    </>
  );
}

export default App;
