import { motion } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';
import { getAllProjects } from '../data/projects';

function handleProjectClick(identifier) {
  window.location.href = window.location.origin + '?view=' + identifier;
}

export function SelectedWork() {
  const projects = getAllProjects();
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
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
          style={{ marginBottom: '3rem' }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#0E1014',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Selected Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured project — large tile */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7"
            >
              <ProjectTile project={featured} large />
            </motion.div>
          )}

          {/* Rest — smaller tiles */}
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5"
            >
              <ProjectTile project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectTile({ project, large }) {
  return (
    <div
      onClick={() => handleProjectClick(project.identifier)}
      style={{
        position: 'relative',
        height: large ? '28rem' : '20rem',
        borderRadius: '1rem',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#D6CFC4',
      }}
      className="group"
    >
      <img
        src={project.img}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
        }}
        className="group-hover:scale-[1.03]"
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(14,16,20,0.85) 0%, rgba(14,16,20,0.2) 50%, transparent 100%)',
        }}
      />

      {/* Hover overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(14,16,20,0.75)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2rem',
        }}
        className="group-hover:opacity-100"
      >
        <div style={{ maxWidth: '32rem' }}>
          <h3
            style={{
              fontSize: large ? '1.75rem' : '1.25rem',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.6,
              marginBottom: '1.25rem',
            }}
          >
            {project.shortDesc}
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            View project
            <ArrowRight size={14} weight="bold" />
          </div>
        </div>
      </div>

      {/* Bottom content (always visible) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1.5rem',
        }}
      >
        <h3
          style={{
            fontSize: large ? '1.25rem' : '1rem',
            fontWeight: 600,
            color: 'white',
            lineHeight: 1.3,
            marginBottom: '0.5rem',
          }}
        >
          {project.title}
        </h3>
        {project.techStack && project.techStack.length > 0 && (
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6875rem',
                  color: 'rgba(255,255,255,0.7)',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Status badge */}
      {project.status === 'in-progress' && (
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: '#2E5D3A',
            color: 'white',
            fontSize: '0.6875rem',
            fontWeight: 500,
            padding: '0.375rem 0.75rem',
            borderRadius: '9999px',
          }}
        >
          In progress
        </div>
      )}
    </div>
  );
}
