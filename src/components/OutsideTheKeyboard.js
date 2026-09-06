import { motion } from 'motion/react';
import { Tent, Waves, Leaf, Wrench } from '@phosphor-icons/react';
import selfie from '../images/selfie.webp';

const items = [
  {
    icon: Tent,
    text: 'Travelling New Zealand in the campervan, one beach at a time.',
  },
  {
    icon: Waves,
    text: 'Learning to surf. Still wiping out more than standing up.',
  },
  {
    icon: Leaf,
    text: 'Foraging for edible plants. The forest is a grocery store if you know what to look for.',
  },
  {
    icon: Wrench,
    text: 'Building small inventions. Still have not outgrown the need to understand how things work.',
  },
];

export function OutsideTheKeyboard() {
  return (
    <section
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6"
          >
            <img
              src={selfie}
              alt="Noel outdoors"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '36rem',
                objectFit: 'cover',
                borderRadius: '1.5rem',
              }}
            />
          </motion.div>

          {/* Content */}
          <div className="md:col-span-6">
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
                  marginBottom: '0.75rem',
                }}
              >
                Outside the keyboard
              </h2>
              <p
                style={{
                  fontSize: '1.0625rem',
                  color: '#6B6560',
                  lineHeight: 1.6,
                  marginBottom: '2.5rem',
                  maxWidth: '40ch',
                }}
              >
                The work and the life keep teaching each other. A few of the
                things that keep the curiosity going.
              </p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        color: '#2E5D3A',
                        marginTop: '0.125rem',
                      }}
                    >
                      <Icon size={24} weight="regular" />
                    </div>
                    <p
                      style={{
                        fontSize: '1.0625rem',
                        color: '#0E1014',
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
