import React from 'react';
import type { ShowcaseProject } from '../../types';
import { Heart } from 'lucide-react';

interface ProjectCardProps {
  project: ShowcaseProject;
  courseTitle: string;
  onSelect: () => void;
  onLike: (projectId: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, courseTitle, onSelect, onLike }) => {
  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from opening when liking
    onLike(project.id);
  };
  
  return (
    <div 
      className="bg-surface rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white text-lg font-bold truncate">{project.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-text-secondary mb-2">From "{courseTitle}"</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-text-secondary">by {project.author.fullName}</p>
          <button 
            onClick={handleLikeClick}
            className="flex items-center gap-1 text-text-secondary hover:text-red-500 transition-colors"
          >
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">{project.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
