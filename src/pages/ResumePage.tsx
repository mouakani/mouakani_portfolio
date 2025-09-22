import React from 'react';
import { FileDown } from 'lucide-react';

export function ResumePage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <div className="flex justify-between items-center">
            <p className="text-gray-600 max-w-2xl">
              A comprehensive overview of my professional experience, education, and achievements.
            </p>
            <a 
              href="https://storage.googleapis.com/gridpicture/Ouakani_Resume%20(4).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FileDown size={20} />
              Open Resume
            </a>
          </div>
        </div>

        <div className="space-y-12">
          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Boston University</h3>
              <p className="text-gray-600">Bachelor of Science in Mechanical Engineering</p>
              <p className="text-gray-500">Expected Graduation: May 2025</p>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Mechanical Design Engineer Intern</h3>
                <p className="text-blue-600">Fedorka Enterprises LLC.</p>
                <p className="text-gray-600">Danvers, MA | May 2024 - July 2024</p>
                <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                  <li>Collaborated within a 5-person team to design and prototype a beverage-making refrigeration device</li>
                  <li>Led data collection and analysis through off-the-shelf product testing and teardowns</li>
                  <li>Optimized mechanical components for beverage-making device</li>
                  <li>Developed and refined sub-system for dispensing components</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Design & CAD</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>SolidWorks</li>
                    <li>AutoCAD</li>
                    <li>Computer-Aided Design (CAD)</li>
                    <li>Mechanical Product Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Manufacturing</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Prototyping</li>
                    <li>Machining</li>
                    <li>Laser Cutting</li>
                    <li>CNC Machining</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}