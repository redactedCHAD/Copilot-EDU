import React from 'react';
import type { ShowcaseProject } from '../../types';
import { X, Heart } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ShowcaseProject;
  courseTitle: string;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, courseTitle, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-surface rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-border flex justify-between items-center sticky top-0 bg-surface">
            <h2 className="text-xl font-bold text-text-primary">{project.title}</h2>
            <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
                <X className="w-6 h-6" />
            </button>
        </div>
        <div className="p-6">
            <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-contain rounded-md mb-6 max-h-[50vh]" />
            
            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-sm text-text-secondary">by {project.author.fullName}</p>
                    <p className="text-xs text-gray-400">Submitted {project.createdAt}</p>
                </div>
                 <div className="flex items-center gap-2 text-text-secondary">
                    <Heart className="w-5 h-5 text-red-500" fill="currentColor"/>
                    <span className="font-bold text-lg">{project.likes}</span>
                </div>
            </div>

            <p className="text-sm text-text-secondary mb-4 italic">Project for course: "{courseTitle}"</p>

            <div className="prose prose-sm max-w-none">
                <p>{project.description}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
