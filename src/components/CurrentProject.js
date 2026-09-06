import { motion } from 'motion/react';
import { ArrowUpRight, Bell, QrCode, Storefront } from '@phosphor-icons/react';

const features = [
  {
    icon: QrCode,
    title: 'QR subscription',
    text: 'Customers scan a code at the counter and subscribe to a queue or ticket in seconds.',
  },
  {
    icon: Bell,
    title: 'Web push delivery',
    text: 'Notifications fire the moment their order is up, no app install, no phone number.',
  },
  {
    icon: Storefront,
    title: 'Built for hospitality',
    text: 'Queues, broadcasts and broadcast offers for cafes, food trucks and busy venues.',
  },
];

export function CurrentProject() {
  return (
    <section
      id="pushnote"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
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
          style={{ marginBottom: '2.5rem' }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: '#2E5D3A',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '0.75rem',
            }}
          >
            Current project
          </p>
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
            PushNote
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#6B6560',
              lineHeight: 1.7,
              maxWidth: '56ch',
              marginBottom: '1rem',
            }}
          >
            PushNote is a business notification platform that helps businesses
            turn empty capacity and last-minute cancellations into revenue
            through its <strong>Broadcast channel</strong>. Businesses can
            instantly send targeted browser notifications to opted-in customers
            when they have a cancelled appointment, vacant booking slot, excess
            stock, last-minute availability, special offer, or other
            time-sensitive opportunity.
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#6B6560',
              lineHeight: 1.7,
              maxWidth: '56ch',
              marginBottom: '1rem',
            }}
          >
            The <strong>Accept Offer</strong> functionality makes this work:
            a business can broadcast an offer such as &ldquo;A 2pm appointment
            just became available &mdash; accept now for 20% off,&rdquo; and the
            customer can directly accept the offer from the notification,
            giving the business a fast way to recover otherwise lost revenue.
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#6B6560',
              lineHeight: 1.7,
              maxWidth: '56ch',
              marginBottom: '1.5rem',
            }}
          >
            It works for hairdressers, barbers, beauty salons, tattoo artists,
            massage therapists, physiotherapists, dentists, mechanics,
            restaurants, cafes, food trucks, personal trainers, photographers,
            accommodation providers, and other appointment- or capacity-based
            businesses.
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: '#6B6560',
              lineHeight: 1.7,
              maxWidth: '56ch',
              marginBottom: '2rem',
            }}
          >
            React 19 + TypeScript on the front, Go + Postgres on the back,
            Auth0 for identity, VAPID for delivery. Two repositories, one
            product.
          </p>
          <a
            href="https://pushnote.meliorus.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#0E1014',
              color: 'white',
              borderRadius: '9999px',
              fontSize: '0.9375rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background-color 0.2s, transform 0.1s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2E5D3A';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0E1014';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Visit pushnote.meliorus.co.nz
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  border: '1px solid #D6CFC4',
                }}
              >
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '0.5rem',
                    backgroundColor: '#2E5D3A',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Icon size={18} weight="regular" />
                </div>
                <h3
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: '#0E1014',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#6B6560',
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {f.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
