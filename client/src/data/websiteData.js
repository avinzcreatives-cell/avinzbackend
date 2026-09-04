/**
 * Avinz Creatives - Centralized Content & Data Store
 * Matches all data from UI mockups
 */

export const COMPANY_INFO = {
  name: "Avinz Creatives",
  tagline: "Design. Develop. Learn. Grow.",
  subtitle: "Creative Design Agency & Technology Training Institute",
  shortDesc: "We create digital experiences, build web solutions and train the next generation of tech professionals.",
  address: "142/B, Crosscut Road, Gandhipuram, Coimbatore, Tamil Nadu 641012, India",
  city: "Coimbatore, Tamil Nadu, India",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "hello@avinzcreatives.in",
  website: "www.avinzcreatives.in",
  workingHours: "Monday - Saturday: 9:00 AM - 7:30 PM",
  socials: {
    facebook: "https://facebook.com/avinzcreatives",
    instagram: "https://instagram.com/avinzcreatives",
    linkedin: "https://linkedin.com/company/avinzcreatives",
    youtube: "https://youtube.com/@avinzcreatives",
    github: "https://github.com/avinzcreatives"
  }
};

export const STATS_DATA = [
  { id: "students", value: "100+", label: "Students Trained", icon: "bi-people-fill", desc: "Trained across MERN, UI/UX, and Data Tech" },
  { id: "projects", value: "50+", label: "Projects Completed", icon: "bi-briefcase-fill", desc: "Delivered for global clients & startups" },
  { id: "websites", value: "25+", label: "Websites Developed", icon: "bi-globe", desc: "High-performance responsive web applications" },
  { id: "practical", value: "100%", label: "Practical Learning", icon: "bi-star-fill", desc: "Real-world project-driven curriculum" },
];

export const CORE_SERVICES_SUMMARY = [
  {
    id: "creative-design",
    title: "Creative Design",
    icon: "bi-palette2",
    badgeColor: "#eff6ff",
    iconColor: "#2563eb",
    features: [
      "Logo Design",
      "Brand Identity",
      "Graphic Design",
      "Social Media Creatives",
      "UI/UX Design"
    ],
    linkText: "View All Services",
    linkUrl: "/services"
  },
  {
    id: "web-development",
    title: "Web Design & Development",
    icon: "bi-code-slash",
    badgeColor: "#e0f2fe",
    iconColor: "#0284c7",
    features: [
      "Website Design",
      "Website Development",
      "Landing Pages",
      "Portfolio Websites",
      "Business Websites"
    ],
    linkText: "View All Services",
    linkUrl: "/services"
  },
  {
    id: "training-programs",
    title: "Training Programs",
    icon: "bi-mortarboard-fill",
    badgeColor: "#f3e8ff",
    iconColor: "#9333ea",
    features: [
      "UI/UX Design",
      "MERN Stack Development",
      "Full Stack Development",
      "Data Analytics",
      "Machine Learning",
      "DevOps",
      "Digital Marketing"
    ],
    linkText: "View All Courses",
    linkUrl: "/courses"
  }
];

export const WHY_CHOOSE_US_HOME = [
  {
    id: 1,
    title: "Expert Mentors",
    desc: "Industry-experienced trainers & designers",
    icon: "bi-person-badge-fill"
  },
  {
    id: 2,
    title: "Hands-on Learning",
    desc: "Practical projects for real-world experience.",
    icon: "bi-puzzle-fill"
  },
  {
    id: 3,
    title: "Portfolio Ready",
    desc: "Build a strong portfolio that gets you noticed.",
    icon: "bi-folder-check"
  },
  {
    id: 4,
    title: "Career Support",
    desc: "Placement assistance & career guidance.",
    icon: "bi-headset"
  },
  {
    id: 5,
    title: "Affordable Pricing",
    desc: "High-quality services and training at best prices.",
    icon: "bi-tag-fill"
  }
];

export const ALL_SERVICES = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: "bi-brush-fill",
    category: "Design",
    desc: "Visual branding and graphic collateral designed to capture attention and communicate your value proposition.",
    items: [
      "Social Media Creatives",
      "Marketing Materials",
      "Banner & Poster Design",
      "Brochure & Flyer Design"
    ],
    tools: ["Adobe Photoshop", "Illustrator", "Canva Pro", "InDesign"]
  },
  {
    id: "brand-identity",
    title: "Logo & Brand Identity",
    icon: "bi-vector-pen",
    category: "Branding",
    desc: "Memorable brand identities from initial concept sketching to complete vector guidelines and stationery kits.",
    items: [
      "Logo Design",
      "Brand Identity Design",
      "Brand Guidelines",
      "Stationery Design"
    ],
    tools: ["Illustrator", "CorelDRAW", "Figma", "Typography"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: "bi-display",
    category: "Product Design",
    desc: "Human-centric interface design and intuitive user experience workflows tested for maximum conversion.",
    items: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "UI Design",
      "Usability Testing"
    ],
    tools: ["Figma", "Adobe XD", "Miro", "Framer", "Design Systems"]
  },
  {
    id: "website-design",
    title: "Website Design",
    icon: "bi-laptop",
    category: "Web",
    desc: "Pixel-perfect, modern responsive website layouts designed to elevate brand authority and drive leads.",
    items: [
      "Business Website Design",
      "Landing Page Design",
      "Portfolio Website Design",
      "Responsive Web Design"
    ],
    tools: ["Figma", "Bootstrap 5", "HTML5/CSS3", "TailwindCSS"]
  },
  {
    id: "website-development",
    title: "Website Development",
    icon: "bi-code-square",
    category: "Development",
    desc: "Robust, SEO-optimized, blazing fast web development using modern frontends and solid CMS architectures.",
    items: [
      "Custom Website Development",
      "Responsive Development",
      "WordPress Development",
      "E-commerce Development"
    ],
    tools: ["React.js", "JavaScript ES6+", "WordPress", "WooCommerce", "Next.js"]
  },
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    icon: "bi-layers-fill",
    category: "Full Stack",
    desc: "Scalable full-stack web applications and robust cloud microservices powered by MongoDB, Express, React, and Node.js.",
    items: [
      "MongoDB Database Design",
      "Express.js & Node.js Backend",
      "React.js Interactive Frontends",
      "RESTful API & JWT Auth",
      "Full Stack Web Applications"
    ],
    tools: ["MongoDB", "Express", "React", "Node.js", "Redux", "Docker"]
  }
];

export const WORK_PROCESS = [
  { step: "01", title: "Understand", desc: "We understand your requirements, business goals, and target audience through in-depth discovery." },
  { step: "02", title: "Plan", desc: "We plan the best strategy, technical architecture, wireframes, and project milestones." },
  { step: "03", title: "Design / Develop", desc: "We design with modern aesthetics or develop with clean, scalable, maintainable code." },
  { step: "04", title: "Review", desc: "We test across devices, refine details, optimize performance, and review for top quality." },
  { step: "05", title: "Deliver", desc: "We deploy the final product on time with documentation, training, and ongoing support." }
];

// ============================================================================
// 8 COURSES FROM THE COURSES PAGE MOCKUP
// ============================================================================
export const COURSES_PAGE_DATA = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: "bi-pen-fill",
    iconColor: "#2563eb",
    iconBg: "#eff6ff",
    desc: "Design user-friendly, modern and engaging digital experiences.",
    items: [
      "UI/UX Fundamentals",
      "Wireframing & Prototyping",
      "User Research",
      "Figma & Design Systems"
    ],
    duration: "2.5 Months",
    level: "Beginner"
  },
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    icon: "bi-code-slash",
    iconColor: "#10b981",
    iconBg: "#ecfdf5",
    desc: "Build dynamic full-stack web applications with MERN.",
    items: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js"
    ],
    duration: "4 Months",
    level: "Intermediate"
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    icon: "bi-stack",
    iconColor: "#f59e0b",
    iconBg: "#fffbeb",
    desc: "Learn front-end and back-end development from scratch.",
    items: [
      "HTML, CSS, JavaScript",
      "React.js",
      "Node.js & Express.js",
      "SQL & Database"
    ],
    duration: "5 Months",
    level: "Beginner"
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: "bi-bar-chart-fill",
    iconColor: "#ec4899",
    iconBg: "#fdf2f8",
    desc: "Analyze data and make smart business decisions.",
    items: [
      "Excel for Analytics",
      "SQL",
      "Power BI",
      "Data Visualization"
    ],
    duration: "2.5 Months",
    level: "Beginner"
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    icon: "bi-cpu-fill",
    iconColor: "#06b6d4",
    iconBg: "#ecfeff",
    desc: "Build machine learning models and solve real-world problems.",
    items: [
      "Python Basics",
      "ML Algorithms",
      "Model Training",
      "Scikit-Learn Projects"
    ],
    duration: "3.5 Months",
    level: "Intermediate"
  },
  {
    id: "devops",
    title: "DevOps",
    icon: "bi-cloud-arrow-up-fill",
    iconColor: "#8b5cf6",
    iconBg: "#f5f3ff",
    desc: "Learn CI/CD, cloud, and automation tools for modern development.",
    items: [
      "Linux Basics",
      "Docker",
      "Jenkins",
      "AWS Basics"
    ],
    duration: "3 Months",
    level: "Intermediate"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: "bi-megaphone-fill",
    iconColor: "#3b82f6",
    iconBg: "#eff6ff",
    desc: "Master digital marketing strategies to grow brands online.",
    items: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Analytics & Reporting"
    ],
    duration: "2 Months",
    level: "Beginner"
  },
  {
    id: "soft-skills",
    title: "Soft Skills & Interview Prep",
    icon: "bi-star-fill",
    iconColor: "#eab308",
    iconBg: "#fefce8",
    desc: "Build confidence and get ready for your dream job.",
    items: [
      "Communication Skills",
      "Resume Building",
      "Interview Techniques",
      "Personality Development"
    ],
    duration: "1 Month",
    level: "Beginner"
  }
];

export const COURSES_ADVANTAGES = [
  { title: "Industry Experts", desc: "Learn from professionals with real-world experience.", icon: "bi-person-badge-fill" },
  { title: "Practical Projects", desc: "Work on live projects and build your portfolio.", icon: "bi-puzzle-fill" },
  { title: "Job-Ready Skills", desc: "Gain skills that companies are actually looking for.", icon: "bi-folder-check" },
  { title: "Placement Support", desc: "Get placement assistance and career guidance.", icon: "bi-headset" },
  { title: "Flexible Learning", desc: "Weekend & weekday batches available.", icon: "bi-star-fill" }
];

export const COURSES_DATA = COURSES_PAGE_DATA;

// ============================================================================
// 8 PROJECTS FROM THE PROJECTS PAGE MOCKUP
// ============================================================================
export const PROJECTS_PAGE_DATA = [
  {
    id: "edulearn",
    title: "EduLearn – E Learning Platform",
    client: "EduLearn Academy",
    category: "Web Design",
    tags: ["Web Design", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=700&q=80",
    desc: "Smart Learning for Brighter Future - interactive online education portal with real-time course player and quizzes."
  },
  {
    id: "homespot",
    title: "HomeSpot – Real Estate Website",
    client: "HomeSpot Properties",
    category: "Web Development",
    tags: ["Web Development", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
    desc: "Find Your Dream Home Today - luxury real estate directory with 3D virtual tour integrations and filterable search."
  },
  {
    id: "shopease",
    title: "ShopEase – E Commerce Website",
    client: "ShopEase Retail",
    category: "Web Development",
    tags: ["Web Development", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=80",
    desc: "Shop More. Pay Less - high-conversion e-commerce storefront with dynamic cart, checkout, and inventory sync."
  },
  {
    id: "natura-organics",
    title: "Natura Organics – Brand Identity",
    client: "Natura Organics",
    category: "Branding",
    tags: ["Branding", "Logo Design"],
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    desc: "Luxury eco-friendly skincare branding, gold leaf typography, sustainable packaging, and visual identity guidelines."
  },
  {
    id: "fintrack",
    title: "FinTrack – Banking Mobile App",
    client: "FinTrack Global",
    category: "Mobile App",
    tags: ["UI/UX Design", "Mobile App"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80",
    desc: "Banking Made Simple & Secure - mobile banking application with instant transfers, analytics, and biometrics."
  },
  {
    id: "pixelcraft",
    title: "PixelCraft – Agency Website",
    client: "PixelCraft Studio",
    category: "Web Design",
    tags: ["Web Development", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    desc: "We Create Digital Experiences - sleek dark portfolio website for a high-end 3D visual effects studio."
  },
  {
    id: "taskify",
    title: "Taskify – Dashboard Design",
    client: "Taskify SaaS",
    category: "UI/UX Design",
    tags: ["UI/UX Design", "Dashboard"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    desc: "Enterprise productivity and project management SaaS dashboard with kanban boards, Gantt charts, and analytics."
  },
  {
    id: "spicehub",
    title: "SpiceHub – Restaurant Website",
    client: "SpiceHub Kitchen",
    category: "Web Design",
    tags: ["Web Design", "Web Development"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80",
    desc: "Good Food Good Mood - artisanal dining and online table booking website with interactive digital menu."
  }
];

export const RECENT_PROJECTS = PROJECTS_PAGE_DATA;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Dharshini",
    role: "UI/UX Designer",
    company: "Placed at Zoho Corp",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "The UI/UX training was super practical. I built real projects and got placed as a UI Designer within 2 months!"
  },
  {
    id: 2,
    name: "Kavin Raj",
    role: "Full Stack Developer",
    company: "Placed at Cognizant",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "The MERN Stack course is very beginner friendly and the mentors are awesome. Highly recommended!"
  },
  {
    id: 3,
    name: "Sneha M",
    role: "Data Analyst",
    company: "Placed at Infosys",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "I learned Data Analytics from scratch and now I'm working on real-time data projects with confidence!"
  }
];

export const TEAM_MEMBERS = [
  { id: 1, name: "Arun V.", role: "Founder & Creative Lead", experience: "8+ Years Exp", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Karthik R.", role: "Lead Full Stack Architect", experience: "7+ Years Exp", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Deepa S.", role: "Senior UI/UX Designer & Mentor", experience: "6+ Years Exp", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Sanjay N.", role: "MERN Stack Specialist & Trainer", experience: "5+ Years Exp", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Meera P.", role: "Data Science & AI Mentor", experience: "5+ Years Exp", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Vignesh M.", role: "Brand Strategist & Visual Designer", experience: "6+ Years Exp", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" }
];

export const PURPOSE_CARDS = [
  { id: "mission", title: "Our Mission", desc: "To deliver creative digital solutions and practical training that inspire growth and create opportunities.", icon: "bi-bullseye" },
  { id: "vision", title: "Our Vision", desc: "To become a trusted global brand in design services and technology education.", icon: "bi-eye-fill" },
  { id: "promise", title: "Our Promise", desc: "Your success is our goal. We are with you from learning to career growth.", icon: "bi-heart-fill" }
];

export const CORE_VALUES = [
  { id: "creativity", title: "Creativity", desc: "We believe in original ideas and modern design that create strong brand identity.", icon: "bi-lightbulb-fill" },
  { id: "quality", title: "Quality", desc: "We deliver work with excellence, clean code, and meticulous attention to detail.", icon: "bi-shield-fill-check" },
  { id: "learning", title: "Learning", desc: "We promote continuous learning, practical projects, and real-world skills.", icon: "bi-book-half" },
  { id: "integrity", title: "Integrity", desc: "We value honesty, transparency, and trust in all our client and student relationships.", icon: "bi-award-fill" }
];
