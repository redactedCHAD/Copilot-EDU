
export interface User {
  id: string;
  fullName: string;
  email: string;
  role: 'learner' | 'admin';
}

export enum ContentBlockType {
  YOUTUBE = 'YOUTUBE',
  MARKDOWN = 'MARKDOWN',
  DOWNLOAD = 'DOWNLOAD',
  QUIZ = 'QUIZ',
}

export interface YouTubeBlockData {
  videoId: string;
}

export interface MarkdownBlockData {
  content: string;
}

export interface DownloadBlockData {
  fileName: string;
  url: string;
}

export interface QuizBlockData {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export type BlockData = YouTubeBlockData | MarkdownBlockData | DownloadBlockData | QuizBlockData;

export interface ContentBlock {
  id: string;
  order: number;
  blockType: ContentBlockType;
  data: BlockData;
}

export interface Lesson {
  id: string;
  title: string;
  order: number;
  contentBlocks: ContentBlock[];
}

export interface Module {
  id: string;
  title: string;
  order: number;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: {
    name: string;
    bio: string;
    avatarUrl: string;
  };
  modules: Module[];
}

export interface UserProgress {
  [lessonId: string]: boolean;
}

export interface ForumThread {
    id: string;
    title: string;
    author: Pick<User, 'id' | 'fullName'>;
    createdAt: string;
    replyCount: number;
    posts: ForumPost[];
}

export interface ForumPost {
    id: string;
    author: Pick<User, 'id' | 'fullName'>;
    createdAt: string;
    content: string;
}
