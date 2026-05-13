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
  { icon: <SiGithub />, color: "#FFFFFF", radius: 270, speed: 14, delay: 6 },
];

const OrbitingIcon = ({ icon, color, radius, speed, delay = 0 }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer group"
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
        className="text-3xl group-hover:scale-125 transition-transform"
        style={{ color: color }}
      >
        {icon}
      </motion.div>
      
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 rounded-full blur-md opacity-20 group-hover:opacity-60 transition-opacity"
        style={{ backgroundColor: color }}
      ></div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-20"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white">
          Skills & <span className="text-gradient-animated">Technology</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Interactive 3D Universe. Exploring the vast space of modern technologies.
        </p>
      </motion.div>

      {/* Universe Container */}
      <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center scale-75 md:scale-100">
        
        {/* Central Sun */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center text-white text-5xl font-black shadow-[0_0_80px_rgba(168,85,247,0.4)] z-10"
        >
          <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-pulse"></div>
          🚀
        </motion.div>

        {/* Orbit Rings */}
        {[180, 210, 240, 270, 300].map((radius) => (
          <div 
            key={radius}
            className="absolute rounded-full border border-white/5 pointer-events-none"
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

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
    </section>
  );
};

export default Skills;
