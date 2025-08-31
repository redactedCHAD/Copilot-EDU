
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Course, UserProgress, Achievement } from '../../types';
import { MOCK_COURSE, MOCK_PROGRESS, MOCK_ACHIEVEMENTS_CONFIG } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import AchievementsSection from './AchievementsSection';

const calculateAchievements = (course: Course, progress: UserProgress): Achievement[] => {
  return MOCK_ACHIEVEMENTS_CONFIG.map(achConfig => ({
    id: achConfig.id,
    name: achConfig.name,
    description: achConfig.description,
    icon: achConfig.icon,
    unlocked: achConfig.condition(progress, course),
  }));
};

const DashboardPage: React.FC = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const { user } = useAuth();

  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [animatedModulePercentages, setAnimatedModulePercentages] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Simulate API calls
    const courseData = MOCK_COURSE;
    const progressData = MOCK_PROGRESS;
    setCourse(courseData);
    setProgress(progressData);
    setAchievements(calculateAchievements(courseData, progressData));

    // Calculate final percentages for animation
    const totalLessons = courseData.modules.reduce((acc, module) => acc + module.lessons.length, 0);
    const completedLessons = Object.values(progressData).filter(Boolean).length;
    const finalCompletionPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    const finalModulePercentages = courseData.modules.reduce((acc, module) => {
        const moduleLessons = module.lessons;
        const completedModuleLessons = moduleLessons.filter(l => progressData[l.id]).length;
        const totalModuleLessons = moduleLessons.length;
        acc[module.id] = totalModuleLessons > 0 ? Math.round((completedModuleLessons / totalModuleLessons) * 100) : 0;
        return acc;
    }, {} as { [key: string]: number });

    // Set animated values after a short delay to trigger transition
    const timer = setTimeout(() => {
        setAnimatedPercentage(finalCompletionPercentage);
        setAnimatedModulePercentages(finalModulePercentages);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!course || !progress || !user) {
    return <div>Loading...</div>;
  }

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = Object.values(progress).filter(Boolean).length;
  const completionPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="p-6 md:p-10">
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
                    <svg className="w-full h-full" viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
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
                            strokeDasharray={`${animatedPercentage}, 100`}
                            strokeLinecap="round"
                            style={{ transition: 'stroke-dasharray 0.7s ease-out' }}
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

      {/* Course Modules Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">Course Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.modules.sort((a,b) => a.order - b.order).map(module => {
            const moduleLessons = module.lessons;
            const completedModuleLessons = moduleLessons.filter(l => progress[l.id]).length;
            const totalModuleLessons = moduleLessons.length;
            const moduleCompletionPercentage = totalModuleLessons > 0 ? Math.round((completedModuleLessons / totalModuleLessons) * 100) : 0;
            const animatedModulePercentage = animatedModulePercentages[module.id] || 0;

            const getButtonText = () => {
                if (moduleCompletionPercentage === 100) return 'Review Module';
                if (moduleCompletionPercentage > 0) return 'Continue Module';
                return 'Start Module';
            }

            return (
              <div key={module.id} className="bg-surface rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">
                <div className="flex-grow">
                  <p className="text-sm font-semibold text-primary">MODULE {module.order}</p>
                  <h3 className="text-lg font-bold text-text-primary mt-1 mb-4 h-14">{module.title}</h3>
                </div>
                <div>
                  <div className="w-full bg-background rounded-full h-2.5 mb-2 overflow-hidden">
                    <div className="bg-secondary h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${animatedModulePercentage}%` }}></div>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">{completedModuleLessons} of {totalModuleLessons} lessons completed</p>
                  <NavLink 
                    to={`/course/${course.slug}`}
                    className="w-full text-center block bg-primary/10 text-primary font-semibold py-2 px-4 rounded-md transition-colors hover:bg-primary/20"
                  >
                    {getButtonText()}
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">My Achievements</h2>
        <AchievementsSection achievements={achievements} />
      </div>

    </div>
  );
};

export default DashboardPage;
