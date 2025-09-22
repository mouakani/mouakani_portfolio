import React from 'react';

interface DifficultyIndicatorProps {
  difficulty: number;
  size?: 'sm' | 'md';
}

export function DifficultyIndicator({ difficulty, size = 'sm' }: DifficultyIndicatorProps) {
  const getBarColor = (barIndex: number) => {
    if (difficulty <= 2) {
      return barIndex === 0 ? 'bg-green-500' : 'bg-gray-200';
    }
    if (difficulty === 3) {
      return barIndex <= 1 ? 'bg-yellow-500' : 'bg-gray-200';
    }
    return barIndex <= 2 ? 'bg-red-500' : 'bg-gray-200';
  };

  const barHeight = size === 'sm' ? 'h-1.5' : 'h-2';
  const containerWidth = size === 'sm' ? 'w-12' : 'w-16';
  const spacing = size === 'sm' ? 'gap-0.5' : 'gap-1';

  return (
    <div className={`flex ${spacing} ${containerWidth}`}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`flex-1 ${barHeight} rounded-full ${getBarColor(index)}`}
        />
      ))}
    </div>
  );
}