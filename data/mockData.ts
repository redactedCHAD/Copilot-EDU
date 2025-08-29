import { Course, User, UserProgress, ContentBlockType, ForumThread } from '../types';

export const MOCK_USER: User = {
  id: 'user-1',
  fullName: 'Alex Morgan',
  email: 'alex.morgan@example.com',
  role: 'learner',
  points: 10,
};

export const MOCK_COURSE: Course = {
  id: 'course-1',
  title: 'AI Co-Pilot for Business Growth',
  slug: 'ai-business-growth',
  description: 'A comprehensive educational program designed to frame Artificial Intelligence (AI) not as a complex technological burden, but as an accessible, powerful co-pilot for business growth.',
  price: 499.00,
  instructor: {
      name: 'Alex Thompson',
      bio: 'Alex is a seasoned entrepreneur and AI strategist who specializes in helping small and medium-sized businesses leverage technology for growth. With a background in both business and tech, Alex bridges the gap between complex AI concepts and practical, real-world application.',
      avatarUrl: 'https://picsum.photos/id/1005/200/200'
  },
  modules: [
    {
      id: 'module-1',
      title: 'Module 1: Demystifying AI for the Modern Entrepreneur',
      order: 1,
      lessons: [
        {
          id: 'lesson-1-1',
          title: 'Introduction: Your New Strategic Partner is AI',
          order: 1,
          contentBlocks: [
            { id: 'cb-1-1-1', order: 1, blockType: ContentBlockType.YOUTUBE, data: { videoId: 'S-y6a25DDA8' } },
            { id: 'cb-1-1-2', order: 2, blockType: ContentBlockType.MARKDOWN, data: { content: `## Your New Strategic Partner is AI\n\nThe modern business landscape is characterized by relentless competition and an ever-accelerating pace of change. For entrepreneurs and small business owners, the challenge is not merely to keep up, but to find leverage—a way to amplify their efforts and compete effectively with larger, better-resourced organizations. This course blueprint outlines a comprehensive educational program designed to provide that leverage.\n\n### The Core Promise\nIt frames Artificial Intelligence (AI) not as a complex technological burden, but as an accessible, powerful co-pilot for business growth. The core promise of this program is to move participants beyond the hype cycle of AI and focus squarely on tangible, measurable return on investment (ROI).\n\nThe curriculum follows a "flywheel" structure, designed to mirror the real-world iterative process of technology adoption. It begins with foundational knowledge to establish a common strategic language. It then progresses to deep dives into specific business functions—marketing, sales, and operations—showcasing practical applications and tools. The program culminates in a strategic implementation plan that each learner will build for their own business. This structure ensures that learning is not abstract but is immediately and continuously applied to the learner's unique context.` } },
          ],
        },
        {
          id: 'lesson-1-2',
          title: 'Core Concepts & The Business Imperative',
          order: 2,
          contentBlocks: [
            { id: 'cb-1-2-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Core Concepts Explained\n\nThe module begins by establishing clear, analogy-driven definitions to build an intuitive understanding of the key technologies.\n\n### Artificial Intelligence (AI), Machine Learning (ML), and Generative AI\nThese terms will be explained through simple, relatable comparisons. For instance, AI can be presented as the entire field of making machines intelligent, akin to the broad discipline of engineering. Machine Learning is a specific technique within AI where machines learn from data, much like an apprentice learns by observing thousands of examples. Generative AI is a specialized type of AI that can create new, original content—like text, images, or music—acting as an artist, writer, or designer.\n\n### The Business Imperative\nThe course will frame AI adoption not as an optional upgrade but as a fundamental competitive necessity. To illustrate the power of AI in practice, the module will draw on compelling case studies from industry leaders.\n*   **Netflix's recommendation engine:** Responsible for over 80% of the content viewed on the platform, it demonstrates the immense value of AI-driven personalization.\n*   **Starbucks' use of AI:** Generates personalized offers through its loyalty program, leading to a notable increase in sales and customer engagement.\n\nThese examples will be used to anchor the three core value propositions of AI for business: **Efficiency** (automating repetitive tasks), **Innovation** (generating new ideas and solutions), and **Personalization** (crafting unique customer experiences).` } },
            { id: 'cb-1-2-2', order: 2, blockType: ContentBlockType.QUIZ, data: { question: 'Which of the following is NOT a core value proposition of AI for business, as discussed in this lesson?', options: ['Efficiency', 'Innovation', 'Personalization', 'Automation'], correctAnswerIndex: 3 } },
          ],
        },
         {
          id: 'lesson-1-3',
          title: 'The AI-First Mindset & Ethical Compass',
          order: 3,
          contentBlocks: [
            { id: 'cb-1-3-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## The AI-First Mindset\n\nBuilding on these core concepts, the module introduces a strategic framework for thinking about business problems through an AI lens. This is inspired by the "AI-Powered Firm" concept taught at Harvard Business School, which encourages leaders to rethink systems, processes, and roles to build an AI-powered organization.\n\n### Your First Exercise\nTo make this concept immediately practical, you will be prompted to identify three repetitive, time-consuming tasks within your own business that are prime candidates for automation. You will also be asked to identify one critical customer interaction point that could be dramatically improved through hyper-personalization. This exercise serves to ground the theoretical framework in the tangible reality of your day-to-day operations.\n\n## An Ethical Compass from Day One\n\nA distinguishing feature of this curriculum is the integration of ethical considerations from the very beginning. This is not treated as an afterthought or a compliance checkbox but as a core component of a sustainable and trustworthy AI strategy.\n\n### Key Areas of Focus:\n*   **Bias:** AI systems learn from data created by humans and can therefore inherit and amplify existing societal biases. We will discuss actionable mitigation strategies, such as auditing training data and regularly reviewing AI outputs for fairness.\n*   **Privacy:** This section will address the data-intensive nature of AI and the resulting privacy implications. The key takeaway will be the importance of transparency and obtaining clear consent from customers regarding data usage.\n*   **Manipulation and Deception:** The module will touch upon the potential for AI to be used unethically to spread disinformation or create manipulative content, such as "deepfake" videos. The lesson will emphasize the importance of verifying information and being a responsible actor in the digital ecosystem.` } },
          ],
        },
      ],
    },
    {
      id: 'module-2',
      title: 'Module 2: Mastering the Art of the Prompt',
      order: 2,
      lessons: [
        {
          id: 'lesson-2-1',
          title: 'Fundamentals of Prompt Engineering: The R.O.L.E. Framework',
          order: 1,
          contentBlocks: [
            { id: 'cb-2-1-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Your AI Command Center\n\nThis module is an intensive, hands-on workshop that positions prompt engineering as the new, essential language of business delegation. The quality of a business outcome generated by an AI tool is directly proportional to the quality of the prompt provided. Mastering this skill elevates an entrepreneur from being a passive user of AI to an active director of AI—a far more powerful and strategic position.\n\n### The R.O.L.E. Framework\nThis module introduces a simple yet powerful framework for prompt construction: R.O.L.E.\n*   **Role:** Assign a specific persona or expertise to the AI (e.g., "You are an expert marketing copywriter specializing in direct-to-consumer brands.").\n*   **Objective:** State the desired outcome clearly and concisely (e.g., "Write three compelling headlines for a Facebook ad campaign.").\n*   **Logistics:** Define the constraints, format, and tone (e.g., "The tone should be witty and urgent. Each headline must be under 15 words. The target audience is millennial women.").\n*   **Example:** Provide a sample of the desired output to guide the AI's style and structure (e.g., "An example of a good headline is: 'Your Weekend Wardrobe, Solved.'").` } },
          ],
        },
        {
          id: 'lesson-2-2',
          title: 'Crafting Prompts for Different Modalities',
          order: 2,
          contentBlocks: [
             { id: 'cb-2-2-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Applying the R.O.L.E. Framework\n\nThe framework will be applied across the primary modalities of generative AI that are relevant to business owners:\n\n### Text Generation\nLearners will practice crafting prompts for a variety of common business documents, including blog posts, customer service emails, social media content, and sections of a business plan.\n\n### Image Generation\nThe module will cover techniques for writing descriptive prompts to create marketing visuals, website thumbnails, and product mockups. It will reference popular tools like DALL-E, Midjourney, and Lexica Art. A key part of this section will be a mini-lesson on iterative prompting—the process of refining a prompt based on the AI's initial output to achieve the desired visual result.\n\n### Data Analysis\nParticipants will learn to write simple, plain-language prompts to perform powerful data analysis tasks without needing specialized software. Examples include prompting an AI to summarize customer feedback from an uploaded spreadsheet, identify key trends in sales data, or create a structured summary with action items from a raw meeting transcript.` } },
          ],
        },
        {
          id: 'lesson-2-3',
          title: 'Interactive Workshop: The "Prompt Lab"',
          order: 3,
          contentBlocks: [
             { id: 'cb-2-3-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## The "Prompt Lab"\n\nThe centerpiece of this module is a highly interactive session where theoretical knowledge is immediately put into practice. You will be presented with real-world business scenarios and will work collaboratively to craft, share, and refine prompts in the forum.\n\n### Scenario 1 (Marketing)\n"Your local bakery is launching a new line of gluten-free pastries. Craft a prompt for an Instagram post that announces the new products, highlights their benefits, and encourages followers to visit the store."\n\n### Scenario 2 (Operations)\n"You have a CSV file containing 500 customer survey responses with a mix of ratings and open-ended comments. Craft a prompt for an AI tool to analyze this file and provide a summary of the top three positive themes and the top three areas for improvement."\n\n### Scenario 3 (Sales)\n"You need to write a personalized follow-up email to a potential client you met at a trade show. You know their company name and job title. Craft a prompt to generate a draft email that references a recent company announcement and suggests a brief meeting."` } },
          ],
        },
      ],
    },
     {
      id: 'module-3',
      title: 'Module 3: AI-Driven Marketing and Content Creation',
      order: 3,
      lessons: [
        {
          id: 'lesson-3-1',
          title: 'Automating Content Strategy & SEO',
          order: 1,
          contentBlocks: [
            { id: 'cb-3-1-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Pain Point: The Content Treadmill\n\nCreating a consistent stream of high-quality, SEO-optimized content is a major challenge for time-strapped entrepreneurs.\n\n### AI Solution & Tools\nThe module will introduce AI-powered content optimization tools like Surfer SEO and ContentShake AI, which leverage data from top search engine results to guide content creation.\n\n### Case Study: Sage Publishing\nBy using Jasper, an AI writing assistant, the company reduced the time spent drafting content for its textbook descriptions by an astonishing 99%. This allowed them to reallocate resources from routine copywriting to higher-value strategic marketing activities.` } },
          ],
        },
        {
          id: 'lesson-3-2',
          title: 'Generative AI for Visuals',
          order: 2,
          contentBlocks: [
            { id: 'cb-3-2-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Pain Point: Expensive Visual Assets\n\nProducing professional-quality visual assets—logos, social media graphics, videos—can be expensive and time-consuming.\n\n### AI Solution & Tools\nThis section will explore a suite of generative AI tools for visual creation, including GPT-4o's built-in image generator, specialized art tools like Lexica Art, logo makers like Looka, and comprehensive design platforms like Canva Magic Studio.\n\n### Case Study: Heinz "AI-generated Ketchup"\nHeinz used the image generator DALL-E to create imaginative visuals based on prompts like "ketchup in the style of Picasso". This campaign demonstrates how AI can be a powerful tool for creative brainstorming and generating significant marketing buzz with a relatively low budget.` } },
          ],
        },
        {
          id: 'lesson-3-3',
          title: 'Hyper-Personalization and Campaign Management',
          order: 3,
          contentBlocks: [
            { id: 'cb-3-3-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Pain Point: Generic Marketing is Ineffective\n\nCustomers expect personalized communication that speaks to their specific needs and interests.\n\n### AI Solution & Tools\nThe focus here will be on AI-driven marketing automation platforms like HubSpot AI and digital advertising tools like Albert.ai.\n\n### Case Study: Sephora "Virtual Artist"\nBy using AI and augmented reality to allow customers to virtually "try on" makeup, Sephora created a highly engaging and useful experience that directly led to higher online conversion rates and a reduction in product returns. This case study provides a clear and direct link between investing in AI-powered personalization and achieving a positive impact on the bottom line.` } },
          ],
        },
      ],
    },
    {
      id: 'module-4',
      title: 'Module 4: Revolutionizing Sales and Customer Relationships',
      order: 4,
      lessons: [
        {
          id: 'lesson-4-1',
          title: 'Intelligent Lead Management & CRM Automation',
          order: 1,
          contentBlocks: [
            { id: 'cb-4-1-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Pain Point: Wasted Time on Manual Data Entry\n\nSales teams often spend a significant portion of their time on manual data entry and trying to determine which leads are worth pursuing, rather than on actual selling.\n\n### AI Solution & Tools\nThe module will introduce AI-powered Customer Relationship Management (CRM) platforms, highlighting features from tools like Salesforce Einstein, HubSpot Sales Hub, and Attio.\n\n### Case Study: Druva\nBy implementing an AI-powered lead-scoring system, Druva was able to significantly improve conversion rates and scale its sales operations without having to increase its sales team headcount. This outcome—growth without a proportional increase in overhead—is the holy grail for any resource-constrained small business.` } },
          ],
        },
        {
          id: 'lesson-4-2',
          title: 'AI-Powered Outreach and Communication',
          order: 2,
          contentBlocks: [
            { id: 'cb-4-2-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Pain Point: Generic Outreach Gets Ignored\n\nCrafting personalized outreach at scale is a difficult and time-consuming task.\n\n### AI Solution & Tools\nThis section will focus on AI tools designed to enhance sales communication, such as outreach automation platforms like Reply.io, AI writing assistants like Jasper, and conversation intelligence tools like Gong.io.\n\n### Case Study: Harley-Davidson\nBy using an AI tool to analyze a wide range of data and identify potential buyers, one of their dealerships saw an increase in qualified leads from just one per day to forty per day, contributing to a nearly 30% boost in overall motorcycle sales in key markets.` } },
          ],
        },
        {
          id: 'lesson-4-3',
          title: 'AI Chatbots and Virtual Assistants',
          order: 3,
          contentBlocks: [
            { id: 'cb-4-3-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Pain Point: Missing Leads After Hours\n\nBusinesses miss out on potential leads and frustrate customers when they are unable to respond to inquiries outside of business hours.\n\n### AI Solution & Tools\nThe module will explore user-friendly AI chatbot platforms such as Userbot.ai, Chatfuel, and the integrated chatbot builders within CRMs like HubSpot.\n\n### Case Study: "Waiverlyn" Chatbot\nA healthcare consulting firm developed an AI chatbot that automated the entire process of consultation booking and initial lead qualification. The result was a significant reduction in administrative workload for the team and a much faster, more efficient onboarding process for new clients.` } },
          ],
        },
      ],
    },
    {
      id: 'module-5',
      title: 'Module 5: Optimizing Operations and Supercharging Productivity',
      order: 5,
      lessons: [
        {
          id: 'lesson-5-1',
          title: 'Workflow Automation ("The Digital Nervous System")',
          order: 1,
          contentBlocks: [
            { id: 'cb-5-1-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Pain Point: Repetitive, Manual Tasks\n\nMany critical business processes involve repetitive, manual tasks that are prone to human error and consume valuable time that could be spent on strategic work.\n\n### AI Solution & Tools\nThis section introduces the concept of workflow automation using no-code platforms like Zapier, Gumloop, and n8n. These tools act as the digital glue that connects different applications and automates processes between them.\n\n### Demonstration: Build Your First "Zap"\nA classic example would be: "When a new entry is submitted through a website contact form (e.g., Typeform), automatically create a new contact profile in the CRM (e.g., HubSpot), add a new row with the contact's information to a master Google Sheet, and send a real-time notification to the team's Slack channel." This exercise makes the powerful concept of automation tangible and immediately applicable.` } },
          ],
        },
        {
          id: 'lesson-5-2',
          title: 'AI for Data Analysis ("Insights on Demand")',
          order: 2,
          contentBlocks: [
            { id: 'cb-5-2-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Pain Point: Data Rich, Insight Poor\n\nSmall businesses are often rich in data (from sales, website analytics, customer feedback) but poor in insights, lacking the tools or expertise to analyze it effectively.\n\n### AI Solution & Tools\nThe module will showcase how modern generative AI tools with file upload capabilities, such as the advanced versions of ChatGPT, along with knowledge management tools like Notion Q&A and Google's NotebookLM, can act as on-demand data analysts.\n\n### Case Study: EchoStar\nA global provider of satellite communication solutions, projected savings of 35,000 work hours annually by implementing AI-driven analysis and process automation across various departments. While the scale is different, the principle of leveraging AI to turn data into time savings and operational efficiency is universally applicable.` } },
          ],
        },
         {
          id: 'lesson-5-3',
          title: 'Streamlining Administration',
          order: 3,
          contentBlocks: [
            { id: 'cb-5-3-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Pain Point: Administrative Time Sinks\n\nAdministrative tasks like scheduling meetings, taking notes, and managing follow-ups are universal time sinks for entrepreneurs.\n\n### AI Solution & Tools\nThis section introduces a category of AI-powered productivity tools designed to tackle these specific pain points, including Notion AI for document creation and summarization, Fathom for automated meeting notes, and Reclaim.ai for intelligent calendar management.\n\n### Case Study: ActivDev\nBy implementing a simple AI workflow to transcribe and summarize client calls, the company reduced the time its consultants spent on drafting meeting minutes by a factor of four. This allowed them to be more responsive and focus on higher-value, client-facing work, demonstrating a clear and immediate ROI.` } },
          ],
        },
      ],
    },
    {
      id: 'module-6',
      title: 'Module 6: Strategic Implementation and Capstone Project',
      order: 6,
      lessons: [
        {
          id: 'lesson-6-1',
          title: 'A Step-by-Step Implementation Framework',
          order: 1,
          contentBlocks: [
            { id: 'cb-6-1-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## From Idea to Integration\n\nThe core of the module is a four-step framework designed to guide business owners from initial idea to successful implementation and scaling:\n\n*   **1. Identify & Prioritize:** Systematically map the key processes within the business and evaluate them against two criteria: impact on the business and ease of implementation. The goal is to identify the "low-hanging fruit."\n*   **2. Select & Pilot:** Once a high-priority area is identified, choose the right tool. This section will provide a checklist for evaluating potential AI solutions. Start with a small-scale pilot project.\n*   **3. Measure & Analyze:** Define Key Performance Indicators (KPIs) before the pilot project begins. Track relevant metrics, such as time saved on a specific task or an increase in lead conversion rate.\n*   **4. Scale & Optimize:** Based on the positive results of the pilot, develop a plan for scaling the solution. AI implementation is not a one-time event but an ongoing process of optimization.` } },
          ],
        },
        {
          id: 'lesson-6-2',
          title: 'Capstone Project: The AI Business Transformation Plan',
          order: 2,
          contentBlocks: [
            { id: 'cb-6-2-1', order: 1, blockType: ContentBlockType.MARKDOWN, data: { content: `## Your Final Project\n\nThe culminating project of the course requires each participant to apply the framework from the previous lesson to their own business (or a detailed fictional case study). This project is the ultimate demonstration of learning, as it forces the synthesis of all course concepts into a personalized, strategic document.\n\n### Project Deliverable\nParticipants will complete a comprehensive "AI Integration Blueprint" document. This document will be structured using a template provided below, ensuring all key strategic components are addressed.\n\n### Project Sections\n*   Executive Summary\n*   Opportunity Analysis\n*   Proposed Solutions\n*   Implementation Roadmap\n*   KPIs and Measurement Plan\n*   Ethical Considerations` } },
            { id: 'cb-6-2-2', order: 2, blockType: ContentBlockType.DOWNLOAD, data: { fileName: 'AI_Integration_Blueprint_Template.docx', url: '#' } },
          ],
        },
      ],
    },
  ],
};

export const MOCK_PROGRESS: UserProgress = {
  'lesson-1-1': true,
};

export const MOCK_FORUM_THREADS: ForumThread[] = [
    {
        id: 'thread-1',
        title: 'How to choose between AI tools for marketing?',
        author: { id: 'user-2', fullName: 'Jane Doe' },
        createdAt: '2 days ago',
        replyCount: 2,
        posts: [
            { id: 'post-1', author: { id: 'user-2', fullName: 'Jane Doe' }, createdAt: '2 days ago', content: 'In Module 3, it lists tools like Surfer SEO and Jasper. They both seem to do content. How do you decide which one to start with for a small business blog?' },
            { id: 'post-2', author: { id: MOCK_USER.id, fullName: MOCK_USER.fullName }, createdAt: '1 day ago', content: 'Great question! I think of it this way: Surfer SEO is for the *strategy* (what to write about to rank on Google), and Jasper is for the *writing* itself. I\'d start with Surfer to find a good keyword, then use Jasper to write the article based on Surfer\'s outline.' },
            { id: 'post-3', author: { id: 'user-3', fullName: 'Sam Wilson' }, createdAt: '1 day ago', content: 'Exactly. Surfer tells you what ingredients you need, Jasper helps you cook the meal.' },
        ]
    },
    {
        id: 'thread-2',
        title: 'My attempt at the "Prompt Lab" marketing scenario',
        author: { id: MOCK_USER.id, fullName: MOCK_USER.fullName },
        createdAt: '5 hours ago',
        replyCount: 0,
        posts: [
             { id: 'post-4', author: { id: MOCK_USER.id, fullName: MOCK_USER.fullName }, createdAt: '5 hours ago', content: 'Here\'s my prompt for the bakery scenario in Module 2:\n\nROLE: You are a food-loving, witty social media manager for a cozy, local bakery.\nOBJECTIVE: Write an exciting Instagram caption announcing our new line of gluten-free pastries.\nLOGISTICS: The tone should be enthusiastic and friendly. Mention the "melt-in-your-mouth" texture. Include #GlutenFreeGoodness and #LocalBakery.\nEXAMPLE: "Sunshine and coffee, the perfect pair!"\n\nWhat do you all think?' },
        ]
    }
];

export const MOCK_ACHIEVEMENTS_CONFIG = [
  {
    id: 'ach-perfect-start',
    name: 'Perfect Start',
    description: 'Complete your first lesson.',
    icon: 'Rocket',
    condition: (progress: UserProgress) => Object.keys(progress).length >= 1,
  },
  {
    id: 'ach-module-1',
    name: 'AI Fundamentals',
    description: 'Complete Module 1.',
    icon: 'BrainCircuit',
    condition: (progress: UserProgress, course: Course) => {
      const moduleLessons = course.modules.find(m => m.id === 'module-1')?.lessons.map(l => l.id) || [];
      return moduleLessons.every(lessonId => progress[lessonId]);
    },
  },
  {
    id: 'ach-module-2',
    name: 'Prompt Master',
    description: 'Complete Module 2.',
    icon: 'PenTool',
    condition: (progress: UserProgress, course: Course) => {
      const moduleLessons = course.modules.find(m => m.id === 'module-2')?.lessons.map(l => l.id) || [];
      return moduleLessons.every(lessonId => progress[lessonId]);
    },
  },
    {
    id: 'ach-module-3',
    name: 'Marketing Maverick',
    description: 'Complete Module 3.',
    icon: 'Megaphone',
    condition: (progress: UserProgress, course: Course) => {
      const moduleLessons = course.modules.find(m => m.id === 'module-3')?.lessons.map(l => l.id) || [];
      return moduleLessons.every(lessonId => progress[lessonId]);
    },
  },
  {
    id: 'ach-course-complete',
    name: 'AI Co-Pilot Graduate',
    description: 'Complete the entire course.',
    icon: 'GraduationCap',
    condition: (progress: UserProgress, course: Course) => {
      const allLessons = course.modules.flatMap(m => m.lessons.map(l => l.id));
      return allLessons.every(lessonId => progress[lessonId]);
    },
  },
];
