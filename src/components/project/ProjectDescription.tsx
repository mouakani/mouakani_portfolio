import React from 'react';
import { ExpandableImage } from '../ExpandableImage';

interface ProjectDescriptionProps {
  image: string;
  title: string;
  description: string;
}

export function ProjectDescription({ image, title, description }: ProjectDescriptionProps) {
  return (
    <div>
      <ExpandableImage
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover rounded-lg mb-6"
      />
      <p className="text-gray-600">{description}</p>
    </div>
  );
}