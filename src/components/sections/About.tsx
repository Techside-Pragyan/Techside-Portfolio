"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, GraduationCap, Code2, MapPin, Sparkles, BrainCircuit } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Mini Globe Component for the Location Bento
function WireframeGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.6, 24, 24]}>
        <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.3} />
      </Sphere>
      <Sphere args={[1.55, 16, 16]}>
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.1} />
      </Sphere>
    </Float>
  );
}

const timeline = [
  {
    year: "2024",
    title: "AI/ML Dev Roadmap",
    icon: <Cpu size={20} className="text-primary" />
  },
  {
    year: "Upcoming",
    title: "B.Tech in CS",
    icon: <GraduationCap size={20} className="text-secondary" />
  },
  {
    year: "Current",
    title: "Diploma CS & Eng.",
    icon: <Terminal size={20} className="text-accent" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden bg-[#020205]">
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
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-lg">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ME</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px] lg:auto-rows-[300px]">
          
          {/* Bento 1: Main Bio (2x2) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-primary/30 transition-colors duration-500"
          >
            {/* Glowing orb background */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Sparkles size={28} className="text-primary mb-6" />
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">
                  Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-md">algorithmic logic</span> & creative design.
                </h3>
              </div>
              <p className="text-white/60 leading-relaxed font-light text-sm lg:text-base">
                I’m a Computer Science student at DRIEMS University with a deep love for data and algorithms. I don’t just build applications; I architect intelligent digital experiences. My core strength lies in translating complex requirements into clean, efficient, and scalable AI solutions.
              </p>
            </div>
          </motion.div>

          {/* Bento 2: Location Globe (1x1) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-1 row-span-1 glass-card rounded-3xl relative overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-500 flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none z-10" />
            <div className="p-6 relative z-20">
              <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-widest mb-1">
                <MapPin size={14} className="text-primary" /> Location
              </div>
              <div className="text-xl font-bold text-white">India</div>
            </div>
            {/* 3D Canvas filling the rest */}
            <div className="absolute inset-0 top-16 z-0">
              <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                <WireframeGlobe />
              </Canvas>
            </div>
          </motion.div>

          {/* Bento 3: Core Focus (1x1) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-1 row-span-1 glass-card p-6 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-secondary/30 transition-colors duration-500 flex flex-col justify-between bg-gradient-to-br from-secondary/5 to-transparent"
          >
             <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-widest mb-4">
                <BrainCircuit size={14} className="text-secondary" /> Core Focus
             </div>
             
             <div className="flex flex-col gap-3">
               <div className="glass px-4 py-3 rounded-2xl text-sm font-semibold text-white flex items-center justify-between group-hover:bg-white/5 transition-colors">
                 <span>AI / ML Dev</span>
                 <Cpu size={16} className="text-secondary" />
               </div>
               <div className="glass px-4 py-3 rounded-2xl text-sm font-semibold text-white flex items-center justify-between group-hover:bg-white/5 transition-colors">
                 <span>Gen-AI Research</span>
                 <Code2 size={16} className="text-primary" />
               </div>
             </div>
          </motion.div>

          {/* Bento 4: Education Timeline (2x1) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 lg:col-span-2 row-span-1 glass-card p-8 rounded-3xl relative overflow-hidden border border-white/5 group hover:border-primary/20 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            
            <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-widest mb-6 relative z-10">
              <GraduationCap size={14} className="text-primary" /> Education & Journey
            </div>

            <div className="flex flex-col md:flex-row gap-4 h-full relative z-10">
              {timeline.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col relative">
                  {/* Connecting line (hidden on mobile, visible on md+) */}
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-12 right-0 h-[1px] bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                  
                  <div className="glass w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                    {item.icon}
                  </div>
                  
                  <span className="text-xs font-mono text-white/50 mb-1">{item.year}</span>
                  <h4 className="text-sm font-bold text-white pr-4">{item.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
