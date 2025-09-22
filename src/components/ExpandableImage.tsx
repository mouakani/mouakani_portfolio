import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ExpandableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ExpandableImage({ src, alt, className }: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!src.startsWith('http')) {
    return <div className={`${className} ${src}`} />;
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-pointer`}
        onClick={() => setIsExpanded(true)}
      />

      {isExpanded && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"
          >
            <X size={24} />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={() => setIsExpanded(false)}
          />
        </div>
      )}
    </>
  );
}