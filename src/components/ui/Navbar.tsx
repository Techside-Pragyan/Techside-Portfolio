"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, Heart, Mail } from 'lucide-react';
import clsx from 'clsx';
import MagneticButton from './MagneticButton';

const navItems = [
  { name: 'Home', to: '#hero', icon: <Home size={20} /> },
  { name: 'About', to: '#about', icon: <User size={20} /> },
  { name: 'Projects', to: '#projects', icon: <Code size={20} /> },
  { name: 'Experience', to: '#experience', icon: <Briefcase size={20} /> },
  { name: 'Skills', to: '#skills', icon: <Heart size={20} /> },
  { name: 'Contact', to: '#contact', icon: <Mail size={20} /> },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('#hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.to.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      }

      if (current) {
        setActiveItem(`#${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 p-2 glass rounded-full shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeItem === item.to;
          return (
              <MagneticButton intensity={0.2}>
                <a
                  key={item.name}
                  href={item.to}
                  onClick={(e) => handleClick(e, item.to)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={clsx(
                    'relative flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300',
                    isActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 z-[-1]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.icon}

                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -50, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="absolute px-3 py-1 bg-surface border border-surface-border rounded-lg text-xs font-bold uppercase tracking-widest whitespace-nowrap z-50 pointer-events-none backdrop-blur-md text-foreground"
                      >
                        {item.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </a>
              </MagneticButton>
          );
        })}
        
        <div className="w-[1px] h-6 bg-surface-border mx-1"></div>
        
        <div className="flex gap-1 px-2 items-center justify-center">
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"
           />
        </div>
      </nav>
    </div>
  );
}
