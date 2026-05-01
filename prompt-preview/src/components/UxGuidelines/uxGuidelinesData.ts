// ============================================================
// UX Best Practices — Data extracted from UBS Web Publishing Guidelines
// Source: https://www.ubs.com/fx/en/web-publishing-guidelines/ux-best-practices.html
// ============================================================

export interface GuidelineItem {
  title: string;
  description: string;
}

export interface ChecklistItem {
  category: string;
  items: string[];
}

export interface GuidelineSection {
  id: string;
  title: string;
  description: string;
  keyTakeaways: string[];
  guidelines: GuidelineItem[];
}

export interface GuidelineCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  sections: GuidelineSection[];
}

export interface ChecklistData {
  id: string;
  title: string;
  description: string;
  groups: ChecklistItem[];
}

// ─── Fundamentals ─────────────────────────────────────────────

const fundamentals: GuidelineCategory = {
  id: 'fundamentals',
  title: 'Fundamentals',
  description:
    'Detailed information on user experience basics. Insights into creating thoughtful and user-friendly designs that improve interactions with your products.',
  icon: '📐',
  sections: [
    {
      id: 'usability',
      title: 'Usability',
      description: 'Design for purposeful simplicity.',
      keyTakeaways: [
        'Design for user goals to meet their needs and grow visitor engagement.',
        'Keep interfaces simple and purposeful \u2014 focus only on what\u2019s relevant to the user.',
        'Use familiar patterns and language to match user expectations and reduce friction.',
        'Support flexibility and efficiency to empower users to work their own way faster.',
        'Focus on clarity over decoration to guide attention to what really matters.',
      ],
      guidelines: [
        {
          title: 'Simplify decisions',
          description:
            'Reduce the number of choices to help users act faster and with more confidence.',
        },
        {
          title: 'Design for familiarity',
          description:
            'Use patterns and layouts users already know to reduce learning effort and friction.',
        },
        {
          title: 'Prioritise what matters',
          description:
            'Place key actions and content where users naturally focus, especially on mobile.',
        },
        {
          title: 'Guide with hierarchy',
          description:
            'Use size, spacing, and placement to lead the eye and support intuitive navigation.',
        },
        {
          title: 'Match real world',
          description:
            'Use language and visuals that reflect how your users think and speak. Align terminology, icons, and labels with real-world references.',
        },
        {
          title: 'Flexibility and efficiency',
          description:
            'Allow users to choose from options to personalise your design and adjust it to their needs.',
        },
        {
          title: 'Aesthetic and minimalist design',
          description:
            'Avoid information overload. Keep your layout clean and simple, focusing on its main purpose and most relevant information for users.',
        },
      ],
    },
    {
      id: 'consistency',
      title: 'Consistency and Coherence',
      description: 'Keep consistency and standardise your design.',
      keyTakeaways: [
        'Maintain consistent design and layout to help users navigate intuitively and efficiently.',
        'Use familiar patterns and clear labels to make pages simple to understand and faster to take action.',
        'Standardise elements like buttons and links to create a predictable user journey.',
        'Ensure image quality and style are consistent to build trust and a cohesive brand experience.',
        'Align sibling pages visually to support scanning and improve content focus.',
      ],
      guidelines: [
        {
          title: 'Reduce cognitive load',
          description:
            'Users spend most of their time on other products. Failing to maintain consistency forces them to learn something new.',
        },
        {
          title: 'Follow conventions',
          description:
            'Users should not have to wonder whether different interface elements mean the same thing.',
        },
        {
          title: 'Uniform layout across sibling pages',
          description:
            'Reduces cognitive load, making it easier for users to focus on the content rather than figuring out the structure.',
        },
        {
          title: 'Standardise styles',
          description:
            'Format elements the same way. Use a consistent style for links, buttons, and contact information across all pages.',
        },
        {
          title: 'Clear labels',
          description:
            'Ensure links and buttons have clear, descriptive labels that indicate their purpose. Avoid generic terms like "click here".',
        },
        {
          title: 'Consistent imagery',
          description:
            'Use high-resolution images. Choose a consistent style for all images across the whole user journey.',
        },
      ],
    },
    {
      id: 'readability',
      title: 'Readability',
      description: 'Clear and accessible language for better user experience.',
      keyTakeaways: [
        'Use clear, plain language to support fast reading and improve user understanding.',
        'Structure content with headings to help users and search engines navigate easily.',
        'Keep line lengths between 50–80 characters to make text easier to read.',
        'Break up long text to make content easier to scan and digest.',
        'Place key information first so users can act quickly without reading everything.',
      ],
      guidelines: [
        {
          title: 'Plain, consistent language',
          description:
            'Not everyone speaks English as a first language. Use plain language that improves readability and supports localisation.',
        },
        {
          title: 'Scannable writing',
          description:
            'Scannable writing improves usability by more than 120%. Readers consume only 20–30% of content on average.',
        },
        {
          title: 'Use headings to structure content',
          description:
            'Headings help organise content into smaller sections. They provide a quick overview and assist visitors using screen readers.',
        },
        {
          title: 'Keep proper headings hierarchy',
          description:
            'Maintain a logical heading structure (H1 → H2 → H3) for both visual and semantic clarity.',
        },
        {
          title: 'Optimal line length',
          description:
            'Keep text lines between 50–80 characters (inclusive of spaces). This is one step toward more readable text.',
        },
        {
          title: 'Handle long text',
          description:
            'Use clear headings, bulleted lists, and section jumping. Place only important information up front.',
        },
      ],
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      description: 'Ensuring accessibility across all formats.',
      keyTakeaways: [
        'Include captions and transcripts for all media to make content understandable for everyone.',
        'Provide ALT text for images to allow all users to access and find visual content.',
        'Avoid text in images or add exact text alternatives to not exclude anyone.',
        'Add long descriptions to complex visuals to help all visitors understand detailed content.',
        'Use structured tags in documents to make files easy to navigate with screen readers.',
      ],
      guidelines: [
        {
          title: 'Video and audio',
          description:
            'An accessible video includes title, captions, and a transcript. These elements are mandatory.',
        },
        {
          title: 'Pictures',
          description:
            'If an image is essential for understanding the content, provide alt text to describe it. This also improves search ranking.',
        },
        {
          title: 'Images with text',
          description:
            'Avoid images where the text is part of the image. If unavoidable, provide an exact text alternative.',
        },
        {
          title: 'Infographics',
          description:
            'Complex infographics and charts require a long description directly on the webpage.',
        },
        {
          title: 'Documents (PDF)',
          description:
            'Use tags to add structural information. Accessibility starts with the structure of your Office document before converting to PDF.',
        },
      ],
    },
    {
      id: 'responsiveness',
      title: 'Responsiveness',
      description: 'Design with mobile in mind.',
      keyTakeaways: [
        'Design with mobile in mind to support key user tasks across all screen sizes.',
        'Prioritise CTA visibility on mobile to boost conversions with faster user action.',
        'Adapt layout and images per viewport to ensure clarity and impact on all devices.',
        'Use high-resolution images to deliver sharp visuals tailored to every device.',
        'Avoid images with text and always provide alt text to improve accessibility and SEO.',
      ],
      guidelines: [
        {
          title: 'Viewport differences',
          description:
            'The layout and image ratio of some components differs between viewports. On small viewports, images are always on top.',
        },
        {
          title: 'CTA visibility',
          description:
            'Make sure the most important CTA is as high as possible in the mobile view. Identify the most important tasks for mobile visitors.',
        },
        {
          title: 'Image recommendations',
          description:
            'Provide the highest resolution possible. Define the most useful image section per viewport using the cropping tool.',
        },
        {
          title: 'Avoid images of text',
          description:
            'Text in images has negative consequences for people with vision deficits. Always provide alternative text.',
        },
      ],
    },
  ],
};

// ─── Web Creation ─────────────────────────────────────────────

const webCreation: GuidelineCategory = {
  id: 'web-creation',
  title: 'Web Creation',
  description:
    'Discover detailed descriptions of all the UX topics that play a crucial role during the web creation process.',
  icon: '🏗️',
  sections: [
    {
      id: 'purpose-audience',
      title: 'Purpose and Audience',
      description: 'Define clear business goals and identify your target audience.',
      keyTakeaways: [
        'Define one clear business goal to align all content and design elements toward measurable impact.',
        'Identify your target audience early to ensure content relevance and effectiveness.',
        'Design with purpose by linking every action to your business goal and user needs.',
        'Use personas to deepen understanding of audience segments and tailor content accordingly.',
        'Avoid clutter by limiting additional actions and keep users focused on key outcomes.',
      ],
      guidelines: [
        {
          title: 'One business goal per page',
          description:
            'The website should have only one business goal. All elements will support this goal, increasing the desired conversion.',
        },
        {
          title: 'Main action',
          description:
            'Define one main action based on what you want to achieve: contact form, download report, subscribe, resolve issue, or navigate to related content.',
        },
        {
          title: 'Additional actions',
          description:
            'Place additional actions at the bottom as related content. Do not overload the page with extra actions.',
        },
        {
          title: 'KPIs and measurement',
          description:
            'Ensure all ubs.com activities have a measurable business benefit. Set targets and measure actuals vs. targets.',
        },
        {
          title: 'Personas vs target audience',
          description:
            'Target audience describes the broad group. Personas are detailed fictional characters that embody typical representatives, including specific needs, behaviours, and goals.',
        },
      ],
    },
    {
      id: 'user-journey',
      title: 'User Journey',
      description: 'Map and optimise the full user journey.',
      keyTakeaways: [
        'Map the full journey to capture all user actions across channels and touchpoints.',
        'Align user needs with business goals to guide design decisions at every step.',
        'Structure content like a funnel to help users move from broad topics to specific actions.',
        'End each journey with a clear CTA to support user intent and drive conversion.',
        'Use data to test and optimise the journey for shorter paths and better outcomes.',
      ],
      guidelines: [
        {
          title: 'Storytelling power',
          description:
            'Create a cohesive verbal and visual story that will captivate the user\u2019s interest.',
        },
        {
          title: 'Audience needs',
          description:
            'Align user needs with the business goals you want to achieve.',
        },
        {
          title: 'Personalisation',
          description:
            'Tailor the user experience to individual preferences and behaviours for more relevant and engaging journeys.',
        },
        {
          title: 'Funnel structure',
          description:
            'Start with broad topics and narrow down to detailed, specific information. Homepage → Topic → Specific product.',
        },
        {
          title: 'Journey end',
          description:
            'Create a clear end for each user journey. At the end, users are ready to act, so a CTA is appreciated.',
        },
        {
          title: 'Optimise with data',
          description:
            'Use analytics tools, heatmaps, navigation path tracking, and A/B testing to improve the journey. Shorter journeys are better.',
        },
      ],
    },
    {
      id: 'structure-hierarchy',
      title: 'Structure and Hierarchy',
      description: 'Build clear information architecture.',
      keyTakeaways: [
        'Build a clear information architecture to help users find what they need efficiently.',
        'Keep site structure wide and shallow (max 3–4 levels) to avoid disorientation.',
        'Use umbrella pages to guide users from general topics to detailed subpages.',
        'Apply visual hierarchy to highlight key content and support easy scanning.',
        'Limit related content on deep pages (~10%) to avoid distraction.',
      ],
      guidelines: [
        {
          title: 'Wide and flat structure',
          description:
            'A wider, flatter structure lets users more efficiently find what they need. Maximum 3–4 levels deep.',
        },
        {
          title: 'Page types',
          description:
            'Landing page (entry from ads/emails), Topic homepage (main page), Article page (informative and engaging).',
        },
        {
          title: 'Umbrella pages',
          description:
            'Include teasers to relevant content. Offer general topic information and guide to detailed subtopics. Avoid excessive detail.',
        },
        {
          title: 'Visual hierarchy',
          description:
            'Guide the eye by using variations in scale, value, colour, spacing, and placement. Use highlighting and structured headings.',
        },
        {
          title: 'Place important information first',
          description:
            'Put key points in the headline and summary. Save background info for further down the page.',
        },
        {
          title: 'White space',
          description:
            'Use spacer configuration to group related elements with narrow margins and set off sections with larger margins.',
        },
      ],
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      description: 'Craft compelling content that drives action.',
      keyTakeaways: [
        'Craft a strong keyline and infoline to grab attention and clearly preview the content.',
        'Tell a structured, relevant story that reflects user needs and flows naturally.',
        'Use purposeful imagery that supports your message and resonates with the audience.',
        'Design clear, benefit-driven CTAs that guide users to take meaningful action.',
        'Optimise content for SEO to boost visibility in search engines and organic reach.',
      ],
      guidelines: [
        {
          title: 'Keyline best practices',
          description:
            'Ideal length: 55–65 characters. Be clear (use verbs, everyday words), convincing (benefits over features), and charming (personal, intriguing, memorable).',
        },
        {
          title: 'Content storytelling',
          description:
            'Ask what you want the reader to know, feel, and do. Structure the story to flow naturally and be inviting to read.',
        },
        {
          title: 'Relevancy',
          description:
            'Think about what information a user needs rather than what you want them to know. If content is not relevant to the target audience, it has no value.',
        },
        {
          title: 'Purposeful imagery',
          description:
            'Each image should support your message. Adapt to audience. Avoid filler images just to fit a layout.',
        },
        {
          title: 'CTA hierarchy',
          description:
            'Use a single primary button per page. Place it above the fold when possible. Use concise, action-specific labels.',
        },
        {
          title: 'SEO optimisation',
          description:
            'Optimise title tags, meta descriptions, headings, body copy, alt text, transcripts, and URLs. Avoid broken links, redirects, and duplicate titles.',
        },
      ],
    },
  ],
};

// ─── Practical Resources ──────────────────────────────────────

const practicalResources: GuidelineCategory = {
  id: 'practical-resources',
  title: 'Practical Resources',
  description:
    'Useful resources including checklists, A/B test insights, and quality check reports.',
  icon: '📋',
  sections: [
    {
      id: 'best-components',
      title: 'Best Components',
      description: 'Optimal components tailored for specific requirements.',
      keyTakeaways: [
        'Use section jumping to allow users to navigate quickly within long pages.',
        'Break up long copy with proven methods to manage large amounts of content.',
        'Use prominent teasing components to highlight new content.',
        'Display content in a timeline format when chronological order matters.',
        'Make important links stand out with attractive link components.',
      ],
      guidelines: [
        {
          title: 'Jump to sections',
          description: 'Allow users to quickly jump to different sections of the page.',
        },
        {
          title: 'Break up long copy',
          description:
            'Use accordion, tabs, expandable boxes, and other proven methods to break up long text.',
        },
        {
          title: 'Prominent teasing',
          description:
            'Use spotlight teasers, carousel, and banner components to prominently feature new content.',
        },
        {
          title: 'Timeline content',
          description:
            'Use timeline or agenda step components to display content chronologically.',
        },
        {
          title: 'Attractive links',
          description:
            'Make important links stand out using link list, button, or CTA components.',
        },
      ],
    },
  ],
};

// ─── Checklists ───────────────────────────────────────────────

export const CHECKLISTS: ChecklistData[] = [
  {
    id: 'starting-project',
    title: 'Starting a New Project',
    description:
      'Checkpoints to consider before beginning, why they are relevant, and what to pay attention to.',
    groups: [
      {
        category: 'Target audience and objectives',
        items: [
          'Who is your target audience?',
          'What is the business goal of the page?',
          'What main action do you want the user to take?',
          'How is the user journey to/from this page?',
        ],
      },
      {
        category: 'Content and structure',
        items: [
          'Does your keyline & infoline match the page content?',
          'Are you focusing on the target audience needs and problems?',
          'Is your new layout similar in look and feel to peer pages?',
          'Is your content prepared to be accessible?',
        ],
      },
    ],
  },
  {
    id: 'before-go-live',
    title: 'Before Go Live',
    description:
      'Thorough review before publishing to ensure a positive user experience.',
    groups: [
      {
        category: 'Quality controls',
        items: [
          'Do all links work?',
          'Are link labels meaningful?',
          'Are there no spelling mistakes?',
          'Is the page content up-to-date and relevant?',
          'Is the visual hierarchy clear and consistent?',
        ],
      },
      {
        category: 'Mobile view',
        items: [
          'Is all content structured correctly on mobile?',
          'Is the most important CTA visible on mobile?',
          'Are images displayed correctly on mobile?',
          'Are tables displayed correctly on mobile?',
        ],
      },
      {
        category: 'Readability',
        items: [
          'Is text width not more than 50–60% of page width?',
          'Is long text optimised for fast reading/scanning?',
          'Does the content have enough white space?',
        ],
      },
      {
        category: 'Consistency',
        items: [
          'Did you use uniform visual language?',
          'Do you have consistent formatting of links, lists, or buttons?',
        ],
      },
      {
        category: 'Accessibility',
        items: [
          'Do integrated videos or audios have transcripts?',
          'Do non-decorative images have alternative text?',
        ],
      },
    ],
  },
  {
    id: 'after-go-live',
    title: 'After Go Live',
    description:
      'Launching is just the beginning. Post-launch tasks to complete.',
    groups: [
      {
        category: 'Monitoring',
        items: [
          'Are analytics tracking codes properly installed?',
          'Are conversion goals configured correctly?',
          'Is the page being indexed by search engines?',
        ],
      },
      {
        category: 'Optimisation',
        items: [
          'Review initial analytics data for unexpected patterns',
          'Plan A/B tests for key conversion elements',
          'Gather user feedback and iterate',
        ],
      },
    ],
  },
];

// ─── Export all categories ────────────────────────────────────

export const UX_GUIDELINE_CATEGORIES: GuidelineCategory[] = [
  fundamentals,
  webCreation,
  practicalResources,
];
