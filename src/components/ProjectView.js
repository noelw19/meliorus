import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faGithub, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrand } from '@fortawesome/free-brands-svg-icons';

/**
 * ProjectView Component
 * Displays detailed information about a selected project
 */
export function ProjectView({ project, onBack }) {
  if (!project) return null;

  const isGithubLink = project.link?.includes('github');
  const linkIcon = isGithubLink ? faGithubBrand : faGlobe;
  const linkText = isGithubLink ? 'View on GitHub' : 'Visit Site';

  const renderDescription = () => {
    if (!project.description || project.description.length === 0) {
      return null;
    }

    let isFirstBlock = true;

    return (
      <div className="max-w-none space-y-0">
        {project.description.map((block, idx) => {
          // Paragraph block
          if (block.type === 'paragraph') {
            const isIntro = isFirstBlock;
            isFirstBlock = false;
            return (
              <div 
                key={`block-${idx}`}
                className={`${
                  isIntro 
                    ? 'mb-7 md:mb-8' 
                    : 'mb-6 md:mb-7'
                }`}
              >
                <p 
                  className={`${
                    isIntro 
                      ? 'text-base md:text-lg text-[#5A5248] leading-[1.8] font-light' 
                      : 'text-[15px] md:text-base text-[#5A5248] leading-[1.75] font-light'
                  }`}
                >
                  {block.content}
                </p>
              </div>
            );
          }

          // Heading block
          if (block.type === 'heading') {
            isFirstBlock = false;
            return (
              <div 
                key={`block-${idx}`}
                className="mb-4 md:mb-5 mt-2"
              >
                <h3 className="text-base md:text-lg font-medium text-[#2C2416] tracking-tight">
                  {block.content}
                </h3>
              </div>
            );
          }

          // List block
          if (block.type === 'list' && block.items) {
            isFirstBlock = false;
            return (
              <div 
                key={`block-${idx}`}
                className="my-6 md:my-8"
              >
                <ul className="space-y-4 md:space-y-5 pl-0 list-none">
                  {block.items.map((item, itemIdx) => (
                    <li 
                      key={`item-${idx}-${itemIdx}`}
                      className="flex items-start gap-4 group/item"
                    >
                      {/* Bullet indicator with enhanced styling */}
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-4 h-4 rounded-full bg-[#FAF8F5] border-2 border-[#E8E3DD] flex items-center justify-center group-hover/item:border-[#C97D60] group-hover/item:bg-[#FFFBF8] transition-all duration-200 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C97D60] group-hover/item:bg-[#B86A4F] group-hover/item:scale-125 transition-all duration-200"></span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-0.5">
                        <p className="text-[#5A5248] leading-relaxed text-[15px] md:text-base font-light">
                          {item}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          return null;
        })}
      </div>
    );
  };

  return (
    <div className="bg-[#FFFBF8] rounded-lg shadow-sm border border-[#E8E3DD] overflow-hidden">
      {/* Header with back button */}
      <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 border-b border-[#E8E3DD] bg-gradient-to-r from-[#FFFBF8] to-[#FAF8F5]">
        <button 
          className="group px-4 py-2 text-sm text-[#5A5248] border border-[#E8E3DD] rounded-md hover:bg-[#E8E3DD] hover:text-[#2C2416] hover:border-[#D4CEC6] transition-all duration-200 font-light flex items-center gap-2"
          onClick={onBack}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-xs transition-transform group-hover:-translate-x-0.5" />
          <span>Back to projects</span>
        </button>
      </div>
      
      {/* Content */}
      <div className="px-6 md:px-8 py-6 md:py-8">
        {/* Work in progress badge */}
        {project.unfinished && (
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-[#FFF4F0] border border-[#C97D60] rounded-md">
            <div className="w-2 h-2 bg-[#C97D60] rounded-full animate-pulse"></div>
            <p className="text-sm text-[#C97D60] font-medium">Work in progress</p>
          </div>
        )}
        
        {/* Title and Link */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2C2416] mb-4">
            {project.title}
          </h1>
          
          {/* External link button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-[#2C2416] border border-[#E8E3DD] rounded-md hover:bg-[#E8E3DD] hover:border-[#D4CEC6] transition-all duration-200 font-light group"
          >
            <FontAwesomeIcon icon={linkIcon} className="text-xs" />
            <span>{linkText}</span>
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
        </div>

        {/* Short description as lead text */}
        {project.shortDesc && (
          <div className="mb-8 pb-6 border-b border-[#E8E3DD]">
            <p className="text-base md:text-lg text-[#5A5248] font-light leading-relaxed italic">
              {project.shortDesc}
            </p>
          </div>
        )}

        {/* Main description */}
        <div className="mb-8 md:mb-10">
          {renderDescription()}
        </div>

        {/* Tech stack if available */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-8 pb-6 border-b border-[#E8E3DD]">
            <h3 className="text-sm font-medium text-[#2C2416] mb-3 uppercase tracking-wide">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs text-[#5A5248] bg-[#FAF8F5] border border-[#E8E3DD] rounded-md font-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Features if available */}
        {project.features && project.features.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-medium text-[#2C2416] mb-3 uppercase tracking-wide">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#C97D60] mt-1.5 flex-shrink-0">•</span>
                  <span className="text-[#5A5248] leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Project Image */}
        <div className="mt-10 md:mt-12 pt-8 border-t border-[#E8E3DD]">
          <div className="relative rounded-lg overflow-hidden border border-[#E8E3DD] shadow-sm bg-[#FAF8F5]">
            <img
              className="w-full h-auto object-contain"
              src={project.img}
              alt={project.title}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

