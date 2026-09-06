import { motion } from 'motion/react';
import { GithubLogo, LinkedinLogo, MapPin, Envelope } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer
      id="contact"
      style={{
        paddingTop: '6rem',
        paddingBottom: '4rem',
        backgroundColor: '#F4F1EC',
        borderTop: '1px solid #D6CFC4',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#0E1014',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            Get in touch
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#6B6560',
              lineHeight: 1.7,
              maxWidth: '52ch',
              marginBottom: '2.5rem',
            }}
          >
            Always interested in hearing about interesting problems. Especially
            if they involve hardware, embedded systems, or doing something that
            has not been done before.
          </p>

          {/* Email */}
          <a
            href="mailto:noel@meliorus.co.nz"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1.25rem',
              fontWeight: 500,
              color: '#2E5D3A',
              textDecoration: 'none',
              marginBottom: '2rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#234a2d')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#2E5D3A')}
          >
            <Envelope size={20} />
            noel@meliorus.co.nz
          </a>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
            <a
              href="https://github.com/noelw19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                color: '#0E1014',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2E5D3A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0E1014')}
            >
              <GithubLogo size={28} weight="regular" />
            </a>
            <a
              href="https://linkedin.com/in/noelwilliams"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                color: '#0E1014',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2E5D3A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0E1014')}
            >
              <LinkedinLogo size={28} weight="regular" />
            </a>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                color: '#6B6560',
                fontSize: '0.9375rem',
              }}
            >
              <MapPin size={16} />
              Aotearoa, New Zealand
            </span>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid #D6CFC4',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <p style={{ fontSize: '0.875rem', color: '#6B6560' }}>
              2025 Noel Williams
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6B6560' }}>
              Built with React
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
