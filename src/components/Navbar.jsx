import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section tracking logic
      const sections = navLinks.map(link => document.getElementById(link.to));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].to);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-[80] transition-all duration-500 ${isScrolled ? 'bg-[#030014]/70 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
      <div className="container px-6 mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter interactive cursor-pointer flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white text-lg shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            T
          </div>
          <span className="text-white">Tech<span className="text-cyan-400">side</span></span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="relative px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase cursor-pointer interactive group transition-colors text-gray-300 hover:text-white"
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.to && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {/* Hover Underline */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-1/2 opacity-0 group-hover:opacity-100 rounded-full"></div>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden text-gray-300 text-2xl interactive cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-0 left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center justify-center z-[-1]"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-bold tracking-wide uppercase interactive ${
                      activeSection === link.to ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500' : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
