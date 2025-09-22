export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
  technologies: string[];
  duration: string;
  teamSize: number;
  role: string;
  difficulty: number;
  completedDate: string;
  features: string[];
  challenges: string;
  category: 'ME360' | 'CAD Projects' | 'Engineering Core';
}