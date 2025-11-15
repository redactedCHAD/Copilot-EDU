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
            { id: 'l1-2', title: 'Key Terminology', order: 2, contentBlocks: [
                {id: 'cb-l1-2-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: '### Tokens\n\nTokens are the basic units of text that an LLM processes. They can be words, subwords, or even characters. For example, the sentence \'I love AI\' might be broken down into three tokens: \'I\', \'love\', \'AI\'.' }},
                {id: 'cb-l1-2-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: '### Parameters\n\nParameters are the internal variables of the model that are learned during training. The number of parameters (e.g., 175 billion for GPT-3) is often used as a measure of a model\'s size and potential capability.' }},
                {id: 'cb-l1-2-3', order: 3, blockType: ContentBlockType.MARKDOWN, data: { content: '### Hallucination\n\nThis refers to when an LLM generates text that is factually incorrect, nonsensical, or not grounded in the source data it was given. It\'s a key challenge in working with these models.' }},
            ] }
        ]},
        { id: 'm2', title: 'How LLMs Work', order: 2, lessons: [
            { id: 'l2-1', title: 'The Transformer Architecture', order: 1, contentBlocks: [
                {id: 'cb-l2-1-1', order: 1, blockType: ContentBlockType.YOUTUBE, data: { videoId: '4Bdc55j80l8' }},
                {id: 'cb-l2-1-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: '## The Attention Mechanism\n\nThe transformer architecture, introduced in the paper \'Attention Is All You Need\', is the foundation of most modern LLMs. Its key innovation is the **self-attention mechanism**. This allows the model to weigh the importance of different words in the input text when processing and generating language. It helps the model understand context and long-range dependencies in a sentence.' }},
            ] },
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
            { id: 'mg-l1-1', title: 'Introduction to the Gemini API', order: 1, contentBlocks: [
                {id: 'cb-mg-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: '## Accessing Gemini\n\nThe Google Gemini API provides a simple and powerful way to interact with the Gemini family of models. You can access it through client libraries (like Python, Node.js) or directly via REST API calls.' }},
                {id: 'cb-mg-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: '### Key Features\n\n*   **Multimodality:** Gemini can natively understand and process information from multiple formats, including text, images, and audio.\n*   **Scalability:** From the ultra-lightweight Flash models to the powerful Pro models, there\'s a version of Gemini for every task.\n*   **Tool Use:** Gemini can be connected to external tools and APIs, allowing it to perform actions in the real world.' }},
            ] },
            { id: 'mg-l1-2', title: 'Your First Gemini Prompt', order: 2, contentBlocks: [
                {id: 'cb-mg-3', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: '## Making Your First API Call\n\nHere is a simple example of how to generate text using the `@google/genai` library in a JavaScript environment. Make sure you have your API key configured.' }},
                {id: 'cb-mg-4', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: '```javascript\nimport { GoogleGenAI } from "@google/genai";\n\nconst ai = new GoogleGenAI({ apiKey: process.env.API_KEY });\n\nasync function run() {\n  const response = await ai.models.generateContent({\n    model: \'gemini-2.5-flash\',\n    contents: \'Write a short, futuristic story about a cat.\',\n  });\n\n  console.log(response.text);\n}\n\nrun();\n```' }},
                {id: 'cb-mg-5', order: 3, blockType: ContentBlockType.MARKDOWN, data: { content: 'This code initializes the client, sends a prompt to the `gemini-2.5-flash` model, and prints the generated story to the console. It\'s that simple to get started!' }},
            ] }
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
                 {id: 'cb-mi-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: '## From Noise to Art\n\nThis lesson explores the core concept of diffusion models, which start with random noise and gradually refine it into a coherent image based on your prompt.'}},
                 {id: 'cb-mi-2', order: 2, blockType: ContentBlockType.YOUTUBE, data: { videoId: '1d_k_j_RYO8' }},
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
  {
    id: 'course-nano-banana',
    slug: 'mastering-nano-banana',
    title: 'Mastering Nano Banana',
    description: 'Harness the power of Nano Banana for lightning-fast, high-quality image generation. This course covers everything from basic prompts to advanced editing features.',
    categoryId: 'core-image',
    type: CourseType.TOOL,
    instructor: { name: 'Javier ""Javi"" Reyes', bio: 'Digital artist and AI art pioneer.', avatarUrl: 'https://picsum.photos/id/1005/200/200' },
    modules: [
        { id: 'nb-m1', title: 'Introduction to Nano Banana', order: 1, lessons: [
            { id: 'nb-l1-1', title: 'What Makes Nano Banana Different?', order: 1, contentBlocks: [
                {id: 'cb-nb-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: '## Speed and Quality\n\nNano Banana (the `gemini-2.5-flash-image` model) is designed for a specific purpose: generating high-quality images with incredible speed. Unlike some other models that can take up to a minute, Nano Banana often returns results in just a few seconds.' }},
                {id: 'cb-nb-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: '### Key Advantages:\n\n*   **Real-time Generation:** The speed makes it ideal for iterative design and rapid prototyping.\n*   **API-First:** It\'s built to be easily integrated into applications.\n*   **In-painting & Out-painting:** It includes powerful, intuitive editing features directly within the generation process.' }},
            ] },
            { id: 'nb-l1-2', title: 'Setting Up Your Workspace & First Generation', order: 2, contentBlocks: [] }
        ]},
        { id: 'nb-m2', title: 'Core Prompting Techniques', order: 2, lessons: [
            { id: 'nb-l2-1', title: 'The Anatomy of a Great Prompt', order: 1, contentBlocks: [
                {id: 'cb-nb-3', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: '## Structure is Key\n\nA great prompt for Nano Banana is clear, descriptive, and structured. A common and effective structure is:\n\n**[Subject], [Style], [Action/Context], [Composition], [Lighting/Color]**' }},
                {id: 'cb-nb-4', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: '### Example Breakdown\n\nLet\'s break down a prompt:\n\n*   **Prompt:** `A majestic lion with a flowing mane, cinematic character portrait, standing on a rocky cliff at sunrise, close-up shot, warm golden hour lighting`\n\n*   **Subject:** `A majestic lion with a flowing mane`\n*   **Style:** `cinematic character portrait`\n*   **Action/Context:** `standing on a rocky cliff at sunrise`\n*   **Composition:** `close-up shot`\n*   **Lighting/Color:** `warm golden hour lighting`' }},
            ] },
            { id: 'nb-l2-2', title: 'Controlling Style, Composition, and Color', order: 2, contentBlocks: [] },
            { id: 'nb-l2-3', title: 'Negative Prompts and What to Exclude', order: 3, contentBlocks: [
                {id: 'cb-nb-5', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: 'A "negative prompt" is a way to tell the model what you *don\'t* want to see in the image. This is useful for removing unwanted elements (like extra fingers on a hand), suppressing certain styles, or avoiding specific colors.'}},
                {id: 'cb-nb-6', order: 2, blockType: ContentBlockType.QUIZ, data: {
                    question: 'What is the primary purpose of a negative prompt in image generation?',
                    options: [
                        'To add extra details to the image.',
                        'To tell the AI what styles to avoid or what objects to exclude.',
                        'To make the image generation faster.',
                        'To choose the color palette of the image.'
                    ],
                    correctAnswerIndex: 1
                }},
            ] }
        ]},
        { id: 'nb-m3', title: 'Advanced Features: Image Editing', order: 3, lessons: [
            { id: 'nb-l3-1', title: 'Inpainting: Removing and Replacing Objects', order: 1, contentBlocks: [] },
            { id: 'nb-l3-2', title: 'Outpainting: Expanding Your Canvas', order: 2, contentBlocks: [] },
        ]},
        { id: 'nb-m4', title: 'Practical Projects', order: 4, lessons: [
            { id: 'nb-l4-1', title: 'Project: Creating a Character Sheet', order: 1, contentBlocks: [] },
            { id: 'nb-l4-2', title: 'Project: Designing a Mock Website Landing Page', order: 2, contentBlocks: [] },
        ]}
    ]
  },
  {
    id: 'course-visual-prompts-marketers',
    slug: 'ai-visuals-for-marketers',
    title: 'AI-Powered Visuals for Marketers',
    description: '50+ battle-tested AI image prompts to create scroll-stopping visuals for your brand in minutes. Learn to generate professional, on-brand images for e-commerce, social media, ads, and more.',
    categoryId: 'core-image',
    type: CourseType.TOOL,
    instructor: { name: 'Javier ""Javi"" Reyes', bio: 'Digital artist and AI art pioneer.', avatarUrl: 'https://picsum.photos/id/1005/200/200' },
    modules: [
        { id: 'avm-m1', title: 'Section 1: Brand Foundation Prompts', order: 1, lessons: [
            { id: 'avm-l1-1', title: '1.1 Core Brand Aesthetic Definer', order: 1, contentBlocks: [
                {id: 'avm-cb-1-1-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nCreate a mood board style composition showing [YOUR BRAND NAME]'s visual identity. Style: [minimalist modern/vintage artisan/bold contemporary/luxury refined/playful energetic]. Color palette: [primary color], [secondary color], [accent color]. Textures: [smooth/textured/matte/glossy]. Mood: [professional/friendly/innovative/trustworthy/exciting]. Lighting: [soft natural/dramatic/bright/warm]. Include subtle geometric shapes and spacing that conveys [sophistication/approachability/innovation]. Photography style: [clean product photography/lifestyle candids/editorial style]. 8K resolution, professional color grading." }},
                {id: 'avm-cb-1-1-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Usage Notes\n\n*   Fill in brackets with your brand specifics. Save the output and reference it for consistency in future prompts." }}
            ]},
            { id: 'avm-l1-2', title: '1.2 Logo Style Exploration', order: 2, contentBlocks: [
                {id: 'avm-cb-1-2-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nModern logo design concept for [YOUR BRAND/PRODUCT]. Style: [wordmark/lettermark/icon-based/combination mark]. Visual metaphor: [CONCEPT - e.g., \"growth,\" \"connection,\" \"precision\"]. Aesthetic: [geometric minimalist/organic flowing/bold industrial/elegant serif/tech-forward]. Color scheme: [1-2 colors]. Negative space usage: [simple/clever]. Scalable from favicon to billboard. Vector-style appearance, clean lines, memorable, timeless. White background. Multiple variations shown." }},
                {id: 'avm-cb-1-2-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Usage Notes\n\n*   Generate multiple variations, then refine your favorite with more specific parameters." }}
            ]},
            { id: 'avm-l1-3', title: '1.3 Brand Color Palette Generator', order: 3, contentBlocks: [
                {id: 'avm-cb-1-3-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSophisticated color palette presentation for [INDUSTRY] brand. Show 5-color harmony: [PRIMARY dominant color] as hero, [SECONDARY color] for balance, [ACCENT color] for calls-to-action, [NEUTRAL light], [NEUTRAL dark]. Display as elegant color swatches with hex codes visible. Include example applications: website header mockup, product packaging concept, social media post template. Mood: [professional/creative/trustworthy/energetic]. Color psychology optimized for [target audience]. Clean, modern presentation style." }},
                {id: 'avm-cb-1-3-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Usage Notes\n\n*   Use this to establish your brand's color DNA. Reference these exact colors in all future prompts." }}
            ]},
            { id: 'avm-l1-4', title: '1.4 Brand Character/Mascot Concept', order: 4, contentBlocks: [
                {id: 'avm-cb-1-4-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nFriendly brand mascot character for [YOUR BUSINESS TYPE]. Character type: [animal/object/abstract shape/human figure]. Personality traits: [approachable/professional/quirky/energetic/wise]. Visual style: [3D rendered/flat design/hand-drawn/geometric]. Color scheme: matches brand colors [LIST COLORS]. Multiple poses showing: neutral standing, excited, thinking, pointing/gesturing. Simple enough to work at small sizes. Memorable silhouette. Suitable for [B2B/B2C/tech/retail] audience. White background, character sheet format." }},
                {id: 'avm-cb-1-4-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Usage Notes\n\n*   Perfect for brands wanting a recognizable visual ambassador. Use consistently across marketing materials." }}
            ]},
            { id: 'avm-l1-5', title: '1.5 Signature Visual Element Library', order: 5, contentBlocks: [
                {id: 'avm-cb-1-5-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nCollection of custom branded visual elements for [YOUR BRAND]. Include: geometric dividers, border styles, icon set (10 line icons for [RELEVANT TOPICS]), decorative flourishes, pattern fills, button styles, badge designs. Style: [minimal modern/organic handcrafted/tech-forward/classic elegant]. Color: [BRAND COLORS]. All elements cohesive and reusable. Organized grid layout showing all elements. Vector-style, clean, scalable. Professional design system aesthetic." }},
                {id: 'avm-cb-1-5-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Usage Notes\n\n*   These become your visual \"toolkit\" - use elements consistently across all materials for brand recognition." }}
            ]},
            { id: 'avm-l1-6', title: '1.6 Typography Mood Board', order: 6, contentBlocks: [
                {id: 'avm-cb-1-6-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nTypography and font pairing inspiration board for [YOUR BRAND TYPE] brand. Show 3 font combination examples: [bold/modern/classic/playful] headline font paired with [clean/readable] body text. Demonstrate hierarchy with sample headlines, subheadings, body text, and call-to-action text. Background: [BRAND COLOR or complementary]. Include example applications: website hero section, Instagram post, business card. Mood: [sophisticated/friendly/authoritative/creative]. Spacing and layout demonstrates professional design principles." }},
                {id: 'avm-cb-1-6-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Usage Notes\n\n*   While AI won't generate actual fonts, this creates visual direction for your typography choices." }}
            ]},
            { id: 'avm-l1-7', title: '1.7 Brand Photography Style Guide Visual', order: 7, contentBlocks: [
                {id: 'avm-cb-1-7-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nPhotography style reference sheet for [YOUR BRAND]. Show 6 example photos demonstrating: lighting style [natural/studio/dramatic/bright], composition rules [rule of thirds/centered/negative space], depth of field [shallow/deep], color treatment [vibrant/muted/warm/cool], subject styling [minimal props/lifestyle context], background choices [clean/textured/environmental]. Mood: [aspirational/authentic/professional/casual]. Create a cohesive visual language. Grid layout with annotations. High-quality, professional photography aesthetic." }},
                {id: 'avm-cb-1-7-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Usage Notes\n\n*   This becomes your visual North Star for all photo-based content. Share with any photographers or use as your AI generation reference." }}
            ]},
            { id: 'avm-l1-8', title: '1.8 Brand Pattern Design', order: 8, contentBlocks: [
                {id: 'avm-cb-1-8-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSeamless repeating pattern design for [YOUR BRAND] brand applications. Pattern elements: [geometric shapes/organic forms/illustrated icons/abstract elements] related to [YOUR INDUSTRY/VALUES]. Style: [minimal/intricate/bold/subtle]. Colors: [BRAND COLOR PALETTE]. Scale: [small delicate/medium balanced/large bold]. Use cases: website backgrounds, packaging, social media templates, presentation slides. Pattern should be recognizable but not overwhelming. Modern, professional, ownable. Show pattern at multiple scales." }},
                {id: 'avm-cb-1-8-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Usage Notes\n\n*   A signature pattern adds professionalism and recognition. Use subtly in backgrounds across your marketing." }}
            ]},
            { id: 'avm-l1-9', title: '1.9 Brand Texture Library', order: 9, contentBlocks: [
                {id: 'avm-cb-1-9-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nCollection of 6 branded texture samples for [YOUR BRAND NAME]. Textures include: [paper/fabric/concrete/wood/metal/glass - CHOOSE 3 RELEVANT] with [BRAND COLOR] tints. Style: [natural/industrial/refined/rustic/modern]. Each texture shown as a square swatch. Include one \"hero\" texture that becomes signature brand element. High resolution, realistic rendering. Subtle enough for backgrounds, distinctive enough for brand recognition. Professional color grading matching brand palette." }},
                {id: 'avm-cb-1-9-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Usage Notes\n\n*   Textures add depth to flat designs. Use as subtle backgrounds in presentations, websites, and graphics." }}
            ]},
            { id: 'avm-l1-10', title: '1.10 Complete Brand Board Compilation', order: 10, contentBlocks: [
                {id: 'avm-cb-1-10-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nProfessional brand identity board for [YOUR BRAND NAME] showing complete visual system. Include: logo variations, color palette with hex codes, typography samples, photography style examples (3 photos), signature patterns, icon set, texture samples, spacing/layout principles demonstration. Layout: organized, balanced, professional presentation. Style: [industry-appropriate aesthetic]. This is a comprehensive visual reference guide. High resolution, suitable for printing or digital sharing with team/designers. Mood: cohesive, polished, ownable." }},
                {id: 'avm-cb-1-10-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Usage Notes\n\n*   Your master brand reference. Generate this after completing sections 1.1-1.9, incorporating your chosen elements." }}
            ]},
        ]},
        { id: 'avm-m2', title: 'Section 2: Product & E-commerce Visuals', order: 2, lessons: [
            { id: 'avm-l2-1', title: '2.1 Hero Product Shot - Studio Lighting', order: 1, contentBlocks: [
                {id: 'avm-cb-2-1-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nProfessional studio product photography of [YOUR PRODUCT]. Lighting: three-point lighting setup with soft key light, subtle fill, and rim light creating gentle highlights on edges. Background: [pure white/gradient gray/brand color fade]. Camera angle: [slightly above/eye-level/45-degree angle]. Product positioned [centered/rule of thirds]. Shadows: soft and natural. Focus: tack-sharp on product with subtle depth of field. Style: clean, commercial, premium. Resolution: 8K. Color: accurate product colors with professional color grading. Photorealistic, magazine-quality." }},
                {id: 'avm-cb-2-1-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Product description: Be specific (e.g., \"minimalist stainless steel water bottle with bamboo cap\")\n*   Background color: Match your brand or use white for versatility\n*   Angle: Adjust based on product's best features\n\n### Usage:\n\nMain product page images, Amazon listings, catalog covers" }}
            ]},
            { id: 'avm-l2-2', title: '2.2 Lifestyle Product in Use', order: 2, contentBlocks: [
                 {id: 'avm-cb-2-2-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nLifestyle photograph showing [YOUR PRODUCT] being used by [TARGET USER - e.g., \"a confident female entrepreneur in her 30s\"]. Setting: [SPECIFIC ENVIRONMENT - e.g., \"modern home office with plants and natural light\"]. Mood: [aspirational/authentic/cozy/professional]. Lighting: natural window light, golden hour warmth. Composition: product prominent but naturally integrated into scene. Background: softly blurred, suggesting [desired lifestyle]. Model: [DEMOGRAPHIC specifics]. Clothing: [casual modern/business casual/athletic]. Expression: [focused/happy/relaxed]. Color palette: [BRAND COLORS] accented naturally in scene. Photorealistic, editorial magazine quality, shot on [Canon R5/Sony A7IV] with 50mm f/1.8." }},
                {id: 'avm-cb-2-2-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Target user description: Match your ideal customer avatar\n*   Environment: Where would they use your product?\n*   Time of day affects mood (morning energy vs. evening relaxation)\n\n### Usage:\n\nSocial media content, website lifestyle sections, emotional connection marketing" }}
            ]},
            { id: 'avm-l2-3', title: '2.3 Product with Scale Reference', order: 3, contentBlocks: [
                 {id: 'avm-cb-2-3-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nClean product photography showing [YOUR PRODUCT] with scale reference object for size context. Reference object: [coffee cup/smartphone/hand/ruler - CHOOSE APPROPRIATE]. Composition: both objects sharp focus, positioned to naturally show product dimensions. Background: [seamless white/soft gray/subtle brand color]. Lighting: bright, even, professional. Style: informative yet aesthetic. Product placement: [rule of thirds]. Minimal shadows. Purpose: immediately communicate product size to eliminate customer confusion. Photorealistic, commercial photography quality, perfect color accuracy." }},
                {id: 'avm-cb-2-3-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Reference object should be universally recognizable\n*   Ensure object doesn't distract from product\n\n### Usage:\n\nProduct listings where size confusion causes returns, technical specifications pages" }}
            ]},
            { id: 'avm-l2-4', title: '2.4 Detailed Close-Up/Texture Shot', order: 4, contentBlocks: [
                 {id: 'avm-cb-2-4-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nExtreme close-up macro photography of [SPECIFIC PRODUCT FEATURE - e.g., \"leather stitching detail\" or \"metallic finish texture\"]. Focus: razor-sharp on texture/detail with artistic bokeh background. Lighting: angled to highlight texture, material quality, and craftsmanship. Camera: macro lens perspective, 100mm f/2.8, shallow depth of field. Purpose: showcase premium quality and attention to detail. Colors: accurate, with professional color grading emphasizing richness. Background: blurred product context. Mood: luxury, craftsmanship, \"worth the investment.\" 8K resolution, every detail visible." }},
                {id: 'avm-cb-2-4-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Choose your product's most impressive physical feature\n*   Lighting angle affects how texture appears (side-lighting emphasizes texture)\n\n### Usage:\n\nPremium positioning, quality-focused marketing, detail galleries" }}
            ]},
            { id: 'avm-l2-5', title: '2.5 Product Flatlay Composition', order: 5, contentBlocks: [
                 {id: 'avm-cb-2-5-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nOverhead flatlay photography of [YOUR PRODUCT] with complementary lifestyle objects. Composition: organized yet natural arrangement on [surface type - marble/wood/linen]. Include: [3-5 RELEVANT ITEMS - e.g., \"notebook, coffee cup, wireless earbuds, plant sprig\"]. Color palette: [BRAND COLORS] with neutral balance. Lighting: bright, even, minimal shadows. Style: [minimal modern/cozy hygge/professional workspace/creative artisan]. Spacing: balanced negative space. All items aligned in pleasing geometry. Purpose: show product in aspirational context. Photorealistic, Instagram-worthy, professional styling. Shot from directly overhead, perfectly flat." }},
                {id: 'avm-cb-2-5-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Surrounding items should reflect your customer's lifestyle\n*   Surface texture adds character (concrete, marble, wood)\n\n### Usage:\n\nInstagram posts, Pinterest marketing, lifestyle branding" }}
            ]},
             { id: 'avm-l2-6', title: '2.6 Product Comparison Layout', order: 6, contentBlocks: [
                 {id: 'avm-cb-2-6-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSide-by-side comparison graphic showing [YOUR PRODUCT] versus [ALTERNATIVE/COMPETITOR TYPE - keep generic]. Split-screen composition: Your product [left/right] in premium presentation with [describe features visible], comparison product on [opposite side] as [generic/basic representation]. Visual treatment: your product in full color with professional lighting, comparison [slightly desaturated/simple presentation]. Background: [clean white/split backgrounds with your brand color on your side]. Include subtle visual indicators: [checkmarks/highlight glow] on your product's side. Style: clean, fair comparison, professional, not overly aggressive. Infographic aesthetic." }},
                {id: 'avm-cb-2-6-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Keep comparison fair-looking but visually favor your product through presentation quality\n*   Don't name competitors; keep generic\n\n### Usage:\n\nLanding pages, sales presentations, \"why choose us\" sections" }}
            ]},
            { id: 'avm-l2-7', title: '2.7 Unboxing Moment Visual', order: 7, contentBlocks: [
                 {id: 'avm-cb-2-7-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nFirst-person perspective photograph of hands opening [YOUR PRODUCT] packaging. Moment: lid just lifted, product visible inside with [BRAND PACKAGING DETAILS - tissue paper/branded inserts/protective foam]. Hands: [DEMOGRAPHIC-appropriate - skin tone, age, styling]. Lighting: natural, warm, inviting. Background: [home setting/clean table] slightly blurred. Packaging: premium presentation showing [BRAND COLORS/LOGO]. Mood: excitement, anticipation, \"treat yourself\" moment. Composition: hands frame the product, drawing eye to unboxing experience. Photorealistic, editorial quality, shot on iPhone 15 Pro natural camera aesthetic for authenticity." }},
                {id: 'avm-cb-2-7-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Hands should match target demographic\n*   Packaging details should match your actual packaging (or aspirational packaging)\n\n### Usage:\n\nSocial proof content, Instagram stories, email marketing \"you'll love unboxing this\"" }}
            ]},
            { id: 'avm-l2-8', title: '2.8 Product in Natural Environment', order: 8, contentBlocks: [
                 {id: 'avm-cb-2-8-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nEnvironmental product photography: [YOUR PRODUCT] in [RELEVANT NATURAL SETTING - beach/forest/mountain/garden]. Product placement: naturally positioned on [rock/sand/grass/wooden surface], not forced. Lighting: golden hour, warm natural sunlight. Background: beautiful [ENVIRONMENT] bokeh, depth and atmosphere. Foreground: subtle natural elements [blurred grass/sand texture]. Mood: [adventure/tranquility/sustainability/freedom]. Product: clean and prominent despite natural setting. Style: aspirational lifestyle, \"take me there\" feeling. Colors: natural environment tones complement [BRAND COLORS]. Professional outdoor photography quality, shot on [Sony A7 series] with 35mm lens." }},
                {id: 'avm-cb-2-8-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Environment should align with product values (sustainability? Show nature)\n*   Weather/lighting affects mood dramatically\n\n### Usage:\n\nHomepage heroes, brand story pages, environmental/sustainability messaging" }}
            ]},
            { id: 'avm-l2-9', title: '2.9 Product Collection/Family Shot', order: 9, contentBlocks: [
                 {id: 'avm-cb-2-9-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nProfessional product family photograph showing [NUMBER] variations of [YOUR PRODUCT LINE]. Arrangement: [linear arrangement/semi-circle/staggered depth] on [white seamless/brand color background]. Each product: clearly visible, evenly lit, same perspective. Spacing: balanced, showing individual products while communicating \"collection.\" Lighting: studio lighting, even across all products, no harsh shadows. Purpose: show range, options, scale of offering. Style: clean, organized, premium retail. Color: accurate product colors, professional grading. Composition: symmetrical and pleasing. Photorealistic, catalog-quality, 8K resolution." }},
                {id: 'avm-cb-2-9-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Arrangement style affects perception (linear = equality, staggered = hero product with variants)\n*   Number of products (don't overcrowd)\n\n### Usage:\n\nCollection pages, \"choose your style\" sections, product catalogs" }}
            ]},
            { id: 'avm-l2-10', title: '2.10 Product in Action - Motion Moment', order: 10, contentBlocks: [
                 {id: 'avm-cb-2-10-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nDynamic action photograph of [YOUR PRODUCT] [IN USE - being poured/spraying/opening/moving]. Moment: peak action captured, showing [PRODUCT BENEFIT - liquid splashing/powder dispersing/smooth mechanism]. Lighting: backlit or side-lit to highlight motion, [water droplets/particles/movement]. Background: [clean backdrop/contextual blur]. Focus: product sharp, motion blur on moving elements for dynamism. Speed: frozen action but energy visible. Mood: performance, effectiveness, satisfaction. Style: commercial advertising photography. Colors: vibrant, [BRAND COLORS] pop. Professional high-speed photography aesthetic, shot at 1/2000 shutter speed, dramatic and eye-catching." }},
                {id: 'avm-cb-2-10-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Action should demonstrate key product benefit\n*   Motion direction guides eye toward product\n\n### Usage:\n\nPerformance-focused marketing, \"see it work\" demonstrations, dynamic ads" }}
            ]},
            { id: 'avm-l2-11', title: '2.11 Product Packaging Design Mock', order: 11, contentBlocks: [
                 {id: 'avm-cb-2-11-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\n3D rendered product packaging design for [YOUR PRODUCT]. Packaging type: [box/bottle/bag/tube]. Size: [dimensions]. Material: [cardboard/glass/plastic/metal - specify finish: matte/glossy]. Front panel: [YOUR BRAND LOGO] prominently placed, [PRODUCT NAME] in [FONT STYLE], [KEY BENEFIT text], visual element: [pattern/product image/illustration]. Color scheme: [PRIMARY BRAND COLOR] with [ACCENT COLORS]. Side panels: [ingredients/features/usage instructions visible]. Style: [minimal modern/vintage apothecary/bold contemporary/eco-friendly]. Lighting: studio lighting showing dimension and finish. Angle: 3/4 view showing front and side. Background: seamless [color]. Photorealistic 3D rendering, print-ready detail level." }},
                {id: 'avm-cb-2-11-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Match your actual packaging type\n*   Include legally required elements (but keep readable, not focus)\n\n### Usage:\n\nPre-launch mockups, investor presentations, packaging design exploration" }}
            ]},
            { id: 'avm-l2-12', title: '2.12 Product Before/After Split', order: 12, contentBlocks: [
                 {id: 'avm-cb-2-12-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSplit-screen before/after composition showing transformation from using [YOUR PRODUCT]. Layout: vertical or horizontal split down middle. \"Before\" side: [PROBLEM STATE - dull/messy/inefficient/plain] with [slightly desaturated/cooler tones]. \"After\" side: [SOLUTION STATE - vibrant/organized/improved/enhanced] with [full color/warmer tones/subtle glow]. Product: visible in \"after\" side, positioned [naturally in scene]. Label: subtle \"BEFORE\" and \"AFTER\" text. Style: clean, honest representation, not overly dramatized. Lighting: both sides well-lit but \"after\" slightly brighter/more appealing. Same setting/angle both sides for fair comparison. Photorealistic, professional marketing quality." }},
                {id: 'avm-cb-2-12-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Problem/solution should be visually obvious\n*   Keep transformation believable\n\n### Usage:\n\nLanding pages, ads, testimonial pages, conversion-focused content" }}
            ]},
        ]},
        { id: 'avm-m3', title: 'Section 3: Social Media Content', order: 3, lessons: [
            { id: 'avm-l3-1', title: '3.1 Instagram Feed Grid Consistency Template', order: 1, contentBlocks: [
                {id: 'avm-cb-3-1-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nInstagram post template design for [YOUR BRAND]. Layout: [centered subject/rule of thirds/edge-to-edge]. Background: [BRAND COLOR/white/environmental]. Style: [minimal clean/vibrant bold/moody atmospheric/bright cheerful]. Consistent elements: [COLOR PALETTE: list 3 colors], [LIGHTING: natural/studio/golden hour], [COMPOSITION: describe framing rules], [TEXTURE: smooth/grainy/matte]. Subject area: [product focus/lifestyle focus/text-based]. Spacing: [generous negative space/filled frame]. Brand watermark: [subtle corner logo/border element]. Create template feeling cohesive when 9 posts shown in grid. Professional, scroll-stopping, algorithm-friendly aesthetic." }},
                {id: 'avm-cb-3-1-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Choose ONE consistent element that threads through all posts (same color treatment, same filter mood, same composition style)\n*   Template should flex for different content types while maintaining visual identity\n\n### Usage:\n\nDaily Instagram posts, content calendar planning, brand consistency" }}
            ]},
            { id: 'avm-l3-2', title: '3.2 Instagram Story Template - Vertical Format', order: 2, contentBlocks: [
                {id: 'avm-cb-3-2-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nInstagram Story design template (1080x1920px vertical). Top third: [YOUR BRAND ELEMENT - logo/pattern/color block] with [HEADLINE TEXT AREA]. Middle section: [FOCAL CONTENT AREA - product image/quote/photo placeholder] with [DESIGN ELEMENT - frame/circle mask/geometric shape]. Bottom third: [CALL-TO-ACTION area with swipe-up indicator/button/link prompt]. Color scheme: [PRIMARY: brand color] background with [ACCENT: contrasting color] for CTA. Style: [modern minimal/playful bold/elegant refined]. Typography: [bold/script/clean sans-serif] headers. Spacing: comfortable, thumb-friendly tap zones. Interactive element: [poll placeholder/question sticker area/slider area]. Vertical-optimized, mobile-first design, engaging, on-brand." }},
                {id: 'avm-cb-3-2-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Interactive elements should match content strategy (polls for engagement, questions for feedback, sliders for opinions)\n*   CTA area should be unmissable but not overwhelming\n\n### Usage:\n\nStory templates for announcements, polls, product launches, daily engagement" }}
            ]},
            { id: 'avm-l3-3', title: '3.3 Carousel Post Series Design (Slide 1)', order: 3, contentBlocks: [
                {id: 'avm-cb-3-3-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nInstagram carousel post - Slide 1 of 5 design. Format: square (1080x1080px). Purpose: hook slide that stops scroll. Visual: [ATTENTION-GRABBING IMAGE - intriguing product angle/bold text on color/surprising composition]. Text overlay: [COMPELLING HOOK - \"5 Things You're Doing Wrong with [TOPIC]\" / \"The Secret to [BENEFIT]\"]. Typography: [BOLD SANS-SERIF] in [HIGH-CONTRAST COLOR]. Indicator: \"1/5\" or \"SWIPE →\" element in [CORNER]. Background: [BRAND COLOR] or [striking complementary]. Composition: visual tension, incomplete information that creates curiosity. Style: [your brand aesthetic]. Designed to create immediate \"need to swipe\" impulse. Professional carousel design.\n\n**Follow-up prompt for Slides 2-5:** \"Create slides 2, 3, 4, and 5 following same design system but with [CONTENT PROGRESSION]. Maintain consistent [COLORS/FONTS/LAYOUT STRUCTURE] for visual cohesion.\"" }},
                {id: 'avm-cb-3-3-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Usage:\n\nEducational content, listicles, storytelling, audience retention" }}
            ]},
            { id: 'avm-l3-4', title: '3.4 Quote Graphic - Branded Background', order: 4, contentBlocks: [
                {id: 'avm-cb-3-4-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSocial media quote graphic for [YOUR BRAND]. Quote text: [INSERT MEANINGFUL QUOTE - keep under 15 words for readability]. Typography: [FONT STYLE] in [COLOR] with [SIZE: large, readable on mobile]. Background: [BRAND COLOR] with [SUBTLE TEXTURE/PATTERN from your brand library] or [RELEVANT BACKGROUND IMAGE with 40% opacity overlay]. Layout: [centered/left-aligned with negative space]. Decorative elements: [MINIMAL - quotation marks/underline/geometric shapes] in [ACCENT COLOR]. Attribution: small text \"[AUTHOR NAME]\" [bottom corner]. Style: [inspirational minimalist/bold motivational/elegant refined]. Composition: [generous white space/visual breathing room]. Square format (1080x1080px), Instagram-optimized, shareable, screenshot-worthy." }},
                {id: 'avm-cb-3-4-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Choose quotes that align with brand values or customer pain points\n*   Background should enhance readability, not compete with text\n\n### Usage:\n\nMotivation Monday, testimonial quotes, thought leadership, shareability" }}
            ]},
            { id: 'avm-l3-5', title: '3.5 Behind-the-Scenes Aesthetic', order: 5, contentBlocks: [
                {id: 'avm-cb-3-5-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nBehind-the-scenes photograph of [YOUR BUSINESS ACTIVITY - packing orders/product creation/team meeting/workspace]. Style: authentic, unpolished but still aesthetic. Lighting: natural, slightly underexposed for \"real moment\" feel. Composition: [over-the-shoulder/overhead/candid angle] showing [ACTIVITY/WORKSPACE]. Include: [hands working/tools/materials/product in progress]. Mood: [hardworking/creative process/dedication/community]. Color treatment: [slightly muted/warm tones] for authenticity vs. overly styled. Background: real workspace, organized chaos, relatable. No posed smiles, capture genuine work moments. Style: \"day in the life\" documentary photography, iPhone snapshot aesthetic but well-composed, humanizing, trust-building." }},
                {id: 'avm-cb-3-5-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Activity should reveal your process in interesting way\n*   Authenticity is key - imperfect is perfect here\n\n### Usage:\n\nInstagram stories, \"know us\" content, transparency marketing, connection-building" }}
            ]},
            { id: 'avm-l3-6', title: '3.6 Product Announcement Graphic', order: 6, contentBlocks: [
                {id: 'avm-cb-3-6-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSocial media announcement graphic for [NEW PRODUCT/LAUNCH]. Layout: [centered product image] on [BOLD BRAND COLOR or gradient] background. Product: hero shot, well-lit, prominent (占60% of composition). Text overlay: \"NEW\" badge [top corner], [PRODUCT NAME] in [LARGE BOLD FONT], [KEY BENEFIT] in [smaller subtitle text], [LAUNCH DATE] and [CALL-TO-ACTION: \"Shop Now\" / \"Pre-Order\" / \"Learn More\"]. Visual treatment: subtle [glow/shadow/geometric frame] around product for emphasis. Style: exciting, premium, clear. Typography hierarchy: obvious. Color: [high contrast] for readability. Emoji: [relevant emoji - only if brand-appropriate]. Square or vertical format, optimized for all platforms, shareable, creates FOMO." }},
                {id: 'avm-cb-3-6-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Energy level should match brand personality (excited vs. sophisticated vs. playful)\n*   CTA should match launch stage (coming soon vs. available now)\n\n### Usage:\n\nProduct launches, new service announcements, limited releases" }}
            ]},
            { id: 'avm-l3-7', title: '3.7 User-Generated Content Style Recreation', order: 7, contentBlocks: [
                {id: 'avm-cb-3-7-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSocial media photo styled as authentic user-generated content featuring [YOUR PRODUCT]. Setting: [REAL CUSTOMER ENVIRONMENT - home/car/gym/office]. Photo style: iPhone quality, natural lighting, slightly imperfect composition (authentic, not stock-photo-perfect). Product: casually integrated into scene, being used naturally. Person: [TARGET DEMOGRAPHIC] in [CASUAL CLOTHING], genuine expression [happy/satisfied/natural smile]. Angle: [selfie-style/laid on table overhead/mirror photo]. Include: realistic environmental context [other everyday items/messy background]. Mood: relatable, \"this could be me,\" trust-building. Caption area: mockup of social post frame with [USERNAME] and heart icons. Aesthetic: real customer testimonial vibe, not branded content. Authentic, grassroots marketing feel." }},
                {id: 'avm-cb-3-7-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Environment should match where customers actually use product\n*   Deliberately avoid \"too perfect\" - some blur, weird angle, real life clutter is good\n\n### Usage:\n\nSocial proof, testimonial graphics, repost-style content, authenticity building" }}
            ]},
            { id: 'avm-l3-8', title: '3.8 Seasonal/Holiday Themed Post', order: 8, contentBlocks: [
                {id: 'avm-cb-3-8-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSeasonal social media graphic for [HOLIDAY/SEASON]. Product: [YOUR PRODUCT] styled with [SEASONAL ELEMENTS - pumpkins/snow/flowers/beach items]. Background: [SEASONAL COLOR PALETTE - autumn oranges/winter blues/spring pastels/summer brights]. Props: [HOLIDAY-SPECIFIC ITEMS - ornaments/hearts/flags] subtly incorporated. Lighting: [seasonal light quality - warm autumn/cool winter/bright spring/golden summer]. Text overlay: [SEASONAL MESSAGE - \"Cozy Fall Vibes\" / \"Summer Ready\" / \"Holiday Gift Guide\"]. Style: festive but not cheesy, [YOUR BRAND AESTHETIC] maintained while embracing season. Composition: product prominent, seasonal elements complementary. Mood: [seasonal emotion - cozy/refreshed/romantic/adventurous]. Timely, shareable, seasonally relevant." }},
                {id: 'avm-cb-3-8-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Don't overwhelm product with seasonal props\n*   Adjust seasonal marketing intensity to your brand personality\n\n### Usage:\n\nSeasonal campaigns, holiday promotions, timely content calendar" }}
            ]},
            { id: 'avm-l3-9', title: '3.9 Stat/Data Visualization Post', order: 9, contentBlocks: [
                {id: 'avm-cb-3-9-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSocial media data visualization graphic sharing [COMPELLING STATISTIC relevant to your industry]. Layout: [BOLD NUMBER] (占40% of space) in [BRAND COLOR] on [CONTRASTING BACKGROUND]. Typography: [THICK DISPLAY FONT] for number, [CLEAN SANS-SERIF] for context text. Supporting text: \"[WHAT THE STAT MEANS]\" and \"[SOURCE]\" in smaller text. Visual element: [simple icon/graph/chart] illustrating the data point. Style: [modern infographic/bold statement/minimal clean]. Color scheme: [BRAND COLORS] with [DATA VISUALIZATION BEST PRACTICES - high contrast]. Purpose: make [PAIN POINT/OPPORTUNITY] immediately clear. Layout: generous spacing, easy to read while scrolling. Square format, shareable, conversation-starting, authority-building." }},
                {id: 'avm-cb-3-9-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Choose stats that either highlight problem you solve or opportunity you provide\n*   Keep context text minimal - stat should speak for itself\n\n### Usage:\n\nThought leadership, problem-awareness content, credibility building" }}
            ]},
            { id: 'avm-l3-10', title: '3.10 Tutorial/How-To Step Visual', order: 10, contentBlocks: [
                {id: 'avm-cb-3-10-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSocial media tutorial graphic showing [STEP NUMBER] of [PROCESS using your product]. Layout: step number [LARGE, CIRCLED] in [BRAND COLOR], [CLEAR PHOTO] of the action being performed (占50% of space), [CONCISE INSTRUCTION TEXT: 5-8 words] in [READABLE FONT]. Background: [clean white/soft color] for clarity. Photo: [overhead/side angle] clearly showing [hands/product/result] with [bright even lighting]. Arrows/indicators: [simple graphic elements] showing direction or focus area if needed. Style: instructional but attractive, [YOUR BRAND AESTHETIC]. Part of series: design consistent for steps 1-X. Format: square or vertical, mobile-friendly, screenshot-worthy, saves-worthy content." }},
                {id: 'avm-cb-3-10-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Steps should be genuinely helpful, not just promotional\n*   Photos should be clear enough that minimal text is needed\n\n### Usage:\n\nEducational content, product usage guides, value-added posting, saveability" }}
            ]},
            { id: 'avm-l3-11', title: '3.11 Testimonial/Review Highlight', order: 11, contentBlocks: [
                {id: 'avm-cb-3-11-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSocial media testimonial graphic featuring customer review. Layout: [CUSTOMER QUOTE - 2-3 sentences max] in [LARGE READABLE FONT] on [BRAND COLOR or soft neutral] background. Attribution: customer name or \"[VERIFIED BUYER]\" with [STAR RATING]. Visual element: [customer photo/avatar if available - circular frame] or [product image if no photo]. Design elements: [quotation marks/decorative underline] in [ACCENT COLOR]. Style: trustworthy, clean, professional. Typography: [quote in script/serif for warmth], [attribution in clean sans-serif]. Optional: [YOUR PRODUCT] small image in [corner]. Mood: authentic testimonial, social proof, trust-building. Square format, highly shareable, conversion-supporting." }},
                {id: 'avm-cb-3-11-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Choose quotes that address specific objections or highlight specific benefits\n*   Customer photo adds authenticity if available and permitted\n\n### Usage:\n\nSocial proof content, testimonial highlights, objection-handling, trust-building" }}
            ]},
            { id: 'avm-l3-12', title: '3.12 Interactive Poll/Question Template', order: 12, contentBlocks: [
                {id: 'avm-cb-3-12-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nInstagram Story poll template design. Top section: [ENGAGING QUESTION - \"Which color should we launch next?\" / \"What content do you want more of?\"] in [BOLD TEXT]. Middle: [VISUAL OPTIONS - two product photos/color swatches/concepts] side by side with [POLL SLIDER overlay area]. Bottom: [YOUR BRANDING - small logo/brand color accent]. Background: [BRAND COLOR with 80% opacity] over [subtle pattern/texture]. Style: fun, interactive, easy to understand at a glance. Text: [high contrast for readability]. Poll indicators: clear A/B or option 1/2 labeling. Design: thumb-friendly, encourages participation. Vertical 1080x1920px format, engagement-driving, community-building, audience research tool." }},
                {id: 'avm-cb-3-12-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Questions should provide useful insights while being fun to answer\n*   Visual options should be clearly different\n\n### Usage:\n\nAudience engagement, product development insights, community building" }}
            ]},
            { id: 'avm-l3-13', title: '3.13 Countdown/Coming Soon Teaser', order: 13, contentBlocks: [
                {id: 'avm-cb-3-13-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSocial media teaser graphic for upcoming [LAUNCH/EVENT/ANNOUNCEMENT]. Visual: [PARTIALLY OBSCURED PRODUCT / silhouette / close-up detail / blurred preview] creating mystery. Text: \"COMING SOON\" or \"[X] DAYS\" in [LARGE BOLD TYPOGRAPHY]. Date: [LAUNCH DATE] prominently displayed. Background: [DRAMATIC - dark with spotlight / BRAND COLOR with gradient / mysterious shadow]. Visual effects: [subtle glow / light rays / geometric frames] building anticipation. Mood: exciting, exclusive, \"be the first to know\" energy. Additional text: [TEASER COPY - \"Worth the wait\" / \"Something big is coming\" / \"Mark your calendar\"]. CTA: \"Set reminder\" or \"Sign up for early access\" area. Style: cinematic, premium, FOMO-inducing. Square or story format, hype-building, list-growing." }},
                {id: 'avm-cb-3-13-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Reveal just enough to intrigue, not enough to satisfy\n*   Countdown creates urgency (use actual days remaining)\n\n### Usage:\n\nPre-launch hype, announcement teasers, list building, anticipation marketing" }}
            ]},
            { id: 'avm-l3-14', title: '3.14 Meme/Relatable Content (Brand-Appropriate)', order: 14, contentBlocks: [
                {id: 'avm-cb-3-14-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nRelatable meme-style social media graphic for [YOUR INDUSTRY]. Format: [IMAGE] on top, [RELATABLE TEXT] on bottom (classic meme structure) OR [SIDE-BY-SIDE comparison format]. Scenario: [COMMON CUSTOMER PAIN POINT / funny industry truth]. Image: [YOUR PRODUCT in humorous context / stock-style photo with humor / illustrated scenario]. Text: [RELATABLE STATEMENT - \"When you finally [SOLVE PROBLEM] with [YOUR PRODUCT]\" / \"[SITUATION] vs [IMPROVED SITUATION]\"]. Tone: [light humorous / gently self-deprecating / insider joke] while staying [PROFESSIONAL / on-brand]. Style: casual, shareable, \"they get me\" feeling. Typography: [meme-standard impact font] or [your brand font if keeping more branded]. Background: [relevant to joke]. Mood: fun, relatable, community-building, human. Highly shareable, engagement-driving." }},
                {id: 'avm-cb-3-14-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Humor should be relatable to your specific audience niche\n*   Keep it brand-appropriate (avoid controversial topics)\n\n### Usage:\n\nEngagement content, relatability building, shareability, lightening feed mood" }}
            ]},
            { id: 'avm-l3-15', title: '3.15 Achievement/Milestone Celebration', order: 15, contentBlocks: [
                {id: 'avm-cb-3-15-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: "### Prompt\n\nSocial media milestone celebration graphic. Headline: \"[ACHIEVEMENT - 10K followers / 1000 customers / 5 years / Award won]\" in [CELEBRATORY BOLD FONT]. Visual: [YOUR PRODUCT / team photo / celebratory imagery - confetti/trophy/balloons styled to match brand aesthetic]. Background: [BRAND COLOR] with [festive elements - geometric celebration motifs / subtle confetti pattern]. Thank you message: \"Thank you for [BEING PART OF JOURNEY / YOUR SUPPORT]\" in [warm, genuine tone]. Optional: [THANK YOU OFFER - discount code / giveaway announcement]. Mood: grateful, celebratory, community-focused. Style: festive but [YOUR BRAND AESTHETIC - minimal elegant / bold exciting / warm friendly]. Typography: [hierarchy showing milestone most prominent]. Square format, shareable, celebration-worthy." }},
                {id: 'avm-cb-3-15-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: "### Variables to customize:\n\n*   Make it about community, not just humble bragging\n*   Consider thank-you offer to turn celebration into conversion opportunity\n\n### Usage:\n\nMilestone announcements, community appreciation, social proof, brand story" }}
            ]},
        ]},
        { id: 'avm-m4', title: 'Section 4: Advertising Creatives', order: 4, lessons: [
            { id: 'avm-l4-1', title: '4.1 Facebook/Instagram Ad Templates', order: 1, contentBlocks: []},
            { id: 'avm-l4-2', title: '4.2 Before/After Split Formats', order: 2, contentBlocks: []},
            { id: 'avm-l4-3', title: '4.3 Problem/Solution Visual Narratives', order: 3, contentBlocks: []},
            { id: 'avm-l4-4', title: '4.4 Seasonal Campaign Themes', order: 4, contentBlocks: []},
        ]},
        { id: 'avm-m5', title: 'Section 5: Content Marketing Visuals', order: 5, lessons: [
            { id: 'avm-l5-1', title: '5.1 Blog Header Templates', order: 1, contentBlocks: []},
            { id: 'avm-l5-2', title: '5.2 YouTube Thumbnail Formulas', order: 2, contentBlocks: []},
            { id: 'avm-l5-3', title: '5.3 Email Header Graphics', order: 3, contentBlocks: []},
            { id: 'avm-l5-4', title: '5.4 Lead Magnet Cover Designs', order: 4, contentBlocks: []},
        ]},
        { id: 'avm-m6', title: 'BONUS Section: Advanced Techniques', order: 6, lessons: [
            { id: 'avm-l6-1', title: 'How to maintain consistency across all images', order: 1, contentBlocks: []},
            { id: 'avm-l6-2', title: 'Color palette extraction and application', order: 2, contentBlocks: []},
            { id: 'avm-l6-3', title: 'Style reference techniques', order: 3, contentBlocks: []},
            { id: 'avm-l6-4', title: 'Batch generation workflows', order: 4, contentBlocks: []},
        ]},
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
            { id: 'veo-l1-1', title: 'Crafting Your First Shot', order: 1, contentBlocks: [
                {id: 'cb-veo-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: '## From Text to Motion\n\nGoogle\'s Veo model excels at turning descriptive text prompts into high-quality video clips. The key to a great result is providing rich, cinematic detail in your prompt.' }},
                {id: 'cb-veo-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: '### Elements of a Strong Video Prompt\n\n*   **Subject & Action:** What is the main subject and what are they doing? (e.g., `A robot is surfing on a huge wave`)\n*   **Camera Movement:** How should the \'camera\' behave? (e.g., `drone shot flying backwards`, `dynamic panning shot`)\n*   **Style & Aesthetics:** What is the visual feel? (e.g., `highly detailed, cinematic, 8k`, `lo-fi anime aesthetic`)\n*   **Environment & Lighting:** Where is this happening and what is the light like? (e.g., `at sunset`, `in a neon-lit cyberpunk city`)' }},
                {id: 'cb-veo-3', order: 3, blockType: ContentBlockType.MARKDOWN, data: { content: 'Combining these elements gives the model a clear blueprint. For example: `Drone shot flying backwards, a robot is surfing on a huge wave at sunset, highly detailed, cinematic, 8k.`' }},
            ] },
        ]}
    ]
  },
  {
    id: 'course-gen-ai-marketing-intensive',
    slug: 'gen-ai-marketing-weekend-intensive',
    title: 'Generative AI Marketing: Weekend Intensive',
    description: 'A 2-3 day crash course for digital marketers who want to build a complete AI-powered content system and generate 20+ assets in one weekend.',
    categoryId: 'core-image',
    type: CourseType.TOOL,
    instructor: {
      name: 'Casey Lee',
      bio: 'Growth marketer and AI implementation specialist.',
      avatarUrl: 'https://picsum.photos/id/1012/200/200'
    },
    modules: [
      {
        id: 'wi-m1',
        title: 'Friday: Your AI Marketing Journey Starts Now',
        order: 1,
        lessons: [
          {
            id: 'wi-l1-1',
            title: 'Session 1: Welcome, Masterclass & Setup',
            order: 1,
            contentBlocks: [
              {
                id: 'wi-cb-1-1-1',
                order: 1,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 6:00-6:15 PM: Welcome & Community Building (15 min)
- Live opening: "Why 200+ marketers chose to spend their weekend here"
- Quick round-robin introductions (1 min each, 30 people max)
- Set expectations: "By Sunday, you'll have built your entire content machine"
- Tech check: Everyone logged into Gemini, Nano Banana, Gemini Veo`
                }
              },
              {
                id: 'wi-cb-1-1-2',
                order: 2,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 6:15-6:45 PM: The AI Content Machine Masterclass (30 min)
*Live presentation format with screen sharing*

**SLIDE DECK: "How to Build Content 5x Faster"**
- **HOOK (2 min):** Stat: "Marketers using AI save 20+ hours per week". Problem: "But most don't have a SYSTEM—they just use tools randomly". Solution: "This weekend, you'll build a repeatable machine".
- **THE OPPORTUNITY (5 min):** Show live example: One keyword → Blog + 5 socials + 1 video (2-hour workflow). Play 90-second video montage: "Real students' results after this weekend".
- **YOUR WEEKEND GOAL (8 min):** DAY 1: Master the text → visual → video workflow. DAY 2: Build your 30-day content calendar. DAY 3: Publish your first batch + optimize + celebrate.
- **THE 4 DECISION POINTS (10 min):** Your core content theme, audience avatar, publishing channels, and brand voice guidelines.
- **AGENDA PREVIEW (3 min):** Friday: Orientation + foundations. Saturday: Live intensive production. Sunday: Publishing, optimization, 90-day planning.
- **RECAP:** "By Sunday at 5pm, you'll have built a content system that takes 2 hours/week to maintain."`
                }
              },
              {
                id: 'wi-cb-1-1-3',
                order: 3,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 6:45-7:30 PM: Founder/Instructor Story & Q&A (45 min)
- "How I built my AI content machine and got 50k followers in 90 days"
- Key failures and lessons learned
- Live Q&A: Answer 10-15 student questions about expectations, tools, capabilities`
                }
              },
              {
                id: 'wi-cb-1-1-4',
                order: 4,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 7:30-8:15 PM: Intensive Setup & Tool Walkthrough (45 min)
- Live walkthrough: Open Gemini, Nano Banana, Gemini Veo 3.1
- Show each interface, key buttons, where to paste prompts
- Demo: Generate one piece of content live (5-min blog post outline in Gemini)
- Everyone follows along, generates their first output`
                }
              },
              {
                id: 'wi-cb-1-1-5',
                order: 5,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 8:15-8:30 PM: Homework & Sleep Prep (15 min)
- "Tonight, sleep well. You're about to have the most productive weekend of your year."
- Pre-work questions: "What's your biggest content creation pain point?", "Who is your ideal audience?", "What's your unique angle/perspective?"`
                }
              }
            ]
          }
        ]
      },
      {
        id: 'wi-m2',
        title: 'Saturday Morning: Text Generation Mastery',
        order: 2,
        lessons: [
          {
            id: 'wi-l2-1',
            title: 'Sprint 1: The 7-Element Prompt Formula',
            order: 1,
            contentBlocks: [
              {
                id: 'wi-cb-2-1-1',
                order: 1,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 9:15-10:05 AM: Sprint 1 - The 7-Element Prompt Formula (50 min)
*Live, interactive workshop*

**THE CONCEPT (5 min):** The prompt formula that produces 80% of AI content success. Why specific prompts = specific, convertible outputs.

**THE FORMULA BREAKDOWN (10 min):**
1. **ROLE**: "You are a..."
2. **AUDIENCE**: "Write for..."
3. **GOAL**: "The objective is..."
4. **CONSTRAINTS**: "Keep it..."
5. **TONE**: "Use a..."
6. **FORMAT**: "Deliver as..."
7. **EXAMPLES**: "Reference this style..."

**LIVE BUILDING WORKSHOP (35 min):**
- Instructor shares screen, opens Google Doc with formula template.
- Build 3 complete prompts live for different businesses, showing reasoning.
- Copy-paste each into Gemini simultaneously and show outputs in real-time.`
                }
              }
            ]
          },
          {
            id: 'wi-l2-2',
            title: 'Sprint 2: Building Your First Prompts',
            order: 2,
            contentBlocks: [
              {
                id: 'wi-cb-2-2-1',
                order: 1,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 10:15-11:05 AM: Sprint 2 - You Build Your First Prompts (50 min)
*Guided but independent*

**YOUR TASK:**
- Create 3 prompts for your business using the formula.
- Paste into Gemini and get your first outputs.
- Screenshot the 3 best results and share in the community.

**OUTPUT CHECKLIST:**
☐ Prompt 1 created (blog post outline)
☐ Prompt 2 created (social media captions)
☐ Prompt 3 created (email subject lines)`
                }
              }
            ]
          },
          {
            id: 'wi-l2-3',
            title: 'Sprint 3: SEO Optimization Deep Dive',
            order: 3,
            contentBlocks: [
              {
                id: 'wi-cb-2-3-1',
                order: 1,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 11:15 AM-12:05 PM: Sprint 3 - SEO Optimization Deep Dive (50 min)
*Live teaching + individual work*

**YOU'LL LEARN (15 min):**
- SEO checklist for AI-generated content.
- Common gaps AI content has (and how to fix them).
- Keyword density, readability, internal linking.

**YOU'LL APPLY (35 min):**
- Take one of your generated blog outlines.
- Run through the SEO checklist.
- Make 3-5 specific improvements.`
                }
              }
            ]
          }
        ]
      },
      {
        id: 'wi-m3',
        title: 'Saturday Afternoon: Image & Video Sprint',
        order: 3,
        lessons: [
          {
            id: 'wi-l3-1',
            title: 'Brand Identity & Thumbnail Creation',
            order: 1,
            contentBlocks: [
              {
                id: 'wi-cb-3-1-1',
                order: 1,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 1:30-1:45 PM: Brand Identity Workshop (15 min)
**QUICK EXERCISE:** Define your visual brand in 15 minutes.
- What 3 colors define your brand?
- What emotions do you want to evoke?
- What's your "look"? (Minimalist/Bold/Photorealistic/Illustrated)
- Fill in the provided brand visual guidelines template.`
                }
              },
              {
                id: 'wi-cb-3-1-2',
                order: 2,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 1:45-2:35 PM: Sprint 1 - YouTube Thumbnail Creation (50 min)
**TEACHING (10 min):** The psychology of thumbnail design (4 elements that matter).
**BUILD YOUR PROMPTS (20 min):** Build 5 variations of a thumbnail for your video topic (High contrast, Urgency, Social proof, Novelty, Benefit-focused).
**YOU GENERATE (20 min):** Copy each prompt variation into Nano Banana, generate thumbnails, and evaluate the best versions.`
                }
              }
            ]
          },
          {
            id: 'wi-l3-2',
            title: 'Social Media & Video Generation',
            order: 2,
            contentBlocks: [
              {
                id: 'wi-cb-3-2-1',
                order: 1,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 2:45-3:15 PM: Sprint 2 - Social Media Graphics (30 min)
**YOUR TASK:** Generate 15 Instagram feed graphics using Nano Banana with unified brand guidelines.
- 5 themes: Motivation/Education/Testimonial/Behind-the-scenes/CTA
- 3 variations of each theme.`
                }
              },
              {
                id: 'wi-cb-3-2-2',
                order: 2,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 3:30-4:15 PM: Sprint 1 - Script Generation (45 min)
**YOU'LL CREATE:** 4 scripts using Gemini with a provided template (Hook → Body → CTA).
- 1 Educational video script (30 sec)
- 1 Product/service demo script (45 sec)
- 1 Behind-the-scenes script (30 sec)
- 1 Motivational/CTA script (30 sec)`
                }
              },
              {
                id: 'wi-cb-3-2-3',
                order: 3,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 4:30-5:45 PM: Sprint 2 - Video Generation (75 min)
**WHAT HAPPENS:** Using Gemini Veo 3.1, you'll generate all 4 videos.
**WORKFLOW:** Submit scripts to Veo and perform essential edits (captions, music, branding) while waiting for generations to complete.`
                }
              }
            ]
          }
        ]
      },
      {
        id: 'wi-m4',
        title: 'Sunday: Publishing & Planning Day',
        order: 4,
        lessons: [
          {
            id: 'wi-l4-1',
            title: 'Content Calendar & Batch Generation',
            order: 1,
            contentBlocks: [
              {
                id: 'wi-cb-4-1-1',
                order: 1,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 9:15-10:00 AM: Content Calendar Workshop (45 min)
**FRAMEWORK: THE 4-WEEK FORMULA**
- **WEEK 1: Foundation (Educational focus)**
- **WEEK 2: Authority (Deep-dive focus)**
- **WEEK 3: Community (Engagement focus)**
- **WEEK 4: Conversion (CTA focus)**
**LIVE CALENDAR BUILD (40 min):** Open a Google Sheets template and fill in Week 1 together, planning topics, angles, and hooks for each day.`
                }
              },
              {
                id: 'wi-cb-4-1-2',
                order: 2,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 10:15-11:15 AM: Batch Content Generation (60 min)
**PROCESS:** You'll generate ALL Week 1 content in 1 hour.
- Write 1 Gemini prompt for a blog post + socials.
- Generate in a batch and save all to a folder.
- Multi-task by generating images in Nano Banana while text generates.`
                }
              }
            ]
          },
          {
            id: 'wi-l4-2',
            title: 'Publishing, Automation & Graduation',
            order: 2,
            contentBlocks: [
              {
                id: 'wi-cb-4-2-1',
                order: 1,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 1:45-3:00 PM: Sprint - Publish & Schedule Week 1 (75 min)
**YOU'LL DO:**
- Publish 1 blog post to your website.
- Schedule 5-7 social media posts to a publishing tool (Buffer, Meta, etc.).
- Upload 1-2 videos to YouTube.
- Schedule an email announcement to your list.`
                }
              },
              {
                id: 'wi-cb-4-2-2',
                order: 2,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 3:00-3:30 PM: Automation & Repurposing (30 min)
**LIVE TEACHING:** "One blog post = 10+ pieces of content."
- Show repurposing system.
- Set up 1 automation (e.g., using Zapier to auto-post new blogs to social).`
                }
              },
              {
                id: 'wi-cb-4-2-3',
                order: 3,
                blockType: ContentBlockType.MARKDOWN,
                data: {
                  content: `## 4:00 PM - 5:00 PM: Celebration & Graduation
- **Recap Your Accomplishments:** 25+ blog assets, 50+ social posts, 15+ graphics, 4+ videos, a 30-day content calendar.
- **Certification:** Receive your "Generative AI Marketing: Weekend Intensive Certification".
- **Final Message & CTA:** "This week, DO IT. Publish every single day. Run the machine you built."`
                }
              }
            ]
          }
        ]
      }
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