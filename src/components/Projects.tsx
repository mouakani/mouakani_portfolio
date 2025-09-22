import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectModal } from './project/ProjectModal';
import { ProjectCard } from './project/ProjectCard';
import { projects } from '../data/projects';
import { Project } from '../types/project';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Show cart stability project and two others for featured section
  const featuredProjects = [
    projects.find(p => p.id === 5)!, // Cart Stability
    projects.find(p => p.id === 2)!, // Point-to-Point Communication
    projects.find(p => p.id === 4)!, // Temperature Monitor
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
}