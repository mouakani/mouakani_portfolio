import React from 'react';
import { VideoPlayer } from '../video/VideoPlayer';

interface PrototypeTestingProps {
  video: string;
  description: string;
}

export function PrototypeTesting({ video, description }: PrototypeTestingProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Prototype Testing</h3>
      <div className="max-w-2xl mx-auto">
        <VideoPlayer src={video} className="w-full" />
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
}