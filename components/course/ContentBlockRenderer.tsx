
import React from 'react';
import { ContentBlock, ContentBlockType } from '../../types';
import YouTubeBlock from './YouTubeBlock';
import MarkdownBlock from './MarkdownBlock';
import DownloadBlock from './DownloadBlock';
import QuizBlock from './QuizBlock';

interface ContentBlockRendererProps {
  block: ContentBlock;
}

const ContentBlockRenderer: React.FC<ContentBlockRendererProps> = ({ block }) => {
  switch (block.blockType) {
    case ContentBlockType.YOUTUBE:
      return <YouTubeBlock data={block.data} />;
    case ContentBlockType.MARKDOWN:
      return <MarkdownBlock data={block.data} />;
    case ContentBlockType.DOWNLOAD:
      return <DownloadBlock data={block.data} />;
    case ContentBlockType.QUIZ:
      return <QuizBlock data={block.data} />;
    default:
      return <div className="p-4 bg-red-900/50 border border-red-500 rounded-md my-4">Unsupported block type</div>;
  }
};

export default ContentBlockRenderer;
