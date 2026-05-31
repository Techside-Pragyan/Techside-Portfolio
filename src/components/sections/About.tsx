"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, GraduationCap, Code2, MapPin, Sparkles, BrainCircuit, ArrowRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import Tilt from 'react-parallax-tilt';
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
      <Sphere ref={meshRef} args={[1.6, 32, 32]}>
        <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.3} />
      </Sphere>
      <Sphere args={[1.55, 16, 16]}>
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.1} />
      </Sphere>
      <Sphere args={[1.2, 16, 16]}>
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
      </Sphere>
    </Float>
  );
}

// Spotlight Card for premium mouse tracking hover effect
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
      className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-3xl shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
}

const timeline = [
  { year: "2024", title: "AI/ML Dev Roadmap", icon: <Cpu size={24} /> },
  { year: "Upcoming", title: "B.Tech in CS", icon: <GraduationCap size={24} /> },
  { year: "Current", title: "Diploma CS & Eng.", icon: <Terminal size={24} /> }
];

const profileImages = [
  '/images/profile-1.jpg',
  '/images/profile-2.jpg',
  '/images/profile-3.jpg',
  '/images/profile-4.jpg',
  '/images/profile-5.jpg',
];

// High-End Vertical Portrait Gallery
function PortraitGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profileImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-[2.5rem] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={profileImages[currentIndex]}
          initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          alt="Pragyan Paramita Moharana"
        />
      </AnimatePresence>

      {/* Cyber/Tech overlay gradients for framing */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent opacity-80 pointer-events-none"></div>
      
      {/* Interactive Border Glow */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-primary/50 rounded-[2.5rem] transition-colors duration-700 pointer-events-none shadow-[inset_0_0_40px_rgba(59,130,246,0)] group-hover:shadow-[inset_0_0_40px_rgba(59,130,246,0.3)]"></div>

      {/* Floating Status Badge */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-30 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 pointer-events-none"
      >
        <div>
          <h4 className="text-white font-bold text-lg leading-none mb-1">Pragyan</h4>
          <span className="text-white/60 font-mono text-xs uppercase tracking-widest">AI / ML Engineer</span>
        </div>
        <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center bg-primary/10">
          <ArrowRight size={16} className="text-primary" />
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden bg-[#020205]">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Split Layout: Content (Left) + Portrait (Right) */}
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-stretch mb-16">
          
          {/* Left Column: Text & Bento */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-primary"></div>
                <motion.span 
                  className="text-primary font-mono tracking-[0.3em] uppercase text-xs drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                >
                  Sys.Init.Profile
                </motion.span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl">
                ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">ME</span>
              </h2>
            </motion.div>

            {/* Bio Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-white tracking-tight">
                Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">algorithmic logic</span> & creative design.
              </h3>
              <p className="text-white/60 leading-relaxed font-light text-base md:text-lg mb-6">
                I’m a Computer Science student at DRIEMS University with a deep love for data and algorithms. I don’t just build applications; I architect intelligent digital experiences. My core strength lies in translating complex requirements into clean, efficient, and scalable AI solutions.
              </p>
            </motion.div>

            {/* Mini Bento for Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Location */}
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <SpotlightCard className="h-48 p-6 relative">
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-widest mb-2">
                      <MapPin size={16} className="text-primary" /> Location
                    </div>
                    <div className="text-xl font-bold text-white tracking-tight">India</div>
                  </div>
                  <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 z-0">
                    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[10, 10, 5]} intensity={1} color="#60a5fa" />
                      <WireframeGlobe />
                    </Canvas>
                  </div>
                </SpotlightCard>
              </Tilt>

              {/* Core Focus */}
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <SpotlightCard className="h-48 p-6 flex flex-col justify-between bg-gradient-to-br from-secondary/5 to-transparent">
                  <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-widest">
                      <BrainCircuit size={16} className="text-secondary" /> Core Focus
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="glass px-4 py-3 rounded-xl text-xs font-semibold text-white flex items-center justify-between border border-white/5">
                      <span>AI / ML Dev</span>
                      <Cpu size={14} className="text-secondary" />
                    </div>
                    <div className="glass px-4 py-3 rounded-xl text-xs font-semibold text-white flex items-center justify-between border border-white/5">
                      <span>Gen-AI Research</span>
                      <Code2 size={14} className="text-primary" />
                    </div>
                  </div>
                </SpotlightCard>
              </Tilt>
            </div>
          </div>

          {/* Right Column: Stunning Vertical Portrait Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="w-full lg:w-2/5 flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <PortraitGallery />
          </motion.div>

        </div>

        {/* Education Timeline (Full Width Bottom) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SpotlightCard className="p-8 md:p-10 w-full">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            
            <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-widest mb-8 relative z-10">
              <GraduationCap size={16} className="text-primary" /> Education & Journey
            </div>

            <div className="flex flex-col md:flex-row gap-6 relative z-10 w-full justify-between">
              {timeline.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col relative group/timeline cursor-default">
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-16 right-0 h-[2px] bg-gradient-to-r from-primary/30 to-transparent"></div>
                  )}
                  <div className="glass w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10 border border-white/10 group-hover/timeline:border-primary/50 group-hover/timeline:-translate-y-2 group-hover/timeline:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                    <span className="text-primary group-hover/timeline:text-white transition-colors">{item.icon}</span>
                  </div>
                  <span className="text-[10px] md:text-xs font-mono text-white/50 mb-2 tracking-widest uppercase">{item.year}</span>
                  <h4 className="text-sm md:text-base font-bold text-white/90 group-hover/timeline:text-white transition-colors">{item.title}</h4>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
