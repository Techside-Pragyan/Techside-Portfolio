import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    year: "Present",
    title: "AI/ML Learning Roadmap",
    subtitle: "Self-Paced Exploration",
    description: "Deep diving into Neural Networks, Deep Learning, NLP, and Computer Vision using TensorFlow and PyTorch. Building intelligent systems and agents.",
    category: "Professional"
  },
  {
    year: "Upcoming",
    title: "B.Tech in Computer Science",
    subtitle: "Future Journey",
    description: "Aiming to further solidify my foundation in engineering, algorithms, and advanced software development principles.",
    category: "Academic"
  },
  {
    year: "Current",
    title: "Diploma in Computer Science & Engineering",
    subtitle: "Academic Foundation",
    description: "Building strong fundamentals in programming, data structures, and computer architecture. Consistently maintaining high academic performance.",
    category: "Academic"
  },
  {
    year: "Continuous",
    title: "Hackathons & Workshops",
    subtitle: "Active Participation",
    description: "Engaging in various coding challenges, technical workshops, and hackathons to apply skills to real-world problems and collaborate with peers.",
    category: "Professional"
  }
];

const Experience = () => {
  const [filter, setFilter] = useState('All');

  const filteredExp = experiences.filter(exp => filter === 'All' || exp.category === filter);

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white leading-none">
              The <br/> <span className="text-gradient-animated">Journey</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              A chronological perspective on academic excellence and professional growth.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
             {['All', 'Academic', 'Professional'].map(cat => (
               <button
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                   filter === cat ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30' : 'text-gray-500 hover:text-white'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 md:-translate-x-1/2 opacity-30"></div>

          <div className="space-y-12">
            <AnimatePresence mode='popLayout'>
              {filteredExp.map((exp, idx) => (
                <motion.div
                  key={exp.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                    idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] md:-translate-x-1/2 md:-translate-y-1/2 z-10 border-4 border-[#030014]"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] pl-8 md:pl-0`}>
                    <div className="glass-card p-8 group hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden">
                       <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold mb-4 tracking-widest uppercase">
                         {exp.year}
                       </span>
                       
                       <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                         {exp.title}
                       </h3>
                       <h4 className="text-purple-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                         {exp.subtitle}
                       </h4>
                       <p className="text-gray-400 leading-relaxed font-light text-sm">
                         {exp.description}
                       </p>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-[45%]"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
