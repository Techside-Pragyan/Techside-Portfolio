"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const linkOrBtn = target.closest('a') || target.closest('button');
      const interactiveEl = target.closest('[data-cursor-text]') as HTMLElement;

      if (interactiveEl) {
        setIsHovering(true);
        setHoverText(interactiveEl.getAttribute('data-cursor-text') || "VIEW");
      } else if (linkOrBtn || target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button') {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[100] mix-blend-screen overflow-hidden"
        initial={{ width: 40, height: 40, x: -20, y: -20 }}
        animate={{
          x: mousePosition.x - (hoverText ? 40 : (isHovering ? 30 : 20)),
          y: mousePosition.y - (hoverText ? 40 : (isHovering ? 30 : 20)),
          width: hoverText ? 80 : (isHovering ? 60 : 40),
          height: hoverText ? 80 : (isHovering ? 60 : 40),
          backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
          border: isHovering ? '1px solid rgba(59, 130, 246, 0.8)' : '1px solid rgba(59, 130, 246, 0.4)'
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <motion.span 
          animate={{ opacity: hoverText ? 1 : 0, scale: hoverText ? 1 : 0 }}
          className="text-[10px] font-bold tracking-widest text-primary uppercase"
        >
          {hoverText}
        </motion.span>
      </motion.div>
    </>
  );
}
