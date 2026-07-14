import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const events = [
  {
    year: '2023 - Present',
    title: 'Senior Frontend Engineer',
    company: 'Tech Innovators Inc.',
    description: 'Leading the UI/UX team to build next-gen interactive web applications.',
    icon: <Briefcase size={24} color="#a855f7" />
  },
  {
    year: '2020 - 2023',
    title: 'Full Stack Developer',
    company: 'WebSolutions LLC',
    description: 'Developed scalable backend services using Python and dynamic React frontends.',
    icon: <Briefcase size={24} color="#3b82f6" />
  },
  {
    year: '2016 - 2020',
    title: 'Computer Science (B.S.)',
    company: 'University of Technology',
    description: 'Specialized in Software Engineering and Human-Computer Interaction.',
    icon: <GraduationCap size={24} color="#10b981" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 50 }
  }
};

export default function Timeline() {
  return (
    <motion.div 
      className="timeline-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ position: 'relative', paddingLeft: '40px' }}
    >
      {/* Vertical Line */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: '19px', width: '2px', background: 'var(--glass-border)' }}></div>

      {events.map((event, index) => (
        <motion.div 
          key={index} 
          variants={itemVariants}
          style={{ position: 'relative', marginBottom: '4rem' }}
        >
          {/* Timeline Node */}
          <motion.div 
            style={{ 
              position: 'absolute', 
              left: '-40px', 
              top: '0', 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: 'var(--bg-secondary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '2px solid var(--accent)',
              zIndex: 10
            }}
            whileHover={{ scale: 1.2, boxShadow: "0 0 15px var(--accent-glow)" }}
          >
            {event.icon}
          </motion.div>

          <div className="glass-panel" style={{ padding: '2rem', marginLeft: '2rem' }}>
            <span style={{ color: 'var(--accent-glow)', fontWeight: 'bold', fontSize: '0.9rem' }}>{event.year}</span>
            <h3 style={{ margin: '0.5rem 0', fontSize: '1.5rem', color: '#fff' }}>{event.title}</h3>
            <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-secondary)', fontWeight: 'normal' }}>{event.company}</h4>
            <p style={{ lineHeight: '1.6' }}>{event.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
