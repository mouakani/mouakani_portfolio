import React from 'react';

interface TheoreticalCalculationsProps {
  image: string;
  description: string;
}

export function TheoreticalCalculations({ image, description }: TheoreticalCalculationsProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Theoretical Calculations</h3>
      <div className="max-w-2xl mx-auto">
        <img
          src={image}
          alt="Theoretical calculations graph"
          className="w-full rounded-lg shadow-md mb-4"
        />
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}