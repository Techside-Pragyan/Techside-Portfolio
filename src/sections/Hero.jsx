import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    // Inject Spline Viewer Script for the 3D AI Assistant
    if (!document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js';
      document.body.appendChild(script);
    }

    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 w-fit text-sm font-medium backdrop-blur-sm shadow-[0_0_10px_rgba(6,182,212,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            System Initialized
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Hi, I'm <br/>
            <span className="text-gradient-animated">Pragyan</span>
          </h1>
          
          <div className="text-2xl lg:text-3xl font-semibold text-gray-300 h-10 flex items-center gap-2">
            <span className="text-cyan-400">&gt;</span>
            {text}<span className="animate-pulse w-3 h-8 bg-cyan-400 inline-block ml-1"></span>
          </div>
          
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            I build intelligent systems and elegant interfaces. Passionate about Artificial Intelligence, Machine Learning, and crafting modern web experiences.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a href="#projects" className="glow-button interactive">
              Explore Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 hover:border-white/50 transition-all text-white font-medium interactive backdrop-blur-md">
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 mt-8"
          >
            <SocialIcon href="https://github.com" icon={<FaGithub size={24} />} />
            <SocialIcon href="https://linkedin.com" icon={<FaLinkedin size={24} />} />
            <SocialIcon href="https://twitter.com" icon={<FaTwitter size={24} />} />
            <SocialIcon href="mailto:example@gmail.com" icon={<FaEnvelope size={24} />} />
          </motion.div>
        </motion.div>

        {/* 3D Spline AI Assistant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end h-[500px] lg:h-[600px] w-full"
        >
          {/* Glassmorphism Frame behind the 3D model */}
          <div className="absolute inset-4 lg:inset-10 rounded-[3rem] bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 backdrop-blur-3xl border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.2)] -z-10 animate-pulse-glow"></div>
          
          {/* Spline 3D Viewer */}
          <div className="w-full h-full relative z-10 interactive" style={{ cursor: 'grab' }}>
            <spline-viewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" className="w-full h-full"></spline-viewer>
          </div>
          
          {/* Hologram details */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[2px] opacity-70"></div>
          
          {/* Floating tags */}
          <motion.div 
            className="absolute top-20 right-0 lg:-right-10 z-30 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-2xl border border-cyan-500/30 text-cyan-300 font-mono text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            AI_ASSISTANT_V1
          </motion.div>
          
          <motion.div 
            className="absolute bottom-32 left-0 lg:-left-10 z-30 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-2xl border border-purple-500/30 text-purple-300 font-mono text-sm shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            STATUS: ONLINE
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] interactive"
  >
    {icon}
  </a>
);

export default Hero;
