
import React from 'react';
import type { MarkdownBlockData } from '../../types';

interface MarkdownBlockProps {
  data: any;
}

const MarkdownBlock: React.FC<MarkdownBlockProps> = ({ data }) => {
    const { content } = data as MarkdownBlockData;

    const renderContent = () => {
        return content.split('\n').map((line, index) => {
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-text-primary">{line.substring(3)}</h2>;
            }
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold mt-5 mb-2 text-text-primary">{line.substring(4)}</h3>;
            }
             if (line.startsWith('*   ')) {
                return <li key={index} className="ml-5 list-disc text-text-secondary">{line.substring(4)}</li>;
            }
            if (line.trim() === '') {
                 return <br key={index} />;
            }
            return <p key={index} className="my-4 text-text-secondary leading-relaxed">{line}</p>;
        });
    };

    return <div className="my-4">{renderContent()}</div>;
};

export default MarkdownBlock;
