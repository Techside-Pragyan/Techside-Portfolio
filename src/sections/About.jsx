import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10 overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] pointer-events-none opacity-20 transform skew-x-12"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-4 border border-cyan-500/20 uppercase tracking-widest">
                System Logic
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                Decoding <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Intelligence</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <p>
                Hello! I'm Pragyan, a passionate <span className="text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">Diploma CSE student</span> with a relentless drive towards becoming an <span className="text-purple-400 font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">AI/ML Engineer</span>.
              </p>
              <p>
                My journey began with a profound curiosity about how machines can learn and solve complex real-world problems. Today, I'm constantly expanding my horizons by bridging the gap between cutting-edge Machine Learning models and robust full-stack web applications.
              </p>
              <p>
                I thrive on building intelligent systems, whether it's an autonomous research agent or a dynamic frontend dashboard. My goal is to craft premium, high-performance software that feels both futuristic and highly intuitive.
              </p>
            </div>
            
            {/* Signature / Code block effect */}
            <div className="mt-8 p-4 rounded-xl bg-[#01010a] border border-white/5 font-mono text-sm text-gray-400 w-fit shadow-inner">
              <span className="text-pink-500">const</span> <span className="text-cyan-400">vision</span> = <span className="text-yellow-300">"Build the Future"</span>;
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            {/* Center glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none"></div>

            {[
              { num: "10+", label: "Projects Built", color: "from-cyan-400 to-blue-500" },
              { num: "100%", label: "Dedication", color: "from-purple-400 to-pink-500" },
              { num: "AI/ML", label: "Focus Area", color: "from-green-400 to-cyan-500" },
              { num: "CSE", label: "Diploma", color: "from-orange-400 to-red-500" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-card p-8 flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group interactive"
              >
                {/* Hover gradient sweep */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${stat.color} drop-shadow-lg`}>
                  {stat.num}
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
