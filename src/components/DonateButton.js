import { motion } from 'motion/react';

export function DonateButton() {
  return (
    <motion.a
      href="https://buymeacoffee.com/melanesian.exe"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Buy me a coffee"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '1.5rem',
        zIndex: 50,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1.25rem',
        backgroundColor: '#2E5D3A',
        color: 'white',
        borderRadius: '9999px',
        fontSize: '0.875rem',
        fontWeight: 600,
        textDecoration: 'none',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transition: 'background-color 0.2s, transform 0.1s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#234a2d';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#2E5D3A';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
    >
      ☕ Buy me a coffee
    </motion.a>
  );
}
