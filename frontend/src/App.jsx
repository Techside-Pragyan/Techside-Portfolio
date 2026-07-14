import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import SkillUniverse from './components/SkillUniverse';
import Timeline from './components/Timeline';
import ProjectGrid from './components/ProjectGrid';
import LiveActivityWidget from './components/LiveActivityWidget';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <LiveActivityWidget />
      
      {/* 3D Background / Hero */}
      <HeroSection />
      
      <main style={{ position: 'relative', zIndex: 10, marginTop: '100vh', padding: '2rem' }}>
        <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center', background: 'linear-gradient(90deg, var(--accent-glow), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Interactive Skill Universe
          </h2>
          <div style={{ height: '600px', width: '100%', position: 'relative', borderRadius: '16px', overflow: 'hidden' }} className="glass-panel">
             <SkillUniverse />
          </div>
        </section>

        <section style={{ maxWidth: '1200px', margin: '6rem auto' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Career Path & Education</h2>
          <Timeline />
        </section>

        <section style={{ maxWidth: '1200px', margin: '6rem auto' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Featured Projects</h2>
          <ProjectGrid />
        </section>

        <section style={{ maxWidth: '600px', margin: '6rem auto 2rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Get In Touch</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
