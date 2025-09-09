
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, MessageSquare, User, GalleryThumbnails, Gem } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/showcase', label: 'Showcase', icon: GalleryThumbnails },
  { href: '/community', label: 'Community', icon: MessageSquare },
  { href: '/profile', label: 'Profile', icon: User },
];

const Sidebar: React.FC = () => {
  const baseClasses = "flex items-center px-4 py-3 text-text-secondary rounded-lg transition-all duration-200 ease-in-out text-sm font-medium";
  const activeClasses = "bg-primary/10 text-primary font-semibold";
  const inactiveClasses = "hover:bg-gray-100 hover:text-text-primary transform hover:translate-x-1";

  return (
    <aside className="w-64 bg-surface border-r border-border flex-shrink-0 p-4 hidden md:flex md:flex-col">
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                end={item.href !== '/courses'}
                className={({ isActive }) =>
                  `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
              >
                <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Upgrade Section */}
      <div className="mt-auto">
        <NavLink to="/pricing" className={({isActive}) => `flex items-center p-3 text-sm font-medium rounded-lg transition-colors bg-gradient-to-r from-purple-500 to-primary text-white hover:shadow-lg ${isActive ? 'ring-2 ring-white/50' : ''}`}>
           <Gem className="w-5 h-5 mr-3" />
           <span>Upgrade Plan</span>
        </NavLink>
      </div>

    </aside>
  );
};

export default Sidebar;