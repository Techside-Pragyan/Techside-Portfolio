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

const captions = [
  "01 / CREATIVE CODE",
  "02 / ALGORITHMIC VISION",
  "03 / DATA INTELLIGENCE",
  "04 / MACHINE LEARNING",
  "05 / FUTURE AI ARCHITECT"
];

const Hero = () => {
  const [time, setTime] = useState(new Date());
  const [cards, setCards] = useState([0, 1, 2, 3, 4]);
  const [isHovered, setIsHovered] = useState(false);

  // Framer motion values for background depth parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-performance physics-based motion
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  // Map to smaller coordinates for background text to create depth (parallax)
  const textX = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const textY = useTransform(springY, [-0.5, 0.5], [-30, 30]);

  const cycleForward = () => {
    setCards((prev) => {
      const next = [...prev];
      const last = next.pop();
      return [last, ...next];
    });
  };

  const cycleBackward = () => {
    setCards((prev) => {
      const next = [...prev];
      const first = next.shift();
      return [...next, first];
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto-shuffle fanned deck every 6.5s unless hovered
    const slideTimer = setInterval(() => {
      if (!isHovered) {
        cycleForward();
      }
    }, 6500);

    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(slideTimer);
      clearInterval(timer);
    };
  }, [mouseX, mouseY, isHovered]);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-transparent perspective-lg">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(169,113,91,0.04),transparent_70%)] pointer-events-none"></div>

      {/* Navigation Metadata (Top) */}
      <div className="absolute top-8 left-8 lg:left-12 font-bold text-[#2C2621] tracking-tighter text-xl z-20">
        pragyan.me
      </div>

      <div className="absolute top-8 right-8 lg:right-12 font-mono text-xs font-bold text-[#7C7267] tracking-widest z-20 flex items-center gap-3">
        <span className="status-dot bg-emerald-500 animate-pulse"></span>
        EST. 2026 // {formattedTime}
      </div>

      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 pt-20">
        
        {/* Left Side: Creative Pitch */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 justify-center text-left"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black text-[#A9715B] tracking-[0.3em] uppercase">Hello! I'm</span>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter select-none">
              <span className="block text-[#2C2621]">PRAGYAN</span>
              <span className="block text-[#5C4A3D]">PARAMITA</span>
              <span className="block text-[#A9715B]">MOHARANA</span>
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-[#7C7267] tracking-wide mt-3">
              <span className="text-[#A9715B]">AI/ML Engineer</span>
              <span className="mx-2 text-[#C4B5A5]">|</span>
              <span className="text-[#5C4A3D]">Computer Science Student</span>
            </h2>
          </div>

          <p className="text-[#7C7267] font-light max-w-lg leading-relaxed text-sm md:text-base">
            I'm into building intelligent systems, optimizing predictive models, and engineering creative AI solutions. Always exploring the intersection of data, mathematical logic, and deep learning to build the future. 🧠💻📊
          </p>

          <div className="flex items-center gap-10">
             <div className="flex gap-4">
                <SocialIcon href="#" icon={<FaGithub />} />
                <SocialIcon href="#" icon={<FaLinkedin />} />
                <SocialIcon href="#" icon={<FaInstagram />} />
                <SocialIcon href="#" icon={<FaTwitter />} />
             </div>
             
             <div className="h-8 w-[1px] bg-black/[0.08]"></div>

             <div className="flex items-center gap-6 pt-0">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-8 py-4 bg-[#2C2621] text-[#EAD8C3] font-black text-sm uppercase tracking-widest rounded-full hover:shadow-[0_10px_30px_rgba(44,38,33,0.15)] transition-all"
               >
                 Welcome
               </motion.button>
               <a href="#work" className="text-[#2C2621] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group">
                 Works <HiOutlineArrowRight className="group-hover:translate-x-2 transition-transform text-[#A9715B]" />
               </a>
             </div>
          </div>
        </motion.div>

        {/* Right: Premium Interactive 3D Polaroid Card Deck */}
        <div 
          className="relative h-[650px] lg:h-[750px] w-full flex flex-col items-center justify-center pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glowing Ambient Ring behind the Portrait Stack */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-[#A9715B]/10 bg-[radial-gradient(circle_at_center,rgba(169,113,91,0.02),transparent_70%)] pointer-events-none z-0"></div>

          {/* Holographic Text Overlay with opposite tilt direction for 3D parallax depth */}
          <motion.div 
            style={{ 
              x: textX,
              y: textY
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block text-right pointer-events-none z-10"
          >
             <h2 className="text-8xl font-black text-[#2C2621]/[0.02] tracking-tighter leading-none select-none">
                CREATIVE <br/>
                DESIGNER <br/>
                DEVELOPER
             </h2>
          </motion.div>

          {/* Premium Hardware-Accelerated 3D Tilt Wrapper around the entire Deck */}
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1200}
            scale={1.01}
            transitionSpeed={1200}
            className="relative w-full h-[520px] z-20 flex items-center justify-center"
          >
            {/* Ambient Glowing Backdrop Behind the Cards */}
            <div className="absolute w-[400px] h-[520px] bg-gradient-to-tr from-[#A9715B]/10 via-[#E8D5C4]/10 to-[#7C7267]/10 blur-3xl pointer-events-none"></div>

            {/* Polaroid Cards Stack */}
            <div className="relative w-[380px] h-[500px] flex items-center justify-center">
              {cards.map((cardId) => {
                const indexInStack = cards.indexOf(cardId);
                const isFront = indexInStack === cards.length - 1;
                
                // Fan offsets & rotations
                const rot = isHovered ? (indexInStack - 2) * 11 : (indexInStack - 2) * 3;
                const xOffset = isHovered ? (indexInStack - 2) * 65 : (indexInStack - 2) * 8;
                const yOffset = isHovered 
                  ? Math.abs(indexInStack - 2) * 10 - 25 
                  : (cards.length - 1 - indexInStack) * -15;
                const scaleVal = indexInStack * 0.03 + 0.88;

                return (
                  <motion.div
                    key={cardId}
                    style={{ zIndex: indexInStack }}
                    animate={{
                      x: xOffset,
                      y: yOffset,
                      rotate: rot,
                      scale: scaleVal,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      damping: 18,
                    }}
                    drag={isFront ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={(event, info) => {
                      if (Math.abs(info.offset.x) > 100) {
                        cycleForward();
                      }
                    }}
                    onClick={() => {
                      if (isFront) {
                        cycleForward();
                      }
                    }}
                    className={`absolute w-[300px] h-[410px] sm:w-[350px] sm:h-[480px] md:w-[380px] md:h-[510px] rounded-3xl bg-[#E6D5C3] border border-[#A9715B]/20 shadow-[0_15px_40px_rgba(44,38,33,0.08)] flex flex-col p-4 sm:p-5 cursor-grab active:cursor-grabbing interactive transition-shadow duration-300 ${
                      isFront ? 'hover:shadow-[0_25px_50px_rgba(169,113,91,0.15)]' : ''
                    }`}
                  >
                    {/* Image Box */}
                    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[415px] rounded-2xl overflow-hidden border border-[#A9715B]/30 bg-[#EAD8C3]">
                      <img
                        src={images[cardId]}
                        alt={captions[cardId]}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                      
                      {/* Subtle Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none"></div>
                    </div>

                    {/* Caption */}
                    <span className="font-sans text-[10px] sm:text-xs font-black text-[#7C7267] tracking-[0.25em] mt-3 sm:mt-4 block text-center uppercase select-none">
                      {captions[cardId]}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </Tilt>

          {/* Elegant Deck Controls & Swipe Indicators */}
          <div className="flex items-center gap-6 mt-12 z-30">
            <button
              onClick={cycleBackward}
              className="w-10 h-10 rounded-full border border-black/[0.08] flex items-center justify-center text-[#7C7267] hover:text-[#2C2621] hover:border-[#A9715B]/50 hover:bg-white transition-all duration-300 interactive shadow-sm"
              title="Previous Card"
            >
              ←
            </button>
            
            <div className="flex gap-1.5">
              {images.map((_, i) => {
                const indexInStack = cards.indexOf(i);
                const isFront = indexInStack === cards.length - 1;
                return (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isFront ? 'w-6 bg-[#A9715B]' : 'w-1.5 bg-[#7C7267]/30'
                    }`}
                  />
                );
              })}
            </div>

            <button
              onClick={cycleForward}
              className="w-10 h-10 rounded-full border border-black/[0.08] flex items-center justify-center text-[#7C7267] hover:text-[#2C2621] hover:border-[#A9715B]/50 hover:bg-white transition-all duration-300 interactive shadow-sm"
              title="Next Card"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-black/[0.08] rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-[#A9715B] rounded-full"></div>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.2, color: '#A9715B' }}
    className="text-[#7C7267] text-2xl transition-colors cursor-pointer"
  >
    {icon}
  </motion.a>
);

export default Hero;
