import React from 'react';
import { VideoPlayer } from '../video/VideoPlayer';

interface ProjectVideoProps {
  src: string;
  title: string;
  description?: string;
}

export function ProjectVideo({ src, title, description }: ProjectVideoProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="max-w-2xl mx-auto">
        <VideoPlayer src={src} className="w-full" />
      </div>
      {description && (
        <p className="mt-4 text-gray-600">{description}</p>
      )}
    </div>
  );
}