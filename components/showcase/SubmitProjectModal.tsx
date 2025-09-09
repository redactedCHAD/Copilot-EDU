import React, { useState } from 'react';
import type { Course, ShowcaseProject } from '../../types';
import { X } from 'lucide-react';

interface SubmitProjectModalProps {
  courses: Course[];
  onClose: () => void;
  onSubmit: (data: Omit<ShowcaseProject, 'id' | 'author' | 'likes' | 'createdAt'>) => void;
}

const SubmitProjectModal: React.FC<SubmitProjectModalProps> = ({ courses, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [courseId, setCourseId] = useState(courses[0]?.id || '');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !courseId || !description || !imageUrl) {
        alert("Please fill out all fields.");
        return;
    }
    onSubmit({ title, courseId, description, imageUrl });
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-surface rounded-lg shadow-2xl w-full max-w-lg"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h2 className="text-xl font-bold text-text-primary">Submit Your Project</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-text-secondary">Project Title</label>
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required className="mt-1 appearance-none block w-full px-3 py-2 border border-border bg-background placeholder-gray-500 text-text-primary rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
                <label htmlFor="courseId" className="block text-sm font-medium text-text-secondary">Related Course</label>
                <select id="courseId" value={courseId} onChange={e => setCourseId(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-border bg-background text-text-primary rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>{course.title}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-text-secondary">Image URL</label>
                <input type="url" id="imageUrl" value={imageUrl} onChange={e => setImageUrl(e.target.value)} required placeholder="https://..." className="mt-1 appearance-none block w-full px-3 py-2 border border-border bg-background placeholder-gray-500 text-text-primary rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-text-secondary">Description</label>
                <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} required rows={4} className="mt-1 block w-full px-3 py-2 border border-border bg-background text-text-primary rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
            </div>
            <div className="pt-2">
                <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-md transition-colors">Submit Project</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProjectModal;
