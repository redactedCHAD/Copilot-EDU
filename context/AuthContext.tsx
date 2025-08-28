
import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { User } from '../types';
import { MOCK_USER } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, pass: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, pass: string): Promise<void> => {
    console.log(`Attempting login for ${email}`);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(MOCK_USER);
        resolve();
      }, 500);
    });
  };

  const register = async (name: string, email: string, pass: string): Promise<void> => {
     console.log(`Attempting registration for ${name} with email ${email}`);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(MOCK_USER);
        resolve();
      }, 500);
    });
  }

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
