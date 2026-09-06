import { motion } from 'motion/react';
import { principles } from '../data/principles';

export function Principles() {
  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#0E1014',
        color: '#F4F1EC',
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
          style={{ marginBottom: '3.5rem' }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#F4F1EC',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            How I work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                paddingLeft: '1.25rem',
                borderLeft: '2px solid #2E5D3A',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#F4F1EC',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'rgba(244,241,236,0.7)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
