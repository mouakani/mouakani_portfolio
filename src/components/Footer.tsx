import React from 'react';
import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Mohamed Ouakani</h3>
            <p className="text-gray-400">Mechanical Engineering, Boston University</p>
          </div>
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/mouakani/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Email: mouakani1@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}