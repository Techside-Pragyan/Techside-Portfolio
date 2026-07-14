import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LiveActivityWidget() {
  const [status, setStatus] = useState({ indicator: '🟢', activity: 'Loading status...' });

  useEffect(() => {
    // In production, this would fetch from the FastAPI backend:
    // fetch('http://localhost:8000/api/status')
    //   .then(res => res.json())
    //   .then(data => setStatus(data))
    //   .catch(err => console.error(err));
    
    // Simulating the backend response for now
    setStatus({ indicator: '🟢', activity: 'Online | Coding right now' });
  }, []);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 100 }}
      className="glass-panel glowing-border"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        padding: '0.75rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        zIndex: 50,
        fontSize: '0.9rem',
        fontWeight: '500',
        borderRadius: '50px' // Pill shape
      }}
    >
      <motion.span
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        {status.indicator}
      </motion.span>
      <span>{status.activity}</span>
    </motion.div>
  );
}
