export interface NavItem {
  label: string;
  href: string;
}

export interface EditorialStat {
  value: string;
  label: string;
  context: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  domain: 'core' | 'web' | 'ai-tools';
  items: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  index: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  liveDemoUrl: string;
  isLivePlaceholder?: boolean;
}

export interface AchievementItem {
  id: string;
  metric: string;
  title: string;
  detail: string;
  type: 'academic-coding' | 'hackathon';
}

export interface CertificationItem {
  title: string;
  issuerOrCode: string;
  distinction?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  affiliation?: string;
  location: string;
  period: string;
  metrics?: string[];
}

export const portfolioData = {
  personal: {
    name: "Minhaj Parveen H",
    brandName: "MINHAJ PARVEEN H",
    role: "Software Engineer Intern",
    location: "Chennai, India",
    email: "7558minhaj2008@gmail.com",
    phone: "+91 75581 88435",
    linkedinDisplay: "linkedin.com/in/minhajparveen1008",
    linkedinUrl: "https://www.linkedin.com/in/minhajparveen1008",
    githubDisplay: "github.com/minhajparveenh2008",
    githubUrl: "https://github.com/minhajparveenh2008",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Education", href: "#education" },
  ] as NavItem[],

  hero: {
    name: "MINHAJ PARVEEN H",
    role: "Software Engineer Intern",
    introduction:
      "Computer Science Engineering student and Research Intern building full-stack systems and AI-driven applications with Java, Python, JavaScript, React, Node.js, REST APIs, and modern AI technologies.",
    primaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Let's Connect",
      href: "#contact",
    },
    githubCta: {
      label: "GitHub",
      href: "https://github.com/minhajparveenh2008",
    },
  },

  about: {
    summary:
      "Computer Science Engineering student (CGPA 9.25/10) and Research Intern building production-grade full-stack systems and AI-driven applications in Python, Java, and JavaScript with Node.js, Express, MongoDB, REST APIs, and Google Gemini. Top 5% of 43,000+ contributors in GSSoC '26 with merged production PRs; top 25 of 450 CSE students in a competitive LeetCode round; 600+ DSA problems solved. Strong OOP/DBMS fundamentals, Git/PR-based collaboration, and automated-testing practice.",
    quickProfile: {
      degree: "B.E. Computer Science & Engineering",
      college: "Easwari Engineering College",
      group: "SRM Group",
      location: "Chennai",
      duration: "2025 – 2029",
      cgpa: "9.25/10",
      sem2Gpa: "9.68",
    },
    stats: [
      {
        value: "600+",
        label: "DSA Problems",
        context: "Solved in Java on LeetCode",
      },
      {
        value: "Top 5%",
        label: "GSSoC '26",
        context: "Among 43,000+ global contributors",
      },
      {
        value: "Top 25 / 450",
        label: "CSE Students",
        context: "Prep2 Placements LeetCode Competition",
      },
      {
        value: "Research Intern",
        label: "SRM Group",
        context: "Full Stack Development (MERN)",
      },
    ] as EditorialStat[],
  },

  skills: [
    {
      id: "languages",
      category: "Languages",
      domain: "core",
      items: ["Java", "C", "C++", "JavaScript", "Python"],
    },
    {
      id: "web-development",
      category: "Web Development",
      domain: "web",
      items: [
        "React",
        "Node.js",
        "Express.js",
        "REST APIs",
        "HTML5",
        "CSS3",
        "Responsive Web Design",
      ],
    },
    {
      id: "databases",
      category: "Databases",
      domain: "web",
      items: ["MongoDB", "MySQL", "SQL"],
    },
    {
      id: "ai-data",
      category: "AI & Data",
      domain: "ai-tools",
      items: [
        "Google Gemini AI",
        "RAG",
        "Agentic AI",
        "IBM Granite",
        "Predictive Analytics",
        "AI Strategy",
      ],
    },
    {
      id: "core-cs",
      category: "Core CS",
      domain: "core",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS",
      ],
    },
    {
      id: "tools-practices",
      category: "Tools & Practices",
      domain: "ai-tools",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Linux",
        "PR Workflows",
        "Code Review",
        "Agile",
        "CI-ready Collaboration",
      ],
    },
  ] as SkillGroup[],

  experience: [
    {
      id: "srm-research-intern",
      role: "Research Intern — Full Stack Development",
      organization: "SRM Group",
      period: "2026 – Present",
      description:
        "Engineer full-stack MERN features end-to-end — REST APIs in Node.js/Express, React interfaces, and MongoDB schemas.",
    },
    {
      id: "1m1b-sustainability",
      role: "AI for Sustainability Contributor",
      organization: "1 Million 1 Billion (1M1B)",
      period: "2025",
      description:
        "Built EcoNexus using Python models and JavaScript/React dashboards to forecast waste hotspots 24–48 hours ahead, supporting UN SDG 11 & 12.",
    },
    {
      id: "gssoc-26",
      role: "Open Source Contributor",
      organization: "GirlScript Summer of Code (GSSoC '26)",
      period: "2026 – Present",
      description:
        "Top 5% of 43,000+ applicants; shipped 2 merged PRs across 200+ repositories through Git-based issue triage and code review.",
    },
    {
      id: "infosys-pragati",
      role: "Participant — Pragati: Path to Future",
      organization: "Infosys Springboard",
      period: "2026 – Present",
      description:
        "Industry-aligned track focused on workplace communication and technical fundamentals for professional software teams.",
    },
    {
      id: "ace-backend",
      role: "Backend Team Member",
      organization: "ACE, Easwari Engineering College",
      period: "2026 – 2027",
      description:
        "Develop and maintain backend-only features — REST APIs and database logic — for the association's website.",
    },
  ] as ExperienceItem[],

  projects: [
    {
      index: "01",
      title: "EcoNexus",
      category: "AI-Powered Predictive Waste Management Platform",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "REST APIs",
        "Gemini AI",
        "IBM Granite",
      ],
      description:
        "Built Node.js/Express REST APIs and MongoDB schemas to stream real-time GIS heatmap data from municipal sources. Used RAG and Agentic AI with Gemini and IBM Granite to generate SDG-mapped mitigation strategies from the data.",
      highlights: [
        "Engineered Node.js/Express REST APIs and MongoDB schemas to stream real-time GIS heatmap data from municipal sources.",
        "Implemented RAG and Agentic AI workflows using Google Gemini and IBM Granite.",
        "Generated actionable UN SDG 11 & 12 mapped mitigation strategies from spatial and predictive waste data.",
      ],
      // Replace with exact repository or live deployment URL if hosted separately
      githubUrl: "https://github.com/minhajparveenh2008",
      liveDemoUrl: "https://github.com/minhajparveenh2008#econexus-demo-placeholder",
      isLivePlaceholder: true,
    },
    {
      index: "02",
      title: "AI-Powered UX Heuristic & Accessibility Auditor",
      category: "Automated Web Quality & Accessibility Auditing System",
      technologies: ["React", "Node.js", "Gemini AI", "Selenium", "Lighthouse"],
      description:
        "Built a Node.js backend driving automated Selenium and Lighthouse test suites to score UX, accessibility, SEO, and performance. OOP-structured JavaScript modules generate exportable PDF, JSON, and CSV reports.",
      highlights: [
        "Architected a Node.js backend orchestrating automated Selenium and Lighthouse test suites.",
        "Evaluated and scored interfaces across UX heuristics, accessibility compliance, SEO, and runtime performance.",
        "Designed OOP-structured JavaScript modules to compile and export multi-format reports in PDF, JSON, and CSV.",
      ],
      // Replace with exact repository or live deployment URL if hosted separately
      githubUrl: "https://github.com/minhajparveenh2008",
      liveDemoUrl: "https://github.com/minhajparveenh2008#ux-auditor-demo-placeholder",
      isLivePlaceholder: true,
    },
    {
      index: "03",
      title: "SkillBridge",
      category: "AI-Assisted Career Platform",
      technologies: ["Java", "JavaScript", "HTML5", "CSS3"],
      description:
        "Applied Java and OOP to build a skill-gap engine benchmarking students against 50+ company requirements. Added AI-based resume evaluation and JavaScript-driven dashboards for personalized career roadmaps.",
      highlights: [
        "Applied core Java and Object-Oriented Programming principles to build a structured skill-gap benchmarking engine across 50+ company requirements.",
        "Integrated AI-based resume evaluation for targeted competency assessment.",
        "Developed interactive JavaScript-driven dashboards to visualize personalized student career roadmaps.",
      ],
      // Replace with exact repository or live deployment URL if hosted separately
      githubUrl: "https://github.com/minhajparveenh2008",
      liveDemoUrl: "https://github.com/minhajparveenh2008#skillbridge-demo-placeholder",
      isLivePlaceholder: true,
    },
    {
      index: "04",
      title: "ForgeFlow",
      category: "AI-Powered Project Development Platform",
      technologies: ["React", "Node.js", "REST APIs", "Gemini AI"],
      description:
        "Built Node.js REST API integrations and a React frontend that convert project ideas into plans, code, and documentation. Generates GitHub-ready deployments and project-specific interview preparation.",
      highlights: [
        "Built Node.js REST API integrations paired with a responsive React frontend.",
        "Automated the conversion of raw project concepts into structured execution plans, source code, and technical documentation.",
        "Generated GitHub-ready deployment structures alongside tailored, project-specific interview preparation materials.",
      ],
      // Replace with exact repository or live deployment URL if hosted separately
      githubUrl: "https://github.com/minhajparveenh2008",
      liveDemoUrl: "https://github.com/minhajparveenh2008#forgeflow-demo-placeholder",
      isLivePlaceholder: true,
    },
  ] as ProjectItem[],

  achievements: [
    {
      id: "leetcode-competition",
      metric: "Top 25 / 450",
      title: "Prep2 Placements LeetCode Competition",
      detail:
        "Selected among 450 CSE students into the Top 25 in Easwari Engineering College's Prep2 Placements LeetCode Competition.",
      type: "academic-coding",
    },
    {
      id: "leetcode-600",
      metric: "600+ Solved",
      title: "Data Structures & Algorithms in Java",
      detail: "Solved 600+ problems on LeetCode in Java.",
      type: "academic-coding",
    },
    {
      id: "gssoc-top5",
      metric: "Top 5% / 43,000+",
      title: "GirlScript Summer of Code (GSSoC '26)",
      detail: "GSSoC '26 — Top 5% of 43,000+ global contributors.",
      type: "academic-coding",
    },
    {
      id: "research-intern-selection",
      metric: "Selected",
      title: "Competitive Research Internship",
      detail:
        "Selected as Research Intern at Easwari Engineering College through a competitive selection process.",
      type: "academic-coding",
    },
    {
      id: "100-days-c",
      metric: "100 Days",
      title: "Foundational Systems Programming",
      detail: "Completed 100 Days of Code in C before transitioning to Java.",
      type: "academic-coding",
    },
    {
      id: "visaion-hacks",
      metric: "Finalist",
      title: "VisAIon Hacks 2025",
      detail: "Finalist — VisAIon Hacks 2025",
      type: "hackathon",
    },
    {
      id: "odoo-hackathon",
      metric: "Finalist",
      title: "Odoo Hackathon 2026",
      detail: "Finalist — Odoo Hackathon 2026",
      type: "hackathon",
    },
    {
      id: "startup-thedal",
      metric: "Participant",
      title: "Startup Thedal 2025",
      detail: "Participant — Startup Thedal 2025",
      type: "hackathon",
    },
    {
      id: "ignite-hackathon",
      metric: "Participant",
      title: "Ignite Hackathon 2026",
      detail: "Participant — Ignite Hackathon 2026",
      type: "hackathon",
    },
  ] as AchievementItem[],

  certifications: [
    {
      title: "AWS Certified AI Practitioner",
      issuerOrCode: "AIF-C01",
    },
    {
      title: "Master in C, C++ & Java Programming",
      issuerOrCode: "CodeGalatta",
    },
    {
      title: "Joy of Computing Using Python",
      issuerOrCode: "NPTEL",
      distinction: "Elite + Silver",
    },
    {
      title: "Enhancing Soft Skills",
      issuerOrCode: "NPTEL",
      distinction: "Elite",
    },
  ] as CertificationItem[],

  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Easwari Engineering College — SRM Group",
      location: "Chennai",
      period: "2025 – 2029 (Expected)",
      metrics: ["CGPA: 9.25/10", "Semester 2: 9.68"],
    },
    {
      degree: "Higher Secondary Certificate — Science Stream",
      institution: "Anna Adarsh Matriculation Higher Secondary School",
      location: "Chennai",
      period: "2023 – 2025",
    },
  ] as EducationItem[],

  contact: {
    heading: "Let's build something useful.",
    subtext:
      "I'm open to Software Engineering internships, AI/ML opportunities, research collaborations, and meaningful engineering projects.",
  },
};
