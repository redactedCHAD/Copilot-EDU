
import React from 'react';
import type { Achievement } from '../../types';
import * as Lucide from 'lucide-react';

const AchievementIcon: React.FC<{name: string, className?: string}> = ({ name, ...props }) => {
    const Icon = (Lucide as any)[name];
    if (!Icon) return <Lucide.Award {...props} />; // Fallback icon
    return <Icon {...props} />;
};

interface AchievementsSectionProps {
    achievements: Achievement[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {achievements.map(ach => (
            <div key={ach.id} className={`relative group flex flex-col items-center justify-center p-4 text-center border-2 rounded-lg transition-all duration-300 ${ach.unlocked ? 'border-yellow-400 bg-yellow-400/10' : 'border-border bg-background'}`}>
              <div className={`p-4 rounded-full mb-2 ${ach.unlocked ? 'bg-yellow-400/20' : 'bg-gray-200'}`}>
                <AchievementIcon name={ach.icon} className={`w-8 h-8 transition-colors ${ach.unlocked ? 'text-yellow-500' : 'text-gray-400'}`} />
              </div>
              <h3 className={`font-semibold text-sm ${ach.unlocked ? 'text-text-primary' : 'text-text-secondary'}`}>{ach.name}</h3>
              
              <div className="absolute bottom-full mb-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                {ach.description}
                <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
              </div>
            </div>
          ))}
        </div>
    );
};

export default AchievementsSection;
