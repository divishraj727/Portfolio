/**
 * ============================================================
 *  EDIT THIS FILE to personalise the whole site.
 *  Everything below flows into the page content + SEO tags.
 * ============================================================
 */

export const SITE = {
  // Used for canonical URLs / OG tags. Must match astro.config.mjs `site`.
  url: "https://divishrajo.com",
  name: "Divish Raj O",
  role: "Full Stack Developer",
  // Slightly longer descriptor used in the hero subline.
  subrole: "Full Stack Developer & Cloud / DevOps Engineer",
  location: "Bangalore, India",
  email: "divishraj05@gmail.com",
  phone: "+91 94492 94000",
  // Profile photo lives at public/divish.jpg
  photo: "/divish.jpg",
  github: "https://github.com/divishrajo",
  linkedin: "https://www.linkedin.com/in/divish-raj-o-664a1519a",
  twitter: "",
  twitterHandle: "",
  tagline:
    "I turn ideas into fast, reliable web apps, and own them from the first commit to production.",
} as const;

export const KEYWORDS = [
  "Divish Raj",
  "Divish Raj O",
  "Divish Raj website",
  "Divish Raj portfolio",
  "portfolio website",
  "portfolio",
  "developer",
  "developer portfolio",
  "developer portfolio websites",
  "full stack developer portfolio",
  "full stack developer",
  "web developer portfolio",
  "React developer",
  "Django developer",
  "AWS developer Bangalore",
];

// ── Hero badges (compact row under the tagline) ─────────────
export const HERO_BADGES = ["Python", "React", "AWS", "DSA", "DB", "AI", "LLMs", "Machine Learning"];

// ── Tech stack (grouped), from résumé ──────────────────────
export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["ReactJS", "Next.js", "React Router", "JavaScript", "HTML5", "CSS3", "Astro"],
  },
  {
    group: "Backend",
    items: ["Python", "Django", "Django REST Framework", "REST APIs", "Serverless", "Core Java"],
  },
  {
    group: "AI & GenAI",
    items: ["Generative AI", "Agentic AI", "LLMs", "RAG", "Vector DBs", "Claude", "Gemini", "Prompt Engineering"],
  },
  {
    group: "Cloud (AWS)",
    items: ["EC2", "S3", "VPC", "IAM", "RDS", "Lambda", "API Gateway", "CloudWatch"],
  },
  {
    group: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "Ansible", "CI/CD", "Git & GitHub", "Bash / Shell", "Linux (RHEL/Ubuntu)"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "ORM"],
  },
];

// ── Work experience, from résumé ───────────────────────────
export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Sanadi Technologies",
    period: "Jan 2025 – Present",
    points: [
      "Designed and built a modular ERP application with Python Django (backend) and ReactJS (frontend) handling end-to-end operations across multiple departments.",
      "Provisioned and managed complete AWS infrastructure: EC2, S3, RDS (PostgreSQL), VPC and IAM for secure networking and access.",
      "Containerised the full stack with Docker and ran production on Kubernetes, achieving 99.9% uptime; automated provisioning with Ansible.",
    ],
  },
  {
    role: "Graduate Trainee Engineer",
    company: "VOIS (Vodafone Intelligent Solutions)",
    period: "Aug 2023 – Mar 2024",
    points: [
      "Worked on enterprise SAP-based tools (Informatica, Remedy) for data management and IT service workflows in a large-scale telecom environment.",
      "Managed Linux systems, ran health checks, and wrote Bash scripts to automate operational and monitoring tasks.",
    ],
  },
  {
    role: "Developer Intern",
    company: "Hiringhood",
    period: "2023",
    points: [
      "Developed and enhanced frontend features with ReactJS and React Router.",
      "Integrated AWS Lambda and serverless architecture for scalable cloud-based API handling.",
    ],
  },
];

// ── Education, from résumé ─────────────────────────────────
export type Education = {
  degree: string;
  school: string;
  period: string;
  detail: string;
};

export const EDUCATION: Education[] = [
  {
    degree: "M.Tech, Computer Networks Engineering",
    school: "RV College of Engineering (RVCE), Bangalore",
    period: "2023 – 2025",
    detail: "CGPA: 8.60",
  },
  {
    degree: "B.Tech, Computer Science Engineering",
    school: "JNNCE, Shimoga",
    period: "2019 – 2023",
    detail: "CGPA: 8.06",
  },
];

export type Certification = { name: string; meta: string; verify?: string };

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Red Hat Certified Engineer",
    meta: "RHCE · EX294 · ID 210215653",
    verify: "https://rhtapps.redhat.com/verify?certId=210215653",
  },
  {
    name: "Cisco CCNA",
    meta: "Cisco · Issued Jun 2025",
  },
];

// ── Projects (live demos) ───────────────────────────────────
export type Project = {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  url: string;
  image: string; // screenshot in /public/shots
  repo?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "EduFlow: AI-Powered LMS",
    description:
      "A full-featured learning management system powered by Llama 3.3 70B. Instructors generate course outlines and quizzes with AI, while every lesson ships with a 24/7 AI tutor chat. Serving 1,000+ students across 50+ courses.",
    features: ["AI Quiz Generator", "24/7 AI Tutor", "Course Outline AI", "1,000+ Students"],
    tags: ["Next.js", "AI / LLM", "Llama 3.3", "Tailwind"],
    url: "https://eduflow-house.vercel.app/",
    image: "/shots/eduflow.jpg",
  },
  {
    title: "ResumeAI: Auto Job Applier",
    description:
      "An AI résumé-optimisation tool that rewrites and tailors résumés to boost interview conversion, with automation to streamline applying to job listings at scale.",
    features: ["AI Résumé Rewrite", "Auto Job Apply", "ATS Optimisation", "Interview Boost"],
    tags: ["React", "AI / LLM", "Automation", "Node.js"],
    url: "https://auto-applier-job.vercel.app/",
    image: "/shots/resumeai.jpg",
  },
  {
    title: "Nakshatra Events",
    description:
      "A polished marketing site for a wedding & event-planning business serving Shimoga and Bangalore, focused on showcasing services and converting enquiries.",
    features: ["Service Showcase", "Enquiry Conversion", "Responsive UI", "Fast Load"],
    tags: ["React", "Landing Page", "SEO", "Responsive"],
    url: "https://nakshatraevents.vercel.app/",
    image: "/shots/nakshatra.jpg",
  },
  {
    title: "Peace Haven: Task Manager",
    description:
      "A clean task-management web app with authentication for creating, tracking and completing tasks to keep day-to-day work organised.",
    features: ["Auth & Login", "Task CRUD", "Progress Tracking", "Clean UI"],
    tags: ["React", "Auth", "CRUD", "Netlify"],
    url: "https://tmpeaceheaven.netlify.app/login",
    image: "/shots/peacehaven.jpg",
  },
];

// ── Other work (production / research — no public demo) ─────
export type Work = {
  title: string;
  kind: string; // Production · Research · DevOps
  description: string;
  tags: string[];
};

export const OTHER_WORK: Work[] = [
  {
    title: "Modular ERP System",
    kind: "Production",
    description:
      "A full-stack ERP with 5+ modules handling end-to-end business operations across departments. Built with Django and React, deployed on AWS (EC2, S3, RDS/PostgreSQL), containerised with Docker and orchestrated on Kubernetes at 99.9% uptime.",
    tags: ["Django", "React", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
  },
  {
    title: "Explainable AI for Android Malware Detection",
    kind: "M.Tech research",
    description:
      "A research project using SHAP and LIME over improved ML models to make Android malware detection transparent and interpretable, not just accurate, so each prediction can be explained.",
    tags: ["Python", "Machine Learning", "SHAP", "LIME"],
  },
  {
    title: "Infrastructure Automation with Ansible",
    kind: "DevOps",
    description:
      "Automated AWS EC2 provisioning and package/Yum configuration with Ansible playbooks, cutting manual server setup time significantly and keeping environments reproducible.",
    tags: ["Ansible", "AWS EC2", "Linux", "Bash"],
  },
];

// ── Nav links (in-page anchors) ─────────────────────────────
export const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
