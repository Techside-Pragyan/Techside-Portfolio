import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

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
    tags: ["React", "FastAPI", "MongoDB", "Chart.js"],
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
    tags: ["TensorFlow", "FastAPI", "React", "CNN"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-4 border border-cyan-500/20 uppercase tracking-widest">
            <FaPlay className="text-[10px]" /> Portfolios
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent works ranging from AI/ML models to full-stack web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
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
                <div className="glass-card group h-full flex flex-col border border-white/5 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] interactive bg-[#050510]/80">
                  
                  {/* Image Container with Zoom */}
                  <div className="relative h-56 overflow-hidden border-b border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050510] to-transparent z-10 opacity-60"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-purple-500/40 mix-blend-overlay z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Floating Tech Badges on Image */}
                    <div className="absolute top-4 right-4 z-30 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col relative z-20">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/10 group-hover:border-purple-500/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                      <a 
                        href={project.github} 
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/btn"
                      >
                        <FaGithub className="text-lg group-hover/btn:scale-110 transition-transform" /> Code
                      </a>
                      <a 
                        href={project.live} 
                        className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                      >
                        Live Demo <FaExternalLinkAlt className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
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
};

export default Projects;
