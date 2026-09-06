import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';
import selfie from '../images/selfie.webp';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F1EC',
        paddingTop: '5rem',
        paddingBottom: '4rem',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          width: '100%',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {reduceMotion ? (
              <div>
                <HeroContent />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <HeroContent />
              </motion.div>
            )}
          </div>

          {/* Right: Photo */}
          <div className="order-first md:order-last">
            {reduceMotion ? (
              <img
                src={selfie}
                alt="Noel Williams"
                style={{
                  width: '100%',
                  maxWidth: '28rem',
                  height: 'auto',
                  borderRadius: '1.5rem',
                  marginLeft: 'auto',
                  display: 'block',
                }}
              />
            ) : (
              <motion.img
                src={selfie}
                alt="Noel Williams"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  maxWidth: '28rem',
                  height: 'auto',
                  borderRadius: '1.5rem',
                  marginLeft: 'auto',
                  display: 'block',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Eyebrow */}
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
        Software Engineer
      </p>

      {/* Headline */}
      <h1
        style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
          fontWeight: 700,
          color: '#0E1014',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
        }}
      >
        Software engineer.
        <br />
        Builder.
        <br />
        Curious about how things work.
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: '1.125rem',
          color: '#6B6560',
          lineHeight: 1.7,
          maxWidth: '36ch',
          marginBottom: '2.5rem',
        }}
      >
        I grew up between Papua New Guinea and New Zealand. Now I build
        across software, embedded systems and the NZ outdoors.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={scrollToWork}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.875rem 1.75rem',
            backgroundColor: '#2E5D3A',
            color: 'white',
            border: 'none',
            borderRadius: '9999px',
            fontSize: '0.9375rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.2s, transform 0.1s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#234a2d';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2E5D3A';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          View Work
          <ArrowRight size={16} weight="bold" />
        </button>

        <button
          onClick={scrollToContact}
          style={{
            padding: '0.875rem 1.75rem',
            backgroundColor: 'transparent',
            color: '#0E1014',
            border: '1.5px solid #0E1014',
            borderRadius: '9999px',
            fontSize: '0.9375rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.2s, color 0.2s, transform 0.1s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0E1014';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#0E1014';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Get in touch
        </button>
      </div>
    </>
  );
}
