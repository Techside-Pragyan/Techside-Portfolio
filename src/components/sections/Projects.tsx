"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Tourix Booking Platform",
    description: "A comprehensive full-stack tourism management platform featuring real-time booking, robust backend architecture, and seamless user experience.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Techside-Pragyan/Tourix",
    live: "#"
  },
  {
    title: "Aura Cosmetics E-Commerce",
    description: "A premium, high-performance e-commerce platform for cosmetics built with a modern tech stack for optimized conversion funnels.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Techside-Pragyan/aura-cosmetics",
    live: "#"
  },
  {
    title: "AI Flower Classification",
    description: "An advanced machine learning model trained to accurately classify and identify various species of flowers using image recognition.",
    tags: ["Python", "Machine Learning", "Neural Networks"],
    github: "https://github.com/Techside-Pragyan/Flower-Classification",
    live: "#"
  },
  {
    title: "Skycast Weather API",
    description: "A real-time weather forecasting application that aggregates complex meteorological data into an intuitive, dynamic interface.",
    tags: ["JavaScript", "REST APIs", "Dynamic UI"],
    github: "https://github.com/Techside-Pragyan/skycast",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10 bg-[#010103] min-h-screen flex items-center">
      
      {/* Background gradients to keep it clean */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#010103] to-[#010103] pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <FolderGit2 className="text-primary" size={24} />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-white/50 text-lg max-w-2xl font-light">
            A selection of my recent open-source works, focusing on full-stack web applications and artificial intelligence.
          </p>
        </motion.div>

        {/* Clean, Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col bg-[#0a0a0f] border border-white/10 rounded-2xl p-8 hover:bg-[#11111a] hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10"
            >
              {/* Folder Icon / Decor */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-white/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <FolderGit2 size={24} />
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-4 text-white/40">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">
                    <FaGithub size={22} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-primary hover:scale-110 transition-all duration-300">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-8 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/10">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-white/50 group-hover:text-white/80 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
