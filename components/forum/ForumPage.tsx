
import React from 'react';
import ForumComponent from './ForumComponent';

const ForumPage: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-6 md:p-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-text-primary mb-8">Community Forum</h1>
      <div className="bg-surface rounded-lg shadow-lg p-6 md:p-8">
        <ForumComponent />
      </div>
    </main>
  );
};

export default ForumPage;
