import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon E-Commerce',
    description: 'A futuristic shopping platform with real-time inventory and 3D product previews.',
    tags: ['React', 'Three.js', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Cyber Dashboard',
    description: 'Data visualization dashboard for server metrics featuring live updates and dark mode aesthetics.',
    tags: ['React', 'D3.js', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'AI Prompt Studio',
    description: 'Tool for crafting and managing AI prompts with a beautiful glassmorphic UI.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop'
  }
];

export default function ProjectGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="glass-panel glowing-border"
          style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <div style={{ height: '200px', overflow: 'hidden' }}>
            <motion.img 
              src={project.image} 
              alt={project.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ background: 'var(--glass-highlight)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--accent-glow)' }}>
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Hidden Action Buttons Revealed on Hover */}
            <motion.div 
              style={{ display: 'flex', gap: '1rem' }}
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
            >
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.9rem', cursor: 'pointer' }} className="hover-link">
                <Github size={18} /> Code
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.9rem', cursor: 'pointer' }} className="hover-link">
                <ExternalLink size={18} /> Live Demo
              </a>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
