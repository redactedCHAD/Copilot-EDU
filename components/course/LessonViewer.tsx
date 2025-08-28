
import React from 'react';
import type { Lesson } from '../../types';
import ContentBlockRenderer from './ContentBlockRenderer';
import ForumComponent from '../forum/ForumComponent';

interface LessonViewerProps {
  lesson: Lesson;
  isCompleted: boolean;
  onToggleComplete: (lessonId: string) => void;
  onPreviousLesson: () => void;
  onNextLesson: () => void;
  hasPreviousLesson: boolean;
  hasNextLesson: boolean;
}

const LessonViewer: React.FC<LessonViewerProps> = ({ 
    lesson, 
    isCompleted, 
    onToggleComplete,
    onPreviousLesson,
    onNextLesson,
    hasPreviousLesson,
    hasNextLesson 
}) => {
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">{lesson.title}</h1>
      
      <div className="prose max-w-none prose-h2:text-2xl prose-h2:font-bold prose-p:text-text-secondary prose-ul:text-text-secondary prose-strong:text-text-primary">
        {lesson.contentBlocks.map(block => (
          <ContentBlockRenderer key={block.id} block={block} />
        ))}
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <button
          onClick={() => onToggleComplete(lesson.id)}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
            isCompleted 
              ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30' 
              : 'bg-primary hover:bg-primary-hover text-white'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          {isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>

        <div className="mt-8 flex justify-between">
            <button
              onClick={onPreviousLesson}
              disabled={!hasPreviousLesson}
              className="px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 bg-surface text-text-primary hover:bg-gray-100 disabled:bg-surface disabled:text-text-secondary disabled:cursor-not-allowed shadow-sm border border-border"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m15 18-6-6 6-6"/></svg>
                Previous Lesson
            </button>
            <button
              onClick={onNextLesson}
              disabled={!hasNextLesson}
              className="px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 bg-surface text-text-primary hover:bg-gray-100 disabled:bg-surface disabled:text-text-secondary disabled:cursor-not-allowed shadow-sm border border-border"
            >
                Next Lesson
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
        </div>

      </div>

      <div className="mt-16">
        <ForumComponent />
      </div>

    </div>
  );
};

export default LessonViewer;