
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, MessageSquare, User } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/course/ai-business-growth', label: 'Course', icon: BookOpen },
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
                end={item.href === '/dashboard' || item.href === '/community' || item.href === '/profile'}
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
    </aside>
  );
};

export default Sidebar;
