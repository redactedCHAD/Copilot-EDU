

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Course, UserProgress, Lesson } from '../../types';
import { MOCK_COURSE, MOCK_PROGRESS } from '../../data/mockData';
import CourseSidebar from './CourseSidebar';
import LessonViewer from './LessonViewer';
import Spinner from '../ui/Spinner';
import { useAuth } from '../../context/AuthContext';
import Toast from '../ui/Toast';
import Sidebar from '../layout/Sidebar';

interface ToastState {
  message: string;
  type: 'success' | 'error' | 'info';
}

const CoursePlayerPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [progress, setProgress] = useState<UserProgress>(MOCK_PROGRESS);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState<ToastState | null>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const { addPoints } = useAuth();

  useEffect(() => {
    // Simulate fetching course data
    setIsLoading(true);
    setTimeout(() => {
      const courseData = MOCK_COURSE;
      setCourse(courseData);
      
      const allLessons = courseData.modules
        .sort((a, b) => a.order - b.order)
        .flatMap(module => module.lessons.sort((a, b) => a.order - b.order));

      // Find the first uncompleted lesson or the very first lesson
      const lessonToStart = allLessons.find(lesson => !MOCK_PROGRESS[lesson.id]) || allLessons[0];

      setActiveLesson(lessonToStart);
      setIsLoading(false);
    }, 500);
  }, [slug]);

  const handleSelectLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
    }
  };

  const handleToggleComplete = (lessonId: string) => {
    const wasCompleted = !!progress[lessonId];
    
    setProgress(prev => {
      const newProgress = { ...prev, [lessonId]: !prev[lessonId] };
      
      if (!wasCompleted && newProgress[lessonId]) {
        const pointsAwarded = 10;
        addPoints(pointsAwarded);
        setToast({ message: `+${pointsAwarded} points! Well done!`, type: 'success' });
      }
      
      return newProgress;
    });
  };

  if (isLoading || !course || !activeLesson) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  const allLessons = course.modules
    .sort((a, b) => a.order - b.order)
    .flatMap(module => module.lessons.sort((a, b) => a.order - b.order));

  const currentIndex = allLessons.findIndex(lesson => lesson.id === activeLesson.id);
  
  const hasPreviousLesson = currentIndex > 0;
  const hasNextLesson = currentIndex < allLessons.length - 1;

  const handlePreviousLesson = () => {
    if(hasPreviousLesson) {
      handleSelectLesson(allLessons[currentIndex - 1]);
    }
  }

  const handleNextLesson = () => {
    if(hasNextLesson) {
      handleSelectLesson(allLessons[currentIndex + 1]);
    }
  }


  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        <CourseSidebar
          course={course}
          progress={progress}
          activeLessonId={activeLesson.id}
          onSelectLesson={handleSelectLesson}
        />
        <div ref={mainContentRef} className="flex-1 overflow-y-auto bg-background">
          <LessonViewer
            lesson={activeLesson}
            isCompleted={!!progress[activeLesson.id]}
            onToggleComplete={handleToggleComplete}
            onPreviousLesson={handlePreviousLesson}
            onNextLesson={handleNextLesson}
            hasPreviousLesson={hasPreviousLesson}
            hasNextLesson={hasNextLesson}
          />
        </div>
      </div>
    </>
  );
};

export default CoursePlayerPage;
