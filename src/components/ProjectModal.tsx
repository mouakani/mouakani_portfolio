import React from 'react';
import { X, Calendar, Users, Trophy, GaugeCircle, Link } from 'lucide-react';
import { Project } from '../types/project';
import { ExpandableImage } from './ExpandableImage';
import { DifficultyIndicator } from './DifficultyIndicator';
import { VideoPlayer } from './video/VideoPlayer';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-[60] shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="text-blue-600" size={20} />
              <span className="text-gray-600">{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-blue-600" size={20} />
              <span className="text-gray-600">{project.teamSize} Team Member{project.teamSize > 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="text-blue-600" size={20} />
              <span className="text-gray-600">{project.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <GaugeCircle className="text-blue-600" size={20} />
              <DifficultyIndicator difficulty={project.difficulty} size="md" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <ExpandableImage
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover rounded-lg mb-6"
              />
              <p className="text-gray-600">{project.description}</p>
            </div>

            {project.video && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {project.id === 5 ? 'Simulation' : 'Demo'}
                </h3>
                <div className="max-w-2xl mx-auto">
                  <VideoPlayer src={project.video} className="w-full" />
                </div>
                {project.id === 5 && (
                  <p className="mt-4 text-gray-600">
                    This project aimed to analyze the motion and stability of a bar mounted on a moving car using SolidWorks simulations. The simulations determined the maximum theoretical acceleration of the car without causing the bar to tip, calculated to be 87 cm/s². A triangular velocity profile was chosen to maintain a constant acceleration below this limit, ensuring the reaction force remained above zero and the bar remained stable. These insights provided a foundation for optimizing the system's motion and stability.
                  </p>
                )}
              </div>
            )}

            {project.id === 5 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Theoretical Calculations</h3>
                <div className="max-w-2xl mx-auto">
                  <img
                    src="https://storage.googleapis.com/gridpicture/output%20(1).png"
                    alt="Theoretical calculations graph"
                    className="w-full rounded-lg shadow-md mb-4"
                  />
                  <p className="text-gray-600">
                    The graph illustrates the cart's motion under a theoretical acceleration rate, following a triangular velocity profile. The velocity peaks at 71.4 cm/s, with the cart travelling a distance of 10 feet then returning 10 feet to its starting point.
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Challenges & Solutions</h3>
              <p className="text-gray-600">{project.challenges}</p>
            </div>

            {project.sources && project.sources.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
                <div className="space-y-3">
                  {project.sources.map((source, index) => (
                    <a
                      key={index}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <Link size={20} />
                      {source.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}