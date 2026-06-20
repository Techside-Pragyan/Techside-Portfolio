"use client";
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Autonomous News Researcher",
    description: "An intelligent agent that autonomously searches, reads, and summarizes news using AI, providing a concise briefing on current events.",
    image: "/projects/news_agent.png",
    tags: ["Python", "AI/ML", "NLP"],
    github: "#",
    live: "#"
  },
  {
    title: "Multi-Document QA System",
    description: "A sophisticated AI-powered system that can read multiple documents and answer complex user queries contextually using LLMs.",
    image: "/projects/qa_system.png",
    tags: ["React", "Python", "LLMs", "LangChain"],
    github: "#",
    live: "#"
  },
  {
    title: "Personal Health Dashboard",
    description: "A full-stack fitness tracking application with real-time analytics and predictive health insights.",
    image: "/projects/health_dashboard.png",
    tags: ["React", "FastAPI", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "Language Translator",
    description: "A real-time language translation web app supporting multiple languages with high accuracy using state-of-the-art models.",
    image: "/projects/translator_app.png",
    tags: ["React", "Flask", "HuggingFace"],
    github: "#",
    live: "#"
  },
  {
    title: "Movie Recommendation System",
    description: "A hybrid recommendation engine utilizing content-based and collaborative filtering to suggest personalized movies.",
    image: "/projects/movie_system.png",
    tags: ["Python", "React", "Scikit-Learn"],
    github: "#",
    live: "#"
  },
  {
    title: "Plant Disease Identifier",
    description: "A deep learning model integrated into a web interface that identifies plant diseases from uploaded images with high confidence.",
    image: "/projects/plant_ai.png",
    tags: ["TensorFlow", "FastAPI", "React"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const scrollWrapper = scrollWrapperRef.current;
      const container = containerRef.current;
      
      if (!scrollWrapper || !container) return;

      const getScrollAmount = () => {
        let scrollWidth = scrollWrapper.scrollWidth;
        return -(scrollWidth - window.innerWidth);
      };

      const tween = gsap.to(scrollWrapper, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          animation: tween,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative z-10 overflow-hidden h-screen flex flex-col justify-center bg-[#050505]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl relative px-6 mb-12 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-mono tracking-[0.3em] uppercase text-xs">Portfolios</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground outline-text">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" style={{ WebkitTextStroke: '0px' }}>PROJECTS</span>
            </h2>
          </div>
          <p className="text-foreground/70 max-w-sm font-light leading-relaxed pb-3">
            Scroll to explore a selection of my recent works ranging from AI/ML models to premium full-stack web applications.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div ref={scrollWrapperRef} className="flex gap-8 px-6 pb-12 w-max" style={{ paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: 'max(24px, calc((100vw - 1280px) / 2 + 24px))' }}>
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="w-[350px] md:w-[450px] shrink-0 h-[500px]"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              className="h-full"
            >
              <div 
                className="glass-card relative h-full flex flex-col overflow-hidden rounded-[2rem] group cursor-none"
                data-cursor-text="VIEW PROJECT"
              >
                <div className="relative h-56 overflow-hidden border-b border-surface-border shrink-0">
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
                  <p className="text-foreground/70 font-light text-sm mb-6 flex-1 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-[10px] font-mono uppercase rounded-full glass text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-surface-border">
                    <a 
                      href={project.github} 
                      className="flex items-center gap-2 text-xs font-bold text-foreground/70 hover:text-foreground transition-colors uppercase tracking-widest relative z-[101]"
                    >
                      <FaGithub size={16} /> Code
                    </a>
                    <a 
                      href={project.live} 
                      className="flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest relative z-[101]"
                    >
                      Demo <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}
