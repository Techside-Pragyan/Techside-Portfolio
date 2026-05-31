"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiMongodb, SiPytorch, SiScikitlearn, SiDocker 
} from 'react-icons/si';

const techStack = [
  { icon: <SiReact size={40} />, name: 'React', color: '#61DAFB' },
  { icon: <SiNextdotjs size={40} />, name: 'Next.js', color: '#ffffff' },
  { icon: <SiTailwindcss size={40} />, name: 'Tailwind', color: '#06B6D4' },
  { icon: <SiNodedotjs size={40} />, name: 'Node.js', color: '#339933' },
  { icon: <SiMongodb size={40} />, name: 'MongoDB', color: '#47A248' },
  { icon: <SiPytorch size={40} />, name: 'PyTorch', color: '#EE4C2C' },
  { icon: <SiScikitlearn size={40} />, name: 'Scikit', color: '#F7931E' },
  { icon: <SiDocker size={40} />, name: 'Docker', color: '#2496ED' },
];

export default function TechStack() {
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const animationId = setInterval(() => {
      setRotationY((prev) => prev - 0.5); // auto rotate
    }, 30);
    return () => clearInterval(animationId);
  }, []);

  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden flex flex-col items-center justify-center bg-black/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
          TECH <span className="text-secondary">STACK</span>
        </h2>
        <p className="text-foreground/60 text-sm font-mono uppercase tracking-widest">
          The tools driving my logic
        </p>
      </motion.div>

      {/* 3D Carousel container */}
      <div 
        className="relative w-full max-w-[300px] h-[300px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="w-full h-full absolute preserve-3d"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: rotationY }}
          transition={{ type: "tween", ease: "linear", duration: 0 }}
        >
          {techStack.map((tech, i) => {
            const angle = (360 / techStack.length) * i;
            return (
              <div
                key={tech.name}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(250px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div 
                  className="glass-card w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-2 group hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-foreground/80 group-hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-300" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
