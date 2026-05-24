import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiMongodb, SiGithub, SiTensorflow, SiOpencv, 
  SiScikitlearn, SiPandas
} from 'react-icons/si';

const skills = [
  { icon: <SiPython />, color: "#3776AB", radius: 180, speed: 20 },
  { icon: <SiJavascript />, color: "#F7DF1E", radius: 240, speed: 15 },
  { icon: <SiReact />, color: "#61DAFB", radius: 300, speed: 25 },
  { icon: <SiTailwindcss />, color: "#06B6D4", radius: 180, speed: 18, delay: 5 },
  { icon: <SiNodedotjs />, color: "#339933", radius: 240, speed: 12, delay: 2 },
  { icon: <SiTensorflow />, color: "#FF6F00", radius: 300, speed: 22, delay: 8 },
  { icon: <SiMongodb />, color: "#47A248", radius: 210, speed: 17, delay: 3 },
  { icon: <SiGithub />, color: "#2C2621", radius: 270, speed: 14, delay: 6 },
];

const OrbitingIcon = ({ icon, color, radius, speed, delay = 0 }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center p-4 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] cursor-pointer group hover:bg-white/90 transition-colors duration-300"
      animate={{
        rotate: 360
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }}
      style={{
        width: 60,
        height: 60,
        transformOrigin: `0 ${radius}px`,
        top: `calc(50% - ${radius}px - 30px)`,
        left: 'calc(50% - 30px)'
      }}
    >
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          delay: delay
        }}
        className="text-3xl group-hover:scale-125 transition-transform duration-300 drop-shadow-sm"
        style={{ color: color }}
      >
        {icon}
      </motion.div>
      
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"
        style={{ backgroundColor: color }}
      ></div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      
      {/* Container with Glass Plate */}
      <div className="container mx-auto max-w-7xl relative flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 relative z-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-8 bg-[#A9715B]"></div>
             <span className="text-[#A9715B] font-bold tracking-[0.4em] uppercase text-xs">My Arsenal</span>
             <div className="h-[1px] w-8 bg-[#A9715B]"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-[#2C2621]">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9715B] to-[#D4A373]">Technology</span>
          </h2>
          <p className="text-[#7C7267] max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Interactive 3D Universe. Exploring the vast space of modern technologies, libraries, and frameworks I use to build digital products.
          </p>
        </motion.div>

        {/* Universe Container */}
        <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center scale-75 md:scale-100 z-10">
          
          {/* Subtle Glass Backdrop behind Universe */}
          <div className="absolute inset-20 bg-white/20 backdrop-blur-3xl rounded-full border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.02)] pointer-events-none -z-10" />

          {/* Central Sun */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-[#A9715B] to-[#E3CBB3] flex items-center justify-center text-white text-5xl font-black shadow-[0_0_80px_rgba(169,113,91,0.3)] z-10 border-4 border-white/30"
          >
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-pulse"></div>
            🚀
          </motion.div>

          {/* Orbit Rings */}
          {[180, 210, 240, 270, 300].map((radius) => (
            <div 
              key={radius}
              className="absolute rounded-full border border-black/[0.04] pointer-events-none"
              style={{ width: radius * 2, height: radius * 2 }}
            ></div>
          ))}

          {/* Orbiting Planets */}
          {skills.map((skill, index) => (
            <OrbitingIcon 
              key={index}
              icon={skill.icon}
              color={skill.color}
              radius={skill.radius}
              speed={skill.speed}
              delay={skill.delay}
            />
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A9715B]/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
    </section>
  );
};

export default Skills;
