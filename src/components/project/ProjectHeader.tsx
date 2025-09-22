import React from 'react';
import { Calendar, Users, Trophy, GaugeCircle } from 'lucide-react';
import { DifficultyIndicator } from '../DifficultyIndicator';

interface ProjectHeaderProps {
  duration: string;
  teamSize: number;
  role: string;
  difficulty: number;
}

export function ProjectHeader({ duration, teamSize, role, difficulty }: ProjectHeaderProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div className="flex items-center gap-2">
        <Calendar className="text-blue-600" size={20} />
        <span className="text-gray-600">{duration}</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="text-blue-600" size={20} />
        <span className="text-gray-600">{teamSize} Team Member{teamSize > 1 ? 's' : ''}</span>
      </div>
      <div className="flex items-center gap-2">
        <Trophy className="text-blue-600" size={20} />
        <span className="text-gray-600">{role}</span>
      </div>
      <div className="flex items-center gap-2">
        <GaugeCircle className="text-blue-600" size={20} />
        <DifficultyIndicator difficulty={difficulty} size="md" />
      </div>
    </div>
  );
}