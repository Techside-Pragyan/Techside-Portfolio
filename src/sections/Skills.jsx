import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiMongodb, SiGithub, SiTensorflow, SiOpencv, 
  SiScikitlearn, SiPandas
} from 'react-icons/si';

const skillCategories = [
  {
    title: "AI/ML Technologies",
    skills: [
      { name: "Python", icon: <SiPython className="text-[#3776AB]" />, level: 90 },
      { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" />, level: 85 },
      { name: "OpenCV", icon: <SiOpencv className="text-[#5C3EE8]" />, level: 80 },
      { name: "Machine Learning", icon: <SiScikitlearn className="text-[#F7931E]" />, level: 88 },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" />, level: 92 },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 95 },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: 85 },
      { name: "Express.js", icon: <SiExpress className="text-white" />, level: 82 },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 80 },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "GitHub", icon: <SiGithub className="text-white" />, level: 95 },
      { name: "Data Structures", icon: <SiPandas className="text-[#150458]" />, level: 85 },
    ]
  }
];

const MagneticIcon = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 flex flex-col items-center gap-3 interactive group cursor-pointer w-full relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <motion.div 
        className="text-4xl group-hover:scale-125 transition-transform duration-300 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {children.icon}
      </motion.div>
      <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors relative z-10">
        {children.name}
      </span>
      
      {/* Skill Level Bar inside the card */}
      <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${children.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold mb-4 border border-purple-500/20 uppercase tracking-widest">
            Tech Arsenal
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Core <span className="text-gradient-animated">Competencies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Mastering the intersection of modern web development and advanced machine learning algorithms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="glass-card p-8 md:p-10 border border-white/5 hover:border-purple-500/30 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full inline-block"></span>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <MagneticIcon key={skill.name}>{skill}</MagneticIcon>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
