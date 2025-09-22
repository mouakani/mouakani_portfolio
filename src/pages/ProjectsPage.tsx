import React, { useState, useEffect } from 'react';
import { ArrowRight, Filter, Search, SortAsc } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { ProjectModal } from '../components/project/ProjectModal';
import { projects } from '../data/projects';
import { Project } from '../types/project';
import { DifficultyIndicator } from '../components/DifficultyIndicator';

export function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('difficulty');

  // Get category from URL params
  const categoryParam = searchParams.get('category');
  const selectedCategory = categoryParam || 'All';

  const categories = ['All', 'ME360', 'CAD Projects', 'Engineering Core'];
  
  const sortOptions = [
    { value: 'difficulty', label: 'Complexity (High to Low)' },
    { value: 'difficulty-asc', label: 'Complexity (Low to High)' },
    { value: 'date-desc', label: 'Date (Newest First)' },
    { value: 'date-asc', label: 'Date (Oldest First)' }
  ];

  const getDateValue = (date: string) => {
    const [season, year] = date.split(' ');
    const seasonValue = season === 'Spring' ? 0 : 6;
    return parseInt(year) * 12 + seasonValue;
  };

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredProjects = projects
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'difficulty':
          return b.difficulty - a.difficulty;
        case 'difficulty-asc':
          return a.difficulty - b.difficulty;
        case 'date-desc':
          return getDateValue(b.completedDate) - getDateValue(a.completedDate);
        case 'date-asc':
          return getDateValue(a.completedDate) - getDateValue(b.completedDate);
        default:
          return 0;
      }
    });

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <SortAsc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <DifficultyIndicator difficulty={project.difficulty} />
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm group-hover:bg-blue-100 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm group-hover:bg-gray-100 transition-colors duration-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">
                      {project.teamSize} Team Member{project.teamSize > 1 ? 's' : ''}
                    </span>
                    <button 
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group-hover:translate-x-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      Learn More
                      <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                  <div className="text-center border-t border-gray-100 pt-2 mt-2">
                    <span className="text-sm text-gray-500">
                      {project.completedDate} • {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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