import React from 'react';
import { Card } from './Card';

/**
 * ProjectsGrid Component
 * Displays projects in a clean, minimalist grid layout
 */
export function ProjectsGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#5A5248] font-light">No projects to display</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            identifier={project.identifier}
            num={project.id}
            unfinished={project.unfinished}
            img={project.img}
            title={project.title}
            description={project.shortDesc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

