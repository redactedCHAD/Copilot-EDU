import React, { useState } from 'react';
import type { Course, Lesson, UserProgress, Module } from '../../types';

interface CourseSidebarProps {
  course: Course;
  progress: UserProgress;
  activeLessonId: string;
  onSelectLesson: (lesson: Lesson) => void;
}

const ChevronDownIcon = ({ className }: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
        <circle cx="12" cy="12" r="10" fill="currentColor" className="text-secondary" />
        <path d="m9 12 2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400 flex-shrink-0"><circle cx="12" cy="12" r="10"/></svg>
);

const ModuleAccordion: React.FC<{
    module: Module;
    progress: UserProgress;
    activeLessonId: string;
    onSelectLesson: (lesson: Lesson) => void;
}> = ({ module, progress, activeLessonId, onSelectLesson }) => {
    const [isOpen, setIsOpen] = useState(true);

    const lessonsCompleted = module.lessons.filter(l => progress[l.id]).length;
    const totalLessons = module.lessons.length;
    
    const getLessonClasses = (lesson: Lesson) => {
        if (activeLessonId === lesson.id) {
            return 'bg-primary/20 text-primary-hover font-semibold';
        }
        if (progress[lesson.id]) {
            return 'text-text-secondary hover:bg-background';
        }
        return 'text-text-primary hover:bg-background';
    };


    return (
        <div className="border-b border-border">
            <button
                className="w-full flex justify-between items-center p-4 text-left hover:bg-background"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div>
                    <h3 className="font-semibold text-text-primary">{module.title}</h3>
                    <p className="text-xs text-text-secondary">{lessonsCompleted} / {totalLessons} completed</p>
                </div>
                <ChevronDownIcon className={`w-5 h-5 text-text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <ul className="pb-2">
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>
                            <button
                                onClick={() => onSelectLesson(lesson)}
                                className={`w-full text-left flex items-center gap-3 px-4 py-3 text-sm transition-colors ${getLessonClasses(lesson)}`}
                            >
                                {progress[lesson.id] ? <CheckCircleIcon /> : <CircleIcon />}
                                <span className={`flex-1 ${progress[lesson.id] && activeLessonId !== lesson.id ? 'line-through' : ''}`}>{lesson.title}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({ course, progress, activeLessonId, onSelectLesson }) => {
  return (
    <aside className="w-80 bg-surface border-r border-border flex-shrink-0 overflow-y-auto">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-bold truncate text-text-primary">{course.title}</h2>
      </div>
      <nav>
        {course.modules.map(module => (
           <ModuleAccordion 
             key={module.id}
             module={module}
             progress={progress}
             activeLessonId={activeLessonId}
             onSelectLesson={onSelectLesson}
           />
        ))}
      </nav>
    </aside>
  );
};

export default CourseSidebar;