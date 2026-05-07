import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm Pragyan, a passionate <span className="text-cyan-400 font-semibold">Diploma CSE student</span> with a relentless drive towards becoming an <span className="text-purple-400 font-semibold">AI/ML Engineer</span>. 
            </p>
            <p>
              My journey began with a profound curiosity about how machines can learn and solve complex real-world problems. Today, I'm constantly expanding my horizons by bridging the gap between cutting-edge Machine Learning models and robust full-stack web applications.
            </p>
            <p>
              I thrive on building intelligent systems, whether it's an autonomous research agent or a dynamic frontend dashboard. My goal is to craft premium, high-performance software that feels both futuristic and highly intuitive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">10+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Built</div>
            </div>
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Dedication</div>
            </div>
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">AI/ML</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Focus Area</div>
            </div>
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">CSE</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Diploma</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
