import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineDownload, HiOutlineArrowRight } from 'react-icons/hi';

const Hero = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Inject Spline Viewer Script
    if (!document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js';
      document.body.appendChild(script);
    }

    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#030014]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_70%)] pointer-events-none"></div>

      {/* Navigation Metadata (Top) */}
      <div className="absolute top-8 left-8 lg:left-12 font-bold text-white tracking-tighter text-xl z-20">
        pragyan.dev
      </div>
      
      <div className="absolute top-8 right-8 lg:right-12 font-mono text-gray-500 text-sm tracking-widest z-20">
        {formattedTime}
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 hidden md:block text-gray-500 text-xs font-bold tracking-[0.3em] uppercase z-20">
        connect@pragyan.dev
      </div>

      {/* Social Sidebar (Left) */}
      <div className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-20">
        <SocialIcon href="#" icon={<FaGithub />} />
        <SocialIcon href="#" icon={<FaLinkedin />} />
        <SocialIcon href="#" icon={<FaTwitter />} />
        <SocialIcon href="#" icon={<FaInstagram />} />
      </div>

      {/* Main Content Layout */}
      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10 relative z-10">
        
        {/* Left: Text Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-left"
        >
          <div className="space-y-2">
            <span className="text-purple-400 font-bold tracking-widest uppercase text-xs">Hello! I'm</span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
              PRAGYAN <br/>
              <span className="text-gradient-animated uppercase">SAHOO</span>
            </h1>
          </div>
          
          <div className="flex flex-col gap-4">
            <p className="text-gray-400 text-lg max-w-md font-light leading-relaxed">
              A Creative Developer & Designer with a passion for blending technical expertise with creative edge.
            </p>
            
            <div className="flex items-center gap-6 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all"
              >
                Welcome
              </motion.button>
              <a href="#work" className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2 group">
                Works <HiOutlineArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Large 3D Female Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[600px] lg:h-[800px] w-full flex items-center justify-center pointer-events-none"
        >
          <spline-viewer 
            url="https://prod.spline.design/ATpf8S9X9o9y4z-m/scene.splinecode" 
            className="w-full h-full scale-125"
          ></spline-viewer>
          
          {/* Floating Text Overlay (Right) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block text-right">
             <h2 className="text-6xl font-black text-white/5 tracking-tighter leading-none select-none">
                CREATIVE <br/>
                DESIGNER <br/>
                DEVELOPER
             </h2>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-purple-500 rounded-full"></div>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.2, color: '#a855f7' }}
    className="text-gray-500 text-2xl transition-colors cursor-pointer"
  >
    {icon}
  </motion.a>
);

export default Hero;

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
