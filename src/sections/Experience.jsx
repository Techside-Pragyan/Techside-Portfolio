import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiAward, FiCpu } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    year: "2024 - Present",
    title: "AI/ML Learning Roadmap",
    subtitle: "Self-Paced Exploration",
    description: "Deep diving into Neural Networks, Deep Learning, NLP, and Computer Vision using TensorFlow and PyTorch. Building intelligent systems and agents.",
    category: "Professional",
    icon: <FiCpu className="text-2xl" />,
    color: "bg-[#2C2621]",
    textColor: "text-white",
    subText: "text-white/60"
  },
  {
    id: 2,
    year: "Upcoming",
    title: "B.Tech in Computer Science",
    subtitle: "Future Journey",
    description: "Aiming to further solidify my foundation in engineering, algorithms, and advanced software development principles.",
    category: "Academic",
    icon: <FiBookOpen className="text-2xl" />,
    color: "bg-white/60",
    textColor: "text-[#2C2621]",
    subText: "text-[#7C7267]"
  },
  {
    id: 3,
    year: "Current",
    title: "Diploma in CS & Engineering",
    subtitle: "Academic Foundation",
    description: "Building strong fundamentals in programming, data structures, and computer architecture. Consistently maintaining high academic performance.",
    category: "Academic",
    icon: <FiAward className="text-2xl" />,
    color: "bg-[#A9715B]",
    textColor: "text-white",
    subText: "text-white/80"
  },
  {
    id: 4,
    year: "Continuous",
    title: "Hackathons & Workshops",
    subtitle: "Active Participation",
    description: "Engaging in various coding challenges, technical workshops, and hackathons to apply skills to real-world problems and collaborate with peers.",
    category: "Professional",
    icon: <FiBriefcase className="text-2xl" />,
    color: "bg-gradient-to-br from-[#E6D5C3] to-[#D4A373]",
    textColor: "text-[#2C2621]",
    subText: "text-[#5C4A3D]"
  }
];

const Experience = () => {
  const [filter, setFilter] = useState('All');

  const filteredExp = experiences.filter(exp => filter === 'All' || exp.category === filter);

  return (
    <section id="experience" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#A9715B]"></div>
              <span className="text-[#A9715B] font-bold tracking-[0.3em] uppercase text-xs">Timeline</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#2C2621] tracking-tighter leading-none">
              THE <span className="italic font-light text-[#A9715B]">JOURNEY</span>
            </h2>
          </div>
          
          {/* Filters */}
          <div className="flex bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-black/[0.06] shadow-sm">
             {['All', 'Academic', 'Professional'].map(cat => (
               <button
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                   filter === cat 
                   ? 'bg-[#2C2621] text-white shadow-md' 
                   : 'text-[#7C7267] hover:bg-white/60'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>
        </motion.div>

        {/* Bento List Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredExp.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-white/40 ${exp.color} backdrop-blur-xl`}
              >
                {/* Decorative background circle */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors duration-500 pointer-events-none"></div>
                
                <div className="flex flex-col h-full justify-between gap-8 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/20 ${exp.textColor} shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      {exp.icon}
                    </div>
                    <span className={`px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black tracking-widest uppercase ${exp.textColor} border border-white/20`}>
                      {exp.year}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className={`text-3xl font-black mb-2 tracking-tight ${exp.textColor}`}>
                      {exp.title}
                    </h3>
                    <h4 className={`text-xs font-bold uppercase tracking-widest mb-6 ${exp.subText}`}>
                      {exp.subtitle}
                    </h4>
                    <p className={`text-sm leading-relaxed font-medium max-w-md ${exp.subText}`}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
