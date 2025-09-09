
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Course, UserProgress, Achievement } from '../../types';
import { MOCK_COURSES, MOCK_PROGRESS, MOCK_ACHIEVEMENTS_CONFIG } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import AchievementsSection from './AchievementsSection';

const calculateAchievements = (courses: Course[], progress: UserProgress): Achievement[] => {
  return MOCK_ACHIEVEMENTS_CONFIG.map(achConfig => ({
    ...achConfig,
    unlocked: achConfig.condition(progress, courses),
  }));
};

const CourseCard: React.FC<{ course: Course, progress: UserProgress }> = ({ course, progress }) => {
    const allLessons = course.modules.flatMap(m => m.lessons);
    const completedLessons = allLessons.filter(l => progress[l.id]).length;
    const totalLessons = allLessons.length;
    const completionPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    const [animatedPercentage, setAnimatedPercentage] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setAnimatedPercentage(completionPercentage), 100);
        return () => clearTimeout(timer);
    }, [completionPercentage]);

    return (
        <div className="bg-surface rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">
            <div className="flex-grow">
                <h3 className="text-lg font-bold text-text-primary h-14">{course.title}</h3>
                <p className="text-sm text-text-secondary mt-1 mb-4 h-10 overflow-hidden">{course.description}</p>
            </div>
            <div>
                <div className="w-full bg-background rounded-full h-2.5 mb-2 overflow-hidden">
                    <div className="bg-secondary h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${animatedPercentage}%` }}></div>
                </div>
                <p className="text-sm text-text-secondary mb-4">{completedLessons} of {totalLessons} lessons completed</p>
                <NavLink 
                    to={`/course/${course.slug}`}
                    className="w-full text-center block bg-primary/10 text-primary font-semibold py-2 px-4 rounded-md transition-colors hover:bg-primary/20"
                >
                    {completionPercentage > 0 ? 'Continue Learning' : 'Start Course'}
                </NavLink>
            </div>
        </div>
    );
};

const DashboardPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [progress, setProgress] = useState<UserProgress>({});
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    // Simulate API calls
    const coursesData = MOCK_COURSES;
    const progressData = MOCK_PROGRESS;
    setCourses(coursesData);
    setProgress(progressData);
    setAchievements(calculateAchievements(coursesData, progressData));
  }, []);
  
  const inProgressCourses = courses.filter(course => {
      const allLessons = course.modules.flatMap(m => m.lessons);
      const completedLessons = allLessons.filter(l => progress[l.id]).length;
      return completedLessons > 0 && completedLessons < allLessons.length;
  });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-text-primary mb-2">My Dashboard</h1>
      <p className="text-lg text-text-secondary mb-8">Welcome back, {user.fullName.split(' ')[0]}! Let's keep learning.</p>
      
      {/* In Progress Courses */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-bold tracking-tight text-text-primary">Continue Learning</h2>
             <NavLink to="/courses" className="text-sm font-semibold text-primary hover:underline">Explore All Courses &rarr;</NavLink>
        </div>
        {inProgressCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inProgressCourses.map(course => (
                    <CourseCard key={course.id} course={course} progress={progress} />
                ))}
            </div>
        ) : (
            <div className="text-center py-10 px-6 bg-surface rounded-lg shadow-sm">
                <p className="text-text-secondary">You haven't started any courses yet.</p>
                <NavLink to="/courses" className="mt-4 inline-block bg-primary hover:bg-primary-hover text-white font-bold py-2 px-6 rounded-md transition-colors">
                    Explore Courses
                </NavLink>
            </div>
        )}
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