import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types/project';
import { ProjectTechnologies } from './ProjectTechnologies';

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        <ProjectTechnologies technologies={project.technologies} />
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500">
            {project.teamSize} Team Member{project.teamSize > 1 ? 's' : ''}
          </span>
          <button 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group-hover:translate-x-1"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            Learn More
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}