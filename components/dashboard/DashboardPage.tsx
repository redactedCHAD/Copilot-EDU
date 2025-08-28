import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Course, UserProgress } from '../../types';
import { MOCK_COURSE, MOCK_PROGRESS } from '../../data/mockData';

const DashboardPage: React.FC = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    // Simulate API calls
    setCourse(MOCK_COURSE);
    setProgress(MOCK_PROGRESS);
  }, []);

  if (!course || !progress) {
    return <div>Loading...</div>;
  }

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = Object.values(progress).filter(Boolean).length;
  const completionPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight text-text-primary mb-8">My Dashboard</h1>
      
      <div className="bg-surface rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-primary">{course.title}</h2>
                <p className="mt-2 text-text-secondary">{course.description}</p>
                <NavLink 
                    to={`/course/${course.slug}`}
                    className="mt-6 inline-block bg-primary hover:bg-primary-hover text-white font-bold py-2 px-6 rounded-md transition-colors"
                >
                    {completionPercentage > 0 ? 'Continue Learning' : 'Start Course'}
                </NavLink>
            </div>
            <div className="md:w-1/3 flex flex-col items-center justify-center bg-background p-6 rounded-lg">
                <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="3"
                        />
                        <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="3"
                            strokeDasharray={`${completionPercentage}, 100`}
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-text-primary">{completionPercentage}%</span>
                    </div>
                </div>
                 <div className="text-center mt-4">
                    <p className="font-semibold text-text-primary">Overall Progress</p>
                    <p className="text-sm text-text-secondary">{completedLessons} / {totalLessons} lessons completed</p>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;