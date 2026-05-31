"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const profileImages = [
  '/images/profile-1.jpg',
  '/images/profile-2.jpg',
  '/images/profile-3.jpg',
  '/images/profile-4.jpg',
  '/images/profile-5.jpg',
];

const timeline = [
  { year: "2024", title: "AI/ML Developer", desc: "Specializing in intelligent neural systems and deep learning models." },
  { year: "Upcoming", title: "B.Tech in Computer Science", desc: "Furthering expertise in complex algorithms and data architecture." },
  { year: "Current", title: "Diploma CS & Engineering", desc: "DRIEMS University. Building foundational engineering principles." }
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profileImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden py-32">
      
      {/* 
        THE SHADOW PORTRAIT (Background Layer)
        A massive portrait that emerges softly from the pure black darkness. 
        No borders, no boxes. Pure cinematic luxury.
      */}
      <div className="absolute left-[-10vw] top-1/2 -translate-y-1/2 w-[80vw] lg:w-[60vw] h-[120vh] pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={profileImages[currentIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center grayscale"
            style={{
              maskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)'
            }}
            alt="Pragyan Paramita Moharana"
          />
        </AnimatePresence>
      </div>

      {/* 
        CONTENT LAYER
        Raw, massive typography. Zero boxes, zero borders.
      */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row justify-end items-center">
        
        {/* The Text Column */}
        <div className="w-full lg:w-1/2 xl:w-5/12 flex flex-col">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <span className="text-white/40 font-mono tracking-[0.5em] uppercase text-xs block mb-6">
              01 // The Architect
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
              Pragyan <br/>
              <span className="text-white/20">Moharana</span>
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-white/80 font-light leading-snug tracking-tight mb-16"
          >
            Architecting intelligent systems. Translating mathematical logic into seamless digital experiences.
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-16 mb-24"
          >
            <div className="flex flex-col group cursor-default">
              <span className="text-7xl font-black text-white tracking-tighter mb-2 group-hover:text-primary transition-colors duration-500">1+</span>
              <span className="text-xs font-mono text-white/30 uppercase tracking-[0.3em]">Years Experience</span>
            </div>
            <div className="flex flex-col group cursor-default">
              <span className="text-7xl font-black text-white tracking-tighter mb-2 group-hover:text-primary transition-colors duration-500">60+</span>
              <span className="text-xs font-mono text-white/30 uppercase tracking-[0.3em]">Projects Built</span>
            </div>
          </motion.div>

          {/* Minimalist Timeline */}
          <div className="flex flex-col gap-10">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                className="relative pl-8 border-l border-white/10 hover:border-primary/50 transition-colors duration-500"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-white/20"></div>
                
                <span className="text-primary font-mono text-xs uppercase tracking-widest font-bold block mb-2">{item.year}</span>
                <h4 className="text-xl font-bold text-white tracking-tight mb-2">{item.title}</h4>
                <p className="text-white/40 font-light text-sm leading-relaxed max-w-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
