
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Course, UserProgress, Achievement } from '../../types';
import { MOCK_COURSE, MOCK_PROGRESS, MOCK_ACHIEVEMENTS_CONFIG } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import * as Lucide from 'lucide-react';

const calculateAchievements = (course: Course, progress: UserProgress): Achievement[] => {
  return MOCK_ACHIEVEMENTS_CONFIG.map(achConfig => ({
    id: achConfig.id,
    name: achConfig.name,
    description: achConfig.description,
    icon: achConfig.icon,
    unlocked: achConfig.condition(progress, course),
  }));
};

const AchievementIcon: React.FC<{name: string, className?: string}> = ({ name, ...props }) => {
    const Icon = (Lucide as any)[name];
    if (!Icon) return <Lucide.Award {...props} />; // Fallback icon
    return <Icon {...props} />;
};


const DashboardPage: React.FC = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    // Simulate API calls
    const courseData = MOCK_COURSE;
    const progressData = MOCK_PROGRESS;
    setCourse(courseData);
    setProgress(progressData);
    setAchievements(calculateAchievements(courseData, progressData));
  }, []);

  if (!course || !progress || !user) {
    return <div>Loading...</div>;
  }

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = Object.values(progress).filter(Boolean).length;
  const completionPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight text-text-primary mb-2">My Dashboard</h1>
      <p className="text-lg text-text-secondary mb-8">Welcome back, {user.fullName.split(' ')[0]}! Let's keep learning.</p>
      
      <div className="bg-surface rounded-lg shadow-lg p-6 md:p-8 mb-12">
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

      {/* Achievements Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">My Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {achievements.map(ach => (
            <div key={ach.id} className={`relative group flex flex-col items-center justify-center p-4 text-center border-2 rounded-lg transition-all duration-300 ${ach.unlocked ? 'border-yellow-400 bg-yellow-400/10' : 'border-border bg-background'}`}>
              <div className={`p-4 rounded-full mb-2 ${ach.unlocked ? 'bg-yellow-400/20' : 'bg-gray-200'}`}>
                <AchievementIcon name={ach.icon} className={`w-8 h-8 transition-colors ${ach.unlocked ? 'text-yellow-500' : 'text-gray-400'}`} />
              </div>
              <h3 className={`font-semibold text-sm ${ach.unlocked ? 'text-text-primary' : 'text-text-secondary'}`}>{ach.name}</h3>
              
              <div className="absolute bottom-full mb-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {ach.description}
                <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;