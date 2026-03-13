export const SITE_NAME = "Aiquire";
export const SITE_TAGLINE = "We Build AI That Actually Works for Your Business";
export const SITE_URL = "https://aiquire.ai";
export const CONTACT_EMAIL = "hello@aiquire.ai";

export const NAV_LINKS = [
  { label: "Services", href: "/services", hasMega: true },
  { label: "AI Training", href: "/services/ai-academy", hasTrainingMega: true },
  { label: "Our Approach", href: "/approach" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const SERVICES = [
  {
    slug: "ai-strategy-consulting",
    title: "AI Strategy & Business Consulting",
    shortTitle: "AI Strategy",
    icon: "Briefcase",
    description: "Know where AI fits. We assess your data, processes, and goals to build a roadmap that actually gets executed.",
    fullDescription: "We don't start with AI. We start with your business. Our consultants — with backgrounds at McKinsey, BCG, Deloitte, and Accenture — bring deep domain expertise across industries and functions.",
    subServices: [
      { title: "AI Readiness Assessment", desc: "Evaluate your data maturity, infrastructure, and organizational readiness." },
      { title: "Business Process Analysis", desc: "Map value chains, identify bottlenecks, surface opportunities." },
      { title: "AI Strategy & Roadmap", desc: "Prioritized use cases with modeled ROI and execution plan." },
      { title: "Business & Process Consulting", desc: "Before we touch technology, we deeply understand your business model and operating processes." },
      { title: "Change Management & Adoption", desc: "Technology without adoption is a write-off. We design programs that bring your teams along." },
      { title: "Domain Consulting", desc: "Deep industry expertise across healthcare, finance, retail, manufacturing, and logistics." },
      { title: "AI Governance & Responsible AI", desc: "Bias testing, governance frameworks, and ethical AI implementation." },
      { title: "Executive AI Workshops", desc: "Hands-on sessions to align leadership on AI strategy and opportunities." },
    ],
  },
  {
    slug: "ai-ml-development",
    title: "AI/ML Development",
    shortTitle: "AI/ML Dev",
    icon: "Brain",
    description: "Custom models, not cookie-cutter. Predictive analytics, NLP, computer vision, and LLM solutions built for your data.",
    fullDescription: "From predictive models to computer vision to NLP systems — we build production-grade machine learning solutions trained on your data, integrated into your workflows.",
    subServices: [
      { title: "Custom Model Development", desc: "Bespoke ML models trained on your data and optimized for your metrics." },
      { title: "Computer Vision", desc: "Image classification, object detection, visual inspection systems." },
      { title: "Natural Language Processing", desc: "Text classification, entity extraction, sentiment analysis, document understanding." },
      { title: "Predictive Analytics", desc: "Forecasting models for demand, churn, risk, and operational metrics." },
    ],
  },
  {
    slug: "generative-ai-llm",
    title: "Generative AI & LLM Solutions",
    shortTitle: "Gen AI",
    icon: "Cpu",
    description: "Go beyond chatbots. Custom fine-tuned models, RAG pipelines, and AI agents that automate real workflows.",
    fullDescription: "The generative AI landscape moves fast. We help you cut through the hype and build applications that leverage LLMs responsibly and effectively.",
    subServices: [
      { title: "Custom LLM Development", desc: "Fine-tuned models on your domain data for specialized tasks." },
      { title: "RAG Systems", desc: "Retrieval-augmented generation pipelines for knowledge-grounded AI." },
      { title: "Conversational AI", desc: "Intelligent assistants that handle real workflows, not just FAQs." },
      { title: "AI Agent Design", desc: "Autonomous agents that plan, execute, and adapt to achieve business objectives." },
    ],
  },
  {
    slug: "ai-powered-software",
    title: "AI-Powered Software Development",
    shortTitle: "AI Software",
    icon: "Laptop",
    description: "Full-stack applications with intelligence built in. Smart dashboards, automation tools, and AI-native SaaS products.",
    fullDescription: "We don't just build models — we build the software around them. Full-stack product engineering with AI capabilities woven into the core.",
    subServices: [
      { title: "Intelligent Web & Mobile Apps", desc: "AI-native applications with real-time intelligence built in." },
      { title: "AI Workflow Automation", desc: "End-to-end process automation that eliminates manual work." },
      { title: "AI Integration Services", desc: "Connect AI capabilities to your existing systems and workflows." },
    ],
  },
  {
    slug: "mlops-infrastructure",
    title: "MLOps & AI Infrastructure",
    shortTitle: "MLOps",
    icon: "Cloud",
    description: "Ship models, not just notebooks. CI/CD for ML, monitoring, drift detection, and scalable cloud infrastructure.",
    fullDescription: "Getting a model to work in a notebook is step one. Getting it to work reliably in production at scale is where we come in.",
    subServices: [
      { title: "MLOps CI/CD", desc: "Automated pipelines for training, testing, and deploying ML models." },
      { title: "Model Monitoring", desc: "Performance tracking, drift detection, and automated alerts." },
      { title: "GPU Infrastructure", desc: "Optimized compute for training and inference at any scale." },
      { title: "Multi-Cloud AI Deployment", desc: "Deploy consistently across AWS, GCP, Azure, or hybrid environments." },
    ],
  },
  {
    slug: "ai-academy",
    title: "AI Training",
    shortTitle: "AI Training",
    icon: "GraduationCap",
    description: "Technology without capability is a liability. The AI Academy ensures your people don't just have AI tools — they know how to use them, champion them, and govern them.",
    fullDescription: "From executive AI literacy workshops to multi-week adoption programmes, training that sticks — delivered by practitioners who've done the work.",
    customPage: true,
    subServices: [
      { title: "AI Literacy Workshop", desc: "Half-day executive session on AI capabilities, risks, and strategic opportunities." },
      { title: "AI Tools Hands-On Training", desc: "Practical training on prompt engineering and the AI tools your team is already using." },
      { title: "AI Champions Program", desc: "4–6 week programme to develop internal AI power users who drive adoption." },
      { title: "AI Policy & Guidelines Development", desc: "Acceptable use policy, security guidelines, and approval workflows." },
    ],
  },
  {
    slug: "packaged-solutions",
    title: "Packaged AI Solutions",
    shortTitle: "Packages",
    icon: "Package",
    description: "Proven automations. Predictable pricing. Immediate results. Pre-built, industry-tested AI solutions that deploy in days, not months.",
    fullDescription: "Pre-built, maintained automation packages that solve specific painful workflows — from content repurposing to listing automation to client onboarding — with monthly maintenance included.",
    customPage: true,
    subServices: [
      { title: "Content & Podcast Repurposing Engine", desc: "Upload raw content, receive show notes, social posts, email draft, and blog post within 24 hours." },
      { title: "Real Estate Listing Automation", desc: "Auto-generate MLS descriptions, social posts, email campaigns, and flyer drafts." },
      { title: "Client Onboarding Automation", desc: "Welcome sequences, document collection, CRM updates, and kickoff scheduling — triggered automatically." },
      { title: "Proposal & Document Generation", desc: "Professionally formatted proposals in minutes, not hours." },
      { title: "Review & Reputation Management", desc: "Automated review requests, AI-drafted responses, and weekly reputation reports." },
      { title: "Reporting & Analytics Automation", desc: "Automated weekly/monthly reports with insights and trend analysis." },
    ],
  },
];

export const INDUSTRIES = [
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    icon: "Heart",
    overview: "AI is transforming patient care, drug discovery, and operational efficiency. We build clinical NLP systems, medical imaging models, patient risk predictors, and compliance-ready solutions.",
    useCases: [
      "Clinical document understanding and summarization",
      "Medical image analysis and diagnostic support",
      "Patient readmission and risk prediction",
      "Drug interaction and adverse event detection",
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    icon: "TrendingUp",
    overview: "Speed, accuracy, and regulatory compliance define success in finance. Our AI solutions help institutions detect fraud faster, assess credit risk more accurately, and automate compliance workflows.",
    useCases: [
      "Real-time fraud detection and prevention",
      "Credit scoring and underwriting automation",
      "Regulatory compliance and reporting automation",
      "Algorithmic trading signal analysis",
    ],
  },
  {
    slug: "retail",
    title: "Retail & E-Commerce",
    icon: "ShoppingCart",
    overview: "Customers expect personalization. Margins demand efficiency. We build AI that delivers both — from demand forecasting and dynamic pricing to visual search and recommendation engines.",
    useCases: [
      "Demand forecasting and inventory optimization",
      "Dynamic pricing and promotional optimization",
      "Product recommendation engines",
      "Customer churn prediction and retention",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: "Factory",
    overview: "Reduce downtime, improve quality, and optimize operations. Our AI solutions bring intelligence to the factory floor and the supply chain.",
    useCases: [
      "Predictive maintenance and equipment health monitoring",
      "Visual quality inspection and defect detection",
      "Supply chain optimization and demand planning",
      "Digital twin simulation and optimization",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics & Transportation",
    icon: "Truck",
    overview: "Every mile matters. We build AI systems that optimize routes, predict demand, and automate warehouse operations.",
    useCases: [
      "Route optimization and fleet management",
      "Warehouse automation and pick optimization",
      "Demand planning and capacity forecasting",
      "Shipment tracking and anomaly detection",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate & PropTech",
    icon: "Building2",
    overview: "Smarter valuations, better tenant experiences, and data-driven property management.",
    useCases: [
      "Automated property valuation models",
      "Tenant screening and risk assessment",
      "Smart building analytics and energy optimization",
      "Market trend analysis and investment intelligence",
    ],
  },
];

export const STATS = [
  { value: 40, suffix: "+", label: "AI Projects Delivered to Production" },
  { value: 3.2, suffix: "x", label: "Average ROI Within 12 Months" },
  { value: 92, suffix: "%", label: "Client Retention Rate" },
  { value: 50, suffix: "M+", label: "Data Points Processed Daily" },
];

export const DIAMOND_PHASES = [
  {
    phase: "DISCOVER",
    type: "Diverge",
    diamond: 1,
    color: "#2980B9",
    description: "We go wide. Stakeholder interviews, data audits, process mapping, competitive analysis, and customer journey research.",
    activities: ["Stakeholder interviews", "Data audits", "Process mapping", "Journey research", "Competitive analysis"],
  },
  {
    phase: "DEFINE",
    type: "Converge",
    diamond: 1,
    color: "#1A5E8A",
    description: "We synthesize everything into a sharp problem statement and prioritized AI use cases with modeled ROI.",
    activities: ["Problem framing", "Use case prioritization", "ROI modeling", "Requirements synthesis", "Project brief"],
  },
  {
    phase: "DEVELOP",
    type: "Diverge",
    diamond: 2,
    color: "#2980B9",
    description: "We explore multiple solution architectures, prototype rapidly, and test approaches with real data.",
    activities: ["Solution architecture", "Rapid prototyping", "Data experiments", "Approach validation", "Technical spikes"],
  },
  {
    phase: "DELIVER",
    type: "Converge",
    diamond: 2,
    color: "#1A5E8A",
    description: "We build production systems, integrate into your operations, set up MLOps and governance, and measure results.",
    activities: ["Production engineering", "Integration", "MLOps setup", "Team training", "Performance measurement"],
  },
];

export const ENGAGEMENT_MODELS = [
  {
    title: "Discovery Sprint",
    duration: "2–4 weeks",
    description: "Validate a use case fast. We deliver a proof-of-concept, feasibility analysis, and ROI estimate — so you can make a confident go/no-go decision.",
    icon: "Zap",
  },
  {
    title: "Project-Based",
    duration: "Fixed scope",
    description: "Fixed scope, fixed timeline, fixed budget. We define milestones upfront and deliver on them.",
    icon: "Target",
  },
  {
    title: "Dedicated AI Team",
    duration: "Ongoing",
    description: "An embedded team of AI engineers, data scientists, and ML ops specialists working as an extension of your team.",
    icon: "Users",
  },
  {
    title: "AI-as-a-Service",
    duration: "Monthly retainer",
    description: "Ongoing model monitoring, optimization, retraining, and support on a monthly retainer.",
    icon: "RefreshCw",
  },
  {
    title: "Staff Augmentation",
    duration: "Flexible",
    description: "Need a senior ML engineer for 3 months? A data scientist for a specific project? We fill the gap with vetted specialists.",
    icon: "UserPlus",
  },
  {
    title: "AI Academy & Training",
    duration: "By programme",
    description: "From half-day executive AI literacy sessions to multi-week AI Champions programs. Every session built around your industry, your workflows, and your team's daily tasks. For Claude-specific training, see our dedicated Claude Training Practice. Pricing: $500–$15,000 depending on format and scope.",
    icon: "GraduationCap",
  },
  {
    title: "Packaged Solutions",
    duration: "Monthly subscription",
    description: "Pre-built, industry-tested automations that deploy in days with predictable monthly pricing. Each package includes setup, customisation, ongoing maintenance, and monthly optimisation. Starting at $197/month. Every engagement model is built around one principle: your team gets better, not smaller.",
    icon: "Package",
  },
];
