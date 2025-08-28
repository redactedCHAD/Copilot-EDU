
import React from 'react';
import type { YouTubeBlockData } from '../../types';

interface YouTubeBlockProps {
  data: any;
}

const YouTubeBlock: React.FC<YouTubeBlockProps> = ({ data }) => {
  const { videoId } = data as YouTubeBlockData;
  return (
    <div className="my-6 aspect-video">
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeBlock;
