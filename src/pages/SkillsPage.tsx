import React from 'react';
import { 
  Wrench, 
  Cpu, 
  Layout, 
  Users,
  Hammer,
  Cog
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Mechanical Design',
    icon: Wrench,
    skills: [
      'SolidWorks',
      'AutoCAD',
      'Computer-Aided Design (CAD)',
      'Mechanical Product Design',
      'Thermodynamics'
    ]
  },
  {
    title: 'Manufacturing & Prototyping',
    icon: Hammer,
    skills: [
      'Prototyping',
      'Machining',
      'Laser Cutting',
      'Band Saw',
      'CNC Machining',
      'Lathe',
      'Drill Press',
      'Soldering'
    ]
  },
  {
    title: 'Electronics & Programming',
    icon: Cpu,
    skills: [
      'Arduino',
      'Electrical Wiring',
      'MATLAB',
      'Data Analysis'
    ]
  },
  {
    title: 'Software Tools',
    icon: Layout,
    skills: [
      'Microsoft Office',
      'Google Workspace',
      'CAD Software',
      'MATLAB'
    ]
  },
  {
    title: 'Project Management',
    icon: Users,
    skills: [
      'Project Management',
      'Communication',
      'Team Leadership',
      'Documentation'
    ]
  },
  {
    title: 'Technical Skills',
    icon: Cog,
    skills: [
      'Technical Drawing',
      'Mechanical Assembly',
      'Testing & Validation',
      'Quality Control'
    ]
  }
];

export function SkillsPage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-gray-600 max-w-2xl">
            A comprehensive overview of my technical skills, expertise, and professional capabilities
            in mechanical engineering, design, and manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}