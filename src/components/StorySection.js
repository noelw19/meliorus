import { motion } from 'motion/react';
import { Globe, Compass, HouseSimple } from '@phosphor-icons/react';

const markers = [
  {
    icon: Globe,
    label: 'Papua New Guinea',
    range: '0 - 12',
    text: 'Growing up between two worlds. I learned you do not need much to live well, and that failure only matters when you stop trying.',
  },
  {
    icon: HouseSimple,
    label: 'New Zealand',
    range: '2010',
    text: 'Boarding school. Learning to adapt. Discovering that curiosity travels better than certainty.',
  },
  {
    icon: Compass,
    label: 'Aotearoa',
    range: 'Now',
    text: 'Software, embedded, IoT, the campervan, the surf, the forest. The work and the life keep teaching each other.',
  },
];

export function StorySection() {
  return (
    <section
      id="about"
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
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: '#2E5D3A',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '1rem',
            }}
          >
            Story
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#0E1014',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '4rem',
              maxWidth: '20ch',
            }}
          >
            Two countries, one workshop.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left: Timeline markers */}
          <div className="md:col-span-5">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {markers.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'flex', gap: '1rem' }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '0.75rem',
                        backgroundColor: '#0E1014',
                        color: '#F4F1EC',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={20} weight="regular" />
                    </div>
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.75rem',
                          marginBottom: '0.5rem',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: '1.0625rem',
                            fontWeight: 500,
                            color: '#0E1014',
                          }}
                        >
                          {m.label}
                        </h3>
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.75rem',
                            color: '#6B6560',
                          }}
                        >
                          {m.range}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          color: '#6B6560',
                          lineHeight: 1.6,
                        }}
                      >
                        {m.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Bio + portrait */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  fontSize: '1.0625rem',
                  color: '#0E1014',
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                <p>
                  I grew up in Papua New Guinea before moving to New Zealand
                  for boarding school in 2010. Growing up between two very
                  different countries gave me a different perspective on
                  success, happiness and resilience. It taught me that you do
                  not need much to live well, and that failure only matters
                  when you stop trying.
                </p>
                <p>
                  I have always been fascinated by understanding how things
                  work. As a kid I was constantly taking things apart, building
                  small inventions and experimenting with electronics. One of
                  my favourite memories is building my own tattoo machine at
                  eleven years old after studying one made by a neighbour. That
                  same curiosity eventually led me to software engineering.
                </p>
                <p>
                  Today I work across software, DevOps, embedded systems and
                  IoT, choosing the tools that best solve the problem rather
                  than limiting myself to one technology stack. My biggest
                  motivation is building products with genuine utility.
                </p>
              </div>

              {/* Word labels */}
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginTop: '2.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid #D6CFC4',
                }}
              >
                {['Engineer', 'Explorer', 'Builder'].map((word) => (
                  <span
                    key={word}
                    style={{
                      fontSize: '0.875rem',
                      color: '#6B6560',
                      fontWeight: 400,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
