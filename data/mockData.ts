import { Course, User, UserProgress, ContentBlockType, ForumThread, CoreCategory, CourseType, ShowcaseProject } from '../types';

export const MOCK_USER: User = {
  id: 'user-1',
  fullName: 'Alex Morgan',
  email: 'alex.morgan@example.com',
  role: 'learner',
  points: 120,
};

export const MOCK_CORE_CATEGORIES: CoreCategory[] = [
    {
        id: 'core-llm',
        title: 'Large Language Models (LLMs)',
        description: 'Master the foundational models that power modern text generation, analysis, and chat applications.'
    },
    {
        id: 'core-image',
        title: 'Text-to-Image Generation',
        description: 'Learn to create stunning visuals from simple text prompts with the world\'s most powerful image generation tools.'
    },
    {
        id: 'core-video',
        title: 'Text/Image-to-Video Generation',
        description: 'Step into the future of media creation by turning your ideas into dynamic video content.'
    }
];

export const MOCK_COURSES: Course[] = [
  // LLM Courses
  {
    id: 'course-llm-core',
    slug: 'llm-fundamentals',
    title: 'LLM Fundamentals: The Core Concepts',
    description: 'Understand the technology behind Large Language Models, from transformers to tokenization. This is the essential starting point for mastering generative text AI.',
    categoryId: 'core-llm',
    type: CourseType.CORE,
    instructor: { name: 'Dr. Evelyn Reed', bio: 'AI researcher specializing in Natural Language Processing.', avatarUrl: 'https://picsum.photos/id/1027/200/200' },
    modules: [
        { id: 'm1', title: 'Introduction to LLMs', order: 1, lessons: [
            { id: 'l1-1', title: 'What is an LLM?', order: 1, contentBlocks: [
                {id: 'cb-yt-1', order: 1, blockType: ContentBlockType.YOUTUBE, data: { videoId: 'zjkBMFh-T1A' }},
                {id: 'cb1', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: '## What is a Large Language Model?\n\nAn LLM is a type of artificial intelligence trained on vast amounts of text data to understand and generate human-like language. This lesson covers the basic principles.'}}
            ]},
            { id: 'l1-2', title: 'Key Terminology', order: 2, contentBlocks: [] }
        ]},
        { id: 'm2', title: 'How LLMs Work', order: 2, lessons: [
            { id: 'l2-1', title: 'The Transformer Architecture', order: 1, contentBlocks: [] },
        ]}
    ]
  },
  {
    id: 'course-gemini',
    slug: 'mastering-gemini',
    title: 'Mastering Google Gemini',
    description: 'A deep dive into the Google Gemini family of models. Learn to leverage its multi-modal capabilities for advanced applications.',
    categoryId: 'core-llm',
    type: CourseType.TOOL,
    instructor: { name: 'Dr. Evelyn Reed', bio: 'AI researcher specializing in Natural Language Processing.', avatarUrl: 'https://picsum.photos/id/1027/200/200' },
    modules: [
        { id: 'mg-m1', title: 'Getting Started with Gemini', order: 1, lessons: [
            { id: 'mg-l1-1', title: 'Introduction to the Gemini API', order: 1, contentBlocks: [] },
            { id: 'mg-l1-2', title: 'Your First Gemini Prompt', order: 2, contentBlocks: [] }
        ]}
    ]
  },
  // Image Generation Courses
  {
    id: 'course-image-core',
    slug: 'image-gen-fundamentals',
    title: 'Image Generation: The Core Concepts',
    description: 'Discover how diffusion models and other techniques turn text into images. This course covers the fundamentals of prompt engineering for visual media.',
    categoryId: 'core-image',
    type: CourseType.CORE,
    instructor: { name: 'Javier ""Javi"" Reyes', bio: 'Digital artist and AI art pioneer.', avatarUrl: 'https://picsum.photos/id/1005/200/200' },
    modules: [
        { id: 'mi-m1', title: 'Introduction to Diffusion Models', order: 1, lessons: [
            { id: 'mi-l1-1', title: 'From Noise to Art', order: 1, contentBlocks: [
                 {id: 'cb-mi-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: '## From Noise to Art\n\nThis lesson explores the core concept of diffusion models, which start with random noise and gradually refine it into a coherent image based on your prompt.'}}
            ]},
        ]}
    ]
  },
  {
    id: 'course-midjourney',
    slug: 'mastering-midjourney',
    title: 'Mastering Midjourney',
    description: 'Learn the art and science of prompting in Midjourney to create breathtaking, photorealistic, and artistic images.',
    categoryId: 'core-image',
    type: CourseType.TOOL,
    instructor: { name: 'Javier ""Javi"" Reyes', bio: 'Digital artist and AI art pioneer.', avatarUrl: 'https://picsum.photos/id/1005/200/200' },
    modules: [
        { id: 'mm-m1', title: 'The Midjourney Workflow', order: 1, lessons: [
            { id: 'mm-l1-1', title: 'Working with the Discord Bot', order: 1, contentBlocks: [] },
            { id: 'mm-l1-2', title: 'Understanding Parameters', order: 2, contentBlocks: [] }
        ]}
    ]
  },
  // Video Generation Courses
   {
    id: 'course-video-core',
    slug: 'video-gen-fundamentals',
    title: 'Video Generation: The Core Concepts',
    description: 'Explore the cutting-edge of AI that brings text and images to life. Understand the complexities and possibilities of generative video.',
    categoryId: 'core-video',
    type: CourseType.CORE,
    instructor: { name: 'Anya Sharma', bio: 'Filmmaker and creative technologist.', avatarUrl: 'https://picsum.photos/id/1011/200/200' },
    modules: [
        { id: 'mv-m1', title: 'The Generative Video Landscape', order: 1, lessons: [
            { id: 'mv-l1-1', title: 'Key Players and Technologies', order: 1, contentBlocks: [] },
        ]}
    ]
  },
   {
    id: 'course-veo',
    slug: 'mastering-veo',
    title: 'Mastering Google Veo',
    description: 'Create high-quality, cinematic video clips from text and image prompts using Google\'s state-of-the-art Veo model.',
    categoryId: 'core-video',
    type: CourseType.TOOL,
    instructor: { name: 'Anya Sharma', bio: 'Filmmaker and creative technologist.', avatarUrl: 'https://picsum.photos/id/1011/200/200' },
    modules: [
        { id: 'veo-m1', title: 'Introduction to Veo', order: 1, lessons: [
            { id: 'veo-l1-1', title: 'Crafting Your First Shot', order: 1, contentBlocks: [] },
        ]}
    ]
  },
];

export const MOCK_PROGRESS: UserProgress = {
  'l1-1': true,
  'l1-2': true,
  'l2-1': true, // Completed 'LLM Fundamentals'
  'mi-l1-1': true, // Started 'Image Gen Fundamentals'
};

export const MOCK_FORUM_THREADS: ForumThread[] = [
    {
        id: 'thread-1',
        title: 'Best parameters for photorealism in Midjourney?',
        author: { id: 'user-2', fullName: 'Jane Doe' },
        createdAt: '2 days ago',
        replyCount: 2,
        posts: [
            { id: 'post-1', author: { id: 'user-2', fullName: 'Jane Doe' }, createdAt: '2 days ago', content: 'I\'m in the Midjourney course and trying to get really photorealistic results. What are your go-to settings? --ar 16:9 is a given, but what about --style and --s values?' },
            { id: 'post-2', author: { id: MOCK_USER.id, fullName: MOCK_USER.fullName }, createdAt: '1 day ago', content: 'I find that `--style raw` is essential for cutting down on the default Midjourney "artistic" look. I also keep my `--s` (stylize) value pretty low, like around 150-250.' },
            { id: 'post-3', author: { id: 'user-3', fullName: 'Sam Wilson' }, createdAt: '1 day ago', content: 'Good tip! Also, using camera/lens terminology in the prompt itself helps a lot. e.g., "shot on a Canon EOS R5, 50mm f/1.8 lens".' },
        ]
    },
    {
        id: 'thread-2',
        title: 'How is Gemini different from GPT-4?',
        author: { id: MOCK_USER.id, fullName: MOCK_USER.fullName },
        createdAt: '5 hours ago',
        replyCount: 0,
        posts: [
             { id: 'post-4', author: { id: MOCK_USER.id, fullName: MOCK_USER.fullName }, createdAt: '5 hours ago', content: 'Just finished the LLM fundamentals course and starting the Gemini one. For those who have used both, what are the biggest practical differences you notice between the Gemini models and something like GPT-4?' },
        ]
    }
];

export const MOCK_ACHIEVEMENTS_CONFIG = [
  {
    id: 'ach-first-step',
    name: 'First Step',
    description: 'Complete your first lesson.',
    icon: 'Rocket',
    condition: (progress: UserProgress, courses: Course[]) => Object.keys(progress).length >= 1,
  },
  {
    id: 'ach-course-complete',
    name: 'Course Graduate',
    description: 'Complete your first full course.',
    icon: 'GraduationCap',
    condition: (progress: UserProgress, courses: Course[]) => {
      return courses.some(course => 
        course.modules.flatMap(m => m.lessons).every(l => progress[l.id])
      );
    },
  },
  {
    id: 'ach-core-llm',
    name: 'LLM Foundations',
    description: 'Complete the LLM Core Concepts course.',
    icon: 'BrainCircuit',
    condition: (progress: UserProgress, courses: Course[]) => {
      const coreCourse = courses.find(c => c.slug === 'llm-fundamentals');
      if (!coreCourse) return false;
      return coreCourse.modules.flatMap(m => m.lessons).every(l => progress[l.id]);
    },
  },
  {
    id: 'ach-core-image',
    name: 'Image Foundations',
    description: 'Complete the Image Generation Core Concepts course.',
    icon: 'ImageIcon',
    condition: (progress: UserProgress, courses: Course[]) => {
      const coreCourse = courses.find(c => c.slug === 'image-gen-fundamentals');
      if (!coreCourse) return false;
      return coreCourse.modules.flatMap(m => m.lessons).every(l => progress[l.id]);
    },
  },
    {
    id: 'ach-tool-master',
    name: 'Tool Master',
    description: 'Complete any 3 tool-specific courses.',
    icon: 'Wrench',
    condition: (progress: UserProgress, courses: Course[]) => {
      const toolCourses = courses.filter(c => c.type === CourseType.TOOL);
      const completedToolCourses = toolCourses.filter(course => 
        course.modules.flatMap(m => m.lessons).every(l => progress[l.id])
      );
      return completedToolCourses.length >= 3;
    },
  },
];

export const MOCK_SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'proj-1',
    title: 'Cyberpunk Cityscape',
    description: 'Generated this for the final project in the Midjourney course. I was going for a rainy, neon-lit vibe inspired by classic sci-fi films. The key was using camera lens terminology in the prompt, like "anamorphic lens flare" and "shot on 85mm f/1.4 lens". It really helped with the photorealistic depth of field.',
    imageUrl: 'https://picsum.photos/seed/cyberpunk/800/600',
    author: {
      id: MOCK_USER.id,
      fullName: MOCK_USER.fullName,
      avatarUrl: 'https://picsum.photos/id/1027/200/200'
    },
    courseId: 'course-midjourney',
    likes: 42,
    createdAt: '2 days ago',
  },
  {
    id: 'proj-2',
    title: 'A Fox in a Ghibli-style Forest',
    description: 'Tried to emulate the beautiful, hand-painted background style of Studio Ghibli. I used prompts like "watercolor anime style, lush green forest, whimsical, soft lighting". It took a few tries to get the fox to look just right, but I\'m happy with the result!',
    imageUrl: 'https://picsum.photos/seed/ghibli/800/600',
    author: {
      id: 'user-2',
      fullName: 'Jane Doe',
      avatarUrl: 'https://picsum.photos/id/1005/200/200'
    },
    courseId: 'course-midjourney',
    likes: 112,
    createdAt: '5 days ago',
  },
  {
    id: 'proj-3',
    title: 'Abstract Fluid Dynamics',
    description: 'This was an experiment using very abstract prompts with an image generation tool. I used phrases like "iridescent liquid metal, swirling smoke, macro photography, intricate details" and let the AI surprise me. This one came out looking like a cosmic event.',
    imageUrl: 'https://picsum.photos/seed/abstract/800/600',
     author: {
      id: 'user-3',
      fullName: 'Sam Wilson',
      avatarUrl: 'https://picsum.photos/id/1011/200/200'
    },
    courseId: 'course-image-core',
    likes: 89,
    createdAt: '1 week ago',
  }
];