"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, GraduationCap, Code2, MapPin, BrainCircuit, ArrowUpRight } from 'lucide-react';

const profileImages = [
  '/images/profile-1.jpg',
  '/images/profile-2.jpg',
  '/images/profile-3.jpg',
  '/images/profile-4.jpg',
  '/images/profile-5.jpg',
];

const timeline = [
  { year: "2024", title: "AI/ML Dev Roadmap", desc: "Specializing in intelligent systems and LLMs.", icon: <Cpu size={20} /> },
  { year: "Upcoming", title: "B.Tech in CS", desc: "Furthering expertise in algorithms and data structures.", icon: <GraduationCap size={20} /> },
  { year: "Current", title: "Diploma CS & Eng.", desc: "DRIEMS University, building foundational knowledge.", icon: <Terminal size={20} /> }
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profileImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative w-full bg-[#010103] flex flex-col lg:flex-row">
      
      {/* 
        LEFT COLUMN: Sticky Edge-to-Edge Image Carousel 
        This is an ultra-premium Awwwards-style layout where the imagery acts as a massive 
        architectural pillar on the left while the content scrolls on the right.
      */}
      <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-screen lg:sticky top-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={profileImages[currentIndex]}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-110 transition-all duration-1000"
            alt="Pragyan Paramita Moharana"
          />
        </AnimatePresence>
        
        {/* Subtle Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#010103] via-transparent to-[#010103]/30 opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none"></div>

        {/* Elegant Floating Badge */}
        <div className="absolute bottom-10 left-10 flex items-center gap-4 z-10">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md overflow-hidden">
            <div className="w-full h-full bg-primary/20 animate-pulse absolute inset-0"></div>
            <ArrowUpRight size={20} className="text-white relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-widest uppercase text-sm">Pragyan P. Moharana</span>
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.2em]">Visual Profile // 2026</span>
          </div>
        </div>
      </div>

      {/* 
        RIGHT COLUMN: Scrolling Content 
        Massive padding, hyper-minimalist typography, and sleek dividers.
      */}
      <div className="w-full lg:w-1/2 relative z-10 px-8 py-20 lg:p-24 xl:p-32 flex flex-col justify-center">
        
        {/* Intro */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-16 bg-primary"></div>
            <span className="text-primary font-mono tracking-[0.4em] uppercase text-xs">Sys.Init.About</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight mb-8"
          >
            Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">algorithmic logic</span> & creative design.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-lg md:text-xl font-light leading-relaxed"
          >
            I’m a Computer Science student at DRIEMS University with a deep love for data and algorithms. I don’t just build applications; I architect intelligent digital experiences. My core strength lies in translating complex requirements into clean, efficient, and scalable AI solutions.
          </motion.p>
        </div>

        {/* Massive Stats Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-16 border-t border-white/10 pt-16 mb-24">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col">
            <span className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter hover:text-primary transition-colors">1+</span>
            <span className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2">
              <Terminal size={14} className="text-primary" /> Years Exp
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col">
            <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 tracking-tighter hover:scale-105 transition-transform origin-left">60+</span>
            <span className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2">
              <Code2 size={14} className="text-secondary" /> Projects Built
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">AI / ML Dev</span>
            <span className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2">
              <BrainCircuit size={14} className="text-accent" /> Core Focus
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">India</span>
            <span className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2">
              <MapPin size={14} className="text-primary" /> Location
            </span>
          </motion.div>

        </div>

        {/* Minimalist Timeline */}
        <div className="border-t border-white/10 pt-16">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-white font-mono text-sm uppercase tracking-widest">Education & Journey</span>
          </div>

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-white/5 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                  <span className="text-white/50 group-hover:text-primary transition-colors">{item.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary font-mono text-xs uppercase tracking-widest font-bold mb-1">{item.year}</span>
                  <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/40 font-light text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
