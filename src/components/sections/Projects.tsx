"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: "Tourix",
    type: "Full-Stack Tourism Platform",
    description: "A comprehensive booking and tourism management platform with robust backend architecture and seamless user experience.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Techside-Pragyan/Tourix",
    live: "#",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-3", // Full width
    height: "h-[500px]"
  },
  {
    title: "Aura Cosmetics",
    type: "E-Commerce Application",
    description: "A premium, high-performance e-commerce platform featuring a modern tech stack.",
    image: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80&w=1200",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Techside-Pragyan/aura-cosmetics",
    live: "#",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-2", // 2/3 width
    height: "h-[450px]"
  },
  {
    title: "Flower Classify",
    type: "AI / Deep Learning",
    description: "Machine learning model trained to identify various species of flowers.",
    image: "https://images.unsplash.com/photo-1490750967868-88cb44cb2722?auto=format&fit=crop&q=80&w=1200",
    tags: ["Python", "ML", "Neural Net"],
    github: "https://github.com/Techside-Pragyan/Flower-Classification",
    live: "#",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1", // 1/3 width
    height: "h-[450px]"
  },
  {
    title: "Skycast",
    type: "Weather Forecasting",
    description: "A real-time weather forecasting application that aggregates complex meteorological data into an intuitive interface.",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410cbda?auto=format&fit=crop&q=80&w=1200",
    tags: ["JavaScript", "REST APIs", "Dynamic UI"],
    github: "https://github.com/Techside-Pragyan/skycast",
    live: "#",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-3", // Full width
    height: "h-[400px]"
  }
];

// Reusable Spotlight Card for Magnetic Hover Effects
function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:-translate-y-2 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100 z-30 mix-blend-screen"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.4), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10 overflow-hidden bg-[#010103]">
      
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-mono tracking-[0.4em] uppercase text-xs font-bold drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">Featured Work</span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white drop-shadow-2xl">
            PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent relative inline-block">
              GALLERY
              <div className="absolute bottom-2 left-0 w-full h-[4px] bg-secondary opacity-50 blur-[2px]"></div>
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            A curated selection of my latest architectural designs, AI models, and full-stack ecosystems.
          </p>
        </motion.div>

        {/* Cinematic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.3 }}
              className={`${project.colSpan} ${project.height}`}
            >
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                perspective={2000}
                scale={1.01}
                transitionSpeed={2500}
                className="h-full w-full"
              >
                <SpotlightCard className="w-full h-full group/card flex flex-col justify-end">
                  
                  {/* Background Image Container */}
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover scale-105 group-hover/card:scale-110 transition-transform duration-[2000ms] ease-out opacity-60 group-hover/card:opacity-100"
                    />
                    {/* Shadow overlays to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-90"></div>
                  </div>

                  {/* Interactive Scanline overlay */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.3)_3px,rgba(0,0,0,0.3)_3px)] pointer-events-none mix-blend-overlay group-hover/card:opacity-0 transition-opacity duration-700 z-10"></div>

                  {/* Content Container */}
                  <div className="relative z-20 p-8 md:p-12 w-full lg:w-3/4 flex flex-col justify-end h-full">
                    
                    {/* Project Type Badge */}
                    <div className="mb-4 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-100">
                      <span className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/50 text-primary font-mono text-[10px] uppercase tracking-widest backdrop-blur-md">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter drop-shadow-2xl group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-primary transition-all duration-500">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/60 font-light text-sm md:text-base mb-8 max-w-xl leading-relaxed translate-y-4 group-hover/card:translate-y-0 opacity-80 group-hover/card:opacity-100 transition-all duration-500 delay-75">
                      {project.description}
                    </p>
                    
                    {/* Tags & Links Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-150">
                      
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-lg bg-white/5 border border-white/10 text-white/70 group-hover/card:border-white/30 backdrop-blur-md transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Links */}
                      <div className="flex items-center gap-4 shrink-0">
                        <a 
                          href={project.github} 
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md hover:bg-white/10 hover:border-white transition-all text-white/70 hover:text-white"
                        >
                          <FaGithub size={20} />
                        </a>
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 h-12 rounded-full border border-primary flex items-center gap-2 bg-primary/20 backdrop-blur-md hover:bg-primary transition-all text-primary hover:text-white font-bold uppercase tracking-widest text-xs"
                        >
                          Launch <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                  </div>

                </SpotlightCard>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
