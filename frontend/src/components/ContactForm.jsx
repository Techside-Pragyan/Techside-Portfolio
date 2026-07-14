import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // In production this points to the FastAPI backend
      // const response = await fetch('http://localhost:8000/api/contact', { ... })
      
      // Simulating network request
      await new Promise(r => setTimeout(r, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="glass-panel"
      style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="name" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Name</label>
        <input 
          id="name"
          type="text" 
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          style={{ 
            background: 'var(--bg-secondary)', 
            border: '1px solid var(--glass-border)', 
            padding: '1rem', 
            borderRadius: '8px',
            color: '#fff',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--accent-glow)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="email" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</label>
        <input 
          id="email"
          type="email" 
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          style={{ 
            background: 'var(--bg-secondary)', 
            border: '1px solid var(--glass-border)', 
            padding: '1rem', 
            borderRadius: '8px',
            color: '#fff',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--accent-glow)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="message" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
        <textarea 
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          style={{ 
            background: 'var(--bg-secondary)', 
            border: '1px solid var(--glass-border)', 
            padding: '1rem', 
            borderRadius: '8px',
            color: '#fff',
            outline: 'none',
            resize: 'vertical'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--accent-glow)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        className="glowing-border"
        style={{
          background: 'var(--accent)',
          color: '#fff',
          border: 'none',
          padding: '1rem',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '1rem'
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : <><Send size={18} /> Send Message</>}
      </motion.button>
    </motion.form>
  );
}
