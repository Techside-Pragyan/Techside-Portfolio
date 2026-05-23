import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineDownload, HiOutlineArrowRight } from 'react-icons/hi';

const Hero = () => {
  const [time, setTime] = useState(new Date());

  // Framer motion values for background depth parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-performance physics-based motion
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  // Map to smaller coordinates for background text to create depth (parallax)
  const textX = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const textY = useTransform(springY, [-0.5, 0.5], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize to coordinates between -0.5 and 0.5
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, [mouseX, mouseY]);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#030014] perspective-lg">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_70%)] pointer-events-none"></div>

      {/* Navigation Metadata (Top) */}
      <div className="absolute top-8 left-8 lg:left-12 font-bold text-white tracking-tighter text-xl z-20">
        pragyan.me
      </div>
      
      <div className="absolute top-8 right-8 lg:right-12 font-mono text-gray-500 text-sm tracking-widest z-20">
        {formattedTime}
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 hidden md:block text-gray-500 text-xs font-bold tracking-[0.3em] uppercase z-20">
        connect@pragyan.me
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
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              PRAGYAN <br/>
              PARAMITA <br/>
              <span className="text-gradient-animated uppercase">MOHARANA</span>
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

        {/* Right: Large 3D Female Character with Interactive Mouse Tilt Parallax */}
        <div className="relative h-[550px] lg:h-[750px] w-full flex items-center justify-center">
          
          {/* Glowing Ring behind the 3D Character */}
          <div className="absolute w-[450px] h-[450px] rounded-full border border-purple-500/10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.03),transparent_70%)] pointer-events-none z-0"></div>

          {/* Holographic Text Overlay with opposite tilt direction for 3D parallax depth */}
          <motion.div 
            style={{ 
              x: textX,
              y: textY
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block text-right pointer-events-none z-10"
          >
             <h2 className="text-7xl font-black text-white/[0.03] tracking-tighter leading-none select-none">
                CREATIVE <br/>
                DESIGNER <br/>
                DEVELOPER
             </h2>
          </motion.div>

          {/* Premium Hardware-Accelerated 3D Tilt Wrapper */}
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1200}
            scale={1.05}
            transitionSpeed={1200}
            className="w-full h-full relative z-20 cursor-grab active:cursor-grabbing flex items-center justify-center"
          >
            <div className="w-[125%] h-[125%] select-none pointer-events-none">
              <spline-viewer 
                url="https://prod.spline.design/ATpf8S9X9o9y4z-m/scene.splinecode" 
                className="w-full h-full"
              ></spline-viewer>
            </div>
          </Tilt>
        </div>
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
