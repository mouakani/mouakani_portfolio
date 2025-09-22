import React from 'react';
import { Calendar, Users, Trophy, Building } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
          <a 
            href="https://storage.googleapis.com/gridpicture/Ouakani_Resume%20(4).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4"
          >
            Open Resume
          </a>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Building className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Mechanical Design Engineer Intern</h3>
              <p className="text-lg text-blue-600">Fedorka Enterprises LLC.</p>
              <p className="text-gray-600">Danvers, MA</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="text-blue-600" size={20} />
              <span className="text-gray-600">May 2024 - July 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-blue-600" size={20} />
              <span className="text-gray-600">5-person team</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="text-blue-600" size={20} />
              <span className="text-gray-600">Design & Prototyping</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Collaborated within a 5-person team to design and prototype a beverage-making refrigeration device for a plant-based food company.</li>
              <li>Led data collection and analysis through off-the-shelf product testing and teardowns, identifying areas for improvement in system, resulting in a 15% increase in sub-system efficiency.</li>
              <li>Optimized mechanical components for beverage-making device, focusing on improving refrigeration efficiency and developing a high-torque drive resulting in a 30% operational noise reduction.</li>
              <li>Developed and refined sub-system for dispensing components, utilizing 3D CAD software and concentrating on precision and functionality.</li>
            </ul>
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">CAD Design</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Prototyping</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Data Analysis</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">System Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}