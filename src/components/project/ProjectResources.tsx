import React from 'react';
import { Link } from 'lucide-react';

interface Source {
  title: string;
  url: string;
}

interface ProjectResourcesProps {
  sources: Source[];
}

export function ProjectResources({ sources }: ProjectResourcesProps) {
  if (!sources?.length) return null;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
      <div className="space-y-3">
        {sources.map((source, index) => (
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
  );
}