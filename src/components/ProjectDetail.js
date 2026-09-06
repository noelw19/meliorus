import { motion } from 'motion/react';
import { ArrowLeft, ArrowSquareOut, GithubLogo, Globe } from '@phosphor-icons/react';
import { DescriptionTypes } from '../data/projects';

export function ProjectDetail({ project, onBack }) {
  const isGithub = project.link?.includes('github');
  const LinkIcon = isGithub ? GithubLogo : Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.625rem 1rem',
          backgroundColor: 'transparent',
          border: '1px solid #D6CFC4',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          color: '#6B6560',
          cursor: 'pointer',
          marginBottom: '2.5rem',
          transition: 'border-color 0.2s, color 0.2s, background-color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#0E1014';
          e.currentTarget.style.color = '#0E1014';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#D6CFC4';
          e.currentTarget.style.color = '#6B6560';
        }}
      >
        <ArrowLeft size={14} />
        Back to projects
      </button>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        {/* Status badge */}
        {project.status === 'in-progress' && (
          <span
            style={{
              display: 'inline-block',
              padding: '0.375rem 0.875rem',
              backgroundColor: '#2E5D3A',
              color: 'white',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 500,
              marginBottom: '1rem',
            }}
          >
            In progress
          </span>
        )}

        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 700,
            color: '#0E1014',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
          }}
        >
          {project.title}
        </h1>

        {/* External link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.625rem 1.25rem',
            backgroundColor: '#2E5D3A',
            color: 'white',
            border: 'none',
            borderRadius: '9999px',
            fontSize: '0.9375rem',
            fontWeight: 500,
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#234a2d')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2E5D3A')}
        >
          <LinkIcon size={16} />
          {isGithub ? 'View on GitHub' : 'Visit site'}
          <ArrowSquareOut size={14} />
        </a>
      </div>

      {/* Short desc */}
      {project.shortDesc && (
        <p
          style={{
            fontSize: '1.125rem',
            color: '#6B6560',
            lineHeight: 1.7,
            marginBottom: '2rem',
            fontWeight: 300,
            maxWidth: '70ch',
          }}
        >
          {project.shortDesc}
        </p>
      )}

      {/* Meta row */}
      {(project.role || project.year || project.status) && (
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            marginBottom: '2rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid #D6CFC4',
            flexWrap: 'wrap',
          }}
        >
          {project.role && (
            <div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6875rem',
                  color: '#6B6560',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                Role
              </span>
              <span style={{ fontSize: '0.9375rem', color: '#0E1014' }}>
                {project.role}
              </span>
            </div>
          )}
          {project.year && (
            <div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6875rem',
                  color: '#6B6560',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                Year
              </span>
              <span style={{ fontSize: '0.9375rem', color: '#0E1014' }}>
                {project.year}
              </span>
            </div>
          )}
          {project.status && (
            <div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6875rem',
                  color: '#6B6560',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                Status
              </span>
              <span
                style={{
                  fontSize: '0.9375rem',
                  color: project.status === 'shipped' ? '#2E5D3A' : '#6B6560',
                  textTransform: 'capitalize',
                }}
              >
                {project.status}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Tech stack */}
      {project.techStack && project.techStack.length > 0 && (
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#6B6560',
                backgroundColor: '#F4F1EC',
                border: '1px solid #D6CFC4',
                padding: '0.375rem 0.75rem',
                borderRadius: '0.375rem',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Description blocks */}
      {project.description && project.description.length > 0 && (
        <div
          style={{
            maxWidth: '70ch',
            marginBottom: '3rem',
          }}
        >
          {project.description.map((block, idx) => {
            if (block.type === DescriptionTypes.PARAGRAPH) {
              return (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.0625rem',
                    color: '#0E1014',
                    lineHeight: 1.8,
                    fontWeight: 300,
                    marginBottom: '1.25rem',
                  }}
                >
                  {block.content}
                </p>
              );
            }
            if (block.type === DescriptionTypes.HEADING) {
              return (
                <h3
                  key={idx}
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#0E1014',
                    marginBottom: '1rem',
                    marginTop: '0.5rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {block.content}
                </h3>
              );
            }
            if (block.type === DescriptionTypes.LIST && block.items) {
              return (
                <ul
                  key={idx}
                  style={{
                    paddingLeft: '0',
                    listStyle: 'none',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {block.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'flex-start',
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: '1.25rem',
                          height: '1.25rem',
                          borderRadius: '50%',
                          backgroundColor: '#2E5D3A',
                          marginTop: '0.25rem',
                          display: 'inline-block',
                        }}
                      />
                      <span
                        style={{
                          fontSize: '1.0625rem',
                          color: '#0E1014',
                          lineHeight: 1.7,
                          fontWeight: 300,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      )}

      {/* Project image */}
      {project.img && (
        <div
          style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '1px solid #D6CFC4',
            marginTop: '2rem',
          }}
        >
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      )}
    </motion.div>
  );
}
