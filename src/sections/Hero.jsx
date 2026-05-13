import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, HiOutlineDownload, HiOutlineArrowRight } from 'react-icons/hi';
import { SiX, SiInstagram } from 'react-icons/si';

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [time, setTime] = useState(new Date());
  
  const roles = [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    // Inject Spline Viewer Script
    if (!document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js';
      document.body.appendChild(script);
    }

    // Typing Effect
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

    // Clock
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, [text, isDeleting, roleIndex]);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDate = time.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
      {/* Background Mesh Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Top Header Information */}
      <div className="absolute top-8 left-8 lg:left-12 flex items-center gap-3">
        <span className="text-xl font-bold tracking-tighter text-white">Hello World</span>
        <span className="text-xl animate-bounce">👋</span>
      </div>

      <div className="absolute top-8 right-8 lg:right-12 text-right font-mono text-sm text-gray-500 tracking-widest hidden sm:block">
        {formattedTime} | {formattedDate}
      </div>

      {/* Main Content Container */}
      <div className="container max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Name Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-white">
            Hi, I'm <br/>
            <span className="text-gradient-animated">Pragyan</span>
          </h1>

          {/* Typing Role */}
          <div className="text-2xl md:text-3xl font-medium text-gray-400 h-12 flex items-center justify-center gap-2">
            <span>{text}</span>
            <span className="w-1 h-8 bg-cyan-400 animate-pulse"></span>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Passionate about creating innovative digital solutions and exploring the world of AI. Currently pursuing my journey in Computer Science and Engineering.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12"
        >
          <a href="/resume.pdf" className="glow-button flex items-center gap-2 interactive group">
            <HiOutlineDownload className="text-xl group-hover:scale-110 transition-transform" />
            Download Resume
          </a>
          <a href="#about" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-xl flex items-center gap-2 group interactive">
            Learn More
            <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center gap-6 mt-16"
        >
          <SocialLink href="https://github.com" icon={<FaGithub size={22} />} />
          <SocialLink href="https://linkedin.com" icon={<FaLinkedin size={22} />} />
          <SocialLink href="https://twitter.com" icon={<SiX size={20} />} />
          <SocialLink href="https://instagram.com" icon={<SiInstagram size={20} />} />
        </motion.div>
      </div>

      {/* Spline 3D Integration - Subtle Background/Side element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none z-0">
        <spline-viewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" className="w-full h-full"></spline-viewer>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 interactive shadow-lg hover:shadow-cyan-500/20"
  >
    {icon}
  </a>
);

export default Hero;
