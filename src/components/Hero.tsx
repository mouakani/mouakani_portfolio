import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Welcome!
            
          </h1>
          <p className="text-xl text-gray-600 mb-8">
           Mechanical engineer by day, trailblazer by weekend. 
            Passionate about design and manufacturing engineering—and getting lost in the woods.
          </p>
          <div className="flex gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <img 
            src="https://www.dropbox.com/scl/fi/wwo1kb1f7so4scc6jstud/Ouakani_Headshot.jpg?rlkey=ynd4toxam54rkgkhaqyrpic0v&st=1iwgf6td&raw=1"
            alt="Developer workspace"
            className="rounded-lg shadow-xl max-w-xs w-full h-auto ml-2 md:-ml-8"
          />
        </div>
      </div>
    </section>
  );
}