import { motion } from 'motion/react';
import {
  GraduationCap,
  Wrench,
  BookOpen,
  Compass,
  Flask,
  Lightbulb,
} from '@phosphor-icons/react';
import { nowItems } from '../data/now';

const iconMap = {
  Learning: GraduationCap,
  Building: Wrench,
  Reading: BookOpen,
  Exploring: Compass,
  Fermenting: Flask,
  Curiosity: Lightbulb,
};

export function NowSection() {
  return (
    <section
      id="now"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#F4F1EC',
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
              color: '#0E1014',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}
          >
            Right now
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: '#6B6560',
              maxWidth: '50ch',
              lineHeight: 1.6,
            }}
          >
            What I am learning, building, reading and getting curious about at
            the moment. Updated when something shifts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {nowItems.map((item, i) => {
            const Icon = iconMap[item.label] || Lightbulb;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid #D6CFC4',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '0.5rem',
                    backgroundColor: '#2E5D3A',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={18} weight="regular" />
                </div>
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.6875rem',
                      color: '#6B6560',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      display: 'block',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {item.label}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '1rem',
                        color: '#0E1014',
                        lineHeight: 1.6,
                        fontWeight: 300,
                        textDecoration: 'underline',
                        textDecorationColor: '#2E5D3A',
                        textUnderlineOffset: '3px',
                      }}
                    >
                      {item.item}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontSize: '1rem',
                        color: '#0E1014',
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      {item.item}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
