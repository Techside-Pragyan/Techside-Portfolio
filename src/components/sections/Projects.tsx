"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Autonomous News Researcher",
    description: "An intelligent agent that autonomously searches, reads, and summarizes news using AI, providing a concise briefing on current events.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "AI/ML", "NLP"],
    github: "#",
    live: "#"
  },
  {
    title: "Multi-Document QA System",
    description: "A sophisticated AI-powered system that can read multiple documents and answer complex user queries contextually using LLMs.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Python", "LLMs", "LangChain"],
    github: "#",
    live: "#"
  },
  {
    title: "Personal Health Dashboard",
    description: "A full-stack fitness tracking application with real-time analytics and predictive health insights.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "FastAPI", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "Language Translator",
    description: "A real-time language translation web app supporting multiple languages with high accuracy using state-of-the-art models.",
    image: "https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Flask", "HuggingFace"],
    github: "#",
    live: "#"
  },
  {
    title: "Movie Recommendation System",
    description: "A hybrid recommendation engine utilizing content-based and collaborative filtering to suggest personalized movies.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "React", "Scikit-Learn"],
    github: "#",
    live: "#"
  },
  {
    title: "Plant Disease Identifier",
    description: "A deep learning model integrated into a web interface that identifies plant diseases from uploaded images with high confidence.",
    image: "https://images.unsplash.com/photo-1530836369250-ef71a3f5e48c?auto=format&fit=crop&q=80&w=800",
    tags: ["TensorFlow", "FastAPI", "React"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-glow rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-xs">Portfolios</span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-foreground">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">PROJECTS</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            A selection of my recent works ranging from AI/ML models to premium full-stack web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <div className="glass-card relative h-full flex flex-col overflow-hidden rounded-[2rem] group">
                  <div className="relative h-56 overflow-hidden border-b border-surface-border">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col relative z-20">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 font-light text-sm mb-6 flex-1 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-[10px] font-mono uppercase rounded-full glass text-primary border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-border">
                      <a 
                        href={project.github} 
                        className="flex items-center gap-2 text-xs font-bold text-foreground/70 hover:text-foreground transition-colors uppercase tracking-widest"
                      >
                        <FaGithub size={16} /> Code
                      </a>
                      <a 
                        href={project.live} 
                        className="flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest"
                      >
                        Demo <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
