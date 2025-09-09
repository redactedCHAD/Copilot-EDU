import React, { useState } from 'react';
import { MOCK_SHOWCASE_PROJECTS, MOCK_COURSES } from '../../data/mockData';
import type { ShowcaseProject } from '../../types';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';
import SubmitProjectModal from './SubmitProjectModal';
import { useAuth } from '../../context/AuthContext';

const ShowcasePage: React.FC = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<ShowcaseProject[]>(MOCK_SHOWCASE_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const handleLike = (projectId: string) => {
    setProjects(projects.map(p => 
      p.id === projectId ? { ...p, likes: p.likes + 1 } : p
    ));
  };

  const handleSubmitProject = (newProjectData: Omit<ShowcaseProject, 'id' | 'author' | 'likes' | 'createdAt'>) => {
    if (!user) return;
    const newProject: ShowcaseProject = {
      id: `proj-${Date.now()}`,
      ...newProjectData,
      author: {
        id: user.id,
        fullName: user.fullName,
        avatarUrl: ''
      },
      likes: 0,
      createdAt: 'Just now'
    };
    setProjects([newProject, ...projects]);
    setIsSubmitModalOpen(false);
  };

  const getCourseTitle = (courseId: string) => {
      return MOCK_COURSES.find(c => c.id === courseId)?.title || 'Unknown Course';
  };

  return (
    <div className="p-6 md:p-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary">Project Showcase</h1>
          <p className="text-lg text-text-secondary mt-1">See what fellow learners are creating with their new AI skills.</p>
        </div>
        <button 
          onClick={() => setIsSubmitModalOpen(true)}
          className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-md transition-colors"
        >
          Submit Your Project
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project}
            courseTitle={getCourseTitle(project.courseId)}
            onSelect={() => setSelectedProject(project)}
            onLike={handleLike}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject}
          courseTitle={getCourseTitle(selectedProject.courseId)}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {isSubmitModalOpen && (
        <SubmitProjectModal 
          courses={MOCK_COURSES}
          onClose={() => setIsSubmitModalOpen(false)}
          onSubmit={handleSubmitProject}
        />
      )}
    </div>
  );
};

export default ShowcasePage;
