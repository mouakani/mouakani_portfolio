import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Linkedin, ChevronDown } from 'lucide-react';

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const projectCategories = [
    { name: 'All Projects', path: '/projects' },
    { name: 'ME360', path: '/projects?category=ME360' },
    { name: 'CAD Projects', path: '/projects?category=CAD Projects' },
    { name: 'Engineering Core', path: '/projects?category=Engineering Core' },
  ];

  const handleCategoryClick = (path: string) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900">
          Mohamed Ouakani
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          
          <div className="relative">
            <button
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Projects
              <ChevronDown 
                size={16} 
                className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {isDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-1 py-2 bg-white rounded-lg shadow-lg w-48 border border-gray-100"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {projectCategories.map((category) => (
                  <button
                    key={category.path}
                    onClick={() => handleCategoryClick(category.path)}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/skills" className="text-gray-600 hover:text-gray-900">Skills</Link>
          <Link to="/experience" className="text-gray-600 hover:text-gray-900">Experience</Link>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/mouakani/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-900"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}