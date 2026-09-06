import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { List, X } from '@phosphor-icons/react';
import { navigation } from '../data/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4rem',
        zIndex: 50,
        backgroundColor: scrolled ? '#F4F1EC' : 'transparent',
        borderBottom: scrolled ? '1px solid #D6CFC4' : 'none',
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 500,
            color: '#0E1014',
            padding: 0,
          }}
        >
          Noel Williams
        </button>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
          }}
          className="hidden md:flex"
        >
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                color: '#6B6560',
                padding: '0.25rem 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#0E1014')}
              onMouseLeave={(e) => (e.target.style.color = '#6B6560')}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none',
          }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '4rem',
              left: 0,
              right: 0,
              backgroundColor: '#F4F1EC',
              borderBottom: '1px solid #D6CFC4',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    color: '#0E1014',
                    padding: '0.5rem 0',
                    textAlign: 'left',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
