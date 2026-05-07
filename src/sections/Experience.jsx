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
    <section id="experience" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-purple-500/30 ml-3 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`mb-10 relative flex items-center md:justify-between w-full ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#030014] z-10"></div>
              
              <div className="ml-8 md:ml-0 md:w-[45%] glass-card p-6 relative group hover:border-purple-500/50 transition-colors">
                <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 text-cyan-400 text-xs font-bold mb-3 border border-purple-500/20">
                  {exp.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <h4 className="text-sm text-purple-300 font-medium mb-3">{exp.subtitle}</h4>
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
