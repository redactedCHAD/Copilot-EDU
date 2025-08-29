
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Star } from 'lucide-react';

const Logo = () => (
    <div className="flex items-center gap-2 text-xl font-bold text-text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-8 w-8"><path d="M12 2a10 10 0 0 0-2 19.5v-1.5a8 8 0 1 1 4 0v1.5A10 10 0 0 0 12 2Z"/><path d="M12 12a2.5 2.5 0 0 0-2.5 2.5V17a2.5 2.5 0 0 0 5 0v-2.5A2.5 2.5 0 0 0 12 12Z"/><path d="M12 11a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Z"/><path d="M18 11a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Z"/><path d="M6 11a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Z"/></svg>
        <span>AI Co-Pilot</span>
    </div>
);


const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/welcome');
  };

  return (
    <header className="bg-surface/50 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to={isAuthenticated ? '/dashboard' : '/welcome'}>
            <Logo />
          </NavLink>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 bg-background px-3 py-1.5 rounded-full border border-border">
                  <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  <span className="font-bold text-sm text-text-primary">{user?.points}</span>
                </div>
                <span className="text-text-secondary hidden sm:block">Welcome, {user?.fullName.split(' ')[0]}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                 <NavLink
                  to="/login"
                  className="text-text-secondary hover:text-primary transition-colors font-medium"
                 >
                  Log In
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-md transition-colors"
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;