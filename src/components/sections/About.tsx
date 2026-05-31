"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, GraduationCap, Code2, MapPin, Sparkles, BrainCircuit } from 'lucide-react';
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
      {/* Inner glowing core */}
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
      {/* Spotlight Follower */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
}

const timeline = [
  {
    year: "2024",
    title: "AI/ML Dev Roadmap",
    icon: <Cpu size={24} className="text-primary group-hover:text-white transition-colors" />
  },
  {
    year: "Upcoming",
    title: "B.Tech in CS",
    icon: <GraduationCap size={24} className="text-secondary group-hover:text-white transition-colors" />
  },
  {
    year: "Current",
    title: "Diploma CS & Eng.",
    icon: <Terminal size={24} className="text-accent group-hover:text-white transition-colors" />
  }
];

const profileImages = [
  '/images/profile-1.jpg',
  '/images/profile-2.jpg',
  '/images/profile-3.jpg',
  '/images/profile-4.jpg',
  '/images/profile-5.jpg',
];

function ProfileCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profileImages.length);
    }, 3500); // Crossfade every 3.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <SpotlightCard className="h-full p-0 relative group">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={profileImages[currentIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-top grayscale mix-blend-screen"
          alt="Pragyan Paramita Moharana"
          onError={(e) => {
            // Fallback if user hasn't added images yet
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000';
          }}
        />
      </AnimatePresence>

      {/* Cyber/Tech overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/20 to-transparent"></div>
      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
      
      {/* Decorative Scanline Overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.1)_3px,rgba(0,0,0,0.1)_3px)] pointer-events-none"></div>

      {/* Text overlay */}
      <div className="absolute bottom-8 left-8 flex items-center gap-3 z-30">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
        <span className="text-white/80 font-mono text-xs uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
          Sys.Visual_Profile
        </span>
      </div>
    </SpotlightCard>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden bg-[#020205]">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono tracking-[0.3em] uppercase text-xs"
            >
              Sys.Init.About
            </motion.span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">ME</span>
          </h2>
        </motion.div>

        {/* Hyper Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px] lg:auto-rows-[320px]">
          
          {/* Bento 1: Main Bio (2x2) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 h-full"
          >
            <SpotlightCard className="h-full p-8 md:p-12">
              <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 transition-colors shadow-xl">
                    <Sparkles size={32} className="text-primary" />
                  </div>
                  <h3 className="text-3xl lg:text-[2.5rem] font-bold mb-6 leading-tight text-white tracking-tight">
                    Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-lg">algorithmic logic</span> & creative design.
                  </h3>
                </div>
                <p className="text-white/60 leading-relaxed font-light text-base lg:text-lg">
                  I’m a Computer Science student at DRIEMS University with a deep love for data and algorithms. I don’t just build applications; I architect intelligent digital experiences. My core strength lies in translating complex requirements into clean, efficient, and scalable AI solutions.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento 2: Location Globe (1x1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, type: 'spring', bounce: 0.4 }}
            className="md:col-span-1 lg:col-span-1 row-span-1 h-full"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full">
              <SpotlightCard className="h-full">
                <div className="p-8 relative z-20">
                  <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-widest mb-2">
                    <MapPin size={16} className="text-primary" /> Location
                  </div>
                  <div className="text-2xl font-bold text-white tracking-tight">India</div>
                </div>
                {/* 3D Canvas filling the rest */}
                <div className="absolute inset-0 top-20 z-0">
                  <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} color="#60a5fa" />
                    <WireframeGlobe />
                  </Canvas>
                </div>
              </SpotlightCard>
            </Tilt>
          </motion.div>

          {/* Bento 3: Core Focus (1x1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', bounce: 0.4 }}
            className="md:col-span-1 lg:col-span-1 row-span-1 h-full"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full">
              <SpotlightCard className="h-full p-8 flex flex-col justify-between bg-gradient-to-br from-secondary/10 to-transparent">
                <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-widest mb-6">
                    <BrainCircuit size={16} className="text-secondary" /> Core Focus
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="glass px-5 py-4 rounded-2xl text-sm font-semibold text-white flex items-center justify-between group-hover:bg-white/10 transition-colors border border-white/5 hover:border-secondary/50 shadow-lg">
                    <span>AI / ML Dev</span>
                    <Cpu size={18} className="text-secondary" />
                  </div>
                  <div className="glass px-5 py-4 rounded-2xl text-sm font-semibold text-white flex items-center justify-between group-hover:bg-white/10 transition-colors border border-white/5 hover:border-primary/50 shadow-lg">
                    <span>Gen-AI Research</span>
                    <Code2 size={18} className="text-primary" />
                  </div>
                </div>
              </SpotlightCard>
            </Tilt>
          </motion.div>

          {/* Bento 4: Education Timeline (2x1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring', bounce: 0.4 }}
            className="md:col-span-3 lg:col-span-2 row-span-1 h-full"
          >
            <SpotlightCard className="h-full p-8 md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent opacity-50" />
              
              <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-widest mb-8 relative z-10">
                <GraduationCap size={16} className="text-primary" /> Education & Journey
              </div>

              <div className="flex flex-col md:flex-row gap-6 h-full relative z-10 w-full justify-between">
                {timeline.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col relative group/timeline cursor-default">
                    {/* Glowing Connection Line */}
                    {index < timeline.length - 1 && (
                      <div className="hidden md:block absolute top-7 left-16 right-0 h-[2px] bg-gradient-to-r from-primary/30 to-transparent"></div>
                    )}
                    
                    <div className="glass w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10 border border-white/10 group-hover/timeline:border-white/30 group-hover/timeline:-translate-y-2 group-hover/timeline:shadow-[0_10px_30px_rgba(59,130,246,0.3)] group-hover/timeline:bg-white/10 transition-all duration-300">
                      {item.icon}
                    </div>
                    
                    <span className="text-[10px] md:text-xs font-mono text-white/50 mb-2 tracking-widest uppercase">{item.year}</span>
                    <h4 className="text-sm md:text-base font-bold text-white/90 group-hover/timeline:text-white transition-colors">{item.title}</h4>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Bento 5: Visual Profile Carousel (2x1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, type: 'spring', bounce: 0.4 }}
            className="md:col-span-3 lg:col-span-2 row-span-1 h-full"
          >
            <ProfileCarousel />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
