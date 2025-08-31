
import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import CoursePlayerPage from './components/course/CoursePlayerPage';
import DashboardPage from './components/dashboard/DashboardPage';
import LandingPage from './components/landing/LandingPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ForumPage from './components/forum/ForumPage';
import ProfilePage from './components/profile/ProfilePage';

const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Layout for pages with the main sidebar
const SidebarLayout: React.FC = () => (
  <div className="flex flex-1 overflow-auto h-[calc(100vh-4rem)]">
    <Sidebar />
    <main className="flex-1 overflow-y-auto">
        <Outlet />
    </main>
  </div>
);

// Layout for full-width pages (public)
const FullscreenLayout: React.FC = () => (
  <main className="flex-grow">
    <Outlet />
  </main>
);

// Helper component to perform redirection based on auth state
const RootRedirect: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return <Navigate to={isAuthenticated ? '/dashboard' : '/welcome'} />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <Routes>
            {/* Public routes use the fullscreen layout */}
            <Route element={<FullscreenLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/welcome" element={<LandingPage />} />
            </Route>

            {/* Private routes use the sidebar layout */}
            <Route element={<PrivateRoute><SidebarLayout /></PrivateRoute>}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/community" element={<ForumPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>

            {/* Course player page has its own layout, but is a private route */}
             <Route 
                path="/course/:slug" 
                element={
                    <PrivateRoute>
                        <CoursePlayerPage />
                    </PrivateRoute>
                } 
            />

            
            {/* Redirects for root and unmatched paths */}
            <Route path="/" element={<RootRedirect />} />
            <Route path="*" element={<RootRedirect />} />
          </Routes>
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
