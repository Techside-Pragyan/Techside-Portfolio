"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, GraduationCap, Code2 } from 'lucide-react';

const timeline = [
  {
    year: "2024 - Present",
    title: "AI/ML Learning Roadmap",
    subtitle: "Self-Paced Exploration",
    description: "Deep diving into Neural Networks, Deep Learning, NLP, and Computer Vision using TensorFlow and PyTorch. Building intelligent systems and agents.",
    icon: <Cpu size={24} className="text-primary" />
  },
  {
    year: "Upcoming",
    title: "B.Tech in Computer Science",
    subtitle: "Future Journey",
    description: "Aiming to further solidify my foundation in engineering, algorithms, and advanced software development principles.",
    icon: <GraduationCap size={24} className="text-secondary" />
  },
  {
    year: "Current",
    title: "Diploma in CS & Engineering",
    subtitle: "Academic Foundation",
    description: "Building strong fundamentals in programming, data structures, and computer architecture. Consistently maintaining high academic performance.",
    icon: <Terminal size={24} className="text-accent" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-xs">Sys.Init.About</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ME</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bio Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-8 md:p-12 rounded-[2rem] relative overflow-hidden group"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-glow rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>
            
            <h3 className="text-3xl font-bold mb-6 leading-tight">
              Bridging the gap between <span className="text-primary">algorithmic logic</span> & creative design.
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-8 font-light">
              I’m a Computer Science student at DRIEMS University with a deep love for data and algorithms. I don’t just build applications; I architect intelligent digital experiences. My core strength lies in translating complex requirements into clean, efficient, and scalable AI solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="glass px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                <Cpu size={14} className="text-primary" /> AI/ML Dev
              </div>
              <div className="glass px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                <Code2 size={14} className="text-secondary" /> Gen-AI Research
              </div>
            </div>
          </motion.div>

          {/* Timeline Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row gap-6 items-start md:items-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="glass p-4 rounded-2xl shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <span className="text-xs font-mono px-3 py-1 glass rounded-full text-foreground/80 whitespace-nowrap ml-4">
                      {item.year}
                    </span>
                  </div>
                  <h5 className="text-primary text-sm font-semibold mb-3 uppercase tracking-wider">{item.subtitle}</h5>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
