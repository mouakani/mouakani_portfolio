import React, { useCallback, useEffect } from 'react';
import { X } from 'lucide-react';
import { Project } from '../../types/project';
import { ProjectHeader } from './ProjectHeader';
import { ProjectDescription } from './ProjectDescription';
import { ProjectFeatures } from './ProjectFeatures';
import { ProjectVideo } from './ProjectVideo';
import { TheoreticalCalculations } from './TheoreticalCalculations';
import { PrototypeTesting } from './PrototypeTesting';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const handleClickOutside = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleClickOutside}
    >
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
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
          <ProjectHeader
            duration={project.duration}
            teamSize={project.teamSize}
            role={project.role}
            difficulty={project.difficulty}
          />

          <div className="space-y-8">
            <ProjectDescription
              image={project.image}
              title={project.title}
              description={project.description}
            />

            <ProjectFeatures
              features={project.features}
              technologies={project.technologies}
            />

            {project.video && (
              <ProjectVideo
                src={project.video}
                title={project.id === 5 ? 'Simulation' : 'Demo'}
                description={project.id === 5 ? 
                  "This project aimed to analyze the motion and stability of a bar mounted on a moving car using SolidWorks simulations. The simulations determined the maximum theoretical acceleration of the car without causing the bar to tip, calculated to be 87 cm/s². A triangular velocity profile was chosen to maintain a constant acceleration below this limit, ensuring the reaction force remained above zero and the bar remained stable. These insights provided a foundation for optimizing the system's motion and stability." : 
                  undefined
                }
              />
            )}

            {project.id === 5 && (
              <>
                <TheoreticalCalculations
                  image="https://storage.googleapis.com/gridpicture/output%20(1).png"
                  description="The graph illustrates the cart's motion under a theoretical acceleration rate, following a triangular velocity profile. The velocity peaks at 71.4 cm/s, with the cart travelling a distance of 10 feet then returning 10 feet to its starting point."
                />

                <PrototypeTesting
                  video="https://storage.googleapis.com/gridpicture/IMG_1331.MOV"
                  description="The project was successful, as the cart successfully transported the beam across a 5-foot distance and back without toppling. The video above showcases a successful demonstration of the system in action. Potential improvements could include enhancing the cart's stability by optimizing the weight distribution or incorporating a more robust balancing mechanism. Additionally, introducing a customizable control system would allow for easy adjustments to the speed, enabling the cart to adapt more effectively to different objects and load conditions."
                />
              </>
            )}

            <div>
              <h3 className="text-xl font-semibold mb-4">Challenges & Solutions</h3>
              <p className="text-gray-600">{project.challenges}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}