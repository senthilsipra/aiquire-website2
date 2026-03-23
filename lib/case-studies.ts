export interface CaseStudy {
  slug: string;
  industry: string;
  category: string;
  businessFunction: string;
  title: string;
  subtitle?: string;
  challenge: string;
  solution: string;
  outcomeShort: string;
  results: string[];
  highlightStats?: string[];
  benefits?: string[];
  techTags: string[];
  accentColor: string;
  ongoingVisibility?: string;
  // Detailed fields
  about?: string;
  companySize?: string;
  duration?: string;
  teamSize?: string;
  challengeIntro?: string;
  challengeDetail?: string;
  solutionIntro?: string;
  solutionDetail?: string;
  benefitsIntro?: string;
  quotes?: {
    text: string;
    author: string;
    role: string;
    section?: "challenge" | "solution" | "benefits";
  }[];
  heroImage?: string;
  secondaryImage?: string;
  solutionImages?: {
    src: string;
    alt?: string;
    title?: string;
    caption?: string;
  }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "digital-assistant-clinic",
    industry: "Healthcare",
    category: "24/7 Patient Support",
    businessFunction: "Patient Support",
    title: "Digital Assistant for Clinic - 24/7 Patient Queries",
    subtitle: "Dhi: A Multilingual AI Voice & Text Assistant for Modern Clinics",
    challenge: "Providing 24/7 patient support across multiple regional languages while reducing the burden on clinical staff during peak hours.",
    solution: "We implemented 'Dhi', an advanced NLP and Voice AI system capable of handling inquiries in 6 regional languages.",
    outcomeShort: "Instant, accurate answers at any hour, in preferred language and mode",
    results: [
      "40% Staff Time Freed",
      "6 Languages Supported",
      "24/7 Availability",
    ],
    highlightStats: [
      "6 Languages Supported",
      "24/7 Availability",
      "40% Staff Time Freed",
    ],
    benefits: [
      "Patients receive instant, accurate answers at any hour, in their preferred language and mode",
      "Staff time is freed for scheduling, billing and patient care, improving operational efficiency",
      "A modern digital front door that strengthens the clinic's brand and accessibility",
      "40% reduction in administrative staff workload handling routine queries",
      "Support for 6 regional languages ensuring accessibility for diverse patient base",
      "24/7 availability providing consistent service outside clinic hours"
    ],
    techTags: ["Natural Language Processing", "Voice AI", "Multilingual AI", "Low-Latency Audio", "Safety Guardrails"],
    accentColor: "var(--accent)",
    about: "Poorna Neuro is a specialized neurology clinic providing comprehensive neurological care to patients. With a diverse patient base speaking multiple regional languages, the clinic needed to ensure consistent, accessible communication across all touchpoints.",
    companySize: "20+",
    duration: "3 months",
    teamSize: "5 AI engineers",
    challengeIntro: "Poorna Neuro sought a solution to address their business challenges",
    challengeDetail: "Patients needed doctor, service and location details outside clinic hours, but had no way to get instant answers. Administrative staff were overloaded with repetitive queries, pulling time from complex tasks. The clinic wanted consistent, accurate, multilingual information for a diverse patient base.",
    solutionIntro: "SipraHub helps Poorna Neuro achieve their goals without sacrificing performance",
    solutionDetail: "SipraHub built 'Dhi', a natural voice and text assistant with low-latency audio for hands-free conversations. The solution provides full multilingual support across six regional languages (English, Hindi, Tamil, Telugu, Kannada, Malayalam) to maximise accessibility. Safety guardrails restrict knowledge to verified clinic information and politely decline medical advice, ensuring patient safety and regulatory compliance.",
    benefitsIntro: "Poorna Neuro transforms operations from a challenge to a competitive advantage",
    secondaryImage: "/images/case-studies/poorna-neuro-solution.png",
    solutionImages: [
      {
        src: "/images/case-studies/poorna-neuro-ui.png",
        alt: "Dhi AI Assistant chat interface",
        title: "Dhi AI Assistant Chat Interface",
        caption: "Dhi's conversational interface provides instant responses to patient queries",
      },
      {
        src: "/images/case-studies/poorna-neuro-solution.png",
        alt: "Meet Dhi landing page",
        title: "Meet Dhi - Your 24/7 Healthcare Assistant",
        caption: "Dhi supports six regional languages for maximum accessibility",
      },
    ],
    heroImage: "/images/case-studies/poorna-neuro-hero.png",
    quotes: [
      {
        text: "Our patients were calling after hours with basic questions, and we had no way to help them. Our staff was spending too much time on repetitive queries when they should have been focused on more important tasks.",
        author: "Dr. Rajesh B Iyer",
        role: "Poorna Neuro",
        section: "challenge",
      },
      {
        text: "With Dhi, our patients can get instant answers at any hour, in their preferred language. The system has transformed how we communicate with our patients and freed up our staff to focus on what matters most.",
        author: "Dr. Rajesh B Iyer",
        role: "Poorna Neuro",
        section: "solution",
      },
      {
        text: "Dhi has been a game-changer for our clinic. Our patients love the instant responses in their preferred language, and our staff can focus on more meaningful work. This is the future of patient communication.",
        author: "Dr. Rajesh B Iyer",
        role: "Poorna Neuro",
        section: "benefits",
      }
    ]
  },
  {
    slug: "ai-service-desk-copilot",
    industry: "Insurance",
    category: "Live Agent Augmentation",
    businessFunction: "Customer Service",
    title: "AI Service Desk Co-pilot for Insurance",
    subtitle: "Empowering Claims Agents with Real-Time Sentiment & Knowledge Intelligence",
    challenge: "Long resolution times and inconsistent service quality in insurance claims processing and customer support desk operations.",
    solution: "An AI co-pilot providing live analysis of customer intent and sentiment with suggested replies.",
    outcomeShort: "Faster resolutions with fewer errors through real-time co-pilot support",
    results: [
      "-30% Resolution",
      "+45% Quality",
      "-50% Training",
    ],
    highlightStats: [
      "-30% Resolution",
      "+45% Quality",
      "-50% Training",
    ],
    benefits: [
      "Faster resolutions with fewer errors through real-time co-pilot support",
      "More consistent, empathetic responses that raise service quality",
      "Lower training time and higher agent productivity, leading to happier customers",
      "30% reduction in average resolution time",
      "45% improvement in customer satisfaction scores",
      "50% reduction in new agent training time"
    ],
    techTags: ["Natural Language Processing", "Sentiment Analysis", "Knowledge Management", "Transformers", "Real-time Analytics"],
    accentColor: "var(--accent)",
    about: "A leading insurance company with a large customer support team handling thousands of live chat interactions daily. The company needed to improve service quality and consistency while reducing the time and cost of training new agents.",
    companySize: "150+",
    duration: "2 months",
    teamSize: "4 AI specialists",
    challengeIntro: "Insurance Company sought a solution to address their business challenges",
    challengeDetail: "Service quality varied in stressful live chats and empathy was inconsistent. Agents spent time identifying intent and sentiment, extracting policy data and searching knowledge. There was no real-time procedural guidance on next best actions, which increased handling time and errors.",
    solutionIntro: "SipraHub helps Insurance Company achieve their goals without sacrificing performance",
    solutionDetail: "SipraHub developed an AI co-pilot that provides live analysis of customer intent and sentiment so agents understand goals and tone instantly. The system offers one-click suggested replies plus automatic extraction of key details like policy numbers and names. Contextual checklists and quick actions enable agents to take immediate action, for example opening a claim form directly from the chat.",
    benefitsIntro: "Insurance Company transforms operations from a challenge to a competitive advantage",
    secondaryImage: "/images/case-studies/insurance-copilot-interface.png",
    solutionImages: [
      {
        src: "/images/case-studies/insurance-copilot-interface.png",
        alt: "AI Co-Pilot real-time assistance interface",
        title: "AI Co-Pilot Real-time Assistance Interface",
        caption: "Real-time intent and sentiment analysis with suggested responses for faster, more empathetic customer support",
      },
    ],
    quotes: [
      {
        text: "Our agents were struggling to maintain consistent quality during high-pressure interactions. They spent too much time searching for information instead of helping customers, and we saw service quality varying significantly across our team.",
        author: "Sarah Williams",
        role: "Head of Customer Support, Insurance Company",
        section: "challenge",
      },
      {
        text: "The AI co-pilot has transformed how our agents work. They get instant insights into customer needs and sentiment, with suggested responses and actions that help them resolve issues faster and more empathetically.",
        author: "Sarah Williams",
        role: "Head of Customer Support, Insurance Company",
        section: "solution",
      },
      {
        text: "The AI co-pilot has revolutionized our customer support operations. Our agents are more confident, efficient, and empathetic. Customer satisfaction has soared, and we're able to get new agents productive much faster.",
        author: "Sarah Williams",
        role: "Head of Customer Support, Insurance Company",
        section: "benefits",
      }
    ]
  },
  {
    slug: "editorial-management-platform",
    industry: "Publishing",
    category: "End-to-end Manuscript Editing Workflow",
    businessFunction: "Operations",
    title: "Editorial Management Platform",
    subtitle: "Automating Complex Multi-Stakeholder Document Lifecycles",
    challenge: "Inefficient manuscript editing workflows involving manual assignments, role confusion, and inconsistent email communication.",
    solution: "A roles-based management platform with automated pricing and workflow automation.",
    outcomeShort: "Streamlined operations through automated assignment and role-based access",
    results: [
      "3 User Roles",
      "7 Email Templates",
      "100% Workflow Automation"
    ],
    highlightStats: [
      "3 User Roles",
      "7 Email Templates",
      "100% Workflow Automation"
    ],
    benefits: [
      "Streamlined operations through automated assignment and notifications",
      "Role-based access with tailored interfaces for each user type (customers, editors, administrators)",
      "Real-time tracking that gives all stakeholders visibility of manuscript status",
      "Scalable, modular architecture that supports rapid feature additions",
      "Professional, responsive user experience with clear loading, error and success states",
      "Seven automated email templates for new orders, assignments, acceptances, rejections, and completions",
      "Reliable file handling with progress indicators and version management"
    ],
    techTags: ["Workflow Automation", "Document Management", "Auth Systems", "React", "Node.js"],
    accentColor: "var(--accent)",
    about: "ContentConcepts Editorial Services is a USA-based editorial services company providing manuscript editing services to academic and professional clients. With a distributed team of editors and growing client base, they needed a comprehensive platform to manage the entire editing workflow from quote request to final delivery.",
    companySize: "15+",
    duration: "4 months",
    teamSize: "6 developers",
    challengeIntro: "ContentConcepts Editorial Services sought a solution to address their business challenges",
    challengeDetail: "ContentConcepts faced significant operational challenges with conflicting role models between platform roles and application roles, unreliable authentication and redirect handling during sign-in and sign-out, and complex status management across customers, editors, and administrators. Additionally, handling uploads and versions of original and edited files required reliable feedback mechanisms to ensure smooth operations.",
    solutionIntro: "SipraHub helps ContentConcepts Editorial Services achieve their goals without sacrificing performance",
    solutionDetail: "SipraHub developed a comprehensive editorial management platform with a clear multi-role model using a custom 'app_role' field, role-based routing, and granular permissions. The platform includes a public quote flow with real-time pricing by word count and service type, delivery estimates, document upload, and automatic job IDs with PR-, SE-, and PE- prefixes. The customer dashboard enables quote requests, simulated payments, status tracking, and file downloads. The editor dashboard supports assignment acceptance/rejection, multi-file uploads, progress tracking with status badges, and completion emails. An admin panel provides live statistics, order assignment, user management, and an email template manager. The solution features stable Google OAuth with fallback methods, error handling, explicit redirect URLs, and robust Base64 file handling with array-based document storage and progress indicators.",
    benefitsIntro: "ContentConcepts Editorial Services transforms operations from a challenge to a competitive advantage",
    quotes: [
      {
        text: "We needed a platform that could seamlessly manage the entire manuscript editing workflow while handling multiple user roles, complex status transitions, and reliable file management. Our existing processes were manual and error-prone.",
        author: "Dr Rajalakshmi",
        role: "Principal Editor",
        section: "challenge"
      },
      {
        text: "The platform has transformed our operations. We now have complete visibility into every manuscript's journey, automated notifications keep everyone informed, and our editors can focus on what they do best—editing.",
        author: "Dr Rajalakshmi",
        role: "Principal Editor",
        section: "solution"
      },
      {
        text: "SipraHub's editorial management platform has completely transformed how we operate. Our team can now manage hundreds of manuscripts simultaneously with complete visibility and control. The automated workflows save us countless hours every week.",
        author: "Dr Rajalakshmi",
        role: "Principal Editor",
        section: "benefits"
      }
    ]
  },
  {
    slug: "learning-management-system-antigravity",
    industry: "Education",
    category: "Adaptive Learning Platform",
    businessFunction: "Education Delivery",
    title: "AI-Powered Learning Management System",
    subtitle: "An AI-native LMS with tutoring, automated assessments, coding labs, and real-time learning analytics.",
    challenge: "Delivering a seamless learning experience while coordinating transcript processing, IDE Workspace and AI Labs generation, IDE sync, and AI evaluation across multiple services in real time.",
    solution: "A scalable asynchronous LMS architecture with shared AI context, real-time synchronization, and automated educational workflows.",
    outcomeShort: "Unified learning, assessment, and hands-on engineering practice in one AI-native platform",
    results: [
      "Gemini 1.5 Pro AI",
      "FastAPI Async Backend",
      "Supabase Real-time DB"
    ],
    highlightStats: [
      "Gemini 1.5 Pro AI",
      "FastAPI Async Backend",
      "Supabase Real-time DB"
    ],
    benefits: [
      "Scalable automation removes manual Lab creation and reduces instructor overhead",
      "A unified experience brings video lessons, code, IDE Workspace, and labs into one workflow",
      "The AI copilot provides 24/7 mentorship and personalized support for learners",
      "Data-driven insights help instructors identify where students struggle in each module",
      "IDE and AI lab workflows improve career readiness for modern engineering roles",
      "Instant AI feedback shortens grading cycles from days to seconds",
      "Gamified progress cues encourage consistent engagement and daily learning habits",
      "Adaptive retry loops let learners progress at a personalized pace until concepts are mastered"
    ],
    techTags: ["FastAPI", "PostgreSQL", "Supabase", "React", "Tailwind", "Google Gemini", "OpenRouter", "AssemblyAI", "Celery", "Redis"],
    accentColor: "var(--accent)",
    about: "The platform uses FastAPI (Python) for an asynchronous backend, PostgreSQL/Supabase for robust data management, and Tailwind-powered React for a modern, fluid frontend. AI capabilities are driven by Google Gemini and OpenRouter, with AssemblyAI and yt-dlp handling media ingestion. The IDE Workspace is built using advanced browser-based code editors with a companion VS Code extension, while AI Lab Assignments utilize a custom-built grading engine. Heavy processing tasks are managed by Celery and Redis, while the AI Copilot uses specialized prompt pipelines to provide context-aware assistance.",
    companySize: "Platform build",
    duration: "Multi-phase rollout",
    teamSize: "Full-stack AI product team",
    challengeIntro: "The product needed to solve complex AI orchestration and real-time system design challenges without compromising learner experience.",
    challengeDetail: "The biggest technical challenges were latency, synchronization, and consistency. Long video transcript processing and on-demand IDE Workspace and AI Labs generation risked slowing down the user experience. Keeping the browser IDE and local VS Code extension in sync created a persistent state-management problem. The platform also needed an AI judge that could evaluate lab submissions fairly across varied prompt styles while still making multiple external services for transcription, LLMs, and media processing feel like one cohesive product.",
    solutionIntro: "SipraHub built a scalable architecture that kept the platform responsive while making AI features reliable enough for daily learning workflows.",
    solutionDetail: "Heavy AI tasks were moved to asynchronous workers using Celery and Redis, allowing the UI to remain responsive while background jobs processed transcripts, IDE Workspace, and evaluations. Supabase real-time updates created a single source of truth across the browser IDE and local development environments. A multi-stage prompt pipeline improved output quality by pairing generation with validation, and centralized copilot logic shared user context across modules, code sessions, IDE Workspace, and labs to deliver more relevant guidance throughout the platform.",
    benefitsIntro: "The LMS transforms fragmented course delivery into a connected, AI-assisted learning experience with better speed, visibility, and learner support.",
    secondaryImage: "/images/case-studies/lms-antigravity-overview.png",
    solutionImages: [
      {
        src: "/images/case-studies/lms-antigravity-overview.png",
        alt: "Learning management system overview dashboard",
        title: "Unified Learning Dashboard",
        caption: "Course delivery, assessments, labs, and progress tracking are brought together in one interface.",
      },
      {
        src: "/images/case-studies/lms-antigravity-id-work.png",
        alt: "AI lab prompt engineering workspace",
        title: "AI Lab and Prompt Workspace",
        caption: "Learners can build prompts, test inputs, and iterate inside a guided AI-native lab environment.",
      },
    ],
    quotes: [
      {
        text: "Building this platform was not just about adding AI. It was about making everything work together in real time while balancing latency, synchronization, fair evaluation, and a smooth learner experience.",
        author: "Core Development Team",
        role: "Learning Management System",
        section: "challenge"
      },
      {
        text: "SipraHub designed and delivered a robust, scalable solution that transformed technical complexity into a seamless learning experience with high performance, accuracy, and personalization at scale.",
        author: "Development Team",
        role: "Learning Management System",
        section: "solution"
      },
      {
        text: "By combining intelligent tutoring, automated assessments, and a unified coding environment, the platform gives learners and instructors a highly personalized experience with stronger engagement and better learning outcomes.",
        author: "Product & Development Team",
        role: "Learning Management System",
        section: "benefits"
      }
    ]
  }
];
