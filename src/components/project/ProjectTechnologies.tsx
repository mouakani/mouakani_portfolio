import React from 'react';

interface ProjectTechnologiesProps {
  technologies: string[];
}

export function ProjectTechnologies({ technologies }: ProjectTechnologiesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.slice(0, 3).map((tech, i) => (
        <span 
          key={i}
          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm group-hover:bg-blue-100 transition-colors duration-300"
        >
          {tech}
        </span>
      ))}
      {technologies.length > 3 && (
        <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm group-hover:bg-gray-100 transition-colors duration-300">
          +{technologies.length - 3} more
        </span>
      )}
    </div>
  );
}