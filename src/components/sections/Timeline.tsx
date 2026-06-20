"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Code, Database, Cpu } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "AI/ML Engineer Intern",
    company: "TechNova Solutions",
    period: "Jan 2024 - Present",
    description: "Developing scalable machine learning models for predictive analytics. Integrated LLM-based agents into existing enterprise workflows to automate data extraction tasks.",
    icon: <Cpu size={24} />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Freelance",
    period: "Jun 2023 - Dec 2023",
    description: "Built and deployed multiple premium Next.js applications with complex state management, 3D integrations (Three.js), and beautiful framer-motion animations.",
    icon: <Code size={24} />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Data Science Research Assistant",
    company: "DRIEMS University",
    period: "Jan 2023 - May 2023",
    description: "Conducted research on computer vision models for automated defect detection. Achieved a 15% increase in model accuracy by optimizing the training pipeline.",
    icon: <Database size={24} />,
    color: "from-emerald-400 to-teal-500"
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="py-32 px-6 relative z-10 bg-background">
      <div className="container mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-xs">Career Path</span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-foreground outline-text">
            WORK <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" style={{ WebkitTextStroke: '0px' }}>EXPERIENCE</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-secondary to-primary rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-24">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border-2 border-primary flex items-center justify-center z-10 bg-black shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <span className="text-white">{exp.icon}</span>
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="w-full md:w-[45%] pl-16 md:pl-0"
                >
                  <div className={`glass-card p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-colors duration-500 relative overflow-hidden group`}>
                    <div className={`absolute top-0 ${idx % 2 === 0 ? 'left-0' : 'right-0'} w-1 h-full bg-gradient-to-b ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70 mb-4 tracking-wider">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{exp.title}</h3>
                    <h4 className="text-primary font-mono text-sm uppercase tracking-widest mb-4">{exp.company}</h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
                
                {/* Empty Space for alignment */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
