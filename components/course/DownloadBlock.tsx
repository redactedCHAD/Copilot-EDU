import React from 'react';
import type { DownloadBlockData } from '../../types';

interface DownloadBlockProps {
  data: any;
}

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);

const DownloadBlock: React.FC<DownloadBlockProps> = ({ data }) => {
  const { fileName, url } = data as DownloadBlockData;
  return (
    <div className="my-6">
      <a
        href={url}
        download
        className="inline-flex items-center p-4 bg-surface hover:bg-gray-50 rounded-lg shadow-sm transition-colors w-full sm:w-auto"
      >
        <DownloadIcon />
        <div>
            <span className="font-semibold text-text-primary">Download Resource</span>
            <p className="text-sm text-text-secondary">{fileName}</p>
        </div>
      </a>
    </div>
  );
};

export default DownloadBlock;