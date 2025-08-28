import React from 'react';
import { NavLink } from 'react-router-dom';
import { MOCK_COURSE } from '../../data/mockData';
import { BookOpenCheck } from 'lucide-react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-secondary mr-2 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const LandingPage: React.FC = () => {
  const { title, description, instructor, modules, price } = MOCK_COURSE;

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
                    <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-text-secondary">
                        {description} Transform from a passive observer of AI trends into an active, strategic implementer of AI solutions within your own business.
                    </p>
                    <div className="mt-10">
                        <NavLink
                        to="/register"
                        className="inline-block bg-gradient-to-r from-primary via-purple-500 to-secondary bg-[length:200%_auto] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-500 transform group-hover:scale-105 shadow-lg group-hover:shadow-primary/40 hover:bg-[right_center]"
                        >
                        Enroll Now for ${price}
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
                     <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Gain a Sustainable Competitive Advantage</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">This course is designed for tangible, measurable return on investment (ROI).</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-start">
                        <CheckIcon />
                        <div>
                            <h3 className="text-lg font-semibold">Automate Repetitive Tasks</h3>
                            <p className="mt-1 text-text-secondary">Free up your most constrained resource—time—by learning to apply AI to your daily operations.</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <CheckIcon />
                        <div>
                            <h3 className="text-lg font-semibold">Enhance Marketing Effectiveness</h3>
                            <p className="mt-1 text-text-secondary">Deliver hyper-personalized customer experiences that build loyalty and drive growth.</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <CheckIcon />
                        <div>
                            <h3 className="text-lg font-semibold">Implement with Confidence</h3>
                            <p className="mt-1 text-text-secondary">Graduate with a concrete, ready-to-implement AI strategy for your specific business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Course Outline Section */}
        <section id="curriculum" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center tracking-tight sm:text-4xl mb-16">Course Curriculum</h2>
            <div className="max-w-4xl mx-auto">
              {modules.map((module) => (
                <div key={module.id} className="mb-8 bg-surface rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden border border-border">
                  <div className="p-6 bg-background border-b border-border flex items-center gap-4">
                    <span className="text-2xl font-bold text-primary">0{module.order}</span>
                    <h3 className="text-xl font-bold text-text-primary">{module.title}</h3>
                  </div>
                  <ul className="p-6 space-y-4">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id} className="flex items-start">
                        <BookOpenCheck className="w-5 h-5 text-secondary mr-4 mt-1 flex-shrink-0" />
                        <span className="text-text-secondary">{lesson.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section id="instructor" className="py-20 bg-surface">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet Your Instructor</h2>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <img className="w-40 h-40 rounded-full object-cover" src={instructor.avatarUrl} alt={instructor.name} />
                    <div className="max-w-2xl text-center md:text-left">
                        <h3 className="text-2xl font-bold">{instructor.name}</h3>
                        <p className="mt-4 text-text-secondary">{instructor.bio}</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to Transform Your Business?</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Stop guessing and start implementing. Become an AI-powered entrepreneur today.</p>
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