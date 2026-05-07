import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "Present",
    title: "AI/ML Learning Roadmap",
    subtitle: "Self-Paced Exploration",
    description: "Deep diving into Neural Networks, Deep Learning, NLP, and Computer Vision using TensorFlow and PyTorch. Building intelligent systems and agents."
  },
  {
    year: "Upcoming",
    title: "B.Tech in Computer Science",
    subtitle: "Future Journey",
    description: "Aiming to further solidify my foundation in engineering, algorithms, and advanced software development principles."
  },
  {
    year: "Current",
    title: "Diploma in Computer Science & Engineering",
    subtitle: "Academic Foundation",
    description: "Building strong fundamentals in programming, data structures, and computer architecture. Consistently maintaining high academic performance."
  },
  {
    year: "Continuous",
    title: "Hackathons & Workshops",
    subtitle: "Active Participation",
    description: "Engaging in various coding challenges, technical workshops, and hackathons to apply skills to real-world problems and collaborate with peers."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-cyan-900/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4 border border-blue-500/20 uppercase tracking-widest">
            Timeline
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Journey</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-cyan-500/20 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 z-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, x: idx % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`mb-12 relative flex items-center md:justify-between w-full ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Glowing dot */}
              <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] border-4 border-[#030014] z-10"></div>
              
              <div className={`ml-8 md:ml-0 md:w-[45%] glass-card p-8 relative group hover:border-cyan-500/50 transition-colors duration-500 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                
                {/* Connecting Line (Desktop) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-cyan-500/20 ${idx % 2 === 0 ? '-left-8' : '-right-8'}`}></div>

                <span className="inline-block py-1 px-3 rounded-md bg-white/5 text-cyan-400 text-xs font-bold mb-4 border border-white/10 group-hover:border-cyan-500/30 transition-colors tracking-widest uppercase">
                  {exp.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{exp.title}</h3>
                <h4 className="text-sm text-purple-400 font-semibold mb-4 tracking-wide">{exp.subtitle}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
