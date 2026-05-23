import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';

// Import local profile assets
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile4.jpg';
import profile5 from '../assets/profile5.jpg';

const images = [profile1, profile2, profile3, profile4, profile5];

// Custom headshot framing calibration for each photo to ensure faces are maximum-size, centered, and perfectly visible
const imageSettings = [
  { objectPosition: 'center 26%', scale: 1.25 }, // profile1 (B&W branches: close-up headshot zoom)
  { objectPosition: 'center 12%', scale: 1.45 }, // profile2 (Outdoor glass: major zoom & shifted high to frame face)
  { objectPosition: 'center 18%', scale: 1.42 }, // profile3 (Beach look-back: zoomed deep to focus on smile)
  { objectPosition: 'center 18%', scale: 1.38 }, // profile4 (B&W side-look: zoomed in for head focus)
  { objectPosition: 'center 15%', scale: 1.40 }  // profile5 (Wall look-back: perfect vertical close-up)
];

const Hero = () => {
  const [time, setTime] = useState(new Date());
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

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
    
    // Auto-cycle through the profile slideshow every 4.5 seconds
    const slideTimer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(slideTimer);
      clearInterval(timer);
    };
  }, [mouseX, mouseY]);

  const handleNextPhoto = () => {
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

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

        {/* Right: Premium Interactive 3D Cyber-Portrait (Circular Profile Pic) */}
        <div className="relative h-[550px] lg:h-[750px] w-full flex items-center justify-center">
          
          {/* Glowing Ambient Ring behind the Portrait */}
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
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            scale={1.05}
            transitionSpeed={1200}
            className="w-full h-full relative z-20 flex items-center justify-center"
          >
            {/* Outer Slow-Rotating Cyber HUD Rings */}
            <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-dashed border-cyan-500/20 animate-[spin_40s_linear_infinite] pointer-events-none"></div>
            <div className="absolute w-[420px] h-[420px] rounded-full border border-purple-500/10 animate-[spin_25s_linear_infinite_reverse] pointer-events-none"></div>

            {/* Glowing Ambient Backdrop Color */}
            <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-2xl pointer-events-none"></div>

            {/* Profile Picture Frame with Premium Gradient Edge */}
            <button
              onClick={handleNextPhoto}
              title="Click to see next photo"
              className="relative w-[330px] h-[330px] md:w-[360px] md:h-[360px] rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_50px_rgba(168,85,247,0.25)] select-none cursor-pointer focus:outline-none"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#030014] border-4 border-[#030014] relative group">
                
                {/* Crossfade Slideshow Images with Custom Frame Calibration */}
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImgIndex}
                    src={images[currentImgIndex]} 
                    alt="Pragyan Paramita Moharana" 
                    initial={{ opacity: 0, scale: (imageSettings[currentImgIndex]?.scale ?? 1) * 1.15 }}
                    animate={{ opacity: 1, scale: imageSettings[currentImgIndex]?.scale ?? 1 }}
                    exit={{ opacity: 0, scale: (imageSettings[currentImgIndex]?.scale ?? 1) * 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ 
                      objectPosition: imageSettings[currentImgIndex]?.objectPosition ?? 'center',
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </AnimatePresence>
                
                {/* Cyber HUD Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] opacity-20 pointer-events-none"></div>

                {/* Subtle dark bottom gradient cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </button>
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
