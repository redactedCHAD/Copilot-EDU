import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { MOCK_COURSES, MOCK_CORE_CATEGORIES, MOCK_PROGRESS } from '../../data/mockData';
import type { Course, UserProgress } from '../../types';
import { CourseType } from '../../types';
import { CheckCircle, Search } from 'lucide-react';

const CourseCard: React.FC<{ course: Course, progress: UserProgress }> = ({ course, progress }) => {
    const allLessons = course.modules.flatMap(m => m.lessons);
    const completedLessons = allLessons.filter(l => progress[l.id]).length;
    const totalLessons = allLessons.length;
    const isCompleted = totalLessons > 0 && completedLessons === totalLessons;

    return (
        <NavLink 
            to={`/course/${course.slug}`} 
            className="block bg-surface rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
        >
            <div className="p-6">
                {isCompleted && (
                    <div className="flex items-center gap-2 text-xs text-secondary font-semibold mb-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>COMPLETED</span>
                    </div>
                )}
                <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-sm text-text-secondary mt-2 h-16 overflow-hidden">{course.description}</p>
                {course.type === CourseType.CORE && <span className="mt-4 inline-block text-xs font-semibold bg-primary/10 text-primary py-1 px-2 rounded-full">Core Concepts</span>}
                {course.type === CourseType.TOOL && <span className="mt-4 inline-block text-xs font-semibold bg-yellow-400/20 text-yellow-700 py-1 px-2 rounded-full">Tool Specific</span>}
            </div>
        </NavLink>
    );
};

const CourseCatalogPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState<CourseType[]>([]);

    const handleFilterToggle = (filter: CourseType) => {
        setActiveFilters(prev => 
            prev.includes(filter) 
                ? prev.filter(f => f !== filter)
                : [...prev, filter]
        );
    };

    const filteredCourses = useMemo(() => {
        return MOCK_COURSES.filter(course => {
            const searchMatch = searchTerm === '' ||
                course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description.toLowerCase().includes(searchTerm.toLowerCase());
            
            const filterMatch = activeFilters.length === 0 || activeFilters.includes(course.type);

            return searchMatch && filterMatch;
        });
    }, [searchTerm, activeFilters]);

    const coursesByCategory = useMemo(() => {
        return filteredCourses.reduce((acc, course) => {
            const category = course.categoryId;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(course);
            return acc;
        }, {} as Record<string, Course[]>);
    }, [filteredCourses]);


    return (
        <div className="p-6 md:p-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-text-primary mb-2">Explore Courses</h1>
            <p className="text-lg text-text-secondary mb-8">Start with fundamentals, then dive deep into specific tools.</p>

            {/* Search and Filter Controls */}
            <div className="mb-10 p-4 bg-surface rounded-lg shadow-sm border border-border sticky top-0 z-10">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input 
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-border bg-background rounded-md focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-text-secondary mr-2">Filter by:</span>
                        <button 
                            onClick={() => handleFilterToggle(CourseType.CORE)}
                            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${activeFilters.includes(CourseType.CORE) ? 'bg-primary text-white' : 'bg-background hover:bg-gray-200'}`}
                        >
                            Core Concepts
                        </button>
                        <button 
                            onClick={() => handleFilterToggle(CourseType.TOOL)}
                             className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${activeFilters.includes(CourseType.TOOL) ? 'bg-primary text-white' : 'bg-background hover:bg-gray-200'}`}
                        >
                            Tool Specific
                        </button>
                    </div>
                </div>
            </div>

            {filteredCourses.length > 0 ? (
                <div className="space-y-12">
                    {MOCK_CORE_CATEGORIES.map(category => {
                        const coursesForCategory = coursesByCategory[category.id];
                        if (!coursesForCategory || coursesForCategory.length === 0) return null;

                        return (
                            <div key={category.id}>
                                <h2 className="text-2xl font-bold tracking-tight text-text-primary border-b border-border pb-3 mb-6">{category.title}</h2>
                                <p className="text-text-secondary mb-6 max-w-3xl">{category.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {coursesForCategory.map(course => (
                                        <CourseCard key={course.id} course={course} progress={MOCK_PROGRESS} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center py-20">
                    <h3 className="text-xl font-semibold text-text-primary">No courses found</h3>
                    <p className="text-text-secondary mt-2">Try adjusting your search or filter criteria.</p>
                </div>
            )}
        </div>
    );
};

export default CourseCatalogPage;