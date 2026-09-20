/**
 * Avinz Creatives - Centralized Content & Data Store
 * Matches all data from UI mockups
 */

export const COMPANY_INFO = {
  name: "Avinz Creatives",
  tagline: "Creative Design & Web Solutions.",
  subtitle: "Professional Creative Design Agency",
  shortDesc: "We create digital experiences, build modern web solutions, and design high-quality graphics for businesses.",
  address: "Gandhipuram, Coimbatore, Tamil Nadu",
  city: "Coimbatore, Tamil Nadu, India",
  phone: "7806888047",
  whatsapp: "917806888047",
  email: "info@avinzcreatives.in",
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
  { id: "students", value: "100+", label: "Happy Clients", icon: "bi-people-fill", desc: "Trusted by local and global businesses" },
  { id: "projects", value: "50+", label: "Projects Completed", icon: "bi-briefcase-fill", desc: "Delivered for global clients & startups" },
  { id: "websites", value: "25+", label: "Websites Developed", icon: "bi-globe", desc: "High-performance responsive web applications" },
  { id: "practical", value: "100%", label: "Client Satisfaction", icon: "bi-star-fill", desc: "Top-notch quality in every design" },
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
    id: "branding",
    title: "Branding & Print Design",
    icon: "bi-printer-fill",
    badgeColor: "#f3e8ff",
    iconColor: "#9333ea",
    features: [
      "Cafe Menu Card Design",
      "Restaurant Menu Design",
      "Food Posters",
      "Business Cards",
      "Promotional Posters",
      "Brochures & Flyers",
      "Stationery Design"
    ],
    linkText: "View All Services",
    linkUrl: "/services"
  }
];

export const WHY_CHOOSE_US_HOME = [
  {
    id: 1,
    title: "Expert Designers",
    desc: "Industry-experienced creative professionals.",
    icon: "bi-person-badge-fill"
  },
  {
    id: 2,
    title: "Custom Solutions",
    desc: "Tailored designs matching your brand vision.",
    icon: "bi-puzzle-fill"
  },
  {
    id: 3,
    title: "High Quality",
    desc: "Pixel-perfect, modern and professional outputs.",
    icon: "bi-folder-check"
  },
  {
    id: 4,
    title: "Dedicated Support",
    desc: "Clear communication and prompt assistance.",
    icon: "bi-headset"
  },
  {
    id: 5,
    title: "Affordable Pricing",
    desc: "High-quality services at competitive prices.",
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
    id: "print-design",
    title: "Print & Menu Design",
    icon: "bi-printer-fill",
    category: "Print",
    desc: "High-quality print ready designs including cafe menus, restaurant cards, and food posters.",
    items: [
      "Cafe Menu Card Design",
      "Restaurant Menu Design",
      "Food Posters",
      "Promotional Posters",
      "Business Cards"
    ],
    tools: ["Adobe Photoshop", "Illustrator", "InDesign", "CorelDRAW"]
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
    name: "Sample Review 1",
    role: "Cafe Owner",
    company: "",
    rating: 0,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Avinz Creatives designed our cafe menu and the final output looked clean and professional. The pricing was also affordable."
  },
  {
    id: 2,
    name: "Sample Review 2",
    role: "Restaurant Owner",
    company: "",
    rating: 0,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Got our restaurant menu redesigned and the final design came out neat and easy to read. They understood our requirements well."
  },
  {
    id: 3,
    name: "Sample Review 3",
    role: "Small Business Owner",
    company: "",
    rating: 0,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "We needed promotional creatives for our business. The designs were simple, attractive and matched what we had in mind."
  },
  {
    id: 4,
    name: "Sample Review 4",
    role: "Business Owner",
    company: "",
    rating: 0,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    quote: "Got a logo and a few branding creatives designed for our business. The overall design was clean and professional."
  },
  {
    id: 5,
    name: "Sample Review 5",
    role: "Local Business Owner",
    company: "",
    rating: 0,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote: "Avinz Creatives helped us with social media creatives for our business. Good design quality and reasonable pricing."
  }
];

export const TEAM_MEMBERS = [
  { id: 1, name: "Arun V.", role: "Founder & Creative Lead", experience: "8+ Years Exp", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Karthik R.", role: "Lead Full Stack Architect", experience: "7+ Years Exp", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Deepa S.", role: "Senior UI/UX Designer", experience: "6+ Years Exp", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Sanjay N.", role: "Web Developer", experience: "5+ Years Exp", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Meera P.", role: "Graphic Designer", experience: "5+ Years Exp", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Vignesh M.", role: "Brand Strategist & Visual Designer", experience: "6+ Years Exp", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" }
];

export const PURPOSE_CARDS = [
  { id: "mission", title: "Our Mission", desc: "To deliver creative digital solutions and high-quality designs that inspire growth and elevate brands.", icon: "bi-bullseye" },
  { id: "vision", title: "Our Vision", desc: "To become a trusted global brand in design services.", icon: "bi-eye-fill" },
  { id: "promise", title: "Our Promise", desc: "Your success is our goal. We partner with you to achieve your business objectives.", icon: "bi-heart-fill" }
];

export const CORE_VALUES = [
  { id: "creativity", title: "Creativity", desc: "We believe in original ideas and modern design that create strong brand identity.", icon: "bi-lightbulb-fill" },
  { id: "quality", title: "Quality", desc: "We deliver work with excellence, clean code, and meticulous attention to detail.", icon: "bi-shield-fill-check" },
  { id: "learning", title: "Collaboration", desc: "We work closely with clients to ensure their vision is realized perfectly.", icon: "bi-people-fill" },
  { id: "integrity", title: "Integrity", desc: "We value honesty, transparency, and trust in all our client relationships.", icon: "bi-award-fill" }
];
