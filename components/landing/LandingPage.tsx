
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MOCK_COURSES, MOCK_CORE_CATEGORIES } from '../../data/mockData';
import { Cpu, Image, Film } from 'lucide-react';

const CoreIcons: { [key: string]: React.ElementType } = {
  'core-llm': Cpu,
  'core-image': Image,
  'core-video': Film,
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-secondary mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const LandingPage: React.FC = () => {
  const title = "All The Tools: AI";
  const description = "The premier online destination for mastering the world's most impactful AI tools. Stay at the cutting edge of technological innovation.";

  return (
    <div className="bg-background text-text-primary">
      <main>
        {/* Hero Section */}
        <section className="py-20 sm:py-28 [perspective:1500px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="group relative bg-surface/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(8deg)_rotateY(-3deg)]">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-50 blur-3xl transition-opacity duration-500"></div>
                 <div className="relative">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary [text-shadow:0_2px_10px_rgba(0,0,0,0.1)]">
                        {title}
                    </h1>
                    <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-text-primary tracking-wide">
                        From Zero to Hero with the Tools That Matter. Master LLMs, Image Generation, Video Creation, and More.
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-text-secondary">
                        {description}
                    </p>
                    <div className="mt-10">
                        <NavLink
                        to="/register"
                        className="inline-block bg-gradient-to-r from-primary via-purple-500 to-secondary bg-[length:200%_auto] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-500 transform group-hover:scale-105 shadow-lg group-hover:shadow-primary/40 hover:bg-[right_center]"
                        >
                        Start Your Free Trial
                        </NavLink>
                    </div>
                 </div>
            </div>
          </div>
        </section>

        {/* Features/Benefits Section */}
        <section className="py-20 bg-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Unlock Your AI Potential</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Go from theory to practice with hands-on, tool-specific training.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-start">
                        <CheckIcon />
                        <div>
                            <h3 className="text-lg font-semibold">Stay Current</h3>
                            <p className="mt-1 text-text-secondary">Our content is continuously updated to cover the latest and greatest AI tools as they emerge.</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <CheckIcon />
                        <div>
                            <h3 className="text-lg font-semibold">Learn by Doing</h3>
                            <p className="mt-1 text-text-secondary">Master tools through practical, project-based lessons that build real-world skills.</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <CheckIcon />
                        <div>
                            <h3 className="text-lg font-semibold">Structured Learning Paths</h3>
                            <p className="mt-1 text-text-secondary">Start with foundational concepts, then dive deep into the specific tools you need to succeed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Course Outline Section */}
        <section id="curriculum" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center tracking-tight sm:text-4xl mb-16">Explore Our Curriculum</h2>
            <div className="max-w-4xl mx-auto space-y-12">
              {MOCK_CORE_CATEGORIES.map((category) => {
                const CategoryIcon = CoreIcons[category.id] || Cpu;
                const categoryCourses = MOCK_COURSES.filter(c => c.categoryId === category.id);
                const coreCourse = categoryCourses.find(c => c.type === 'CORE');
                const toolCourses = categoryCourses.filter(c => c.type === 'TOOL');

                return (
                  <div key={category.id} className="bg-surface rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out border border-border overflow-hidden">
                    <div className="p-6 bg-background border-b border-border">
                        <div className="flex items-center gap-4">
                            <CategoryIcon className="w-8 h-8 text-primary" />
                            <div>
                                <h3 className="text-2xl font-bold text-text-primary">{category.title}</h3>
                                <p className="text-text-secondary mt-1">{category.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                      {coreCourse && (
                        <div className="mb-4 p-4 bg-primary/5 rounded-lg">
                          <h4 className="font-bold text-primary">Core Concepts</h4>
                          <p className="text-sm text-text-secondary mt-1">{coreCourse.title}</p>
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-text-primary mb-3">Tool-Specific Courses</h4>
                        <ul className="space-y-2">
                          {toolCourses.map((course) => (
                            <li key={course.id} className="text-text-secondary p-2 bg-background rounded-md">{course.title}</li>
                          ))}
                           <li className="text-text-secondary p-2 font-semibold">And more coming soon...</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to Become an AI Power User?</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Stop watching from the sidelines. Start building with the best tools in the industry.</p>
                 <div className="mt-8">
                    <NavLink
                        to="/register"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/40"
                    >
                        <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                        <span className="relative">Start Learning Now</span>
                    </NavLink>
                 </div>
            </div>
        </section>

      </main>
    </div>
  );
};

export default LandingPage;
