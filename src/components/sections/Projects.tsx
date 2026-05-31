"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Tourix",
    type: "Full-Stack Tourism Platform",
    description: "A comprehensive booking and tourism management platform with robust backend architecture and seamless user experience.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Techside-Pragyan/Tourix",
    live: "#"
  },
  {
    title: "Aura Cosmetics",
    type: "E-Commerce Application",
    description: "A premium, high-performance e-commerce platform for cosmetics featuring a modern tech stack and optimized conversion funnels.",
    image: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80&w=1200",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Techside-Pragyan/aura-cosmetics",
    live: "#"
  },
  {
    title: "Flower Classification",
    type: "AI / Deep Learning Model",
    description: "An advanced machine learning model trained to accurately classify and identify various species of flowers using image recognition.",
    image: "https://images.unsplash.com/photo-1490750967868-88cb44cb2722?auto=format&fit=crop&q=80&w=1200",
    tags: ["Python", "Machine Learning", "Neural Networks"],
    github: "https://github.com/Techside-Pragyan/Flower-Classification",
    live: "#"
  },
  {
    title: "Skycast",
    type: "Weather Forecasting API",
    description: "A real-time weather forecasting application that aggregates complex meteorological data into an intuitive interface.",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410cbda?auto=format&fit=crop&q=80&w=1200",
    tags: ["JavaScript", "REST APIs", "Dynamic UI"],
    github: "https://github.com/Techside-Pragyan/skycast",
    live: "#"
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="relative w-full bg-[#010103] flex flex-col lg:flex-row overflow-hidden border-t border-white/5">
      
      {/* 
        LEFT: Sticky Image Reveal 
        A massive, edge-to-edge structural image that changes based on the hovered project.
      */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky top-0 overflow-hidden relative z-0 border-b lg:border-b-0 lg:border-r border-white/10 group cursor-crosshair">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={projects[activeIndex].image}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
            alt={projects[activeIndex].title}
          />
        </AnimatePresence>

        {/* Cyber overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#010103] via-transparent to-[#010103] pointer-events-none opacity-80"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none mix-blend-overlay"></div>

        {/* View Project Floating CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-12 left-12 z-20 pointer-events-none flex flex-col"
        >
          <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Featured Architecture</span>
          <h3 className="text-4xl md:text-5xl font-black text-white drop-shadow-2xl tracking-tighter">
            {projects[activeIndex].title}
          </h3>
        </motion.div>
      </div>

      {/* 
        RIGHT: Massive Interactive List 
        Typography-heavy, raw interactive project list.
      */}
      <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center px-8 py-24 lg:p-24 xl:p-32">
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-xs">Case Studies</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            SELECTED <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">WORKS</span>
          </h2>
        </motion.div>

        <div className="flex flex-col w-full border-t border-white/10">
          {projects.map((project, idx) => (
            <div 
              key={project.title}
              onMouseEnter={() => setActiveIndex(idx)}
              className="group relative border-b border-white/10 py-12 cursor-pointer transition-all duration-500 hover:pl-8"
            >
              {/* Hover Indicator Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 origin-center group-hover:scale-y-100 transition-transform duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                <h3 className="text-3xl md:text-5xl font-black text-white/50 group-hover:text-white tracking-tighter transition-colors duration-500">
                  {project.title}
                </h3>
                <span className="text-primary font-mono text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
                  {project.type}
                </span>
              </div>

              <p className="text-white/40 group-hover:text-white/70 font-light max-w-xl leading-relaxed mb-8 transition-colors duration-500">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-6">
                
                {/* Tags */}
                <div className="flex gap-3 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-full border border-white/10 group-hover:border-primary/30 group-hover:text-primary text-white/40 transition-all duration-500 bg-white/5 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <FaGithub size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">Source</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">Live</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
