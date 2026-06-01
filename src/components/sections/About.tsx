"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, AnimatePresence, useSpring } from 'framer-motion';
import { Cpu, Terminal, GraduationCap, Code2, MapPin, Sparkles, BrainCircuit, ArrowRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import Tilt from 'react-parallax-tilt';
import * as THREE from 'three';

// 3D Mini Globe Component for the Location Bento
function WireframeGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={0.75}>
        <Sphere args={[1.6, 32, 32]}>
          <meshBasicMaterial color="#fca5a5" wireframe transparent opacity={0.4} />
        </Sphere>
        <Sphere args={[1.55, 16, 16]}>
          <meshBasicMaterial color="#dc2626" wireframe transparent opacity={0.2} />
        </Sphere>
        <Sphere args={[1.2, 16, 16]}>
          <meshBasicMaterial color="#ea580c" transparent opacity={0.6} />
        </Sphere>
      </group>
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
      className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-black/40 backdrop-blur-3xl shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:-translate-y-2 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(220, 38, 38, 0.2), transparent 80%)`,
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
    <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-[2.5rem] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 cursor-crosshair">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={profileImages[currentIndex]}
          initial={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(15px)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
          alt="Pragyan Paramita Moharana"
        />
      </AnimatePresence>

      {/* Cyber/Tech overlay gradients for framing */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#010103] via-transparent to-[#010103]/40 opacity-90 group-hover:opacity-50 transition-opacity duration-1000 pointer-events-none"></div>
      
      {/* Decorative Scanlines */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.2)_3px,rgba(0,0,0,0.2)_3px)] pointer-events-none mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>

      {/* Interactive Border Glow */}
      <div className="absolute inset-0 border-[2px] border-white/0 group-hover:border-primary/50 rounded-[2.5rem] transition-colors duration-700 pointer-events-none shadow-[inset_0_0_40px_rgba(220,38,38,0)] group-hover:shadow-[inset_0_0_60px_rgba(220,38,38,0.5)] z-20"></div>

      {/* Floating Status Badge */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-30 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 pointer-events-none group-hover:border-primary/30 group-hover:bg-black/40 transition-all duration-500 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-primary animate-pulse"></div>
        <div>
          <h4 className="text-white font-black text-xl tracking-tight leading-none mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">PRAGYAN</h4>
          <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.3em]">AI / ML Engineer</span>
        </div>
        <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center bg-primary/20 group-hover:rotate-45 group-hover:bg-primary transition-all duration-500">
          <ArrowRight size={18} className="text-primary group-hover:text-white transition-colors" />
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  const bioWords = "Bridging the gap between algorithmic logic & creative design.".split(" ");

  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden bg-[#010103]">
      
      {/* Animated Hex/Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dc26261a_1px,transparent_1px),linear-gradient(to_bottom,#dc26261a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50 z-0"></div>

      {/* Glowing Orbs in Background */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Split Layout: Content (Left) + Portrait (Right) */}
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-stretch mb-16">
          
          {/* Left Column: Text & Bento */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-[2px] bg-primary"
                ></motion.div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-primary font-mono tracking-[0.4em] uppercase text-xs drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]"                >
                  Sys.Init.Profile
                </motion.span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent relative inline-block">
                  ME
                  {/* Subtle underline for the gradient text */}
                  <div className="absolute bottom-2 left-0 w-full h-[4px] bg-secondary opacity-50 blur-[2px]"></div>
                </span>
              </h2>
            </motion.div>

            {/* Bio Text with Staggered Word Reveal */}
            <div className="prose prose-invert max-w-none mb-12 relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-50"></div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-white tracking-tight flex flex-wrap gap-[0.3em]">
                {bioWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
                    className={word.includes("algorithmic") || word.includes("logic") || word.includes("creative") 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
                      : "text-white"}
                  >
                    {word}
                  </motion.span>
                ))}
              </h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-white/60 leading-relaxed font-light text-base md:text-lg mb-6"
              >
                I’m a Computer Science student at DRIEMS University with a deep love for data and algorithms. I don’t just build applications; I architect intelligent digital experiences. My core strength lies in translating complex requirements into clean, efficient, and scalable AI solutions.
              </motion.p>
            </div>

            {/* Mini Bento for Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Location */}
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000}>
                <SpotlightCard className="h-44 p-6 relative">
                  <div className="relative z-20">
                    <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-widest mb-2">
                      <MapPin size={16} className="text-primary" /> Location
                    </div>
                    <div className="text-2xl font-black text-white tracking-tight drop-shadow-lg">India</div>
                  </div>
                  <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 z-0 pointer-events-none opacity-80">
                    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[10, 10, 5]} intensity={1} color="#fca5a5" />
                      <WireframeGlobe />
                    </Canvas>
                  </div>
                </SpotlightCard>
              </Tilt>

              {/* Core Focus */}
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000}>
                <SpotlightCard className="h-44 p-6 flex flex-col justify-between bg-gradient-to-br from-secondary/10 to-transparent">
                  <div className="flex items-center gap-2 text-white/80 font-mono text-xs uppercase tracking-widest">
                      <BrainCircuit size={16} className="text-secondary" /> Core Focus
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="glass px-4 py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-between border border-white/10 hover:border-secondary/50 hover:bg-white/5 transition-all">
                      <span>AI / ML Dev</span>
                      <Cpu size={14} className="text-secondary" />
                    </div>
                    <div className="glass px-4 py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-between border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all">
                      <span>Gen-AI Research</span>
                      <Code2 size={14} className="text-primary" />
                    </div>
                  </div>
                </SpotlightCard>
              </Tilt>

              {/* Experience */}
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000}>
                <SpotlightCard className="h-44 p-6 flex flex-col justify-center items-center text-center group/stat">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover/stat:scale-110 transition-transform duration-500">1+</div>
                  <div className="relative z-10 text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Years Experience</div>
                </SpotlightCard>
              </Tilt>

              {/* Projects */}
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000}>
                <SpotlightCard className="h-44 p-6 flex flex-col justify-center items-center text-center group/stat">
                  <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2 tracking-tighter drop-shadow-[0_0_20px_rgba(220,38,38,0.4)] group-hover/stat:scale-110 transition-transform duration-500">60+</div>
                  <div className="relative z-10 text-secondary font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Projects Built</div>
                </SpotlightCard>
              </Tilt>
            </div>
          </div>

          {/* Right Column: Stunning Vertical Portrait Gallery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="w-full lg:w-2/5 flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <PortraitGallery />
          </motion.div>

        </div>

        {/* Education Timeline (Full Width Bottom) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <SpotlightCard className="p-8 md:p-12 w-full mt-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            
            <div className="flex items-center gap-3 text-white font-mono text-sm uppercase tracking-widest mb-10 relative z-10">
              <div className="p-2 bg-primary/20 rounded-lg">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <span className="font-bold">Education & Journey</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 relative z-10 w-full justify-between">
              {timeline.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col relative group/timeline cursor-crosshair">
                  {/* Glowing Connection Line */}
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-20 right-0 h-[2px] bg-white/10 overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-full group-hover/timeline:animate-[shimmer_1.5s_infinite]"></div>
                    </div>
                  )}
                  <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 border border-white/10 group-hover/timeline:border-primary/50 group-hover/timeline:-translate-y-3 group-hover/timeline:shadow-[0_20px_40px_rgba(220,38,38,0.4)] group-hover/timeline:bg-primary/10 transition-all duration-500">
                    <span className="text-primary group-hover/timeline:text-white transition-colors">{item.icon}</span>
                  </div>
                  <span className="text-xs font-mono text-primary mb-2 tracking-widest uppercase font-bold">{item.year}</span>
                  <h4 className="text-lg font-black text-white/90 group-hover/timeline:text-white transition-colors tracking-tight">{item.title}</h4>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
