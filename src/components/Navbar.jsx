import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  HiOutlineHome, HiOutlineUser, HiOutlineCode, 
  HiOutlineBriefcase, HiOutlineMail, HiOutlineHeart 
} from 'react-icons/hi';

const navItems = [
  { name: 'Home', to: 'hero', icon: <HiOutlineHome size={22} /> },
  { name: 'About', to: 'about', icon: <HiOutlineUser size={22} /> },
  { name: 'Projects', to: 'projects', icon: <HiOutlineCode size={22} /> },
  { name: 'Experience', to: 'experience', icon: <HiOutlineBriefcase size={22} /> },
  { name: 'Skills', to: 'skills', icon: <HiOutlineHeart size={22} /> },
  { name: 'Contact', to: 'contact', icon: <HiOutlineMail size={22} /> },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="floating-dock">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={() => setActiveItem(item.to)}
          className="relative"
        >
          <motion.div
            onHoverStart={() => setHoveredItem(item.name)}
            onHoverEnd={() => setHoveredItem(null)}
            className={`dock-item ${activeItem === item.to ? 'text-cyan-400' : ''}`}
          >
            {/* Active Indicator Background */}
            {activeItem === item.to && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/10 rounded-full z-[-1]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            {/* Icon */}
            {item.icon}

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredItem === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -45, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold text-white uppercase tracking-widest whitespace-nowrap z-50 pointer-events-none"
                >
                  {item.name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Link>
      ))}
      
      {/* Separator */}
      <div className="w-[1px] h-6 bg-white/10 mx-2"></div>
      
      {/* Dynamic Status Indicator */}
      <div className="flex gap-1 px-2">
         <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
         />
      </div>
    </nav>
  );
};

export default Navbar;
