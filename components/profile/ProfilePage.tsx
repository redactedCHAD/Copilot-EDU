
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { MOCK_COURSE, MOCK_PROGRESS, MOCK_ACHIEVEMENTS_CONFIG } from '../../data/mockData';
import type { Course, UserProgress, Achievement } from '../../types';
import AchievementsSection from '../dashboard/AchievementsSection';
import { Star, CheckCircle, Award, User as UserIcon, Mail } from 'lucide-react';
import Toast from '../ui/Toast';

const calculateAchievements = (course: Course, progress: UserProgress): Achievement[] => {
  return MOCK_ACHIEVEMENTS_CONFIG.map(achConfig => ({
    id: achConfig.id,
    name: achConfig.name,
    description: achConfig.description,
    icon: achConfig.icon,
    unlocked: achConfig.condition(progress, course),
  }));
};

const ProfilePage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  
  // Mocked data fetching
  const [course] = useState<Course>(MOCK_COURSE);
  const [progress] = useState<UserProgress>(MOCK_PROGRESS);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error' | 'info'} | null>(null);

  useEffect(() => {
    if (user) {
      setFormData({ fullName: user.fullName, email: user.email });
    }
    setAchievements(calculateAchievements(course, progress));
  }, [user, course, progress]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
        updateUser(formData);
        setIsEditMode(false);
        setToast({ message: 'Profile updated successfully!', type: 'success' });
    }
  };

  const handleCancel = () => {
    if (user) {
        setFormData({ fullName: user.fullName, email: user.email });
        setIsEditMode(false);
    }
  };

  if (!user) {
    return <div>Loading profile...</div>;
  }

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = Object.values(progress).filter(Boolean).length;
  const unlockedAchievements = achievements.filter(a => a.unlocked).length;

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-text-primary mb-8">My Profile</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Details & Stats */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Details Card */}
            <div className="bg-surface rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-text-primary mb-6">Profile Details</h2>
              {isEditMode ? (
                <form onSubmit={handleSave} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-text-secondary">Full Name</label>
                    <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} className="mt-1 appearance-none block w-full px-3 py-2 border border-border bg-background placeholder-gray-500 text-text-primary rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="mt-1 appearance-none block w-full px-3 py-2 border border-border bg-background placeholder-gray-500 text-text-primary rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button type="submit" className="flex-1 bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-md transition-colors">Save Changes</button>
                    <button type="button" onClick={handleCancel} className="flex-1 bg-gray-200 hover:bg-gray-300 text-text-primary font-bold py-2 px-4 rounded-md transition-colors">Cancel</button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <UserIcon className="w-5 h-5 text-text-secondary" />
                    <span className="text-text-primary">{user.fullName}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-text-secondary" />
                    <span className="text-text-primary">{user.email}</span>
                  </div>
                  <button onClick={() => setIsEditMode(true)} className="mt-4 w-full bg-primary/10 hover:bg-primary/20 text-primary font-semibold py-2 px-4 rounded-md transition-colors">Edit Profile</button>
                </div>
              )}
            </div>

            {/* Learning Stats Card */}
            <div className="bg-surface rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-text-primary mb-6">Learning Statistics</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-text-secondary">Points Earned</span>
                  </div>
                  <span className="font-bold text-text-primary">{user.points}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-text-secondary">Lessons Completed</span>
                  </div>
                  <span className="font-bold text-text-primary">{completedLessons} / {totalLessons}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-500" />
                    <span className="text-text-secondary">Achievements Unlocked</span>
                  </div>
                  <span className="font-bold text-text-primary">{unlockedAchievements} / {achievements.length}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Achievements */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-text-primary mb-6">My Achievements</h2>
              <AchievementsSection achievements={achievements} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
