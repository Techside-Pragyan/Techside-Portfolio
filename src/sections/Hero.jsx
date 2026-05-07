import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block py-2 px-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 w-fit text-sm font-medium mb-2 backdrop-blur-sm">
            Welcome to my portfolio
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Pragyan</span>
          </h1>
          <div className="text-2xl lg:text-3xl font-semibold text-gray-300 h-10">
            {text}<span className="animate-pulse">|</span>
          </div>
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            I build intelligent systems and elegant interfaces. Passionate about Artificial Intelligence, Machine Learning, and crafting modern web experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="glow-button">
              Explore Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all text-white font-medium">
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 mt-8">
            <SocialIcon href="https://github.com" icon={<FaGithub size={24} />} />
            <SocialIcon href="https://linkedin.com" icon={<FaLinkedin size={24} />} />
            <SocialIcon href="https://twitter.com" icon={<FaTwitter size={24} />} />
            <SocialIcon href="mailto:example@gmail.com" icon={<FaEnvelope size={24} />} />
          </div>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-spin-slow opacity-50 blur-xl"></div>
            <div className="absolute inset-2 rounded-full bg-[#030014] z-10"></div>
            {/* Placeholder for Profile Image */}
            <div className="absolute inset-3 rounded-full z-20 overflow-hidden border-2 border-white/10 bg-gray-800 flex items-center justify-center">
               <span className="text-gray-500">Profile Image</span>
               {/* <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 z-30 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-xl"
            >
              🚀 React.js
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 -left-8 z-30 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-xl"
            >
              🧠 ML Engineer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-cyan-400 transition-colors hover:-translate-y-1 transform duration-200"
  >
    {icon}
  </a>
);

export default Hero;
